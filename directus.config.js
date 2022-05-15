module.exports = {
    DB_CONNECTION_STRING:
      (process.env.DB_CONNECTION_STRING || process.env.DATABASE_URL) +
      "?ssl=true&sslmode=no-verify" || null,
    ACCESS_TOKEN_TTL: process.env.ACCESS_TOKEN_TTL || null,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || null,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || null,
    CACHE_REDIS: process.env.CACHE_REDIS || process.env.REDIS_URL || null,
    CACHE_ENABLED: process.env.CACHE_ENABLED || null,
    CACHE_NAMESPACE: process.env.CACHE_NAMESPACE || null,
    CACHE_AUTO_PURGE: process.env.CACHE_AUTO_PURGE || null,
    CACHE_STORE: process.env.CACHE_STORE || null,
    // CONFIG_PATH: process.env.CONFIG_PATH || null,
    DB_CLIENT: process.env.DB_CLIENT || null,
    EXTENSIONS_PATH: process.env.EXTENSIONS_PATH || null,
    NODE_ENV: process.env.NODE_ENV || null,
    PUBLIC_URL: process.env.PUBLIC_URL || null,
    RATE_LIMITER_REDIS: process.env.RATE_LIMITER_REDIS || process.env.REDIS_URL || null,
    RATE_LIMITER_DURATION: process.env.RATE_LIMITER_DURATION || null,
    RATE_LIMITER_ENABLED: process.env.RATE_LIMITER_ENABLED || null,
    RATE_LIMITER_KEY_PREFIX: process.env.RATE_LIMITER_KEY_PREFIX || null,
    RATE_LIMITER_POINTS: process.env.RATE_LIMITER_POINTS || null,
    RATE_LIMITER_STORE: process.env.RATE_LIMITER_STORE || null,
    REFRESH_TOKEN_COOKIE_NAME: process.env.REFRESH_TOKEN_COOKIE_NAME || null,
    REFRESH_TOKEN_COOKIE_SAME_SITE: process.env.REFRESH_TOKEN_COOKIE_SAME_SITE || null,
    REFRESH_TOKEN_TTL: process.env.REFRESH_TOKEN_TTL || null,
    STORAGE_LOCATIONS: process.env.STORAGE_LOCATIONS || null,
    STORAGE_S3_BUCKET: process.env.STORAGE_S3_BUCKET || null,
    STORAGE_S3_DRIVER: process.env.STORAGE_S3_DRIVER || null,
    STORAGE_S3_ENDPOINT: process.env.STORAGE_S3_ENDPOINT || null,
    STORAGE_S3_REGION: process.env.STORAGE_S3_REGION || null,
    TZ: process.env.TZ || null,
  }