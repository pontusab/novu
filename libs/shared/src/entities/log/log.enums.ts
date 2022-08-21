export enum LogStatusEnum {
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
}

export enum LogCodeEnum {
  TRIGGER_RECEIVED = 1000,
  TEMPLATE_NOT_ACTIVE = 1001,
  TEMPLATE_NOT_FOUND = 1002,
  SMS_ERROR = 1004,
  CHAT_ERROR = 1005,
  MISSING_SMS_PROVIDER = 1006,
  IN_APP_MESSAGE_CREATED = 1007,
  MAIL_PROVIDER_DELIVERY_ERROR = 1008,
  TRIGGER_PROCESSED = 1009,
  PUSH_ERROR = 1010,
  MISSING_PUSH_PROVIDER = 1011,
  SUBSCRIBER_NOT_FOUND = 3001,
  SUBSCRIBER_MISSING_EMAIL = 3002,
  SUBSCRIBER_MISSING_PHONE = 3003,
  SUBSCRIBER_MISSING_CHAT_CHANNEL_ID = 3006,
  SUBSCRIBER_ID_MISSING = 3004,
  MISSING_EMAIL_INTEGRATION = 3005,
  MISSING_SMS_INTEGRATION = 3007,
  MISSING_CHAT_INTEGRATION = 3008,
  MISSING_PUSH_INTEGRATION = 3009,
  SUBSCRIBER_MISSING_PUSH = 3010,
  TEMPLATE_COMPILE_ERROR = 4000,
}
