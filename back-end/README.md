# E-commerce API

## Run

```sh
pnpm install
pnpm dev
```

The API listens on `http://localhost:4001` by default. Set `PORT` to use another
port. Cross-origin requests from `http://localhost:3000` are allowed by default;
set `FRONTEND_ORIGIN` to change that origin.

## Routes

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/properties` | List properties |
| `GET` | `/api/properties/:id` | Get a property by ID |
| `GET` | `/api/insights` | List insights |
| `GET` | `/api/insights/:id` | Get an insight by ID |
| `POST` | `/api/contact` | Save a contact form submission |

Contact submissions require `name`, `phoneNumber`, `email`, and `message` as
non-empty strings. The email address is validated before saving.

All records are stored in `data.json`, grouped under `properties`, `insights`,
and `contacts`. Properties and insights can be added to those arrays with an
`id` field; form submissions are appended to `contacts` with a generated ID and
timestamp.