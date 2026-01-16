# Brandview Admin Integrations

## Environment

Set the following in `.env` (or your platform environment settings):

- `LEAD_WHATSAPP_WEBHOOK_URL`
- `LEAD_WHATSAPP_WEBHOOK_SECRET` (optional)
- `GOOGLE_ADS_DEVELOPER_TOKEN`
- `GOOGLE_ADS_CLIENT_ID`
- `GOOGLE_ADS_CLIENT_SECRET`
- `GOOGLE_ADS_REFRESH_TOKEN`
- `GOOGLE_ADS_CUSTOMER_ID`
- `GOOGLE_ADS_LOGIN_CUSTOMER_ID` (optional)
- `META_ACCESS_TOKEN`
- `META_AD_ACCOUNT_ID`
- `META_API_VERSION`
- `CRON_SECRET` (optional, protects `/api/cron/*`)

## Google Ads refresh token setup

1. Create an OAuth client in Google Cloud Console and enable the Google Ads API.
2. Use OAuth playground or your own app to authorize the Google Ads scope:
   - `https://www.googleapis.com/auth/adwords`
3. Exchange the authorization code for a refresh token.
4. Put the refresh token in `GOOGLE_ADS_REFRESH_TOKEN`.

## Manual sync

- Google Ads: `POST /api/admin/sync/google-ads` (header `x-user-role: SUPER_ADMIN`)
- Meta Ads: `POST /api/admin/sync/meta-ads` (header `x-user-role: SUPER_ADMIN`)

## Client auth expectations

The admin client fetch wrapper reads:

- `auth_token` from `localStorage`/`sessionStorage` for `Authorization: Bearer`.
- `user_role` from `localStorage`/`sessionStorage` to expose `canMutate` for RBAC.

## Cron sync

- Google Ads: `POST /api/cron/google-ads` with `Authorization: Bearer <CRON_SECRET>`
- Meta Ads: `POST /api/cron/meta-ads` with `Authorization: Bearer <CRON_SECRET>`
