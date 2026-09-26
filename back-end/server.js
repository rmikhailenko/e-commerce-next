import { randomUUID } from "node:crypto";
import { readFile, rename, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import cors from "cors";
import express from "express";

const app = express();
const port = Number(process.env.PORT) || 4001;
const dataFile = fileURLToPath(new URL("./data.json", import.meta.url));
let pendingUpdate = Promise.resolve();

app.use(
  cors({ origin: process.env.FRONTEND_ORIGIN || "http://localhost:4000" }),
);
app.use(express.json({ limit: "1mb" }));

async function readData() {
  return JSON.parse(await readFile(dataFile, "utf8"));
}

function updateData(update) {
  const operation = pendingUpdate.then(async () => {
    const data = await readData();
    const result = update(data);
    const temporaryFile = `${dataFile}.${randomUUID()}.tmp`;
    await writeFile(
      temporaryFile,
      `${JSON.stringify(data, null, 2)}\n`,
      "utf8",
    );
    await rename(temporaryFile, dataFile);
    return result;
  });
  pendingUpdate = operation.catch(() => {});
  return operation;
}

app.get("/api/properties", async (_request, response, next) => {
  try {
    const data = await readData();
    response.json(data.properties);
  } catch (error) {
    next(error);
  }
});

app.get("/api/properties/:id", async (request, response, next) => {
  try {
    const data = await readData();
    const property = data.properties.find(
      (item) => item.id === request.params.id,
    );
    if (!property) {
      return response.status(404).json({ error: "Property not found" });
    }
    response.json(property);
  } catch (error) {
    next(error);
  }
});

app.get("/api/insights", async (_request, response, next) => {
  try {
    const data = await readData();
    response.json(data.insights);
  } catch (error) {
    next(error);
  }
});

app.get("/api/insights/:id", async (request, response, next) => {
  try {
    const data = await readData();
    const insight = data.insights.find((item) => item.id === request.params.id);
    if (!insight) {
      return response.status(404).json({ error: "Insight not found" });
    }
    response.json(insight);
  } catch (error) {
    next(error);
  }
});

app.post("/api/contact", async (request, response, next) => {
  const { name, phoneNumber, email, message } = request.body ?? {};
  const fields = { name, phoneNumber, email, message };
  const missingFields = Object.entries(fields)
    .filter(([, value]) => typeof value !== "string" || !value.trim())
    .map(([field]) => field);

  if (missingFields.length > 0) {
    return response.status(400).json({
      error: "All fields are required",
      fields: missingFields,
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return response
      .status(400)
      .json({ error: "A valid email address is required" });
  }

  try {
    const contact = {
      id: randomUUID(),
      name: name.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };
    await updateData((data) => data.contacts.push(contact));
    response.status(201).json(contact);
  } catch (error) {
    next(error);
  }
});

app.use((error, _request, response, _next) => {
  if (error instanceof SyntaxError && "body" in error) {
    return response.status(400).json({ error: "Invalid JSON body" });
  }
  console.error(error);
  response.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
