/** This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:
- BotCommandScopeDefault
- BotCommandScopeAllPrivateChats
- BotCommandScopeAllGroupChats
- BotCommandScopeAllChatAdministrators
- BotCommandScopeChat
- BotCommandScopeChatAdministrators
- BotCommandScopeChatMember

## Determining list of commands

The following algorithm is used to determine the list of commands for a particular user viewing the bot menu. The first list of commands which is set is returned:

### Commands in the chat with the bot
- botCommandScopeChat + language_code
- botCommandScopeChat
- botCommandScopeAllPrivateChats + language_code
- botCommandScopeAllPrivateChats
- botCommandScopeDefault + language_code
- botCommandScopeDefault

### Commands in group and supergroup chats
- botCommandScopeChatMember + language_code
- botCommandScopeChatMember
- botCommandScopeChatAdministrators + language_code (administrators only)
- botCommandScopeChatAdministrators (administrators only)
- botCommandScopeChat + language_code
- botCommandScopeChat
- botCommandScopeAllChatAdministrators + language_code (administrators only)
- botCommandScopeAllChatAdministrators (administrators only)
- botCommandScopeAllGroupChats + language_code
- botCommandScopeAllGroupChats
- botCommandScopeDefault + language_code
- botCommandScopeDefault */
export type BotCommandScope =
  | BotCommandScopeDefault
  | BotCommandScopeAllPrivateChats
  | BotCommandScopeAllGroupChats
  | BotCommandScopeAllChatAdministrators
  | BotCommandScopeChat
  | BotCommandScopeChatAdministrators
  | BotCommandScopeChatMember;

/** Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user. */
export interface BotCommandScopeDefault {
  /** Scope type, must be default */
  type: "default";
}

/** Represents the scope of bot commands, covering all private chats. */
export interface BotCommandScopeAllPrivateChats {
  /** Scope type, must be all_private_chats */
  type: "all_private_chats";
}

/** Represents the scope of bot commands, covering all group and supergroup chats. */
export interface BotCommandScopeAllGroupChats {
  /** Scope type, must be all_group_chats */
  type: "all_group_chats";
}

/** Represents the scope of bot commands, covering all group and supergroup chat administrators. */
export interface BotCommandScopeAllChatAdministrators {
  /** Scope type, must be all_chat_administrators */
  type: "all_chat_administrators";
}

/** Represents the scope of bot commands, covering a specific chat. */
export interface BotCommandScopeChat {
  /** Scope type, must be chat */
  type: "chat";
  /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
  chat_id: number | string;
}

/** Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat. */
export interface BotCommandScopeChatAdministrators {
  /** Scope type, must be chat_administrators */
  type: "chat_administrators";
  /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
  chat_id: number | string;
}

/** Represents the scope of bot commands, covering a specific member of a group or supergroup chat. */
export interface BotCommandScopeChatMember {
  /** Scope type, must be chat_member */
  type: "chat_member";
  /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
  chat_id: number | string;
  /** Unique identifier of the target user */
  user_id: number;
}
