export enum CookieExpiryTime {
    END_OF_SESSION = 0,
    SECOND = 1000,
    MINUTE = 60 * SECOND,
    HOUR = 60 * MINUTE,
    DAY = 24 * HOUR,
    MONTH = 30 * DAY,
    YEAR = 365 * DAY,
    NEVER = 20 * YEAR,
}
