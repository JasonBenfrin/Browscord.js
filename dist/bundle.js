var Discord;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/discord-api-types/gateway/common.js":
/*!**********************************************************!*\
  !*** ./node_modules/discord-api-types/gateway/common.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/gateway/v10.js":
/*!*******************************************************!*\
  !*** ./node_modules/discord-api-types/gateway/v10.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/topics/gateway
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GatewayDispatchEvents = exports.GatewayIntentBits = exports.GatewayCloseCodes = exports.GatewayOpcodes = exports.GatewayVersion = void 0;
__exportStar(__webpack_require__(/*! ./common */ "./node_modules/discord-api-types/gateway/common.js"), exports);
exports.GatewayVersion = '10';
/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
var GatewayOpcodes;
(function (GatewayOpcodes) {
    /**
     * An event was dispatched
     */
    GatewayOpcodes[GatewayOpcodes["Dispatch"] = 0] = "Dispatch";
    /**
     * A bidirectional opcode to maintain an active gateway connection.
     * Fired periodically by the client, or fired by the gateway to request an immediate heartbeat from the client.
     */
    GatewayOpcodes[GatewayOpcodes["Heartbeat"] = 1] = "Heartbeat";
    /**
     * Starts a new session during the initial handshake
     */
    GatewayOpcodes[GatewayOpcodes["Identify"] = 2] = "Identify";
    /**
     * Update the client's presence
     */
    GatewayOpcodes[GatewayOpcodes["PresenceUpdate"] = 3] = "PresenceUpdate";
    /**
     * Used to join/leave or move between voice channels
     */
    GatewayOpcodes[GatewayOpcodes["VoiceStateUpdate"] = 4] = "VoiceStateUpdate";
    /**
     * Resume a previous session that was disconnected
     */
    GatewayOpcodes[GatewayOpcodes["Resume"] = 6] = "Resume";
    /**
     * You should attempt to reconnect and resume immediately
     */
    GatewayOpcodes[GatewayOpcodes["Reconnect"] = 7] = "Reconnect";
    /**
     * Request information about offline guild members in a large guild
     */
    GatewayOpcodes[GatewayOpcodes["RequestGuildMembers"] = 8] = "RequestGuildMembers";
    /**
     * The session has been invalidated. You should reconnect and identify/resume accordingly
     */
    GatewayOpcodes[GatewayOpcodes["InvalidSession"] = 9] = "InvalidSession";
    /**
     * Sent immediately after connecting, contains the `heartbeat_interval` to use
     */
    GatewayOpcodes[GatewayOpcodes["Hello"] = 10] = "Hello";
    /**
     * Sent in response to receiving a heartbeat to acknowledge that it has been received
     */
    GatewayOpcodes[GatewayOpcodes["HeartbeatAck"] = 11] = "HeartbeatAck";
})(GatewayOpcodes = exports.GatewayOpcodes || (exports.GatewayOpcodes = {}));
/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes
 */
var GatewayCloseCodes;
(function (GatewayCloseCodes) {
    /**
     * We're not sure what went wrong. Try reconnecting?
     */
    GatewayCloseCodes[GatewayCloseCodes["UnknownError"] = 4000] = "UnknownError";
    /**
     * You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that!
     *
     * See https://discord.com/developers/docs/topics/gateway#payloads-and-opcodes
     */
    GatewayCloseCodes[GatewayCloseCodes["UnknownOpcode"] = 4001] = "UnknownOpcode";
    /**
     * You sent an invalid payload to us. Don't do that!
     *
     * See https://discord.com/developers/docs/topics/gateway#sending-payloads
     */
    GatewayCloseCodes[GatewayCloseCodes["DecodeError"] = 4002] = "DecodeError";
    /**
     * You sent us a payload prior to identifying
     *
     * See https://discord.com/developers/docs/topics/gateway#identify
     */
    GatewayCloseCodes[GatewayCloseCodes["NotAuthenticated"] = 4003] = "NotAuthenticated";
    /**
     * The account token sent with your identify payload is incorrect
     *
     * See https://discord.com/developers/docs/topics/gateway#identify
     */
    GatewayCloseCodes[GatewayCloseCodes["AuthenticationFailed"] = 4004] = "AuthenticationFailed";
    /**
     * You sent more than one identify payload. Don't do that!
     */
    GatewayCloseCodes[GatewayCloseCodes["AlreadyAuthenticated"] = 4005] = "AlreadyAuthenticated";
    /**
     * The sequence sent when resuming the session was invalid. Reconnect and start a new session
     *
     * See https://discord.com/developers/docs/topics/gateway#resume
     */
    GatewayCloseCodes[GatewayCloseCodes["InvalidSeq"] = 4007] = "InvalidSeq";
    /**
     * Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this
     */
    GatewayCloseCodes[GatewayCloseCodes["RateLimited"] = 4008] = "RateLimited";
    /**
     * Your session timed out. Reconnect and start a new one
     */
    GatewayCloseCodes[GatewayCloseCodes["SessionTimedOut"] = 4009] = "SessionTimedOut";
    /**
     * You sent us an invalid shard when identifying
     *
     * See https://discord.com/developers/docs/topics/gateway#sharding
     */
    GatewayCloseCodes[GatewayCloseCodes["InvalidShard"] = 4010] = "InvalidShard";
    /**
     * The session would have handled too many guilds - you are required to shard your connection in order to connect
     *
     * See https://discord.com/developers/docs/topics/gateway#sharding
     */
    GatewayCloseCodes[GatewayCloseCodes["ShardingRequired"] = 4011] = "ShardingRequired";
    /**
     * You sent an invalid version for the gateway
     */
    GatewayCloseCodes[GatewayCloseCodes["InvalidAPIVersion"] = 4012] = "InvalidAPIVersion";
    /**
     * You sent an invalid intent for a Gateway Intent. You may have incorrectly calculated the bitwise value
     *
     * See https://discord.com/developers/docs/topics/gateway#gateway-intents
     */
    GatewayCloseCodes[GatewayCloseCodes["InvalidIntents"] = 4013] = "InvalidIntents";
    /**
     * You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not
     * enabled or are not whitelisted for
     *
     * See https://discord.com/developers/docs/topics/gateway#gateway-intents
     *
     * See https://discord.com/developers/docs/topics/gateway#privileged-intents
     */
    GatewayCloseCodes[GatewayCloseCodes["DisallowedIntents"] = 4014] = "DisallowedIntents";
})(GatewayCloseCodes = exports.GatewayCloseCodes || (exports.GatewayCloseCodes = {}));
/**
 * https://discord.com/developers/docs/topics/gateway#list-of-intents
 */
var GatewayIntentBits;
(function (GatewayIntentBits) {
    GatewayIntentBits[GatewayIntentBits["Guilds"] = 1] = "Guilds";
    GatewayIntentBits[GatewayIntentBits["GuildMembers"] = 2] = "GuildMembers";
    GatewayIntentBits[GatewayIntentBits["GuildBans"] = 4] = "GuildBans";
    GatewayIntentBits[GatewayIntentBits["GuildEmojisAndStickers"] = 8] = "GuildEmojisAndStickers";
    GatewayIntentBits[GatewayIntentBits["GuildIntegrations"] = 16] = "GuildIntegrations";
    GatewayIntentBits[GatewayIntentBits["GuildWebhooks"] = 32] = "GuildWebhooks";
    GatewayIntentBits[GatewayIntentBits["GuildInvites"] = 64] = "GuildInvites";
    GatewayIntentBits[GatewayIntentBits["GuildVoiceStates"] = 128] = "GuildVoiceStates";
    GatewayIntentBits[GatewayIntentBits["GuildPresences"] = 256] = "GuildPresences";
    GatewayIntentBits[GatewayIntentBits["GuildMessages"] = 512] = "GuildMessages";
    GatewayIntentBits[GatewayIntentBits["GuildMessageReactions"] = 1024] = "GuildMessageReactions";
    GatewayIntentBits[GatewayIntentBits["GuildMessageTyping"] = 2048] = "GuildMessageTyping";
    GatewayIntentBits[GatewayIntentBits["DirectMessages"] = 4096] = "DirectMessages";
    GatewayIntentBits[GatewayIntentBits["DirectMessageReactions"] = 8192] = "DirectMessageReactions";
    GatewayIntentBits[GatewayIntentBits["DirectMessageTyping"] = 16384] = "DirectMessageTyping";
    GatewayIntentBits[GatewayIntentBits["MessageContent"] = 32768] = "MessageContent";
    GatewayIntentBits[GatewayIntentBits["GuildScheduledEvents"] = 65536] = "GuildScheduledEvents";
})(GatewayIntentBits = exports.GatewayIntentBits || (exports.GatewayIntentBits = {}));
/**
 * https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events
 */
var GatewayDispatchEvents;
(function (GatewayDispatchEvents) {
    GatewayDispatchEvents["ApplicationCommandPermissionsUpdate"] = "APPLICATION_COMMAND_PERMISSIONS_UPDATE";
    GatewayDispatchEvents["ChannelCreate"] = "CHANNEL_CREATE";
    GatewayDispatchEvents["ChannelDelete"] = "CHANNEL_DELETE";
    GatewayDispatchEvents["ChannelPinsUpdate"] = "CHANNEL_PINS_UPDATE";
    GatewayDispatchEvents["ChannelUpdate"] = "CHANNEL_UPDATE";
    GatewayDispatchEvents["GuildBanAdd"] = "GUILD_BAN_ADD";
    GatewayDispatchEvents["GuildBanRemove"] = "GUILD_BAN_REMOVE";
    GatewayDispatchEvents["GuildCreate"] = "GUILD_CREATE";
    GatewayDispatchEvents["GuildDelete"] = "GUILD_DELETE";
    GatewayDispatchEvents["GuildEmojisUpdate"] = "GUILD_EMOJIS_UPDATE";
    GatewayDispatchEvents["GuildIntegrationsUpdate"] = "GUILD_INTEGRATIONS_UPDATE";
    GatewayDispatchEvents["GuildMemberAdd"] = "GUILD_MEMBER_ADD";
    GatewayDispatchEvents["GuildMemberRemove"] = "GUILD_MEMBER_REMOVE";
    GatewayDispatchEvents["GuildMembersChunk"] = "GUILD_MEMBERS_CHUNK";
    GatewayDispatchEvents["GuildMemberUpdate"] = "GUILD_MEMBER_UPDATE";
    GatewayDispatchEvents["GuildRoleCreate"] = "GUILD_ROLE_CREATE";
    GatewayDispatchEvents["GuildRoleDelete"] = "GUILD_ROLE_DELETE";
    GatewayDispatchEvents["GuildRoleUpdate"] = "GUILD_ROLE_UPDATE";
    GatewayDispatchEvents["GuildStickersUpdate"] = "GUILD_STICKERS_UPDATE";
    GatewayDispatchEvents["GuildUpdate"] = "GUILD_UPDATE";
    GatewayDispatchEvents["IntegrationCreate"] = "INTEGRATION_CREATE";
    GatewayDispatchEvents["IntegrationDelete"] = "INTEGRATION_DELETE";
    GatewayDispatchEvents["IntegrationUpdate"] = "INTEGRATION_UPDATE";
    GatewayDispatchEvents["InteractionCreate"] = "INTERACTION_CREATE";
    GatewayDispatchEvents["InviteCreate"] = "INVITE_CREATE";
    GatewayDispatchEvents["InviteDelete"] = "INVITE_DELETE";
    GatewayDispatchEvents["MessageCreate"] = "MESSAGE_CREATE";
    GatewayDispatchEvents["MessageDelete"] = "MESSAGE_DELETE";
    GatewayDispatchEvents["MessageDeleteBulk"] = "MESSAGE_DELETE_BULK";
    GatewayDispatchEvents["MessageReactionAdd"] = "MESSAGE_REACTION_ADD";
    GatewayDispatchEvents["MessageReactionRemove"] = "MESSAGE_REACTION_REMOVE";
    GatewayDispatchEvents["MessageReactionRemoveAll"] = "MESSAGE_REACTION_REMOVE_ALL";
    GatewayDispatchEvents["MessageReactionRemoveEmoji"] = "MESSAGE_REACTION_REMOVE_EMOJI";
    GatewayDispatchEvents["MessageUpdate"] = "MESSAGE_UPDATE";
    GatewayDispatchEvents["PresenceUpdate"] = "PRESENCE_UPDATE";
    GatewayDispatchEvents["StageInstanceCreate"] = "STAGE_INSTANCE_CREATE";
    GatewayDispatchEvents["StageInstanceDelete"] = "STAGE_INSTANCE_DELETE";
    GatewayDispatchEvents["StageInstanceUpdate"] = "STAGE_INSTANCE_UPDATE";
    GatewayDispatchEvents["Ready"] = "READY";
    GatewayDispatchEvents["Resumed"] = "RESUMED";
    GatewayDispatchEvents["ThreadCreate"] = "THREAD_CREATE";
    GatewayDispatchEvents["ThreadDelete"] = "THREAD_DELETE";
    GatewayDispatchEvents["ThreadListSync"] = "THREAD_LIST_SYNC";
    GatewayDispatchEvents["ThreadMembersUpdate"] = "THREAD_MEMBERS_UPDATE";
    GatewayDispatchEvents["ThreadMemberUpdate"] = "THREAD_MEMBER_UPDATE";
    GatewayDispatchEvents["ThreadUpdate"] = "THREAD_UPDATE";
    GatewayDispatchEvents["TypingStart"] = "TYPING_START";
    GatewayDispatchEvents["UserUpdate"] = "USER_UPDATE";
    GatewayDispatchEvents["VoiceServerUpdate"] = "VOICE_SERVER_UPDATE";
    GatewayDispatchEvents["VoiceStateUpdate"] = "VOICE_STATE_UPDATE";
    GatewayDispatchEvents["WebhooksUpdate"] = "WEBHOOKS_UPDATE";
    GatewayDispatchEvents["GuildScheduledEventCreate"] = "GUILD_SCHEDULED_EVENT_CREATE";
    GatewayDispatchEvents["GuildScheduledEventUpdate"] = "GUILD_SCHEDULED_EVENT_UPDATE";
    GatewayDispatchEvents["GuildScheduledEventDelete"] = "GUILD_SCHEDULED_EVENT_DELETE";
    GatewayDispatchEvents["GuildScheduledEventUserAdd"] = "GUILD_SCHEDULED_EVENT_USER_ADD";
    GatewayDispatchEvents["GuildScheduledEventUserRemove"] = "GUILD_SCHEDULED_EVENT_USER_REMOVE";
})(GatewayDispatchEvents = exports.GatewayDispatchEvents || (exports.GatewayDispatchEvents = {}));
// #endregion Shared
//# sourceMappingURL=v10.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/globals.js":
/*!***************************************************!*\
  !*** ./node_modules/discord-api-types/globals.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormattingPatterns = void 0;
/**
 * https://discord.com/developers/docs/reference#message-formatting-formats
 */
exports.FormattingPatterns = {
    /**
     * Regular expression for matching a user mention, strictly without a nickname
     *
     * The `id` group property is present on the `exec` result of this expression
     */
    User: /<@(?<id>\d{17,20})>/,
    /**
     * Regular expression for matching a user mention, strictly with a nickname
     *
     * The `id` group property is present on the `exec` result of this expression
     * @deprecated Passing `!` in user mentions is no longer necessary / supported, and future message contents won't have it
     */
    UserWithNickname: /<@!(?<id>\d{17,20})>/,
    /**
     * Regular expression for matching a user mention, with or without a nickname
     *
     * The `id` group property is present on the `exec` result of this expression
     * @deprecated Passing `!` in user mentions is no longer necessary / supported, and future message contents won't have it
     */
    UserWithOptionalNickname: /<@!?(?<id>\d{17,20})>/,
    /**
     * Regular expression for matching a channel mention
     *
     * The `id` group property is present on the `exec` result of this expression
     */
    Channel: /<#(?<id>\d{17,20})>/,
    /**
     * Regular expression for matching a role mention
     *
     * The `id` group property is present on the `exec` result of this expression
     */
    Role: /<@&(?<id>\d{17,20})>/,
    /**
     * Regular expression for matching a application command mention
     *
     * The `fullName` (possibly including `name`, `subcommandOrGroup` and `subcommand`) and `id` group properties are present on the `exec` result of this expression
     */
    SlashCommand: /<\/(?<fullName>(?<name>[\w-]{1,32})(?: (?<subcommandOrGroup>[\w-]{1,32}))?(?: (?<subcommand>[\w-]{1,32}))?):(?<id>\d{17,20})>/,
    /**
     * Regular expression for matching a custom emoji, either static or animated
     *
     * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
     */
    Emoji: /<(?<animated>a)?:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
    /**
     * Regular expression for matching strictly an animated custom emoji
     *
     * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
     */
    AnimatedEmoji: /<(?<animated>a):(?<name>\w{2,32}):(?<id>\d{17,20})>/,
    /**
     * Regular expression for matching strictly a static custom emoji
     *
     * The `name` and `id` group properties are present on the `exec` result of this expression
     */
    StaticEmoji: /<:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
    /**
     * Regular expression for matching a timestamp, either default or custom styled
     *
     * The `timestamp` and `style` group properties are present on the `exec` result of this expression
     */
    Timestamp: /<t:(?<timestamp>-?\d{1,13})(:(?<style>[tTdDfFR]))?>/,
    /**
     * Regular expression for matching strictly default styled timestamps
     *
     * The `timestamp` group property is present on the `exec` result of this expression
     */
    DefaultStyledTimestamp: /<t:(?<timestamp>-?\d{1,13})>/,
    /**
     * Regular expression for matching strictly custom styled timestamps
     *
     * The `timestamp` and `style` group properties are present on the `exec` result of this expression
     */
    StyledTimestamp: /<t:(?<timestamp>-?\d{1,13}):(?<style>[tTdDfFR])>/,
};
/**
 * Freezes the formatting patterns
 * @internal
 */
Object.freeze(exports.FormattingPatterns);
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/common.js":
/*!***********************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/common.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionFlagsBits = void 0;
/**
 * https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 *
 * These flags are exported as `BigInt`s and NOT numbers. Wrapping them in `Number()`
 * may cause issues, try to use BigInts as much as possible or modules that can
 * replicate them in some way
 */
exports.PermissionFlagsBits = {
    CreateInstantInvite: 1n << 0n,
    KickMembers: 1n << 1n,
    BanMembers: 1n << 2n,
    Administrator: 1n << 3n,
    ManageChannels: 1n << 4n,
    ManageGuild: 1n << 5n,
    AddReactions: 1n << 6n,
    ViewAuditLog: 1n << 7n,
    PrioritySpeaker: 1n << 8n,
    Stream: 1n << 9n,
    ViewChannel: 1n << 10n,
    SendMessages: 1n << 11n,
    SendTTSMessages: 1n << 12n,
    ManageMessages: 1n << 13n,
    EmbedLinks: 1n << 14n,
    AttachFiles: 1n << 15n,
    ReadMessageHistory: 1n << 16n,
    MentionEveryone: 1n << 17n,
    UseExternalEmojis: 1n << 18n,
    ViewGuildInsights: 1n << 19n,
    Connect: 1n << 20n,
    Speak: 1n << 21n,
    MuteMembers: 1n << 22n,
    DeafenMembers: 1n << 23n,
    MoveMembers: 1n << 24n,
    UseVAD: 1n << 25n,
    ChangeNickname: 1n << 26n,
    ManageNicknames: 1n << 27n,
    ManageRoles: 1n << 28n,
    ManageWebhooks: 1n << 29n,
    ManageEmojisAndStickers: 1n << 30n,
    UseApplicationCommands: 1n << 31n,
    RequestToSpeak: 1n << 32n,
    ManageEvents: 1n << 33n,
    ManageThreads: 1n << 34n,
    CreatePublicThreads: 1n << 35n,
    CreatePrivateThreads: 1n << 36n,
    UseExternalStickers: 1n << 37n,
    SendMessagesInThreads: 1n << 38n,
    UseEmbeddedActivities: 1n << 39n,
    ModerateMembers: 1n << 40n,
};
/**
 * Freeze the object of bits, preventing any modifications to it
 * @internal
 */
Object.freeze(exports.PermissionFlagsBits);
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/attachment.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/attachment.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=attachment.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/boolean.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/boolean.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=boolean.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/channel.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/channel.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=channel.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/integer.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/integer.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=integer.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/mentionable.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/mentionable.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=mentionable.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/number.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/number.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=number.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/role.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/role.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=role.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApplicationCommandOptionType = void 0;
/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
 */
var ApplicationCommandOptionType;
(function (ApplicationCommandOptionType) {
    ApplicationCommandOptionType[ApplicationCommandOptionType["Subcommand"] = 1] = "Subcommand";
    ApplicationCommandOptionType[ApplicationCommandOptionType["SubcommandGroup"] = 2] = "SubcommandGroup";
    ApplicationCommandOptionType[ApplicationCommandOptionType["String"] = 3] = "String";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Integer"] = 4] = "Integer";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Boolean"] = 5] = "Boolean";
    ApplicationCommandOptionType[ApplicationCommandOptionType["User"] = 6] = "User";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Channel"] = 7] = "Channel";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Role"] = 8] = "Role";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Mentionable"] = 9] = "Mentionable";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Number"] = 10] = "Number";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Attachment"] = 11] = "Attachment";
})(ApplicationCommandOptionType = exports.ApplicationCommandOptionType || (exports.ApplicationCommandOptionType = {}));
//# sourceMappingURL=shared.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/string.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/string.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommand.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommand.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=subcommand.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommandGroup.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommandGroup.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=subcommandGroup.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/user.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/user.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./_chatInput/attachment */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/attachment.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/base */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/boolean */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/boolean.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/channel */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/channel.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/integer */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/integer.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/mentionable */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/mentionable.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/number */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/number.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/role */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/role.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/shared */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/string */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/string.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/subcommand */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommand.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/subcommandGroup */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommandGroup.js"), exports);
__exportStar(__webpack_require__(/*! ./_chatInput/user */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/user.js"), exports);
//# sourceMappingURL=chatInput.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=contextMenu.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.APIApplicationCommandPermissionsConstant = exports.ApplicationCommandPermissionType = void 0;
/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type
 */
var ApplicationCommandPermissionType;
(function (ApplicationCommandPermissionType) {
    ApplicationCommandPermissionType[ApplicationCommandPermissionType["Role"] = 1] = "Role";
    ApplicationCommandPermissionType[ApplicationCommandPermissionType["User"] = 2] = "User";
    ApplicationCommandPermissionType[ApplicationCommandPermissionType["Channel"] = 3] = "Channel";
})(ApplicationCommandPermissionType = exports.ApplicationCommandPermissionType || (exports.ApplicationCommandPermissionType = {}));
/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-constants
 */
exports.APIApplicationCommandPermissionsConstant = {
    Everyone: (guildId) => String(guildId),
    AllChannels: (guildId) => String(BigInt(guildId) - 1n),
};
//# sourceMappingURL=permissions.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApplicationCommandType = void 0;
__exportStar(__webpack_require__(/*! ./_applicationCommands/chatInput */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js"), exports);
__exportStar(__webpack_require__(/*! ./_applicationCommands/contextMenu */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.js"), exports);
__exportStar(__webpack_require__(/*! ./_applicationCommands/permissions */ "./node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js"), exports);
/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
 */
var ApplicationCommandType;
(function (ApplicationCommandType) {
    ApplicationCommandType[ApplicationCommandType["ChatInput"] = 1] = "ChatInput";
    ApplicationCommandType[ApplicationCommandType["User"] = 2] = "User";
    ApplicationCommandType[ApplicationCommandType["Message"] = 3] = "Message";
})(ApplicationCommandType = exports.ApplicationCommandType || (exports.ApplicationCommandType = {}));
//# sourceMappingURL=applicationCommands.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/autocomplete.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/autocomplete.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/base.js":
/*!***************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/base.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/messageComponents.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/messageComponents.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=messageComponents.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/modalSubmit.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/modalSubmit.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=modalSubmit.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/ping.js":
/*!***************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/ping.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ping.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/_interactions/responses.js":
/*!********************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/_interactions/responses.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteractionResponseType = exports.InteractionType = void 0;
/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
 */
var InteractionType;
(function (InteractionType) {
    InteractionType[InteractionType["Ping"] = 1] = "Ping";
    InteractionType[InteractionType["ApplicationCommand"] = 2] = "ApplicationCommand";
    InteractionType[InteractionType["MessageComponent"] = 3] = "MessageComponent";
    InteractionType[InteractionType["ApplicationCommandAutocomplete"] = 4] = "ApplicationCommandAutocomplete";
    InteractionType[InteractionType["ModalSubmit"] = 5] = "ModalSubmit";
})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));
/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
 */
var InteractionResponseType;
(function (InteractionResponseType) {
    /**
     * ACK a `Ping`
     */
    InteractionResponseType[InteractionResponseType["Pong"] = 1] = "Pong";
    /**
     * Respond to an interaction with a message
     */
    InteractionResponseType[InteractionResponseType["ChannelMessageWithSource"] = 4] = "ChannelMessageWithSource";
    /**
     * ACK an interaction and edit to a response later, the user sees a loading state
     */
    InteractionResponseType[InteractionResponseType["DeferredChannelMessageWithSource"] = 5] = "DeferredChannelMessageWithSource";
    /**
     * ACK a button interaction and update it to a loading state
     */
    InteractionResponseType[InteractionResponseType["DeferredMessageUpdate"] = 6] = "DeferredMessageUpdate";
    /**
     * ACK a button interaction and edit the message to which the button was attached
     */
    InteractionResponseType[InteractionResponseType["UpdateMessage"] = 7] = "UpdateMessage";
    /**
     * For autocomplete interactions
     */
    InteractionResponseType[InteractionResponseType["ApplicationCommandAutocompleteResult"] = 8] = "ApplicationCommandAutocompleteResult";
    /**
     * Respond to an interaction with an modal for a user to fill-out
     */
    InteractionResponseType[InteractionResponseType["Modal"] = 9] = "Modal";
})(InteractionResponseType = exports.InteractionResponseType || (exports.InteractionResponseType = {}));
//# sourceMappingURL=responses.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/application.js":
/*!********************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/application.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/resources/application
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApplicationFlags = void 0;
/**
 * https://discord.com/developers/docs/resources/application#application-object-application-flags
 */
var ApplicationFlags;
(function (ApplicationFlags) {
    ApplicationFlags[ApplicationFlags["EmbeddedReleased"] = 2] = "EmbeddedReleased";
    ApplicationFlags[ApplicationFlags["ManagedEmoji"] = 4] = "ManagedEmoji";
    ApplicationFlags[ApplicationFlags["GroupDMCreate"] = 16] = "GroupDMCreate";
    ApplicationFlags[ApplicationFlags["RPCHasConnected"] = 2048] = "RPCHasConnected";
    ApplicationFlags[ApplicationFlags["GatewayPresence"] = 4096] = "GatewayPresence";
    ApplicationFlags[ApplicationFlags["GatewayPresenceLimited"] = 8192] = "GatewayPresenceLimited";
    ApplicationFlags[ApplicationFlags["GatewayGuildMembers"] = 16384] = "GatewayGuildMembers";
    ApplicationFlags[ApplicationFlags["GatewayGuildMembersLimited"] = 32768] = "GatewayGuildMembersLimited";
    ApplicationFlags[ApplicationFlags["VerificationPendingGuildLimit"] = 65536] = "VerificationPendingGuildLimit";
    ApplicationFlags[ApplicationFlags["Embedded"] = 131072] = "Embedded";
    ApplicationFlags[ApplicationFlags["GatewayMessageContent"] = 262144] = "GatewayMessageContent";
    ApplicationFlags[ApplicationFlags["GatewayMessageContentLimited"] = 524288] = "GatewayMessageContentLimited";
    ApplicationFlags[ApplicationFlags["EmbeddedFirstParty"] = 1048576] = "EmbeddedFirstParty";
    ApplicationFlags[ApplicationFlags["ApplicationCommandBadge"] = 8388608] = "ApplicationCommandBadge";
})(ApplicationFlags = exports.ApplicationFlags || (exports.ApplicationFlags = {}));
//# sourceMappingURL=application.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/auditLog.js":
/*!*****************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/auditLog.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/resources/audit-log
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditLogOptionsType = exports.AuditLogEvent = void 0;
/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
 */
var AuditLogEvent;
(function (AuditLogEvent) {
    AuditLogEvent[AuditLogEvent["GuildUpdate"] = 1] = "GuildUpdate";
    AuditLogEvent[AuditLogEvent["ChannelCreate"] = 10] = "ChannelCreate";
    AuditLogEvent[AuditLogEvent["ChannelUpdate"] = 11] = "ChannelUpdate";
    AuditLogEvent[AuditLogEvent["ChannelDelete"] = 12] = "ChannelDelete";
    AuditLogEvent[AuditLogEvent["ChannelOverwriteCreate"] = 13] = "ChannelOverwriteCreate";
    AuditLogEvent[AuditLogEvent["ChannelOverwriteUpdate"] = 14] = "ChannelOverwriteUpdate";
    AuditLogEvent[AuditLogEvent["ChannelOverwriteDelete"] = 15] = "ChannelOverwriteDelete";
    AuditLogEvent[AuditLogEvent["MemberKick"] = 20] = "MemberKick";
    AuditLogEvent[AuditLogEvent["MemberPrune"] = 21] = "MemberPrune";
    AuditLogEvent[AuditLogEvent["MemberBanAdd"] = 22] = "MemberBanAdd";
    AuditLogEvent[AuditLogEvent["MemberBanRemove"] = 23] = "MemberBanRemove";
    AuditLogEvent[AuditLogEvent["MemberUpdate"] = 24] = "MemberUpdate";
    AuditLogEvent[AuditLogEvent["MemberRoleUpdate"] = 25] = "MemberRoleUpdate";
    AuditLogEvent[AuditLogEvent["MemberMove"] = 26] = "MemberMove";
    AuditLogEvent[AuditLogEvent["MemberDisconnect"] = 27] = "MemberDisconnect";
    AuditLogEvent[AuditLogEvent["BotAdd"] = 28] = "BotAdd";
    AuditLogEvent[AuditLogEvent["RoleCreate"] = 30] = "RoleCreate";
    AuditLogEvent[AuditLogEvent["RoleUpdate"] = 31] = "RoleUpdate";
    AuditLogEvent[AuditLogEvent["RoleDelete"] = 32] = "RoleDelete";
    AuditLogEvent[AuditLogEvent["InviteCreate"] = 40] = "InviteCreate";
    AuditLogEvent[AuditLogEvent["InviteUpdate"] = 41] = "InviteUpdate";
    AuditLogEvent[AuditLogEvent["InviteDelete"] = 42] = "InviteDelete";
    AuditLogEvent[AuditLogEvent["WebhookCreate"] = 50] = "WebhookCreate";
    AuditLogEvent[AuditLogEvent["WebhookUpdate"] = 51] = "WebhookUpdate";
    AuditLogEvent[AuditLogEvent["WebhookDelete"] = 52] = "WebhookDelete";
    AuditLogEvent[AuditLogEvent["EmojiCreate"] = 60] = "EmojiCreate";
    AuditLogEvent[AuditLogEvent["EmojiUpdate"] = 61] = "EmojiUpdate";
    AuditLogEvent[AuditLogEvent["EmojiDelete"] = 62] = "EmojiDelete";
    AuditLogEvent[AuditLogEvent["MessageDelete"] = 72] = "MessageDelete";
    AuditLogEvent[AuditLogEvent["MessageBulkDelete"] = 73] = "MessageBulkDelete";
    AuditLogEvent[AuditLogEvent["MessagePin"] = 74] = "MessagePin";
    AuditLogEvent[AuditLogEvent["MessageUnpin"] = 75] = "MessageUnpin";
    AuditLogEvent[AuditLogEvent["IntegrationCreate"] = 80] = "IntegrationCreate";
    AuditLogEvent[AuditLogEvent["IntegrationUpdate"] = 81] = "IntegrationUpdate";
    AuditLogEvent[AuditLogEvent["IntegrationDelete"] = 82] = "IntegrationDelete";
    AuditLogEvent[AuditLogEvent["StageInstanceCreate"] = 83] = "StageInstanceCreate";
    AuditLogEvent[AuditLogEvent["StageInstanceUpdate"] = 84] = "StageInstanceUpdate";
    AuditLogEvent[AuditLogEvent["StageInstanceDelete"] = 85] = "StageInstanceDelete";
    AuditLogEvent[AuditLogEvent["StickerCreate"] = 90] = "StickerCreate";
    AuditLogEvent[AuditLogEvent["StickerUpdate"] = 91] = "StickerUpdate";
    AuditLogEvent[AuditLogEvent["StickerDelete"] = 92] = "StickerDelete";
    AuditLogEvent[AuditLogEvent["GuildScheduledEventCreate"] = 100] = "GuildScheduledEventCreate";
    AuditLogEvent[AuditLogEvent["GuildScheduledEventUpdate"] = 101] = "GuildScheduledEventUpdate";
    AuditLogEvent[AuditLogEvent["GuildScheduledEventDelete"] = 102] = "GuildScheduledEventDelete";
    AuditLogEvent[AuditLogEvent["ThreadCreate"] = 110] = "ThreadCreate";
    AuditLogEvent[AuditLogEvent["ThreadUpdate"] = 111] = "ThreadUpdate";
    AuditLogEvent[AuditLogEvent["ThreadDelete"] = 112] = "ThreadDelete";
    AuditLogEvent[AuditLogEvent["ApplicationCommandPermissionUpdate"] = 121] = "ApplicationCommandPermissionUpdate";
})(AuditLogEvent = exports.AuditLogEvent || (exports.AuditLogEvent = {}));
var AuditLogOptionsType;
(function (AuditLogOptionsType) {
    AuditLogOptionsType["Role"] = "0";
    AuditLogOptionsType["Member"] = "1";
})(AuditLogOptionsType = exports.AuditLogOptionsType || (exports.AuditLogOptionsType = {}));
//# sourceMappingURL=auditLog.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/channel.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/channel.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/resources/channel
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChannelFlags = exports.TextInputStyle = exports.ButtonStyle = exports.ComponentType = exports.AllowedMentionsTypes = exports.EmbedType = exports.ThreadMemberFlags = exports.ThreadAutoArchiveDuration = exports.OverwriteType = exports.MessageFlags = exports.MessageActivityType = exports.MessageType = exports.VideoQualityMode = exports.ChannelType = exports.SortOrderType = void 0;
/**
 * https://discord.com/developers/docs/resources/channel/#channel-object-sort-order-types
 */
var SortOrderType;
(function (SortOrderType) {
    /**
     * Sort forum posts by activity
     */
    SortOrderType[SortOrderType["LatestActivity"] = 0] = "LatestActivity";
    /**
     * Sort forum posts by creation time (from most recent to oldest)
     */
    SortOrderType[SortOrderType["CreationDate"] = 1] = "CreationDate";
})(SortOrderType = exports.SortOrderType || (exports.SortOrderType = {}));
/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
var ChannelType;
(function (ChannelType) {
    /**
     * A text channel within a guild
     */
    ChannelType[ChannelType["GuildText"] = 0] = "GuildText";
    /**
     * A direct message between users
     */
    ChannelType[ChannelType["DM"] = 1] = "DM";
    /**
     * A voice channel within a guild
     */
    ChannelType[ChannelType["GuildVoice"] = 2] = "GuildVoice";
    /**
     * A direct message between multiple users
     */
    ChannelType[ChannelType["GroupDM"] = 3] = "GroupDM";
    /**
     * An organizational category that contains up to 50 channels
     *
     * See https://support.discord.com/hc/en-us/articles/115001580171-Channel-Categories-101
     */
    ChannelType[ChannelType["GuildCategory"] = 4] = "GuildCategory";
    /**
     * A channel that users can follow and crosspost into their own guild
     *
     * See https://support.discord.com/hc/en-us/articles/360032008192
     */
    ChannelType[ChannelType["GuildAnnouncement"] = 5] = "GuildAnnouncement";
    /**
     * A temporary sub-channel within a Guild Announcement channel
     */
    ChannelType[ChannelType["AnnouncementThread"] = 10] = "AnnouncementThread";
    /**
     * A temporary sub-channel within a Guild Text channel
     */
    ChannelType[ChannelType["PublicThread"] = 11] = "PublicThread";
    /**
     * A temporary sub-channel within a Guild Text channel that is only viewable by those invited and those with the Manage Threads permission
     */
    ChannelType[ChannelType["PrivateThread"] = 12] = "PrivateThread";
    /**
     * A voice channel for hosting events with an audience
     *
     * See https://support.discord.com/hc/en-us/articles/1500005513722
     */
    ChannelType[ChannelType["GuildStageVoice"] = 13] = "GuildStageVoice";
    /**
     * The channel in a Student Hub containing the listed servers
     *
     * See https://support.discord.com/hc/en-us/articles/4406046651927-Discord-Student-Hubs-FAQ
     */
    ChannelType[ChannelType["GuildDirectory"] = 14] = "GuildDirectory";
    /**
     * A channel that can only contain threads
     */
    ChannelType[ChannelType["GuildForum"] = 15] = "GuildForum";
    // EVERYTHING BELOW THIS LINE SHOULD BE OLD NAMES FOR RENAMED ENUM MEMBERS //
    /**
     * A channel that users can follow and crosspost into their own guild
     *
     * @deprecated This is the old name for {@apilink ChannelType#GuildAnnouncement}
     *
     * See https://support.discord.com/hc/en-us/articles/360032008192
     */
    ChannelType[ChannelType["GuildNews"] = 5] = "GuildNews";
    /**
     * A temporary sub-channel within a Guild Announcement channel
     *
     * @deprecated This is the old name for {@apilink ChannelType#AnnouncementThread}
     */
    ChannelType[ChannelType["GuildNewsThread"] = 10] = "GuildNewsThread";
    /**
     * A temporary sub-channel within a Guild Text channel
     *
     * @deprecated This is the old name for {@apilink ChannelType#PublicThread}
     */
    ChannelType[ChannelType["GuildPublicThread"] = 11] = "GuildPublicThread";
    /**
     * A temporary sub-channel within a Guild Text channel that is only viewable by those invited and those with the Manage Threads permission
     *
     * @deprecated This is the old name for {@apilink ChannelType#PrivateThread}
     */
    ChannelType[ChannelType["GuildPrivateThread"] = 12] = "GuildPrivateThread";
})(ChannelType = exports.ChannelType || (exports.ChannelType = {}));
var VideoQualityMode;
(function (VideoQualityMode) {
    /**
     * Discord chooses the quality for optimal performance
     */
    VideoQualityMode[VideoQualityMode["Auto"] = 1] = "Auto";
    /**
     * 720p
     */
    VideoQualityMode[VideoQualityMode["Full"] = 2] = "Full";
})(VideoQualityMode = exports.VideoQualityMode || (exports.VideoQualityMode = {}));
/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-types
 */
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Default"] = 0] = "Default";
    MessageType[MessageType["RecipientAdd"] = 1] = "RecipientAdd";
    MessageType[MessageType["RecipientRemove"] = 2] = "RecipientRemove";
    MessageType[MessageType["Call"] = 3] = "Call";
    MessageType[MessageType["ChannelNameChange"] = 4] = "ChannelNameChange";
    MessageType[MessageType["ChannelIconChange"] = 5] = "ChannelIconChange";
    MessageType[MessageType["ChannelPinnedMessage"] = 6] = "ChannelPinnedMessage";
    MessageType[MessageType["UserJoin"] = 7] = "UserJoin";
    MessageType[MessageType["GuildBoost"] = 8] = "GuildBoost";
    MessageType[MessageType["GuildBoostTier1"] = 9] = "GuildBoostTier1";
    MessageType[MessageType["GuildBoostTier2"] = 10] = "GuildBoostTier2";
    MessageType[MessageType["GuildBoostTier3"] = 11] = "GuildBoostTier3";
    MessageType[MessageType["ChannelFollowAdd"] = 12] = "ChannelFollowAdd";
    MessageType[MessageType["GuildDiscoveryDisqualified"] = 14] = "GuildDiscoveryDisqualified";
    MessageType[MessageType["GuildDiscoveryRequalified"] = 15] = "GuildDiscoveryRequalified";
    MessageType[MessageType["GuildDiscoveryGracePeriodInitialWarning"] = 16] = "GuildDiscoveryGracePeriodInitialWarning";
    MessageType[MessageType["GuildDiscoveryGracePeriodFinalWarning"] = 17] = "GuildDiscoveryGracePeriodFinalWarning";
    MessageType[MessageType["ThreadCreated"] = 18] = "ThreadCreated";
    MessageType[MessageType["Reply"] = 19] = "Reply";
    MessageType[MessageType["ChatInputCommand"] = 20] = "ChatInputCommand";
    MessageType[MessageType["ThreadStarterMessage"] = 21] = "ThreadStarterMessage";
    MessageType[MessageType["GuildInviteReminder"] = 22] = "GuildInviteReminder";
    MessageType[MessageType["ContextMenuCommand"] = 23] = "ContextMenuCommand";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-activity-types
 */
var MessageActivityType;
(function (MessageActivityType) {
    MessageActivityType[MessageActivityType["Join"] = 1] = "Join";
    MessageActivityType[MessageActivityType["Spectate"] = 2] = "Spectate";
    MessageActivityType[MessageActivityType["Listen"] = 3] = "Listen";
    MessageActivityType[MessageActivityType["JoinRequest"] = 5] = "JoinRequest";
})(MessageActivityType = exports.MessageActivityType || (exports.MessageActivityType = {}));
/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-flags
 */
var MessageFlags;
(function (MessageFlags) {
    /**
     * This message has been published to subscribed channels (via Channel Following)
     */
    MessageFlags[MessageFlags["Crossposted"] = 1] = "Crossposted";
    /**
     * This message originated from a message in another channel (via Channel Following)
     */
    MessageFlags[MessageFlags["IsCrosspost"] = 2] = "IsCrosspost";
    /**
     * Do not include any embeds when serializing this message
     */
    MessageFlags[MessageFlags["SuppressEmbeds"] = 4] = "SuppressEmbeds";
    /**
     * The source message for this crosspost has been deleted (via Channel Following)
     */
    MessageFlags[MessageFlags["SourceMessageDeleted"] = 8] = "SourceMessageDeleted";
    /**
     * This message came from the urgent message system
     */
    MessageFlags[MessageFlags["Urgent"] = 16] = "Urgent";
    /**
     * This message has an associated thread, which shares its id
     */
    MessageFlags[MessageFlags["HasThread"] = 32] = "HasThread";
    /**
     * This message is only visible to the user who invoked the Interaction
     */
    MessageFlags[MessageFlags["Ephemeral"] = 64] = "Ephemeral";
    /**
     * This message is an Interaction Response and the bot is "thinking"
     */
    MessageFlags[MessageFlags["Loading"] = 128] = "Loading";
    /**
     * This message failed to mention some roles and add their members to the thread
     */
    MessageFlags[MessageFlags["FailedToMentionSomeRolesInThread"] = 256] = "FailedToMentionSomeRolesInThread";
})(MessageFlags = exports.MessageFlags || (exports.MessageFlags = {}));
var OverwriteType;
(function (OverwriteType) {
    OverwriteType[OverwriteType["Role"] = 0] = "Role";
    OverwriteType[OverwriteType["Member"] = 1] = "Member";
})(OverwriteType = exports.OverwriteType || (exports.OverwriteType = {}));
var ThreadAutoArchiveDuration;
(function (ThreadAutoArchiveDuration) {
    ThreadAutoArchiveDuration[ThreadAutoArchiveDuration["OneHour"] = 60] = "OneHour";
    ThreadAutoArchiveDuration[ThreadAutoArchiveDuration["OneDay"] = 1440] = "OneDay";
    ThreadAutoArchiveDuration[ThreadAutoArchiveDuration["ThreeDays"] = 4320] = "ThreeDays";
    ThreadAutoArchiveDuration[ThreadAutoArchiveDuration["OneWeek"] = 10080] = "OneWeek";
})(ThreadAutoArchiveDuration = exports.ThreadAutoArchiveDuration || (exports.ThreadAutoArchiveDuration = {}));
var ThreadMemberFlags;
(function (ThreadMemberFlags) {
})(ThreadMemberFlags = exports.ThreadMemberFlags || (exports.ThreadMemberFlags = {}));
/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-types
 * @deprecated *Embed types should be considered deprecated and might be removed in a future API version*
 */
var EmbedType;
(function (EmbedType) {
    /**
     * Generic embed rendered from embed attributes
     */
    EmbedType["Rich"] = "rich";
    /**
     * Image embed
     */
    EmbedType["Image"] = "image";
    /**
     * Video embed
     */
    EmbedType["Video"] = "video";
    /**
     * Animated gif image embed rendered as a video embed
     */
    EmbedType["GIFV"] = "gifv";
    /**
     * Article embed
     */
    EmbedType["Article"] = "article";
    /**
     * Link embed
     */
    EmbedType["Link"] = "link";
})(EmbedType = exports.EmbedType || (exports.EmbedType = {}));
/**
 * https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types
 */
var AllowedMentionsTypes;
(function (AllowedMentionsTypes) {
    /**
     * Controls @everyone and @here mentions
     */
    AllowedMentionsTypes["Everyone"] = "everyone";
    /**
     * Controls role mentions
     */
    AllowedMentionsTypes["Role"] = "roles";
    /**
     * Controls user mentions
     */
    AllowedMentionsTypes["User"] = "users";
})(AllowedMentionsTypes = exports.AllowedMentionsTypes || (exports.AllowedMentionsTypes = {}));
/**
 * https://discord.com/developers/docs/interactions/message-components#component-object-component-types
 */
var ComponentType;
(function (ComponentType) {
    /**
     * Action Row component
     */
    ComponentType[ComponentType["ActionRow"] = 1] = "ActionRow";
    /**
     * Button component
     */
    ComponentType[ComponentType["Button"] = 2] = "Button";
    /**
     * Select Menu component
     */
    ComponentType[ComponentType["SelectMenu"] = 3] = "SelectMenu";
    /**
     * Text Input component
     */
    ComponentType[ComponentType["TextInput"] = 4] = "TextInput";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-styles
 */
var ButtonStyle;
(function (ButtonStyle) {
    ButtonStyle[ButtonStyle["Primary"] = 1] = "Primary";
    ButtonStyle[ButtonStyle["Secondary"] = 2] = "Secondary";
    ButtonStyle[ButtonStyle["Success"] = 3] = "Success";
    ButtonStyle[ButtonStyle["Danger"] = 4] = "Danger";
    ButtonStyle[ButtonStyle["Link"] = 5] = "Link";
})(ButtonStyle = exports.ButtonStyle || (exports.ButtonStyle = {}));
/**
 * https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles
 */
var TextInputStyle;
(function (TextInputStyle) {
    TextInputStyle[TextInputStyle["Short"] = 1] = "Short";
    TextInputStyle[TextInputStyle["Paragraph"] = 2] = "Paragraph";
})(TextInputStyle = exports.TextInputStyle || (exports.TextInputStyle = {}));
/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
 */
var ChannelFlags;
(function (ChannelFlags) {
    /**
     * This thread is pinned to the top of its parent forum channel
     */
    ChannelFlags[ChannelFlags["Pinned"] = 2] = "Pinned";
    /**
     * Whether a tag is required to be specified when creating a thread in a forum channel.
     * Tags are specified in the `applied_tags` field
     */
    ChannelFlags[ChannelFlags["RequireTag"] = 16] = "RequireTag";
})(ChannelFlags = exports.ChannelFlags || (exports.ChannelFlags = {}));
//# sourceMappingURL=channel.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/emoji.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/emoji.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/resources/emoji
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/gateway.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/gateway.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/topics/gateway
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityFlags = exports.ActivityType = exports.ActivityPlatform = exports.PresenceUpdateStatus = void 0;
var PresenceUpdateStatus;
(function (PresenceUpdateStatus) {
    PresenceUpdateStatus["Online"] = "online";
    PresenceUpdateStatus["DoNotDisturb"] = "dnd";
    PresenceUpdateStatus["Idle"] = "idle";
    /**
     * Invisible and shown as offline
     */
    PresenceUpdateStatus["Invisible"] = "invisible";
    PresenceUpdateStatus["Offline"] = "offline";
})(PresenceUpdateStatus = exports.PresenceUpdateStatus || (exports.PresenceUpdateStatus = {}));
/**
 * @unstable This enum is currently not documented by Discord but has known values which we will try to keep up to date.
 * Values might be added or removed without a major version bump.
 */
var ActivityPlatform;
(function (ActivityPlatform) {
    ActivityPlatform["Desktop"] = "desktop";
    ActivityPlatform["Xbox"] = "xbox";
    ActivityPlatform["Samsung"] = "samsung";
    ActivityPlatform["IOS"] = "ios";
    ActivityPlatform["Android"] = "android";
    ActivityPlatform["Embedded"] = "embedded";
    ActivityPlatform["PS4"] = "ps4";
    ActivityPlatform["PS5"] = "ps5";
})(ActivityPlatform = exports.ActivityPlatform || (exports.ActivityPlatform = {}));
/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-types
 */
var ActivityType;
(function (ActivityType) {
    /**
     * Playing {game}
     */
    ActivityType[ActivityType["Playing"] = 0] = "Playing";
    /**
     * Streaming {details}
     */
    ActivityType[ActivityType["Streaming"] = 1] = "Streaming";
    /**
     * Listening to {name}
     */
    ActivityType[ActivityType["Listening"] = 2] = "Listening";
    /**
     * Watching {details}
     */
    ActivityType[ActivityType["Watching"] = 3] = "Watching";
    /**
     * {emoji} {details}
     */
    ActivityType[ActivityType["Custom"] = 4] = "Custom";
    /**
     * Competing in {name}
     */
    ActivityType[ActivityType["Competing"] = 5] = "Competing";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags
 */
var ActivityFlags;
(function (ActivityFlags) {
    ActivityFlags[ActivityFlags["Instance"] = 1] = "Instance";
    ActivityFlags[ActivityFlags["Join"] = 2] = "Join";
    ActivityFlags[ActivityFlags["Spectate"] = 4] = "Spectate";
    ActivityFlags[ActivityFlags["JoinRequest"] = 8] = "JoinRequest";
    ActivityFlags[ActivityFlags["Sync"] = 16] = "Sync";
    ActivityFlags[ActivityFlags["Play"] = 32] = "Play";
    ActivityFlags[ActivityFlags["PartyPrivacyFriends"] = 64] = "PartyPrivacyFriends";
    ActivityFlags[ActivityFlags["PartyPrivacyVoiceChannel"] = 128] = "PartyPrivacyVoiceChannel";
    ActivityFlags[ActivityFlags["Embedded"] = 256] = "Embedded";
})(ActivityFlags = exports.ActivityFlags || (exports.ActivityFlags = {}));
//# sourceMappingURL=gateway.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/guild.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/guild.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/resources/guild
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MembershipScreeningFieldType = exports.GuildWidgetStyle = exports.IntegrationExpireBehavior = exports.GuildFeature = exports.GuildSystemChannelFlags = exports.GuildHubType = exports.GuildPremiumTier = exports.GuildVerificationLevel = exports.GuildNSFWLevel = exports.GuildMFALevel = exports.GuildExplicitContentFilter = exports.GuildDefaultMessageNotifications = void 0;
/**
 * https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
var GuildDefaultMessageNotifications;
(function (GuildDefaultMessageNotifications) {
    GuildDefaultMessageNotifications[GuildDefaultMessageNotifications["AllMessages"] = 0] = "AllMessages";
    GuildDefaultMessageNotifications[GuildDefaultMessageNotifications["OnlyMentions"] = 1] = "OnlyMentions";
})(GuildDefaultMessageNotifications = exports.GuildDefaultMessageNotifications || (exports.GuildDefaultMessageNotifications = {}));
/**
 * https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
 */
var GuildExplicitContentFilter;
(function (GuildExplicitContentFilter) {
    GuildExplicitContentFilter[GuildExplicitContentFilter["Disabled"] = 0] = "Disabled";
    GuildExplicitContentFilter[GuildExplicitContentFilter["MembersWithoutRoles"] = 1] = "MembersWithoutRoles";
    GuildExplicitContentFilter[GuildExplicitContentFilter["AllMembers"] = 2] = "AllMembers";
})(GuildExplicitContentFilter = exports.GuildExplicitContentFilter || (exports.GuildExplicitContentFilter = {}));
/**
 * https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
 */
var GuildMFALevel;
(function (GuildMFALevel) {
    GuildMFALevel[GuildMFALevel["None"] = 0] = "None";
    GuildMFALevel[GuildMFALevel["Elevated"] = 1] = "Elevated";
})(GuildMFALevel = exports.GuildMFALevel || (exports.GuildMFALevel = {}));
/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
 */
var GuildNSFWLevel;
(function (GuildNSFWLevel) {
    GuildNSFWLevel[GuildNSFWLevel["Default"] = 0] = "Default";
    GuildNSFWLevel[GuildNSFWLevel["Explicit"] = 1] = "Explicit";
    GuildNSFWLevel[GuildNSFWLevel["Safe"] = 2] = "Safe";
    GuildNSFWLevel[GuildNSFWLevel["AgeRestricted"] = 3] = "AgeRestricted";
})(GuildNSFWLevel = exports.GuildNSFWLevel || (exports.GuildNSFWLevel = {}));
/**
 * https://discord.com/developers/docs/resources/guild#guild-object-verification-level
 */
var GuildVerificationLevel;
(function (GuildVerificationLevel) {
    /**
     * Unrestricted
     */
    GuildVerificationLevel[GuildVerificationLevel["None"] = 0] = "None";
    /**
     * Must have verified email on account
     */
    GuildVerificationLevel[GuildVerificationLevel["Low"] = 1] = "Low";
    /**
     * Must be registered on Discord for longer than 5 minutes
     */
    GuildVerificationLevel[GuildVerificationLevel["Medium"] = 2] = "Medium";
    /**
     * Must be a member of the guild for longer than 10 minutes
     */
    GuildVerificationLevel[GuildVerificationLevel["High"] = 3] = "High";
    /**
     * Must have a verified phone number
     */
    GuildVerificationLevel[GuildVerificationLevel["VeryHigh"] = 4] = "VeryHigh";
})(GuildVerificationLevel = exports.GuildVerificationLevel || (exports.GuildVerificationLevel = {}));
/**
 * https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
 */
var GuildPremiumTier;
(function (GuildPremiumTier) {
    GuildPremiumTier[GuildPremiumTier["None"] = 0] = "None";
    GuildPremiumTier[GuildPremiumTier["Tier1"] = 1] = "Tier1";
    GuildPremiumTier[GuildPremiumTier["Tier2"] = 2] = "Tier2";
    GuildPremiumTier[GuildPremiumTier["Tier3"] = 3] = "Tier3";
})(GuildPremiumTier = exports.GuildPremiumTier || (exports.GuildPremiumTier = {}));
var GuildHubType;
(function (GuildHubType) {
    GuildHubType[GuildHubType["Default"] = 0] = "Default";
    GuildHubType[GuildHubType["HighSchool"] = 1] = "HighSchool";
    GuildHubType[GuildHubType["College"] = 2] = "College";
})(GuildHubType = exports.GuildHubType || (exports.GuildHubType = {}));
/**
 * https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
 */
var GuildSystemChannelFlags;
(function (GuildSystemChannelFlags) {
    /**
     * Suppress member join notifications
     */
    GuildSystemChannelFlags[GuildSystemChannelFlags["SuppressJoinNotifications"] = 1] = "SuppressJoinNotifications";
    /**
     * Suppress server boost notifications
     */
    GuildSystemChannelFlags[GuildSystemChannelFlags["SuppressPremiumSubscriptions"] = 2] = "SuppressPremiumSubscriptions";
    /**
     * Suppress server setup tips
     */
    GuildSystemChannelFlags[GuildSystemChannelFlags["SuppressGuildReminderNotifications"] = 4] = "SuppressGuildReminderNotifications";
    /**
     * Hide member join sticker reply buttons
     */
    GuildSystemChannelFlags[GuildSystemChannelFlags["SuppressJoinNotificationReplies"] = 8] = "SuppressJoinNotificationReplies";
})(GuildSystemChannelFlags = exports.GuildSystemChannelFlags || (exports.GuildSystemChannelFlags = {}));
/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
var GuildFeature;
(function (GuildFeature) {
    /**
     * Guild has access to set an animated guild banner image
     */
    GuildFeature["AnimatedBanner"] = "ANIMATED_BANNER";
    /**
     * Guild has access to set an animated guild icon
     */
    GuildFeature["AnimatedIcon"] = "ANIMATED_ICON";
    /**
     * Guild has access to set a guild banner image
     */
    GuildFeature["Banner"] = "BANNER";
    /**
     * Guild can enable welcome screen, Membership Screening and discovery, and receives community updates
     */
    GuildFeature["Community"] = "COMMUNITY";
    /**
     * Guild is able to be discovered in the directory
     */
    GuildFeature["Discoverable"] = "DISCOVERABLE";
    /**
     * Guild is able to be featured in the directory
     */
    GuildFeature["Featurable"] = "FEATURABLE";
    /**
     * Guild is listed in a directory channel
     */
    GuildFeature["HasDirectoryEntry"] = "HAS_DIRECTORY_ENTRY";
    /**
     * Guild is a Student Hub
     *
     * See https://support.discord.com/hc/en-us/articles/4406046651927-Discord-Student-Hubs-FAQ
     *
     * @unstable This feature is currently not documented by Discord, but has known value
     */
    GuildFeature["Hub"] = "HUB";
    /**
     * Guild has disabled invite usage, preventing users from joining
     */
    GuildFeature["InvitesDisabled"] = "INVITES_DISABLED";
    /**
     * Guild has access to set an invite splash background
     */
    GuildFeature["InviteSplash"] = "INVITE_SPLASH";
    /**
     * Guild is in a Student Hub
     *
     * See https://support.discord.com/hc/en-us/articles/4406046651927-Discord-Student-Hubs-FAQ
     *
     * @unstable This feature is currently not documented by Discord, but has known value
     */
    GuildFeature["LinkedToHub"] = "LINKED_TO_HUB";
    /**
     * Guild has enabled Membership Screening
     */
    GuildFeature["MemberVerificationGateEnabled"] = "MEMBER_VERIFICATION_GATE_ENABLED";
    /**
     * Guild has enabled monetization
     */
    GuildFeature["MonetizationEnabled"] = "MONETIZATION_ENABLED";
    /**
     * Guild has increased custom sticker slots
     */
    GuildFeature["MoreStickers"] = "MORE_STICKERS";
    /**
     * Guild has access to create news channels
     */
    GuildFeature["News"] = "NEWS";
    /**
     * Guild is partnered
     */
    GuildFeature["Partnered"] = "PARTNERED";
    /**
     * Guild can be previewed before joining via Membership Screening or the directory
     */
    GuildFeature["PreviewEnabled"] = "PREVIEW_ENABLED";
    /**
     * Guild has access to create private threads
     */
    GuildFeature["PrivateThreads"] = "PRIVATE_THREADS";
    GuildFeature["RelayEnabled"] = "RELAY_ENABLED";
    /**
     * Guild is able to set role icons
     */
    GuildFeature["RoleIcons"] = "ROLE_ICONS";
    /**
     * Guild has enabled ticketed events
     */
    GuildFeature["TicketedEventsEnabled"] = "TICKETED_EVENTS_ENABLED";
    /**
     * Guild has access to set a vanity URL
     */
    GuildFeature["VanityURL"] = "VANITY_URL";
    /**
     * Guild is verified
     */
    GuildFeature["Verified"] = "VERIFIED";
    /**
     * Guild has access to set 384kbps bitrate in voice (previously VIP voice servers)
     */
    GuildFeature["VIPRegions"] = "VIP_REGIONS";
    /**
     * Guild has enabled the welcome screen
     */
    GuildFeature["WelcomeScreenEnabled"] = "WELCOME_SCREEN_ENABLED";
})(GuildFeature = exports.GuildFeature || (exports.GuildFeature = {}));
/**
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
 */
var IntegrationExpireBehavior;
(function (IntegrationExpireBehavior) {
    IntegrationExpireBehavior[IntegrationExpireBehavior["RemoveRole"] = 0] = "RemoveRole";
    IntegrationExpireBehavior[IntegrationExpireBehavior["Kick"] = 1] = "Kick";
})(IntegrationExpireBehavior = exports.IntegrationExpireBehavior || (exports.IntegrationExpireBehavior = {}));
/**
 * https://discord.com/developers/docs/resources/guild#get-guild-widget-image-widget-style-options
 */
var GuildWidgetStyle;
(function (GuildWidgetStyle) {
    /**
     * Shield style widget with Discord icon and guild members online count
     */
    GuildWidgetStyle["Shield"] = "shield";
    /**
     * Large image with guild icon, name and online count. "POWERED BY DISCORD" as the footer of the widget
     */
    GuildWidgetStyle["Banner1"] = "banner1";
    /**
     * Smaller widget style with guild icon, name and online count. Split on the right with Discord logo
     */
    GuildWidgetStyle["Banner2"] = "banner2";
    /**
     * Large image with guild icon, name and online count. In the footer, Discord logo on the left and "Chat Now" on the right
     */
    GuildWidgetStyle["Banner3"] = "banner3";
    /**
     * Large Discord logo at the top of the widget. Guild icon, name and online count in the middle portion of the widget
     * and a "JOIN MY SERVER" button at the bottom
     */
    GuildWidgetStyle["Banner4"] = "banner4";
})(GuildWidgetStyle = exports.GuildWidgetStyle || (exports.GuildWidgetStyle = {}));
var MembershipScreeningFieldType;
(function (MembershipScreeningFieldType) {
    /**
     * Server Rules
     */
    MembershipScreeningFieldType["Terms"] = "TERMS";
})(MembershipScreeningFieldType = exports.MembershipScreeningFieldType || (exports.MembershipScreeningFieldType = {}));
//# sourceMappingURL=guild.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js":
/*!****************************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GuildScheduledEventPrivacyLevel = exports.GuildScheduledEventStatus = exports.GuildScheduledEventEntityType = void 0;
/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types
 */
var GuildScheduledEventEntityType;
(function (GuildScheduledEventEntityType) {
    GuildScheduledEventEntityType[GuildScheduledEventEntityType["StageInstance"] = 1] = "StageInstance";
    GuildScheduledEventEntityType[GuildScheduledEventEntityType["Voice"] = 2] = "Voice";
    GuildScheduledEventEntityType[GuildScheduledEventEntityType["External"] = 3] = "External";
})(GuildScheduledEventEntityType = exports.GuildScheduledEventEntityType || (exports.GuildScheduledEventEntityType = {}));
/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status
 */
var GuildScheduledEventStatus;
(function (GuildScheduledEventStatus) {
    GuildScheduledEventStatus[GuildScheduledEventStatus["Scheduled"] = 1] = "Scheduled";
    GuildScheduledEventStatus[GuildScheduledEventStatus["Active"] = 2] = "Active";
    GuildScheduledEventStatus[GuildScheduledEventStatus["Completed"] = 3] = "Completed";
    GuildScheduledEventStatus[GuildScheduledEventStatus["Canceled"] = 4] = "Canceled";
})(GuildScheduledEventStatus = exports.GuildScheduledEventStatus || (exports.GuildScheduledEventStatus = {}));
/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level
 */
var GuildScheduledEventPrivacyLevel;
(function (GuildScheduledEventPrivacyLevel) {
    /**
     * The scheduled event is only accessible to guild members
     */
    GuildScheduledEventPrivacyLevel[GuildScheduledEventPrivacyLevel["GuildOnly"] = 2] = "GuildOnly";
})(GuildScheduledEventPrivacyLevel = exports.GuildScheduledEventPrivacyLevel || (exports.GuildScheduledEventPrivacyLevel = {}));
//# sourceMappingURL=guildScheduledEvent.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ../common */ "./node_modules/discord-api-types/payloads/common.js"), exports);
__exportStar(__webpack_require__(/*! ./application */ "./node_modules/discord-api-types/payloads/v10/application.js"), exports);
__exportStar(__webpack_require__(/*! ./auditLog */ "./node_modules/discord-api-types/payloads/v10/auditLog.js"), exports);
__exportStar(__webpack_require__(/*! ./channel */ "./node_modules/discord-api-types/payloads/v10/channel.js"), exports);
__exportStar(__webpack_require__(/*! ./emoji */ "./node_modules/discord-api-types/payloads/v10/emoji.js"), exports);
__exportStar(__webpack_require__(/*! ./gateway */ "./node_modules/discord-api-types/payloads/v10/gateway.js"), exports);
__exportStar(__webpack_require__(/*! ./guild */ "./node_modules/discord-api-types/payloads/v10/guild.js"), exports);
__exportStar(__webpack_require__(/*! ./guildScheduledEvent */ "./node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js"), exports);
__exportStar(__webpack_require__(/*! ./interactions */ "./node_modules/discord-api-types/payloads/v10/interactions.js"), exports);
__exportStar(__webpack_require__(/*! ./invite */ "./node_modules/discord-api-types/payloads/v10/invite.js"), exports);
__exportStar(__webpack_require__(/*! ./oauth2 */ "./node_modules/discord-api-types/payloads/v10/oauth2.js"), exports);
__exportStar(__webpack_require__(/*! ./permissions */ "./node_modules/discord-api-types/payloads/v10/permissions.js"), exports);
__exportStar(__webpack_require__(/*! ./stageInstance */ "./node_modules/discord-api-types/payloads/v10/stageInstance.js"), exports);
__exportStar(__webpack_require__(/*! ./sticker */ "./node_modules/discord-api-types/payloads/v10/sticker.js"), exports);
__exportStar(__webpack_require__(/*! ./teams */ "./node_modules/discord-api-types/payloads/v10/teams.js"), exports);
__exportStar(__webpack_require__(/*! ./template */ "./node_modules/discord-api-types/payloads/v10/template.js"), exports);
__exportStar(__webpack_require__(/*! ./user */ "./node_modules/discord-api-types/payloads/v10/user.js"), exports);
__exportStar(__webpack_require__(/*! ./voice */ "./node_modules/discord-api-types/payloads/v10/voice.js"), exports);
__exportStar(__webpack_require__(/*! ./webhook */ "./node_modules/discord-api-types/payloads/v10/webhook.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/interactions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/interactions.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./_interactions/applicationCommands */ "./node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js"), exports);
__exportStar(__webpack_require__(/*! ./_interactions/autocomplete */ "./node_modules/discord-api-types/payloads/v10/_interactions/autocomplete.js"), exports);
__exportStar(__webpack_require__(/*! ./_interactions/base */ "./node_modules/discord-api-types/payloads/v10/_interactions/base.js"), exports);
__exportStar(__webpack_require__(/*! ./_interactions/messageComponents */ "./node_modules/discord-api-types/payloads/v10/_interactions/messageComponents.js"), exports);
__exportStar(__webpack_require__(/*! ./_interactions/modalSubmit */ "./node_modules/discord-api-types/payloads/v10/_interactions/modalSubmit.js"), exports);
__exportStar(__webpack_require__(/*! ./_interactions/ping */ "./node_modules/discord-api-types/payloads/v10/_interactions/ping.js"), exports);
__exportStar(__webpack_require__(/*! ./_interactions/responses */ "./node_modules/discord-api-types/payloads/v10/_interactions/responses.js"), exports);
//# sourceMappingURL=interactions.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/invite.js":
/*!***************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/invite.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/resources/invite
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InviteTargetType = void 0;
/**
 * https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types
 */
var InviteTargetType;
(function (InviteTargetType) {
    InviteTargetType[InviteTargetType["Stream"] = 1] = "Stream";
    InviteTargetType[InviteTargetType["EmbeddedApplication"] = 2] = "EmbeddedApplication";
})(InviteTargetType = exports.InviteTargetType || (exports.InviteTargetType = {}));
//# sourceMappingURL=invite.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/oauth2.js":
/*!***************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/oauth2.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/topics/oauth2
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OAuth2Scopes = void 0;
var OAuth2Scopes;
(function (OAuth2Scopes) {
    /**
     * For oauth2 bots, this puts the bot in the user's selected guild by default
     */
    OAuth2Scopes["Bot"] = "bot";
    /**
     * Allows [/users/@me/connections](https://discord.com/developers/docs/resources/user#get-user-connections)
     * to return linked third-party accounts
     *
     * See https://discord.com/developers/docs/resources/user#get-user-connections
     */
    OAuth2Scopes["Connections"] = "connections";
    /**
     * Allows your app to see information about the user's DMs and group DMs - requires Discord approval
     */
    OAuth2Scopes["DMChannelsRead"] = "dm_channels.read";
    /**
     * Enables [/users/@me](https://discord.com/developers/docs/resources/user#get-current-user) to return an `email`
     *
     * See https://discord.com/developers/docs/resources/user#get-current-user
     */
    OAuth2Scopes["Email"] = "email";
    /**
     * Allows [/users/@me](https://discord.com/developers/docs/resources/user#get-current-user) without `email`
     *
     * See https://discord.com/developers/docs/resources/user#get-current-user
     */
    OAuth2Scopes["Identify"] = "identify";
    /**
     * Allows [/users/@me/guilds](https://discord.com/developers/docs/resources/user#get-current-user-guilds)
     * to return basic information about all of a user's guilds
     *
     * See https://discord.com/developers/docs/resources/user#get-current-user-guilds
     */
    OAuth2Scopes["Guilds"] = "guilds";
    /**
     * Allows [/guilds/{guild.id}/members/{user.id}](https://discord.com/developers/docs/resources/guild#add-guild-member)
     * to be used for joining users to a guild
     *
     * See https://discord.com/developers/docs/resources/guild#add-guild-member
     */
    OAuth2Scopes["GuildsJoin"] = "guilds.join";
    /**
     * Allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild
     *
     * See https://discord.com/developers/docs/resources/user#get-current-user-guild-member
     */
    OAuth2Scopes["GuildsMembersRead"] = "guilds.members.read";
    /**
     * Allows your app to join users to a group dm
     *
     * See https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
     */
    OAuth2Scopes["GroupDMJoins"] = "gdm.join";
    /**
     * For local rpc server api access, this allows you to read messages from all client channels
     * (otherwise restricted to channels/guilds your app creates)
     */
    OAuth2Scopes["MessagesRead"] = "messages.read";
    /**
     * For local rpc server access, this allows you to control a user's local Discord client - requires Discord approval
     */
    OAuth2Scopes["RPC"] = "rpc";
    /**
     * For local rpc server api access, this allows you to receive notifications pushed out to the user - requires Discord approval
     */
    OAuth2Scopes["RPCNotificationsRead"] = "rpc.notifications.read";
    /**
     * This generates a webhook that is returned in the oauth token response for authorization code grants
     */
    OAuth2Scopes["WebhookIncoming"] = "webhook.incoming";
    /**
     * Allows your app to connect to voice on user's behalf and see all the voice members - requires Discord approval
     */
    OAuth2Scopes["Voice"] = "voice";
    /**
     * Allows your app to upload/update builds for a user's applications - requires Discord approval
     */
    OAuth2Scopes["ApplicationsBuildsUpload"] = "applications.builds.upload";
    /**
     * Allows your app to read build data for a user's applications
     */
    OAuth2Scopes["ApplicationsBuildsRead"] = "applications.builds.read";
    /**
     * Allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications
     */
    OAuth2Scopes["ApplicationsStoreUpdate"] = "applications.store.update";
    /**
     * Allows your app to read entitlements for a user's applications
     */
    OAuth2Scopes["ApplicationsEntitlements"] = "applications.entitlements";
    /**
     * Allows your app to know a user's friends and implicit relationships - requires Discord approval
     */
    OAuth2Scopes["RelationshipsRead"] = "relationships.read";
    /**
     * Allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval
     */
    OAuth2Scopes["ActivitiesRead"] = "activities.read";
    /**
     * Allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)
     *
     * See https://discord.com/developers/docs/game-sdk/activities
     */
    OAuth2Scopes["ActivitiesWrite"] = "activities.write";
    /**
     * Allows your app to use Application Commands in a guild
     *
     * See https://discord.com/developers/docs/interactions/application-commands
     */
    OAuth2Scopes["ApplicationsCommands"] = "applications.commands";
    /**
     * Allows your app to update its Application Commands via this bearer token - client credentials grant only
     *
     * See https://discord.com/developers/docs/interactions/application-commands
     */
    OAuth2Scopes["ApplicationsCommandsUpdate"] = "applications.commands.update";
    /**
     * Allows your app to update permissions for its commands using a Bearer token - client credentials grant only
     *
     * See https://discord.com/developers/docs/interactions/application-commands
     */
    OAuth2Scopes["ApplicationCommandsPermissionsUpdate"] = "applications.commands.permissions.update";
})(OAuth2Scopes = exports.OAuth2Scopes || (exports.OAuth2Scopes = {}));
//# sourceMappingURL=oauth2.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/permissions.js":
/*!********************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/permissions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/topics/permissions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=permissions.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/stageInstance.js":
/*!**********************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/stageInstance.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StageInstancePrivacyLevel = void 0;
/**
 * https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level
 */
var StageInstancePrivacyLevel;
(function (StageInstancePrivacyLevel) {
    /**
     * The stage instance is visible publicly, such as on stage discovery
     */
    StageInstancePrivacyLevel[StageInstancePrivacyLevel["Public"] = 1] = "Public";
    /**
     * The stage instance is visible to only guild members
     */
    StageInstancePrivacyLevel[StageInstancePrivacyLevel["GuildOnly"] = 2] = "GuildOnly";
})(StageInstancePrivacyLevel = exports.StageInstancePrivacyLevel || (exports.StageInstancePrivacyLevel = {}));
//# sourceMappingURL=stageInstance.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/sticker.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/sticker.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/resources/sticker
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StickerFormatType = exports.StickerType = void 0;
/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types
 */
var StickerType;
(function (StickerType) {
    /**
     * An official sticker in a pack, part of Nitro or in a removed purchasable pack
     */
    StickerType[StickerType["Standard"] = 1] = "Standard";
    /**
     * A sticker uploaded to a Boosted guild for the guild's members
     */
    StickerType[StickerType["Guild"] = 2] = "Guild";
})(StickerType = exports.StickerType || (exports.StickerType = {}));
/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types
 */
var StickerFormatType;
(function (StickerFormatType) {
    StickerFormatType[StickerFormatType["PNG"] = 1] = "PNG";
    StickerFormatType[StickerFormatType["APNG"] = 2] = "APNG";
    StickerFormatType[StickerFormatType["Lottie"] = 3] = "Lottie";
})(StickerFormatType = exports.StickerFormatType || (exports.StickerFormatType = {}));
//# sourceMappingURL=sticker.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/teams.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/teams.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/topics/teams
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamMemberMembershipState = void 0;
/**
 * https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
 */
var TeamMemberMembershipState;
(function (TeamMemberMembershipState) {
    TeamMemberMembershipState[TeamMemberMembershipState["Invited"] = 1] = "Invited";
    TeamMemberMembershipState[TeamMemberMembershipState["Accepted"] = 2] = "Accepted";
})(TeamMemberMembershipState = exports.TeamMemberMembershipState || (exports.TeamMemberMembershipState = {}));
//# sourceMappingURL=teams.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/template.js":
/*!*****************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/template.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/resources/guild-template
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=template.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/user.js":
/*!*************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/user.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/resources/user
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionVisibility = exports.ConnectionService = exports.UserPremiumType = exports.UserFlags = void 0;
/**
 * https://discord.com/developers/docs/resources/user#user-object-user-flags
 */
var UserFlags;
(function (UserFlags) {
    /**
     * Discord Employee
     */
    UserFlags[UserFlags["Staff"] = 1] = "Staff";
    /**
     * Partnered Server Owner
     */
    UserFlags[UserFlags["Partner"] = 2] = "Partner";
    /**
     * HypeSquad Events Member
     */
    UserFlags[UserFlags["Hypesquad"] = 4] = "Hypesquad";
    /**
     * Bug Hunter Level 1
     */
    UserFlags[UserFlags["BugHunterLevel1"] = 8] = "BugHunterLevel1";
    /**
     * House Bravery Member
     */
    UserFlags[UserFlags["HypeSquadOnlineHouse1"] = 64] = "HypeSquadOnlineHouse1";
    /**
     * House Brilliance Member
     */
    UserFlags[UserFlags["HypeSquadOnlineHouse2"] = 128] = "HypeSquadOnlineHouse2";
    /**
     * House Balance Member
     */
    UserFlags[UserFlags["HypeSquadOnlineHouse3"] = 256] = "HypeSquadOnlineHouse3";
    /**
     * Early Nitro Supporter
     */
    UserFlags[UserFlags["PremiumEarlySupporter"] = 512] = "PremiumEarlySupporter";
    /**
     * User is a [team](https://discord.com/developers/docs/topics/teams)
     */
    UserFlags[UserFlags["TeamPseudoUser"] = 1024] = "TeamPseudoUser";
    /**
     * Bug Hunter Level 2
     */
    UserFlags[UserFlags["BugHunterLevel2"] = 16384] = "BugHunterLevel2";
    /**
     * Verified Bot
     */
    UserFlags[UserFlags["VerifiedBot"] = 65536] = "VerifiedBot";
    /**
     * Early Verified Bot Developer
     */
    UserFlags[UserFlags["VerifiedDeveloper"] = 131072] = "VerifiedDeveloper";
    /**
     * Discord Certified Moderator
     */
    UserFlags[UserFlags["CertifiedModerator"] = 262144] = "CertifiedModerator";
    /**
     * Bot uses only [HTTP interactions](https://discord.com/developers/docs/interactions/receiving-and-responding#receiving-an-interaction) and is shown in the online member list
     */
    UserFlags[UserFlags["BotHTTPInteractions"] = 524288] = "BotHTTPInteractions";
    /**
     * User has been identified as spammer
     *
     * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
     */
    UserFlags[UserFlags["Spammer"] = 1048576] = "Spammer";
    /**
     * User's account has been quarantined based on recent activity
     *
     * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
     */
    UserFlags[UserFlags["Quarantined"] = Math.pow(2, 44)] = "Quarantined";
})(UserFlags = exports.UserFlags || (exports.UserFlags = {}));
/**
 * https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
var UserPremiumType;
(function (UserPremiumType) {
    UserPremiumType[UserPremiumType["None"] = 0] = "None";
    UserPremiumType[UserPremiumType["NitroClassic"] = 1] = "NitroClassic";
    UserPremiumType[UserPremiumType["Nitro"] = 2] = "Nitro";
})(UserPremiumType = exports.UserPremiumType || (exports.UserPremiumType = {}));
var ConnectionService;
(function (ConnectionService) {
    ConnectionService["BattleNet"] = "battlenet";
    ConnectionService["eBay"] = "ebay";
    ConnectionService["EpicGames"] = "epicgames";
    ConnectionService["Facebook"] = "facebook";
    ConnectionService["GitHub"] = "github";
    ConnectionService["LeagueOfLegends"] = "leagueoflegends";
    ConnectionService["PayPal"] = "paypal";
    ConnectionService["PlayStationNetwork"] = "playstation";
    ConnectionService["Reddit"] = "reddit";
    ConnectionService["RiotGames"] = "riotgames";
    ConnectionService["Spotify"] = "spotify";
    ConnectionService["Skype"] = "skype";
    ConnectionService["Steam"] = "steam";
    ConnectionService["Twitch"] = "twitch";
    ConnectionService["Twitter"] = "twitter";
    ConnectionService["Xbox"] = "xbox";
    ConnectionService["YouTube"] = "youtube";
})(ConnectionService = exports.ConnectionService || (exports.ConnectionService = {}));
var ConnectionVisibility;
(function (ConnectionVisibility) {
    /**
     * Invisible to everyone except the user themselves
     */
    ConnectionVisibility[ConnectionVisibility["None"] = 0] = "None";
    /**
     * Visible to everyone
     */
    ConnectionVisibility[ConnectionVisibility["Everyone"] = 1] = "Everyone";
})(ConnectionVisibility = exports.ConnectionVisibility || (exports.ConnectionVisibility = {}));
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/voice.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/voice.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/resources/voice
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=voice.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/payloads/v10/webhook.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord-api-types/payloads/v10/webhook.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Types extracted from https://discord.com/developers/docs/resources/webhook
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebhookType = void 0;
var WebhookType;
(function (WebhookType) {
    /**
     * Incoming Webhooks can post messages to channels with a generated token
     */
    WebhookType[WebhookType["Incoming"] = 1] = "Incoming";
    /**
     * Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels
     */
    WebhookType[WebhookType["ChannelFollower"] = 2] = "ChannelFollower";
    /**
     * Application webhooks are webhooks used with Interactions
     */
    WebhookType[WebhookType["Application"] = 3] = "Application";
})(WebhookType = exports.WebhookType || (exports.WebhookType = {}));
//# sourceMappingURL=webhook.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/discord-api-types/rest/common.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Locale = exports.RESTJSONErrorCodes = void 0;
/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes
 */
var RESTJSONErrorCodes;
(function (RESTJSONErrorCodes) {
    RESTJSONErrorCodes[RESTJSONErrorCodes["GeneralError"] = 0] = "GeneralError";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownAccount"] = 10001] = "UnknownAccount";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownApplication"] = 10002] = "UnknownApplication";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownChannel"] = 10003] = "UnknownChannel";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownGuild"] = 10004] = "UnknownGuild";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownIntegration"] = 10005] = "UnknownIntegration";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownInvite"] = 10006] = "UnknownInvite";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownMember"] = 10007] = "UnknownMember";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownMessage"] = 10008] = "UnknownMessage";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownPermissionOverwrite"] = 10009] = "UnknownPermissionOverwrite";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownProvider"] = 10010] = "UnknownProvider";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownRole"] = 10011] = "UnknownRole";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownToken"] = 10012] = "UnknownToken";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownUser"] = 10013] = "UnknownUser";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownEmoji"] = 10014] = "UnknownEmoji";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownWebhook"] = 10015] = "UnknownWebhook";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownWebhookService"] = 10016] = "UnknownWebhookService";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownSession"] = 10020] = "UnknownSession";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownBan"] = 10026] = "UnknownBan";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownSKU"] = 10027] = "UnknownSKU";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownStoreListing"] = 10028] = "UnknownStoreListing";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownEntitlement"] = 10029] = "UnknownEntitlement";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownBuild"] = 10030] = "UnknownBuild";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownLobby"] = 10031] = "UnknownLobby";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownBranch"] = 10032] = "UnknownBranch";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownStoreDirectoryLayout"] = 10033] = "UnknownStoreDirectoryLayout";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownRedistributable"] = 10036] = "UnknownRedistributable";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownGiftCode"] = 10038] = "UnknownGiftCode";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownStream"] = 10049] = "UnknownStream";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownPremiumServerSubscribeCooldown"] = 10050] = "UnknownPremiumServerSubscribeCooldown";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownGuildTemplate"] = 10057] = "UnknownGuildTemplate";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownDiscoverableServerCategory"] = 10059] = "UnknownDiscoverableServerCategory";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownSticker"] = 10060] = "UnknownSticker";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownInteraction"] = 10062] = "UnknownInteraction";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownApplicationCommand"] = 10063] = "UnknownApplicationCommand";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownVoiceState"] = 10065] = "UnknownVoiceState";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownApplicationCommandPermissions"] = 10066] = "UnknownApplicationCommandPermissions";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownStageInstance"] = 10067] = "UnknownStageInstance";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownGuildMemberVerificationForm"] = 10068] = "UnknownGuildMemberVerificationForm";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownGuildWelcomeScreen"] = 10069] = "UnknownGuildWelcomeScreen";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownGuildScheduledEvent"] = 10070] = "UnknownGuildScheduledEvent";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownGuildScheduledEventUser"] = 10071] = "UnknownGuildScheduledEventUser";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnknownTag"] = 10087] = "UnknownTag";
    RESTJSONErrorCodes[RESTJSONErrorCodes["BotsCannotUseThisEndpoint"] = 20001] = "BotsCannotUseThisEndpoint";
    RESTJSONErrorCodes[RESTJSONErrorCodes["OnlyBotsCanUseThisEndpoint"] = 20002] = "OnlyBotsCanUseThisEndpoint";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ExplicitContentCannotBeSentToTheDesiredRecipient"] = 20009] = "ExplicitContentCannotBeSentToTheDesiredRecipient";
    RESTJSONErrorCodes[RESTJSONErrorCodes["NotAuthorizedToPerformThisActionOnThisApplication"] = 20012] = "NotAuthorizedToPerformThisActionOnThisApplication";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ActionCannotBePerformedDueToSlowmodeRateLimit"] = 20016] = "ActionCannotBePerformedDueToSlowmodeRateLimit";
    RESTJSONErrorCodes[RESTJSONErrorCodes["TheMazeIsntMeantForYou"] = 20017] = "TheMazeIsntMeantForYou";
    RESTJSONErrorCodes[RESTJSONErrorCodes["OnlyTheOwnerOfThisAccountCanPerformThisAction"] = 20018] = "OnlyTheOwnerOfThisAccountCanPerformThisAction";
    RESTJSONErrorCodes[RESTJSONErrorCodes["AnnouncementEditLimitExceeded"] = 20022] = "AnnouncementEditLimitExceeded";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UnderMinimumAge"] = 20024] = "UnderMinimumAge";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ChannelSendRateLimit"] = 20028] = "ChannelSendRateLimit";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ServerSendRateLimit"] = 20029] = "ServerSendRateLimit";
    RESTJSONErrorCodes[RESTJSONErrorCodes["StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords"] = 20031] = "StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords";
    RESTJSONErrorCodes[RESTJSONErrorCodes["GuildPremiumSubscriptionLevelTooLow"] = 20035] = "GuildPremiumSubscriptionLevelTooLow";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfGuildsReached"] = 30001] = "MaximumNumberOfGuildsReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfFriendsReached"] = 30002] = "MaximumNumberOfFriendsReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfPinsReachedForTheChannel"] = 30003] = "MaximumNumberOfPinsReachedForTheChannel";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfRecipientsReached"] = 30004] = "MaximumNumberOfRecipientsReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfGuildRolesReached"] = 30005] = "MaximumNumberOfGuildRolesReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfWebhooksReached"] = 30007] = "MaximumNumberOfWebhooksReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfEmojisReached"] = 30008] = "MaximumNumberOfEmojisReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfReactionsReached"] = 30010] = "MaximumNumberOfReactionsReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfGuildChannelsReached"] = 30013] = "MaximumNumberOfGuildChannelsReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfAttachmentsInAMessageReached"] = 30015] = "MaximumNumberOfAttachmentsInAMessageReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfInvitesReached"] = 30016] = "MaximumNumberOfInvitesReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfAnimatedEmojisReached"] = 30018] = "MaximumNumberOfAnimatedEmojisReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfServerMembersReached"] = 30019] = "MaximumNumberOfServerMembersReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfServerCategoriesReached"] = 30030] = "MaximumNumberOfServerCategoriesReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["GuildAlreadyHasTemplate"] = 30031] = "GuildAlreadyHasTemplate";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfApplicationCommandsReached"] = 30032] = "MaximumNumberOfApplicationCommandsReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumThreadParticipantsReached"] = 30033] = "MaximumThreadParticipantsReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumDailyApplicationCommandCreatesReached"] = 30034] = "MaximumDailyApplicationCommandCreatesReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfNonGuildMemberBansHasBeenExceeded"] = 30035] = "MaximumNumberOfNonGuildMemberBansHasBeenExceeded";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfBanFetchesHasBeenReached"] = 30037] = "MaximumNumberOfBanFetchesHasBeenReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfUncompletedGuildScheduledEventsReached"] = 30038] = "MaximumNumberOfUncompletedGuildScheduledEventsReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfStickersReached"] = 30039] = "MaximumNumberOfStickersReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfPruneRequestsHasBeenReached"] = 30040] = "MaximumNumberOfPruneRequestsHasBeenReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached"] = 30042] = "MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfEditsToMessagesOlderThanOneHourReached"] = 30046] = "MaximumNumberOfEditsToMessagesOlderThanOneHourReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfPinnedThreadsInForumHasBeenReached"] = 30047] = "MaximumNumberOfPinnedThreadsInForumHasBeenReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumNumberOfTagsInForumHasBeenReached"] = 30048] = "MaximumNumberOfTagsInForumHasBeenReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["BitrateIsTooHighForChannelOfThisType"] = 30052] = "BitrateIsTooHighForChannelOfThisType";
    RESTJSONErrorCodes[RESTJSONErrorCodes["Unauthorized"] = 40001] = "Unauthorized";
    RESTJSONErrorCodes[RESTJSONErrorCodes["VerifyYourAccount"] = 40002] = "VerifyYourAccount";
    RESTJSONErrorCodes[RESTJSONErrorCodes["OpeningDirectMessagesTooFast"] = 40003] = "OpeningDirectMessagesTooFast";
    RESTJSONErrorCodes[RESTJSONErrorCodes["SendMessagesHasBeenTemporarilyDisabled"] = 40004] = "SendMessagesHasBeenTemporarilyDisabled";
    RESTJSONErrorCodes[RESTJSONErrorCodes["RequestEntityTooLarge"] = 40005] = "RequestEntityTooLarge";
    RESTJSONErrorCodes[RESTJSONErrorCodes["FeatureTemporarilyDisabledServerSide"] = 40006] = "FeatureTemporarilyDisabledServerSide";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UserBannedFromThisGuild"] = 40007] = "UserBannedFromThisGuild";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ConnectionHasBeenRevoked"] = 40012] = "ConnectionHasBeenRevoked";
    RESTJSONErrorCodes[RESTJSONErrorCodes["TargetUserIsNotConnectedToVoice"] = 40032] = "TargetUserIsNotConnectedToVoice";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ThisMessageWasAlreadyCrossposted"] = 40033] = "ThisMessageWasAlreadyCrossposted";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ApplicationCommandWithThatNameAlreadyExists"] = 40041] = "ApplicationCommandWithThatNameAlreadyExists";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ApplicationInteractionFailedToSend"] = 40043] = "ApplicationInteractionFailedToSend";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotSendAMessageInAForumChannel"] = 40058] = "CannotSendAMessageInAForumChannel";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InteractionHasAlreadyBeenAcknowledged"] = 40060] = "InteractionHasAlreadyBeenAcknowledged";
    RESTJSONErrorCodes[RESTJSONErrorCodes["TagNamesMustBeUnique"] = 40061] = "TagNamesMustBeUnique";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ThereAreNoTagsAvailableThatCanBeSetByNonModerators"] = 40066] = "ThereAreNoTagsAvailableThatCanBeSetByNonModerators";
    RESTJSONErrorCodes[RESTJSONErrorCodes["TagRequiredToCreateAForumPostInThisChannel"] = 40067] = "TagRequiredToCreateAForumPostInThisChannel";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MissingAccess"] = 50001] = "MissingAccess";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidAccountType"] = 50002] = "InvalidAccountType";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotExecuteActionOnDMChannel"] = 50003] = "CannotExecuteActionOnDMChannel";
    RESTJSONErrorCodes[RESTJSONErrorCodes["GuildWidgetDisabled"] = 50004] = "GuildWidgetDisabled";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotEditMessageAuthoredByAnotherUser"] = 50005] = "CannotEditMessageAuthoredByAnotherUser";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotSendAnEmptyMessage"] = 50006] = "CannotSendAnEmptyMessage";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotSendMessagesToThisUser"] = 50007] = "CannotSendMessagesToThisUser";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotSendMessagesInNonTextChannel"] = 50008] = "CannotSendMessagesInNonTextChannel";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ChannelVerificationLevelTooHighForYouToGainAccess"] = 50009] = "ChannelVerificationLevelTooHighForYouToGainAccess";
    RESTJSONErrorCodes[RESTJSONErrorCodes["OAuth2ApplicationDoesNotHaveBot"] = 50010] = "OAuth2ApplicationDoesNotHaveBot";
    RESTJSONErrorCodes[RESTJSONErrorCodes["OAuth2ApplicationLimitReached"] = 50011] = "OAuth2ApplicationLimitReached";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidOAuth2State"] = 50012] = "InvalidOAuth2State";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MissingPermissions"] = 50013] = "MissingPermissions";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidToken"] = 50014] = "InvalidToken";
    RESTJSONErrorCodes[RESTJSONErrorCodes["NoteWasTooLong"] = 50015] = "NoteWasTooLong";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ProvidedTooFewOrTooManyMessagesToDelete"] = 50016] = "ProvidedTooFewOrTooManyMessagesToDelete";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidMFALevel"] = 50017] = "InvalidMFALevel";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MessageCanOnlyBePinnedInTheChannelItWasSentIn"] = 50019] = "MessageCanOnlyBePinnedInTheChannelItWasSentIn";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InviteCodeInvalidOrTaken"] = 50020] = "InviteCodeInvalidOrTaken";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotExecuteActionOnSystemMessage"] = 50021] = "CannotExecuteActionOnSystemMessage";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotExecuteActionOnThisChannelType"] = 50024] = "CannotExecuteActionOnThisChannelType";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidOAuth2AccessToken"] = 50025] = "InvalidOAuth2AccessToken";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MissingRequiredOAuth2Scope"] = 50026] = "MissingRequiredOAuth2Scope";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidWebhookToken"] = 50027] = "InvalidWebhookToken";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidRole"] = 50028] = "InvalidRole";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidRecipients"] = 50033] = "InvalidRecipients";
    RESTJSONErrorCodes[RESTJSONErrorCodes["OneOfTheMessagesProvidedWasTooOldForBulkDelete"] = 50034] = "OneOfTheMessagesProvidedWasTooOldForBulkDelete";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidFormBodyOrContentType"] = 50035] = "InvalidFormBodyOrContentType";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InviteAcceptedToGuildWithoutTheBotBeingIn"] = 50036] = "InviteAcceptedToGuildWithoutTheBotBeingIn";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidAPIVersion"] = 50041] = "InvalidAPIVersion";
    RESTJSONErrorCodes[RESTJSONErrorCodes["FileUploadedExceedsMaximumSize"] = 50045] = "FileUploadedExceedsMaximumSize";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidFileUploaded"] = 50046] = "InvalidFileUploaded";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotSelfRedeemThisGift"] = 50054] = "CannotSelfRedeemThisGift";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidGuild"] = 50055] = "InvalidGuild";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidMessageType"] = 50068] = "InvalidMessageType";
    RESTJSONErrorCodes[RESTJSONErrorCodes["PaymentSourceRequiredToRedeemGift"] = 50070] = "PaymentSourceRequiredToRedeemGift";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotDeleteChannelRequiredForCommunityGuilds"] = 50074] = "CannotDeleteChannelRequiredForCommunityGuilds";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotEditStickersWithinMessage"] = 50080] = "CannotEditStickersWithinMessage";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidStickerSent"] = 50081] = "InvalidStickerSent";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidActionOnArchivedThread"] = 50083] = "InvalidActionOnArchivedThread";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidThreadNotificationSettings"] = 50084] = "InvalidThreadNotificationSettings";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ParameterEarlierThanCreation"] = 50085] = "ParameterEarlierThanCreation";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CommunityServerChannelsMustBeTextChannels"] = 50086] = "CommunityServerChannelsMustBeTextChannels";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ServerNotAvailableInYourLocation"] = 50095] = "ServerNotAvailableInYourLocation";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ServerNeedsMonetizationEnabledToPerformThisAction"] = 50097] = "ServerNeedsMonetizationEnabledToPerformThisAction";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ServerNeedsMoreBoostsToPerformThisAction"] = 50101] = "ServerNeedsMoreBoostsToPerformThisAction";
    RESTJSONErrorCodes[RESTJSONErrorCodes["RequestBodyContainsInvalidJSON"] = 50109] = "RequestBodyContainsInvalidJSON";
    RESTJSONErrorCodes[RESTJSONErrorCodes["OwnershipCannotBeMovedToABotUser"] = 50132] = "OwnershipCannotBeMovedToABotUser";
    RESTJSONErrorCodes[RESTJSONErrorCodes["FailedToResizeAssetBelowTheMinimumSize"] = 50138] = "FailedToResizeAssetBelowTheMinimumSize";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UploadedFileNotFound"] = 50146] = "UploadedFileNotFound";
    RESTJSONErrorCodes[RESTJSONErrorCodes["YouDoNotHavePermissionToSendThisSticker"] = 50600] = "YouDoNotHavePermissionToSendThisSticker";
    RESTJSONErrorCodes[RESTJSONErrorCodes["TwoFactorAuthenticationIsRequired"] = 60003] = "TwoFactorAuthenticationIsRequired";
    RESTJSONErrorCodes[RESTJSONErrorCodes["NoUsersWithDiscordTagExist"] = 80004] = "NoUsersWithDiscordTagExist";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ReactionWasBlocked"] = 90001] = "ReactionWasBlocked";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ApplicationNotYetAvailable"] = 110001] = "ApplicationNotYetAvailable";
    RESTJSONErrorCodes[RESTJSONErrorCodes["APIResourceOverloaded"] = 130000] = "APIResourceOverloaded";
    RESTJSONErrorCodes[RESTJSONErrorCodes["TheStageIsAlreadyOpen"] = 150006] = "TheStageIsAlreadyOpen";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotReplyWithoutPermissionToReadMessageHistory"] = 160002] = "CannotReplyWithoutPermissionToReadMessageHistory";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ThreadAlreadyCreatedForMessage"] = 160004] = "ThreadAlreadyCreatedForMessage";
    RESTJSONErrorCodes[RESTJSONErrorCodes["ThreadLocked"] = 160005] = "ThreadLocked";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumActiveThreads"] = 160006] = "MaximumActiveThreads";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MaximumActiveAnnouncementThreads"] = 160007] = "MaximumActiveAnnouncementThreads";
    RESTJSONErrorCodes[RESTJSONErrorCodes["InvalidJSONForUploadedLottieFile"] = 170001] = "InvalidJSONForUploadedLottieFile";
    RESTJSONErrorCodes[RESTJSONErrorCodes["UploadedLottiesCannotContainRasterizedImages"] = 170002] = "UploadedLottiesCannotContainRasterizedImages";
    RESTJSONErrorCodes[RESTJSONErrorCodes["StickerMaximumFramerateExceeded"] = 170003] = "StickerMaximumFramerateExceeded";
    RESTJSONErrorCodes[RESTJSONErrorCodes["StickerFrameCountExceedsMaximumOf1000Frames"] = 170004] = "StickerFrameCountExceedsMaximumOf1000Frames";
    RESTJSONErrorCodes[RESTJSONErrorCodes["LottieAnimationMaximumDimensionsExceeded"] = 170005] = "LottieAnimationMaximumDimensionsExceeded";
    RESTJSONErrorCodes[RESTJSONErrorCodes["StickerFramerateIsTooSmallOrTooLarge"] = 170006] = "StickerFramerateIsTooSmallOrTooLarge";
    RESTJSONErrorCodes[RESTJSONErrorCodes["StickerAnimationDurationExceedsMaximumOf5Seconds"] = 170007] = "StickerAnimationDurationExceedsMaximumOf5Seconds";
    RESTJSONErrorCodes[RESTJSONErrorCodes["CannotUpdateAFinishedEvent"] = 180000] = "CannotUpdateAFinishedEvent";
    RESTJSONErrorCodes[RESTJSONErrorCodes["FailedToCreateStageNeededForStageEvent"] = 180002] = "FailedToCreateStageNeededForStageEvent";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MessageWasBlockedByAutomaticModeration"] = 200000] = "MessageWasBlockedByAutomaticModeration";
    RESTJSONErrorCodes[RESTJSONErrorCodes["TitleWasBlockedByAutomaticModeration"] = 200001] = "TitleWasBlockedByAutomaticModeration";
    RESTJSONErrorCodes[RESTJSONErrorCodes["WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId"] = 220001] = "WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId";
    RESTJSONErrorCodes[RESTJSONErrorCodes["WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId"] = 220002] = "WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId";
    RESTJSONErrorCodes[RESTJSONErrorCodes["WebhooksCanOnlyCreateThreadsInForumChannels"] = 220003] = "WebhooksCanOnlyCreateThreadsInForumChannels";
    RESTJSONErrorCodes[RESTJSONErrorCodes["WebhookServicesCannotBeUsedInForumChannels"] = 220004] = "WebhookServicesCannotBeUsedInForumChannels";
    RESTJSONErrorCodes[RESTJSONErrorCodes["MessageBlockedByHarmfulLinksFilter"] = 240000] = "MessageBlockedByHarmfulLinksFilter";
})(RESTJSONErrorCodes = exports.RESTJSONErrorCodes || (exports.RESTJSONErrorCodes = {}));
/**
 * https://discord.com/developers/docs/reference#locales
 */
var Locale;
(function (Locale) {
    Locale["EnglishUS"] = "en-US";
    Locale["EnglishGB"] = "en-GB";
    Locale["Bulgarian"] = "bg";
    Locale["ChineseCN"] = "zh-CN";
    Locale["ChineseTW"] = "zh-TW";
    Locale["Croatian"] = "hr";
    Locale["Czech"] = "cs";
    Locale["Danish"] = "da";
    Locale["Dutch"] = "nl";
    Locale["Finnish"] = "fi";
    Locale["French"] = "fr";
    Locale["German"] = "de";
    Locale["Greek"] = "el";
    Locale["Hindi"] = "hi";
    Locale["Hungarian"] = "hu";
    Locale["Italian"] = "it";
    Locale["Japanese"] = "ja";
    Locale["Korean"] = "ko";
    Locale["Lithuanian"] = "lt";
    Locale["Norwegian"] = "no";
    Locale["Polish"] = "pl";
    Locale["PortugueseBR"] = "pt-BR";
    Locale["Romanian"] = "ro";
    Locale["Russian"] = "ru";
    Locale["SpanishES"] = "es-ES";
    Locale["Swedish"] = "sv-SE";
    Locale["Thai"] = "th";
    Locale["Turkish"] = "tr";
    Locale["Ukrainian"] = "uk";
    Locale["Vietnamese"] = "vi";
})(Locale = exports.Locale || (exports.Locale = {}));
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/auditLog.js":
/*!*************************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/auditLog.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=auditLog.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/channel.js":
/*!************************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/channel.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=channel.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/emoji.js":
/*!**********************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/emoji.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/gateway.js":
/*!************************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/gateway.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=gateway.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/guild.js":
/*!**********************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/guild.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=guild.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/guildScheduledEvent.js":
/*!************************************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/guildScheduledEvent.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=guildScheduledEvent.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OAuth2Routes = exports.RouteBases = exports.ImageFormat = exports.CDNRoutes = exports.StickerPackApplicationId = exports.Routes = exports.APIVersion = void 0;
__exportStar(__webpack_require__(/*! ../common */ "./node_modules/discord-api-types/rest/common.js"), exports);
__exportStar(__webpack_require__(/*! ./auditLog */ "./node_modules/discord-api-types/rest/v10/auditLog.js"), exports);
__exportStar(__webpack_require__(/*! ./channel */ "./node_modules/discord-api-types/rest/v10/channel.js"), exports);
__exportStar(__webpack_require__(/*! ./emoji */ "./node_modules/discord-api-types/rest/v10/emoji.js"), exports);
__exportStar(__webpack_require__(/*! ./gateway */ "./node_modules/discord-api-types/rest/v10/gateway.js"), exports);
__exportStar(__webpack_require__(/*! ./guild */ "./node_modules/discord-api-types/rest/v10/guild.js"), exports);
__exportStar(__webpack_require__(/*! ./guildScheduledEvent */ "./node_modules/discord-api-types/rest/v10/guildScheduledEvent.js"), exports);
__exportStar(__webpack_require__(/*! ./interactions */ "./node_modules/discord-api-types/rest/v10/interactions.js"), exports);
__exportStar(__webpack_require__(/*! ./invite */ "./node_modules/discord-api-types/rest/v10/invite.js"), exports);
__exportStar(__webpack_require__(/*! ./oauth2 */ "./node_modules/discord-api-types/rest/v10/oauth2.js"), exports);
__exportStar(__webpack_require__(/*! ./stageInstance */ "./node_modules/discord-api-types/rest/v10/stageInstance.js"), exports);
__exportStar(__webpack_require__(/*! ./sticker */ "./node_modules/discord-api-types/rest/v10/sticker.js"), exports);
__exportStar(__webpack_require__(/*! ./template */ "./node_modules/discord-api-types/rest/v10/template.js"), exports);
__exportStar(__webpack_require__(/*! ./user */ "./node_modules/discord-api-types/rest/v10/user.js"), exports);
__exportStar(__webpack_require__(/*! ./voice */ "./node_modules/discord-api-types/rest/v10/voice.js"), exports);
__exportStar(__webpack_require__(/*! ./webhook */ "./node_modules/discord-api-types/rest/v10/webhook.js"), exports);
exports.APIVersion = '10';
exports.Routes = {
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/audit-logs`
     */
    guildAuditLog(guildId) {
        return `/guilds/${guildId}/audit-logs`;
    },
    /**
     * Route for:
     * - GET    `/channels/{channel.id}`
     * - PATCH  `/channels/{channel.id}`
     * - DELETE `/channels/{channel.id}`
     */
    channel(channelId) {
        return `/channels/${channelId}`;
    },
    /**
     * Route for:
     * - GET  `/channels/{channel.id}/messages`
     * - POST `/channels/{channel.id}/messages`
     */
    channelMessages(channelId) {
        return `/channels/${channelId}/messages`;
    },
    /**
     * Route for:
     * - GET    `/channels/{channel.id}/messages/{message.id}`
     * - PATCH  `/channels/{channel.id}/messages/{message.id}`
     * - DELETE `/channels/{channel.id}/messages/{message.id}`
     */
    channelMessage(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}`;
    },
    /**
     * Route for:
     * - POST `/channels/{channel.id}/messages/{message.id}/crosspost`
     */
    channelMessageCrosspost(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}/crosspost`;
    },
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
     *
     * **Note**: You need to URL encode the emoji yourself
     */
    channelMessageOwnReaction(channelId, messageId, emoji) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`;
    },
    /**
     * Route for:
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
     *
     * **Note**: You need to URL encode the emoji yourself
     */
    channelMessageUserReaction(channelId, messageId, emoji, userId) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`;
    },
    /**
     * Route for:
     * - GET    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
     *
     * **Note**: You need to URL encode the emoji yourself
     */
    channelMessageReaction(channelId, messageId, emoji) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`;
    },
    /**
     * Route for:
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions`
     */
    channelMessageAllReactions(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}/reactions`;
    },
    /**
     * Route for:
     * - POST `/channels/{channel.id}/messages/bulk-delete`
     */
    channelBulkDelete(channelId) {
        return `/channels/${channelId}/messages/bulk-delete`;
    },
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/permissions/{overwrite.id}`
     * - DELETE `/channels/{channel.id}/permissions/{overwrite.id}`
     */
    channelPermission(channelId, overwriteId) {
        return `/channels/${channelId}/permissions/${overwriteId}`;
    },
    /**
     * Route for:
     * - GET  `/channels/{channel.id}/invites`
     * - POST `/channels/{channel.id}/invites`
     */
    channelInvites(channelId) {
        return `/channels/${channelId}/invites`;
    },
    /**
     * Route for:
     * - POST `/channels/{channel.id}/followers`
     */
    channelFollowers(channelId) {
        return `/channels/${channelId}/followers`;
    },
    /**
     * Route for:
     * - POST `/channels/{channel.id}/typing`
     */
    channelTyping(channelId) {
        return `/channels/${channelId}/typing`;
    },
    /**
     * Route for:
     * - GET `/channels/{channel.id}/pins`
     */
    channelPins(channelId) {
        return `/channels/${channelId}/pins`;
    },
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/pins/{message.id}`
     * - DELETE `/channels/{channel.id}/pins/{message.id}`
     */
    channelPin(channelId, messageId) {
        return `/channels/${channelId}/pins/${messageId}`;
    },
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/recipients/{user.id}`
     * - DELETE `/channels/{channel.id}/recipients/{user.id}`
     */
    channelRecipient(channelId, userId) {
        return `/channels/${channelId}/recipients/${userId}`;
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/emojis`
     * - POST `/guilds/{guild.id}/emojis`
     */
    guildEmojis(guildId) {
        return `/guilds/${guildId}/emojis`;
    },
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/emojis/{emoji.id}`
     * - PATCH  `/guilds/{guild.id}/emojis/{emoji.id}`
     * - DELETE `/guilds/{guild.id}/emojis/{emoji.id}`
     */
    guildEmoji(guildId, emojiId) {
        return `/guilds/${guildId}/emojis/${emojiId}`;
    },
    /**
     * Route for:
     * - POST `/guilds`
     */
    guilds() {
        return '/guilds';
    },
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}`
     * - PATCH  `/guilds/{guild.id}`
     * - DELETE `/guilds/{guild.id}`
     */
    guild(guildId) {
        return `/guilds/${guildId}`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/preview`
     */
    guildPreview(guildId) {
        return `/guilds/${guildId}/preview`;
    },
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/channels`
     * - POST  `/guilds/{guild.id}/channels`
     * - PATCH `/guilds/{guild.id}/channels`
     */
    guildChannels(guildId) {
        return `/guilds/${guildId}/channels`;
    },
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/members/{user.id}`
     * - PUT    `/guilds/{guild.id}/members/{user.id}`
     * - PATCH  `/guilds/{guild.id}/members/@me`
     * - PATCH  `/guilds/{guild.id}/members/{user.id}`
     * - DELETE `/guilds/{guild.id}/members/{user.id}`
     */
    guildMember(guildId, userId = '@me') {
        return `/guilds/${guildId}/members/${userId}`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/members`
     */
    guildMembers(guildId) {
        return `/guilds/${guildId}/members`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/members/search`
     */
    guildMembersSearch(guildId) {
        return `/guilds/${guildId}/members/search`;
    },
    /**
     * Route for:
     * - PATCH `/guilds/{guild.id}/members/@me/nick`
     * @deprecated Use {@link Routes.guildMember} instead.
     */
    guildCurrentMemberNickname(guildId) {
        return `/guilds/${guildId}/members/@me/nick`;
    },
    /**
     * Route for:
     * - PUT    `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
     * - DELETE `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
     */
    guildMemberRole(guildId, memberId, roleId) {
        return `/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
    },
    /**
     * Route for:
     * - POST `/guilds/{guild.id}/mfa`
     */
    guildMFA(guildId) {
        return `/guilds/${guildId}/mfa`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/bans`
     */
    guildBans(guildId) {
        return `/guilds/${guildId}/bans`;
    },
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/bans/{user.id}`
     * - PUT    `/guilds/{guild.id}/bans/{user.id}`
     * - DELETE `/guilds/{guild.id}/bans/{user.id}`
     */
    guildBan(guildId, userId) {
        return `/guilds/${guildId}/bans/${userId}`;
    },
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/roles`
     * - POST  `/guilds/{guild.id}/roles`
     * - PATCH `/guilds/{guild.id}/roles`
     */
    guildRoles(guildId) {
        return `/guilds/${guildId}/roles`;
    },
    /**
     * Route for:
     * - PATCH  `/guilds/{guild.id}/roles/{role.id}`
     * - DELETE `/guilds/{guild.id}/roles/{role.id}`
     */
    guildRole(guildId, roleId) {
        return `/guilds/${guildId}/roles/${roleId}`;
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/prune`
     * - POST `/guilds/{guild.id}/prune`
     */
    guildPrune(guildId) {
        return `/guilds/${guildId}/prune`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/regions`
     */
    guildVoiceRegions(guildId) {
        return `/guilds/${guildId}/regions`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/invites`
     */
    guildInvites(guildId) {
        return `/guilds/${guildId}/invites`;
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/integrations`
     */
    guildIntegrations(guildId) {
        return `/guilds/${guildId}/integrations`;
    },
    /**
     * Route for:
     * - DELETE `/guilds/{guild.id}/integrations/{integration.id}`
     */
    guildIntegration(guildId, integrationId) {
        return `/guilds/${guildId}/integrations/${integrationId}`;
    },
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/widget`
     * - PATCH `/guilds/{guild.id}/widget`
     */
    guildWidgetSettings(guildId) {
        return `/guilds/${guildId}/widget`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/widget.json`
     */
    guildWidgetJSON(guildId) {
        return `/guilds/${guildId}/widget.json`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/vanity-url`
     */
    guildVanityUrl(guildId) {
        return `/guilds/${guildId}/vanity-url`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/widget.png`
     */
    guildWidgetImage(guildId) {
        return `/guilds/${guildId}/widget.png`;
    },
    /**
     * Route for:
     * - GET    `/invites/{invite.code}`
     * - DELETE `/invites/{invite.code}`
     */
    invite(code) {
        return `/invites/${code}`;
    },
    /**
     * Route for:
     * - GET  `/guilds/templates/{template.code}`
     * - POST `/guilds/templates/{template.code}`
     */
    template(code) {
        return `/guilds/templates/${code}`;
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/templates`
     * - POST `/guilds/{guild.id}/templates`
     */
    guildTemplates(guildId) {
        return `/guilds/${guildId}/templates`;
    },
    /**
     * Route for:
     * - PUT    `/guilds/{guild.id}/templates/{template.code}`
     * - PATCH  `/guilds/{guild.id}/templates/{template.code}`
     * - DELETE `/guilds/{guild.id}/templates/{template.code}`
     */
    guildTemplate(guildId, code) {
        return `/guilds/${guildId}/templates/${code}`;
    },
    /**
     * Route for:
     * - POST `/channels/{channel.id}/threads`
     * - POST `/channels/{channel.id}/messages/{message.id}/threads`
     */
    threads(parentId, messageId) {
        const parts = ['', 'channels', parentId];
        if (messageId)
            parts.push('messages', messageId);
        parts.push('threads');
        return parts.join('/');
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/threads/active`
     */
    guildActiveThreads(guildId) {
        return `/guilds/${guildId}/threads/active`;
    },
    /**
     * Route for:
     * - GET `/channels/{channel.id}/threads/archived/public`
     * - GET `/channels/{channel.id}/threads/archived/private`
     */
    channelThreads(channelId, archivedStatus) {
        return `/channels/${channelId}/threads/archived/${archivedStatus}`;
    },
    /**
     * Route for:
     * - GET `/channels/{channel.id}/users/@me/threads/archived/prviate`
     */
    channelJoinedArchivedThreads(channelId) {
        return `/channels/${channelId}/users/@me/threads/archived/private`;
    },
    /**
     * Route for:
     * - GET    `/channels/{thread.id}/thread-members`
     * - GET    `/channels/{thread.id}/thread-members/{user.id}`
     * - PUT    `/channels/{thread.id}/thread-members/@me`
     * - PUT    `/channels/{thread.id}/thread-members/{user.id}`
     * - DELETE `/channels/{thread.id}/thread-members/@me`
     * - DELETE `/channels/{thread.id}/thread-members/{user.id}`
     */
    threadMembers(threadId, userId) {
        const parts = ['', 'channels', threadId, 'thread-members'];
        if (userId)
            parts.push(userId);
        return parts.join('/');
    },
    /**
     * Route for:
     * - GET   `/users/@me`
     * - GET   `/users/{user.id}`
     * - PATCH `/users/@me`
     *
     * @param [userId='@me'] The user ID, defaulted to `@me`
     */
    user(userId = '@me') {
        return `/users/${userId}`;
    },
    /**
     * Route for:
     * - GET `/users/@me/guilds`
     */
    userGuilds() {
        return `/users/@me/guilds`;
    },
    /**
     * Route for:
     * - GET `/users/@me/guilds/{guild.id}/member`
     */
    userGuildMember(guildId) {
        return `/users/@me/guilds/${guildId}/member`;
    },
    /**
     * Route for:
     * - DELETE `/users/@me/guilds/{guild.id}`
     */
    userGuild(guildId) {
        return `/users/@me/guilds/${guildId}`;
    },
    /**
     * Route for:
     * - POST `/users/@me/channels`
     */
    userChannels() {
        return `/users/@me/channels`;
    },
    /**
     * Route for:
     * - GET `/users/@me/connections`
     */
    userConnections() {
        return `/users/@me/connections`;
    },
    /**
     * Route for:
     * - GET `/voice/regions`
     */
    voiceRegions() {
        return `/voice/regions`;
    },
    /**
     * Route for:
     * - GET  `/channels/{channel.id}/webhooks`
     * - POST `/channels/{channel.id}/webhooks`
     */
    channelWebhooks(channelId) {
        return `/channels/${channelId}/webhooks`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/webhooks`
     */
    guildWebhooks(guildId) {
        return `/guilds/${guildId}/webhooks`;
    },
    /**
     * Route for:
     * - GET    `/webhooks/{webhook.id}`
     * - GET    `/webhooks/{webhook.id}/{webhook.token}`
     * - PATCH  `/webhooks/{webhook.id}`
     * - PATCH  `/webhooks/{webhook.id}/{webhook.token}`
     * - DELETE `/webhooks/{webhook.id}`
     * - DELETE `/webhooks/{webhook.id}/{webhook.token}`
     * - POST   `/webhooks/{webhook.id}/{webhook.token}`
     *
     * - POST   `/webhooks/{application.id}/{interaction.token}`
     */
    webhook(webhookId, webhookToken) {
        const parts = ['', 'webhooks', webhookId];
        if (webhookToken)
            parts.push(webhookToken);
        return parts.join('/');
    },
    /**
     * Route for:
     * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
     * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
     * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
     * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
     * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
     * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
     *
     * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/@original`
     * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
     * - DELETE `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
     *
     * @param [messageId='@original'] The message ID to change, defaulted to `@original`
     */
    webhookMessage(webhookId, webhookToken, messageId = '@original') {
        return `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`;
    },
    /**
     * Route for:
     * - POST `/webhooks/{webhook.id}/{webhook.token}/github`
     * - POST `/webhooks/{webhook.id}/{webhook.token}/slack`
     */
    webhookPlatform(webhookId, webhookToken, platform) {
        return `/webhooks/${webhookId}/${webhookToken}/${platform}`;
    },
    /**
     * Route for:
     * - GET `/gateway`
     */
    gateway() {
        return `/gateway`;
    },
    /**
     * Route for:
     * - GET `/gateway/bot`
     */
    gatewayBot() {
        return `/gateway/bot`;
    },
    /**
     * Route for:
     * - GET `/oauth2/applications/@me`
     */
    oauth2CurrentApplication() {
        return `/oauth2/applications/@me`;
    },
    /**
     * Route for:
     * - GET `/oauth2/@me`
     */
    oauth2CurrentAuthorization() {
        return `/oauth2/@me`;
    },
    /**
     * Route for:
     * - GET `/oauth2/authorize`
     */
    oauth2Authorization() {
        return `/oauth2/authorize`;
    },
    /**
     * Route for:
     * - POST `/oauth2/token`
     */
    oauth2TokenExchange() {
        return `/oauth2/token`;
    },
    /**
     * Route for:
     * - POST `/oauth2/token/revoke`
     */
    oauth2TokenRevocation() {
        return `/oauth2/token/revoke`;
    },
    /**
     * Route for:
     * - GET  `/applications/{application.id}/commands`
     * - PUT  `/applications/{application.id}/commands`
     * - POST `/applications/{application.id}/commands`
     */
    applicationCommands(applicationId) {
        return `/applications/${applicationId}/commands`;
    },
    /**
     * Route for:
     * - GET    `/applications/{application.id}/commands/{command.id}`
     * - PATCH  `/applications/{application.id}/commands/{command.id}`
     * - DELETE `/applications/{application.id}/commands/{command.id}`
     */
    applicationCommand(applicationId, commandId) {
        return `/applications/${applicationId}/commands/${commandId}`;
    },
    /**
     * Route for:
     * - GET  `/applications/{application.id}/guilds/{guild.id}/commands`
     * - PUT  `/applications/{application.id}/guilds/{guild.id}/commands`
     * - POST `/applications/{application.id}/guilds/{guild.id}/commands`
     */
    applicationGuildCommands(applicationId, guildId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands`;
    },
    /**
     * Route for:
     * - GET    `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
     * - PATCH  `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
     * - DELETE `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
     */
    applicationGuildCommand(applicationId, guildId, commandId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`;
    },
    /**
     * Route for:
     * - POST `/interactions/{interaction.id}/{interaction.token}/callback`
     */
    interactionCallback(interactionId, interactionToken) {
        return `/interactions/${interactionId}/${interactionToken}/callback`;
    },
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/member-verification`
     * - PATCH `/guilds/{guild.id}/member-verification`
     */
    guildMemberVerification(guildId) {
        return `/guilds/${guildId}/member-verification`;
    },
    /**
     * Route for:
     * - PATCH `/guilds/{guild.id}/voice-states/@me`
     * - PATCH `/guilds/{guild.id}/voice-states/{user.id}`
     */
    guildVoiceState(guildId, userId = '@me') {
        return `/guilds/${guildId}/voice-states/${userId}`;
    },
    /**
     * Route for:
     * - GET `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
     * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
     */
    guildApplicationCommandsPermissions(applicationId, guildId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/permissions`;
    },
    /**
     * Route for:
     * - GET `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
     * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
     */
    applicationCommandPermissions(applicationId, guildId, commandId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`;
    },
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/welcome-screen`
     * - PATCH `/guilds/{guild.id}/welcome-screen`
     */
    guildWelcomeScreen(guildId) {
        return `/guilds/${guildId}/welcome-screen`;
    },
    /**
     * Route for:
     * - POST `/stage-instances`
     */
    stageInstances() {
        return `/stage-instances`;
    },
    /**
     * Route for:
     * - GET `/stage-instances/{channel.id}`
     * - PATCH `/stage-instances/{channel.id}`
     * - DELETE `/stage-instances/{channel.id}`
     */
    stageInstance(channelId) {
        return `/stage-instances/${channelId}`;
    },
    /**
     * Route for:
     * - GET `/stickers/{sticker.id}`
     */
    sticker(stickerId) {
        return `/stickers/${stickerId}`;
    },
    /**
     * Route for:
     * - GET `/sticker-packs`
     */
    nitroStickerPacks() {
        return '/sticker-packs';
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/stickers`
     * - POST `/guilds/{guild.id}/stickers`
     */
    guildStickers(guildId) {
        return `/guilds/${guildId}/stickers`;
    },
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/stickers/{sticker.id}`
     * - PATCH  `/guilds/{guild.id}/stickers/{sticker.id}`
     * - DELETE `/guilds/{guild.id}/stickers/{sticker.id}`
     */
    guildSticker(guildId, stickerId) {
        return `/guilds/${guildId}/stickers/${stickerId}`;
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/scheduled-events`
     * - POST `/guilds/{guild.id}/scheduled-events`
     */
    guildScheduledEvents(guildId) {
        return `/guilds/${guildId}/scheduled-events`;
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
     * - PATCH `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
     * - DELETE `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
     */
    guildScheduledEvent(guildId, guildScheduledEventId) {
        return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}/users`
     */
    guildScheduledEventUsers(guildId, guildScheduledEventId) {
        return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`;
    },
};
exports.StickerPackApplicationId = '710982414301790216';
exports.CDNRoutes = {
    /**
     * Route for:
     * - GET `/emojis/{emoji.id}.{png|jpeg|webp|gif}`
     *
     * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
     *
     * This route supports the extensions: PNG, JPEG, WebP, GIF
     */
    emoji(emojiId, format) {
        return `/emojis/${emojiId}.${format}`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/icons/{guild.id}.{png|jpeg|webp|gif}`
     *
     * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
     *
     * This route supports the extensions: PNG, JPEG, WebP, GIF
     */
    guildIcon(guildId, guildIcon, format) {
        return `icons/${guildId}/${guildIcon}.${format}`;
    },
    /**
     * Route for:
     * - GET `/splashes/{guild.id}/{guild.splash}.{png|jpeg|webp}`
     *
     * This route supports the extensions: PNG, JPEG, WebP
     */
    guildSplash(guildId, guildSplash, format) {
        return `/splashes/${guildId}/${guildSplash}.${format}`;
    },
    /**
     * Route for:
     * - GET `/discovery-splashes/{guild.id}/{guild.discovery_splash}.{png|jpeg|webp}`
     *
     * This route supports the extensions: PNG, JPEG, WebP
     */
    guildDiscoverySplash(guildId, guildDiscoverySplash, format) {
        return `/discovery-splashes/${guildId}/${guildDiscoverySplash}.${format}`;
    },
    /**
     * Route for:
     * - GET `/banners/{guild.id}/{guild.banner}.{png|jpeg|webp|gif}`
     *
     * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
     *
     * This route supports the extensions: PNG, JPEG, WebP, GIF
     */
    guildBanner(guildId, guildBanner, format) {
        return `/banners/${guildId}/${guildBanner}.${format}`;
    },
    /**
     * Route for:
     * - GET `/banners/{user.id}/{user.banner}.{png|jpeg|webp|gif}`
     *
     * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
     *
     * This route supports the extensions: PNG, JPEG, WebP, GIF
     */
    userBanner(userId, userBanner, format) {
        return `/banners/${userId}/${userBanner}.${format}`;
    },
    /**
     * Route for:
     * - GET `/embed/avatars/{user.discriminator % 5}.png`
     *
     * The `userDiscriminator` parameter should be the user discriminator modulo 5 (e.g. 1337 % 5 = 2)
     *
     * This route supports the extension: PNG
     */
    defaultUserAvatar(userDiscriminator) {
        return `/embed/avatars/${userDiscriminator}.png`;
    },
    /**
     * Route for:
     * - GET `/avatars/{user.id}/{user.avatar}.{png|jpeg|webp|gif}`
     *
     * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
     *
     * This route supports the extensions: PNG, JPEG, WebP, GIF
     */
    userAvatar(userId, userAvatar, format) {
        return `/avatars/${userId}/${userAvatar}.${format}`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/users/{user.id}/{guild_member.avatar}.{png|jpeg|webp|gif}`
     *
     * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
     *
     * This route supports the extensions: PNG, JPEG, WebP, GIF
     */
    guildMemberAvatar(guildId, userId, memberAvatar, format) {
        return `/guilds/${guildId}/users/${userId}/avatars/${memberAvatar}.${format}`;
    },
    /**
     * Route for:
     * - GET `/app-icons/{application.id}/{application.icon}.{png|jpeg|webp}`
     *
     * This route supports the extensions: PNG, JPEG, WebP
     */
    applicationIcon(applicationId, applicationIcon, format) {
        return `/app-icons/${applicationId}/${applicationIcon}.${format}`;
    },
    /**
     * Route for:
     * - GET `/app-icons/{application.id}/{application.cover_image}.{png|jpeg|webp}`
     *
     * This route supports the extensions: PNG, JPEG, WebP
     */
    applicationCover(applicationId, applicationCoverImage, format) {
        return `/app-icons/${applicationId}/${applicationCoverImage}.${format}`;
    },
    /**
     * Route for:
     * - GET `/app-icons/{application.id}/{application.asset_id}.{png|jpeg|webp}`
     *
     * This route supports the extensions: PNG, JPEG, WebP
     */
    applicationAsset(applicationId, applicationAssetId, format) {
        return `/app-icons/${applicationId}/${applicationAssetId}.${format}`;
    },
    /**
     * Route for:
     * - GET `/app-assets/{application.id}/achievements/{achievement.id}/icons/{achievement.icon}.{png|jpeg|webp}`
     *
     * This route supports the extensions: PNG, JPEG, WebP
     */
    achievementIcon(applicationId, achievementId, achievementIconHash, format) {
        return `/app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIconHash}.${format}`;
    },
    /**
     * Route for:
     * - GET `/app-assets/710982414301790216/store/{sticker_pack.banner.asset_id}.{png|jpeg|webp}`
     *
     * This route supports the extensions: PNG, JPEG, WebP
     */
    stickerPackBanner(stickerPackBannerAssetId, format) {
        return `/app-assets/${exports.StickerPackApplicationId}/store/${stickerPackBannerAssetId}.${format}`;
    },
    /**
     * Route for:
     * - GET `team-icons/{team.id}/{team.icon}.{png|jpeg|webp}`
     *
     * This route supports the extensions: PNG, JPEG, WebP
     */
    teamIcon(teamId, teamIcon, format) {
        return `/team-icons/${teamId}/${teamIcon}.${format}`;
    },
    /**
     * Route for:
     * - GET `/stickers/{sticker.id}.{png|json}`
     *
     * This route supports the extensions: PNG, Lottie
     */
    sticker(stickerId, format) {
        return `/stickers/${stickerId}.${format}`;
    },
    /**
     * Route for:
     * - GET `/role-icons/{role.id}/{role.icon}.{png|jpeg|webp}`
     *
     * This route supports the extensions: PNG, JPEG, WebP
     */
    roleIcon(roleId, roleIcon, format) {
        return `/role-icons/${roleId}/${roleIcon}.${format}`;
    },
    /**
     * Route for:
     * - GET `/guild-events/{guild_scheduled_event.id}/{guild_scheduled_event.image}.{png|jpeg|webp}`
     *
     * This route supports the extensions: PNG, JPEG, WebP
     */
    guildScheduledEventCover(guildScheduledEventId, guildScheduledEventCoverImage, format) {
        return `/guild-events/${guildScheduledEventId}/${guildScheduledEventCoverImage}.${format}`;
    },
    /**
     * Route for:
     * - GET `/guilds/${guild.id}/users/${user.id}/banners/${guild_member.banner}.{png|jpeg|webp|gif}`
     *
     * This route supports the extensions: PNG, JPEG, WebP, GIF
     */
    guildMemberBanner(guildId, userId, guildMemberBanner, format) {
        return `/guilds/${guildId}/users/${userId}/banners/${guildMemberBanner}.${format}`;
    },
};
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["JPEG"] = "jpeg";
    ImageFormat["PNG"] = "png";
    ImageFormat["WebP"] = "webp";
    ImageFormat["GIF"] = "gif";
    ImageFormat["Lottie"] = "json";
})(ImageFormat = exports.ImageFormat || (exports.ImageFormat = {}));
exports.RouteBases = {
    api: `https://discord.com/api/v${exports.APIVersion}`,
    cdn: 'https://cdn.discordapp.com',
    invite: 'https://discord.gg',
    template: 'https://discord.new',
    gift: 'https://discord.gift',
    scheduledEvent: 'https://discord.com/events',
};
// Freeze bases object
Object.freeze(exports.RouteBases);
exports.OAuth2Routes = {
    authorizationURL: `${exports.RouteBases.api}${exports.Routes.oauth2Authorization()}`,
    tokenURL: `${exports.RouteBases.api}${exports.Routes.oauth2TokenExchange()}`,
    /**
     * See https://tools.ietf.org/html/rfc7009
     */
    tokenRevocationURL: `${exports.RouteBases.api}${exports.Routes.oauth2TokenRevocation()}`,
};
// Freeze OAuth2 route object
Object.freeze(exports.OAuth2Routes);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/interactions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/interactions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=interactions.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/invite.js":
/*!***********************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/invite.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=invite.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/oauth2.js":
/*!***********************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/oauth2.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=oauth2.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/stageInstance.js":
/*!******************************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/stageInstance.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=stageInstance.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/sticker.js":
/*!************************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/sticker.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=sticker.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/template.js":
/*!*************************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/template.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=template.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/user.js":
/*!*********************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/user.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/voice.js":
/*!**********************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/voice.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=voice.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rest/v10/webhook.js":
/*!************************************************************!*\
  !*** ./node_modules/discord-api-types/rest/v10/webhook.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=webhook.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rpc/common.js":
/*!******************************************************!*\
  !*** ./node_modules/discord-api-types/rpc/common.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RPCCloseEventCodes = exports.RPCErrorCodes = void 0;
/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes
 */
var RPCErrorCodes;
(function (RPCErrorCodes) {
    RPCErrorCodes[RPCErrorCodes["UnknownError"] = 1000] = "UnknownError";
    RPCErrorCodes[RPCErrorCodes["InvalidPayload"] = 4000] = "InvalidPayload";
    RPCErrorCodes[RPCErrorCodes["InvalidCommand"] = 4002] = "InvalidCommand";
    RPCErrorCodes[RPCErrorCodes["InvalidGuild"] = 4003] = "InvalidGuild";
    RPCErrorCodes[RPCErrorCodes["InvalidEvent"] = 4004] = "InvalidEvent";
    RPCErrorCodes[RPCErrorCodes["InvalidChannel"] = 4005] = "InvalidChannel";
    RPCErrorCodes[RPCErrorCodes["InvalidPermissions"] = 4006] = "InvalidPermissions";
    RPCErrorCodes[RPCErrorCodes["InvalidClientId"] = 4007] = "InvalidClientId";
    RPCErrorCodes[RPCErrorCodes["InvalidOrigin"] = 4008] = "InvalidOrigin";
    RPCErrorCodes[RPCErrorCodes["InvalidToken"] = 4009] = "InvalidToken";
    RPCErrorCodes[RPCErrorCodes["InvalidUser"] = 4010] = "InvalidUser";
    RPCErrorCodes[RPCErrorCodes["OAuth2Error"] = 5000] = "OAuth2Error";
    RPCErrorCodes[RPCErrorCodes["SelectChannelTimedOut"] = 5001] = "SelectChannelTimedOut";
    RPCErrorCodes[RPCErrorCodes["GetGuildTimedOut"] = 5002] = "GetGuildTimedOut";
    RPCErrorCodes[RPCErrorCodes["SelectVoiceForceRequired"] = 5003] = "SelectVoiceForceRequired";
    RPCErrorCodes[RPCErrorCodes["CaptureShortcutAlreadyListening"] = 5004] = "CaptureShortcutAlreadyListening";
})(RPCErrorCodes = exports.RPCErrorCodes || (exports.RPCErrorCodes = {}));
/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes
 */
var RPCCloseEventCodes;
(function (RPCCloseEventCodes) {
    RPCCloseEventCodes[RPCCloseEventCodes["InvalidClientId"] = 4000] = "InvalidClientId";
    RPCCloseEventCodes[RPCCloseEventCodes["InvalidOrigin"] = 4001] = "InvalidOrigin";
    RPCCloseEventCodes[RPCCloseEventCodes["RateLimited"] = 4002] = "RateLimited";
    RPCCloseEventCodes[RPCCloseEventCodes["TokenRevoked"] = 4003] = "TokenRevoked";
    RPCCloseEventCodes[RPCCloseEventCodes["InvalidVersion"] = 4004] = "InvalidVersion";
    RPCCloseEventCodes[RPCCloseEventCodes["InvalidEncoding"] = 4005] = "InvalidEncoding";
})(RPCCloseEventCodes = exports.RPCCloseEventCodes || (exports.RPCCloseEventCodes = {}));
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/rpc/v10.js":
/*!***************************************************!*\
  !*** ./node_modules/discord-api-types/rpc/v10.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./common */ "./node_modules/discord-api-types/rpc/common.js"), exports);
//# sourceMappingURL=v10.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/utils/v10.js":
/*!*****************************************************!*\
  !*** ./node_modules/discord-api-types/utils/v10.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isContextMenuApplicationCommandInteraction = exports.isChatInputApplicationCommandInteraction = exports.isMessageComponentSelectMenuInteraction = exports.isMessageComponentButtonInteraction = exports.isMessageComponentInteraction = exports.isInteractionButton = exports.isLinkButton = exports.isMessageComponentGuildInteraction = exports.isMessageComponentDMInteraction = exports.isApplicationCommandGuildInteraction = exports.isApplicationCommandDMInteraction = exports.isGuildInteraction = exports.isDMInteraction = void 0;
const index_1 = __webpack_require__(/*! ../payloads/v10/index */ "./node_modules/discord-api-types/payloads/v10/index.js");
// Interactions
/**
 * A type-guard check for DM interactions
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction was received in a DM channel
 */
function isDMInteraction(interaction) {
    return Reflect.has(interaction, 'user');
}
exports.isDMInteraction = isDMInteraction;
/**
 * A type-guard check for guild interactions
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction was received in a guild
 */
function isGuildInteraction(interaction) {
    return Reflect.has(interaction, 'guild_id');
}
exports.isGuildInteraction = isGuildInteraction;
// ApplicationCommandInteractions
/**
 * A type-guard check for DM application command interactions
 * @param interaction The application command interaction to check against
 * @returns A boolean that indicates if the application command interaction was received in a DM channel
 */
function isApplicationCommandDMInteraction(interaction) {
    return isDMInteraction(interaction);
}
exports.isApplicationCommandDMInteraction = isApplicationCommandDMInteraction;
/**
 * A type-guard check for guild application command interactions
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the application command interaction was received in a guild
 */
function isApplicationCommandGuildInteraction(interaction) {
    return isGuildInteraction(interaction);
}
exports.isApplicationCommandGuildInteraction = isApplicationCommandGuildInteraction;
// MessageComponentInteractions
/**
 * A type-guard check for DM message component interactions
 * @param interaction The message component interaction to check against
 * @returns A boolean that indicates if the message component interaction was received in a DM channel
 */
function isMessageComponentDMInteraction(interaction) {
    return isDMInteraction(interaction);
}
exports.isMessageComponentDMInteraction = isMessageComponentDMInteraction;
/**
 * A type-guard check for guild message component interactions
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the message component interaction was received in a guild
 */
function isMessageComponentGuildInteraction(interaction) {
    return isGuildInteraction(interaction);
}
exports.isMessageComponentGuildInteraction = isMessageComponentGuildInteraction;
// Buttons
/**
 * A type-guard check for buttons that have a `url` attached to them.
 * @param component The button to check against
 * @returns A boolean that indicates if the button has a `url` attached to it
 */
function isLinkButton(component) {
    return component.style === index_1.ButtonStyle.Link;
}
exports.isLinkButton = isLinkButton;
/**
 * A type-guard check for buttons that have a `custom_id` attached to them.
 * @param button The button to check against
 * @returns A boolean that indicates if the button has a `custom_id` attached to it
 */
function isInteractionButton(component) {
    return component.style !== index_1.ButtonStyle.Link;
}
exports.isInteractionButton = isInteractionButton;
// Message Components
/**
 * A type-guard check for message component interactions
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction is a message component
 */
function isMessageComponentInteraction(interaction) {
    return interaction.type === index_1.InteractionType.MessageComponent;
}
exports.isMessageComponentInteraction = isMessageComponentInteraction;
/**
 * A type-guard check for button message component interactions
 * @param interaction The message component interaction to check against
 * @returns A boolean that indicates if the message component is a button
 */
function isMessageComponentButtonInteraction(interaction) {
    return interaction.data.component_type === index_1.ComponentType.Button;
}
exports.isMessageComponentButtonInteraction = isMessageComponentButtonInteraction;
/**
 * A type-guard check for select menu message component interactions
 * @param interaction The message component interaction to check against
 * @returns A boolean that indicates if the message component is a select menu
 */
function isMessageComponentSelectMenuInteraction(interaction) {
    return interaction.data.component_type === index_1.ComponentType.SelectMenu;
}
exports.isMessageComponentSelectMenuInteraction = isMessageComponentSelectMenuInteraction;
// Application Commands
/**
 * A type-guard check for chat input application commands.
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction is a chat input application command
 */
function isChatInputApplicationCommandInteraction(interaction) {
    return interaction.data.type === index_1.ApplicationCommandType.ChatInput;
}
exports.isChatInputApplicationCommandInteraction = isChatInputApplicationCommandInteraction;
/**
 * A type-guard check for context menu application commands.
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction is a context menu application command
 */
function isContextMenuApplicationCommandInteraction(interaction) {
    return (interaction.data.type === index_1.ApplicationCommandType.Message || interaction.data.type === index_1.ApplicationCommandType.User);
}
exports.isContextMenuApplicationCommandInteraction = isContextMenuApplicationCommandInteraction;
//# sourceMappingURL=v10.js.map

/***/ }),

/***/ "./node_modules/discord-api-types/v10.js":
/*!***********************************************!*\
  !*** ./node_modules/discord-api-types/v10.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = void 0;
__exportStar(__webpack_require__(/*! ./gateway/v10 */ "./node_modules/discord-api-types/gateway/v10.js"), exports);
__exportStar(__webpack_require__(/*! ./globals */ "./node_modules/discord-api-types/globals.js"), exports);
__exportStar(__webpack_require__(/*! ./payloads/v10/index */ "./node_modules/discord-api-types/payloads/v10/index.js"), exports);
__exportStar(__webpack_require__(/*! ./rest/v10/index */ "./node_modules/discord-api-types/rest/v10/index.js"), exports);
__exportStar(__webpack_require__(/*! ./rpc/v10 */ "./node_modules/discord-api-types/rpc/v10.js"), exports);
exports.Utils = __webpack_require__(/*! ./utils/v10 */ "./node_modules/discord-api-types/utils/v10.js");
//# sourceMappingURL=v10.js.map

/***/ }),

/***/ "./node_modules/platform/platform.js":
/*!*******************************************!*\
  !*** ./node_modules/platform/platform.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
;(function() {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object. */
  var root = (objectTypes[typeof window] && window) || this;

  /** Backup possible global object. */
  var oldRoot = root;

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes["object"] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && typeof __webpack_require__.g == 'object' && __webpack_require__.g;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;

  /** Possible global object. */
  var thisBinding = this;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4':  '10 Technical Preview',
      '6.3':  '8.1',
      '6.2':  '8',
      '6.1':  'Server 2008 R2 / 7',
      '6.0':  'Server 2008 / Vista',
      '5.2':  'Server 2003 / XP 64-bit',
      '5.1':  'XP',
      '5.01': '2000 SP1',
      '5.0':  '2000',
      '4.0':  'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
        (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(
      os.replace(/ ce$/i, ' CE')
        .replace(/\bhpw/i, 'web')
        .replace(/\bMacintosh\b/, 'Mac OS')
        .replace(/_PowerPC\b/i, ' OS')
        .replace(/\b(OS X) [^ \d]+/i, '$1')
        .replace(/\bMac (OS X)\b/, '$1')
        .replace(/\/(\d)/, ' $1')
        .replace(/_/g, '.')
        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
        .replace(/\bx86\.64\b/gi, 'x86_64')
        .replace(/\b(Windows Phone) OS\b/, '$1')
        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
        .split(' on ')[0]
    );

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object. */
    var context = root;

    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object. */
    var nav = context.navigator || {};

    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext
      ? !!nav.likeChrome
      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03b1';

    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03b2';

    /** Browser document object. */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
      ? operaClass
      : (opera = null);

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */
    var data;

    /** The CPU architecture. */
    var arch = ua;

    /** Platform description array. */
    var description = [];

    /** Platform alpha/beta indicator. */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;

    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important). */
    var layout = getLayout([
      { 'label': 'EdgeHTML', 'pattern': 'Edge' },
      'Trident',
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important). */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Electron',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      { 'label': 'Microsoft Edge', 'pattern': '(?:Edge|Edg|EdgA|EdgiOS)' },
      'Midori',
      'Nook Browser',
      'PaleMoon',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' },
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
      'Sunrise',
      'Swiftfox',
      'Vivaldi',
      'Waterfox',
      'WebPositive',
      { 'label': 'Yandex Browser', 'pattern': 'YaBrowser' },
      { 'label': 'UC Browser', 'pattern': 'UCBrowser' },
      'Opera Mini',
      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
      'Opera',
      { 'label': 'Opera', 'pattern': 'OPR' },
      'Chromium',
      'Chrome',
      { 'label': 'Chrome', 'pattern': '(?:HeadlessChrome)' },
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
      { 'label': 'IE', 'pattern': 'IEMobile' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important). */
    var product = getProduct([
      { 'label': 'BlackBerry', 'pattern': 'BB10' },
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
      { 'label': 'Galaxy S5', 'pattern': 'SM-G900' },
      { 'label': 'Galaxy S6', 'pattern': 'SM-G920' },
      { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' },
      { 'label': 'Galaxy S7', 'pattern': 'SM-G930' },
      { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nexus',
      'Nook',
      'PlayBook',
      'PlayStation Vita',
      'PlayStation',
      'TouchPad',
      'Transformer',
      { 'label': 'Wii U', 'pattern': 'WiiU' },
      'Wii',
      'Xbox One',
      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
      'Xoom'
    ]);

    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Alcatel': {},
      'Archos': {},
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1, 'Nexus': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'Huawei': {},
      'Lenovo': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Oppo': {},
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 },
      'Xiaomi': { 'Mi': 1, 'Redmi': 1 }
    });

    /* Detectable operating systems (order is important). */
    var os = getOS([
      'Windows Phone',
      'KaiOS',
      'Android',
      'CentOS',
      { 'label': 'Chrome OS', 'pattern': 'CrOS' },
      'Debian',
      { 'label': 'DragonFly BSD', 'pattern': 'DragonFly' },
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'OpenBSD',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Tizen',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (
          value[product] ||
          value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
            )) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // Split by forward slash and append product version if needed.
          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);

    // Detect Android products.
    // Browsers on Android devices typically provide their product IDS after "Android;"
    // up to "Build" or ") AppleWebKit".
    // Example:
    // "Mozilla/5.0 (Linux; Android 8.1.0; Moto G (5) Plus) AppleWebKit/537.36
    // (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36"
    if (/\bAndroid\b/.test(os) && !product &&
        (data = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(ua))) {
      product = trim(data[1])
        // Replace any language codes (eg. "en-US").
        .replace(/^[a-z]{2}-[a-z]{2};\s*/i, '')
        || null;
    }
    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    } else if (manufacturer && product) {
      product = product
        .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.\\s]', 'i'), manufacturer + ' ')
        .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.]?(\\w)', 'i'), manufacturer + ' $2');
    }
    // Clean up Google TV.
    if ((data = /\bGoogle TV\b/.exec(product))) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // Detect Kubuntu.
    else if (name == 'Konqueror' && /^Linux\b/i.test(os)) {
      os = 'Kubuntu';
    }
    // Detect Android browsers.
    else if ((manufacturer && manufacturer != 'Google' &&
        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
        (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // Detect Silk desktop/accelerated modes.
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // Detect UC Browser speed mode.
    else if (name == 'UC Browser' && /\bUCWEB\b/.test(ua)) {
      description.push('speed mode');
    }
    // Detect PaleMoon identifying as Firefox.
    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
      description.push('identifying as Firefox ' + data[1]);
    }
    // Detect Firefox OS and products running Firefox.
    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
      os || (os = 'Firefox OS');
      product || (product = data[1]);
    }
    // Detect false positives for Firefox/Safari.
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // Escape the `/` for Firefox 1.
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // Clear name of false positives.
        name = null;
      }
      // Reassign a generic name.
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // Add Chrome version to description for Electron.
    else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
      description.push('Chromium ' + data);
    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // Detect stubborn layout engines.
    if ((data =
          layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
          layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
        )) {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8.x';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // Detect IE 11 identifying as other browsers.
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (name) {
        description.push('identifying as ' + name + (version ? ' ' + version : ''));
      }
      name = 'IE';
      version = data[1];
    }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (rhino) {
          try {
            version = context.require('ringo/engine').version.join('.');
            name = 'RingoJS';
          } catch(e) {
            if ((data = context.system) && data.global.system == context.system) {
              name = 'Narwhal';
              os || (os = data[0].os || null);
            }
          }
          if (!name) {
            name = 'Rhino';
          }
        }
        else if (
          typeof context.process == 'object' && !context.process.browser &&
          (data = context.process)
        ) {
          if (typeof data.versions == 'object') {
            if (typeof data.versions.electron == 'string') {
              description.push('Node ' + data.versions.node);
              name = 'Electron';
              version = data.versions.electron;
            } else if (typeof data.versions.nw == 'string') {
              description.push('Chromium ' + version, 'Node ' + data.versions.node);
              name = 'NW.js';
              version = data.versions.nw;
            }
          }
          if (!name) {
            name = 'Node.js';
            arch = data.arch;
            os = data.platform;
            version = /[\d.]+/.exec(data.version);
            version = version ? version[0] : null;
          }
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // Detect PhantomJS.
      else if (getClassOf((data = context.phantom)) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // Detect IE compatibility modes.
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // We're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode.
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      // Detect IE 11 masking as other browsers.
      else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
        description.push('masking as ' + name + ' ' + version);
        name = 'IE';
        version = '11.0';
        layout = ['Trident'];
        os = 'Windows';
      }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS|KaiOS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // Detect Xbox 360 and Xbox One.
    else if (/\bXbox\b/i.test(product)) {
      if (product == 'Xbox 360') {
        os = null;
      }
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // Add mobile postfix.
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // Detect IE platform preview.
    else if (name == 'IE' && useFeatures) {
      try {
        if (context.external === null) {
          description.unshift('platform preview');
        }
      } catch(e) {
        description.unshift('embedded');
      }
    }
    // Detect BlackBerry OS version.
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // Detect Opera identifying/masking itself as another browser.
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && product != 'Wii' && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /\bWindows XP\b/.test(os) && version > 8 ||
            version == 8 && !/\bTrident\b/.test(ua)
          ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
      // When "identifying", the UA contains both Opera and the other browser's name.
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // When "masking", the UA contains only the other browser's name.
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] ||
          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // Use the full Chrome version when available.
      data[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (!likeChrome && !data[1])) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : data < 602 ? 9 : data < 604 ? 10 : data < 606 ? 11 : data < 608 ? 12 : '12');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      } else if (name == 'Chrome' && /\bHeadlessChrome/i.test(ua)) {
        description.unshift('headless');
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // Newer versions of SRWare Iron uses the Chrome tag to indicate its version number.
    else if (/\bSRWare Iron\b/.test(name) && !version) {
      version = getVersion('Chrome');
    }
    // Strip incorrect OS versions.
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Ensure OS does not include the browser name.
    if (os && os.indexOf(name) != -1 && !RegExp(name + ' OS').test(os)) {
      os = os.replace(RegExp(' *' + qualify(name) + ' *'), '');
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (
          name && (/\bWOW64\b/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
      ) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (
        os && /^OS X/.test(os.family) &&
        name == 'Chrome' && parseFloat(version) >= 39
    ) {
      os.architecture = 64;
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * The list of common layout engines include:
     * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * The list of manufacturers include:
     * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
     * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
     * "Nokia", "Samsung" and "Sony"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * The list of common browser names include:
     * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
     * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
     * "Opera Mini" and "Opera"
     *
     * Mobile versions of some browsers have "Mobile" appended to their name:
     * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * The list of common products include:
     *
     * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
     * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
       * "SuSE", "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function() { return 'null'; }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // Export platform.
  var platform = parse();

  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (true) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;

    // Define as an anonymous module so platform can be aliased through path mapping.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return platform;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else {}
}.call(this));


/***/ }),

/***/ "./src/client/Client.ts":
/*!******************************!*\
  !*** ./src/client/Client.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Client": () => (/* binding */ Client)
/* harmony export */ });
/* harmony import */ var discord_api_types_v10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! discord-api-types/v10 */ "./node_modules/discord-api-types/v10.mjs");
/* harmony import */ var _util_Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Options */ "./src/util/Options.ts");
/* harmony import */ var _gateway_receive_dispatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gateway/receive/dispatch */ "./src/client/gateway/receive/dispatch.ts");
/* harmony import */ var _gateway_receive_heartbeat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gateway/receive/heartbeat */ "./src/client/gateway/receive/heartbeat.ts");
/* harmony import */ var _gateway_receive_heartbeatAck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gateway/receive/heartbeatAck */ "./src/client/gateway/receive/heartbeatAck.ts");
/* harmony import */ var _gateway_receive_hello__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gateway/receive/hello */ "./src/client/gateway/receive/hello.ts");
/* harmony import */ var _gateway_receive_invalidSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gateway/receive/invalidSession */ "./src/client/gateway/receive/invalidSession.ts");
/* harmony import */ var _gateway_receive_reconnect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gateway/receive/reconnect */ "./src/client/gateway/receive/reconnect.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








class Client extends EventTarget {
    /**
     * The constructor of this client
     * @param {GatewayIdentifyData} identifyOptions
     * @param {SocketURLOptions} socketURLOptions
     */
    constructor(identifyOptions = _util_Options__WEBPACK_IMPORTED_MODULE_1__.defaultIdentifyOption, socketURLOptions = _util_Options__WEBPACK_IMPORTED_MODULE_1__.defaultSocketURLOption) {
        super();
        /**
         * The websocket URL that the client will connect to
         * @property {string}
         * @private
         */
        this._baseUrl = 'wss://gateway.discord.gg';
        this._sequenceNumber = null;
        this._pack = JSON.stringify;
        this._unpack = JSON.parse;
        this.identifyOptions = Object.assign(Object.assign({}, _util_Options__WEBPACK_IMPORTED_MODULE_1__.defaultIdentifyOption), identifyOptions);
        this.socketURLOptions = Object.assign(Object.assign({}, _util_Options__WEBPACK_IMPORTED_MODULE_1__.defaultSocketURLOption), socketURLOptions);
    }
    /**
     * Login with the given credentials
     * @param {string} [token = this.options.token] Token to login
     * @returns {Client} The client
     */
    // TODO: Organize Errors
    login(token = this.identifyOptions.token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token || token == '')
                throw 'Invalid token';
            this.identifyOptions.token = token;
            const parameters = new URLSearchParams();
            Object.entries(this.socketURLOptions).forEach(([key, value]) => {
                parameters.append(key, value);
            });
            this.ws = new WebSocket(this._baseUrl + '/?' + parameters.toString());
            this.ws.onmessage = (e) => {
                const payload = this._unpack(e.data);
                this.dispatchEvent(new CustomEvent('raw', { detail: payload }));
                switch (payload.op) {
                    case discord_api_types_v10__WEBPACK_IMPORTED_MODULE_0__.GatewayOpcodes.Dispatch:
                        _gateway_receive_dispatch__WEBPACK_IMPORTED_MODULE_2__["default"].call(this, payload);
                        break;
                    case discord_api_types_v10__WEBPACK_IMPORTED_MODULE_0__.GatewayOpcodes.Heartbeat:
                        _gateway_receive_heartbeat__WEBPACK_IMPORTED_MODULE_3__["default"].call(this, payload);
                        break;
                    case discord_api_types_v10__WEBPACK_IMPORTED_MODULE_0__.GatewayOpcodes.Reconnect:
                        _gateway_receive_reconnect__WEBPACK_IMPORTED_MODULE_7__["default"].call(this, payload);
                        break;
                    case discord_api_types_v10__WEBPACK_IMPORTED_MODULE_0__.GatewayOpcodes.InvalidSession:
                        _gateway_receive_invalidSession__WEBPACK_IMPORTED_MODULE_6__["default"].call(this, payload);
                        break;
                    case discord_api_types_v10__WEBPACK_IMPORTED_MODULE_0__.GatewayOpcodes.Hello:
                        _gateway_receive_hello__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, payload);
                        break;
                    case discord_api_types_v10__WEBPACK_IMPORTED_MODULE_0__.GatewayOpcodes.HeartbeatAck:
                        _gateway_receive_heartbeatAck__WEBPACK_IMPORTED_MODULE_4__["default"].call(this);
                        break;
                }
            };
            return this;
        });
    }
}
//TODO: I don't know shards
//TODO: validate user inputs
//TODO: add support for etf encoding and other suppressions



/***/ }),

/***/ "./src/client/gateway/receive/dispatch.ts":
/*!************************************************!*\
  !*** ./src/client/gateway/receive/dispatch.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchReceive)
/* harmony export */ });
function dispatchReceive(payload) {
}


/***/ }),

/***/ "./src/client/gateway/receive/heartbeat.ts":
/*!*************************************************!*\
  !*** ./src/client/gateway/receive/heartbeat.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ heartbeatReceive)
/* harmony export */ });
function heartbeatReceive(payload) {
    this.ws;
}


/***/ }),

/***/ "./src/client/gateway/receive/heartbeatAck.ts":
/*!****************************************************!*\
  !*** ./src/client/gateway/receive/heartbeatAck.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ heartbeatAckReceive)
/* harmony export */ });
/* harmony import */ var _send_heartbeat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../send/heartbeat */ "./src/client/gateway/send/heartbeat.ts");

function heartbeatAckReceive() {
    this._heartbeatTimeout = setTimeout(_send_heartbeat__WEBPACK_IMPORTED_MODULE_0__["default"].call, this._heartbeatInterval, this);
}


/***/ }),

/***/ "./src/client/gateway/receive/hello.ts":
/*!*********************************************!*\
  !*** ./src/client/gateway/receive/hello.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ helloReceive)
/* harmony export */ });
/* harmony import */ var _send_heartbeat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../send/heartbeat */ "./src/client/gateway/send/heartbeat.ts");
/* harmony import */ var _send_identify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../send/identify */ "./src/client/gateway/send/identify.ts");


function helloReceive(payload) {
    this._heartbeatInterval = payload.d.heartbeat_interval;
    _send_heartbeat__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
    _send_identify__WEBPACK_IMPORTED_MODULE_1__["default"].call(this);
}


/***/ }),

/***/ "./src/client/gateway/receive/invalidSession.ts":
/*!******************************************************!*\
  !*** ./src/client/gateway/receive/invalidSession.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ invalidSessionReceive)
/* harmony export */ });
function invalidSessionReceive(payload) {
}


/***/ }),

/***/ "./src/client/gateway/receive/reconnect.ts":
/*!*************************************************!*\
  !*** ./src/client/gateway/receive/reconnect.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reconnectReceive)
/* harmony export */ });
function reconnectReceive(payload) {
}


/***/ }),

/***/ "./src/client/gateway/send/heartbeat.ts":
/*!**********************************************!*\
  !*** ./src/client/gateway/send/heartbeat.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ heartbeatSend)
/* harmony export */ });
/* harmony import */ var discord_api_types_v10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! discord-api-types/v10 */ "./node_modules/discord-api-types/v10.mjs");

function heartbeatSend() {
    const payload = {
        op: discord_api_types_v10__WEBPACK_IMPORTED_MODULE_0__.GatewayOpcodes.Heartbeat,
        d: this._sequenceNumber
    };
    this.ws.send(this._pack(payload));
}


/***/ }),

/***/ "./src/client/gateway/send/identify.ts":
/*!*********************************************!*\
  !*** ./src/client/gateway/send/identify.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ identifySend)
/* harmony export */ });
/* harmony import */ var discord_api_types_v10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! discord-api-types/v10 */ "./node_modules/discord-api-types/v10.mjs");

function identifySend() {
    const payload = {
        op: discord_api_types_v10__WEBPACK_IMPORTED_MODULE_0__.GatewayOpcodes.Identify,
        d: this.identifyOptions
    };
    this.ws.send(this._pack(payload));
}


/***/ }),

/***/ "./src/util/Options.ts":
/*!*****************************!*\
  !*** ./src/util/Options.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultIdentifyOption": () => (/* binding */ defaultIdentifyOption),
/* harmony export */   "defaultSocketURLOption": () => (/* binding */ defaultSocketURLOption)
/* harmony export */ });
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! platform */ "./node_modules/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_0__);
var _a;

const defaultIdentifyOption = {
    token: '',
    properties: {
        os: ((_a = (platform__WEBPACK_IMPORTED_MODULE_0___default().os)) === null || _a === void 0 ? void 0 : _a.toString()) || 'linux',
        browser: 'browscord.js',
        device: 'browscord.js'
    },
    intents: 0
};
const defaultSocketURLOption = {
    v: 10,
    encoding: 'json'
};


/***/ }),

/***/ "./node_modules/discord-api-types/v10.mjs":
/*!************************************************!*\
  !*** ./node_modules/discord-api-types/v10.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIApplicationCommandPermissionsConstant": () => (/* binding */ APIApplicationCommandPermissionsConstant),
/* harmony export */   "APIVersion": () => (/* binding */ APIVersion),
/* harmony export */   "ActivityFlags": () => (/* binding */ ActivityFlags),
/* harmony export */   "ActivityPlatform": () => (/* binding */ ActivityPlatform),
/* harmony export */   "ActivityType": () => (/* binding */ ActivityType),
/* harmony export */   "AllowedMentionsTypes": () => (/* binding */ AllowedMentionsTypes),
/* harmony export */   "ApplicationCommandOptionType": () => (/* binding */ ApplicationCommandOptionType),
/* harmony export */   "ApplicationCommandPermissionType": () => (/* binding */ ApplicationCommandPermissionType),
/* harmony export */   "ApplicationCommandType": () => (/* binding */ ApplicationCommandType),
/* harmony export */   "ApplicationFlags": () => (/* binding */ ApplicationFlags),
/* harmony export */   "AuditLogEvent": () => (/* binding */ AuditLogEvent),
/* harmony export */   "AuditLogOptionsType": () => (/* binding */ AuditLogOptionsType),
/* harmony export */   "ButtonStyle": () => (/* binding */ ButtonStyle),
/* harmony export */   "CDNRoutes": () => (/* binding */ CDNRoutes),
/* harmony export */   "ChannelFlags": () => (/* binding */ ChannelFlags),
/* harmony export */   "ChannelType": () => (/* binding */ ChannelType),
/* harmony export */   "ComponentType": () => (/* binding */ ComponentType),
/* harmony export */   "ConnectionService": () => (/* binding */ ConnectionService),
/* harmony export */   "ConnectionVisibility": () => (/* binding */ ConnectionVisibility),
/* harmony export */   "EmbedType": () => (/* binding */ EmbedType),
/* harmony export */   "FormattingPatterns": () => (/* binding */ FormattingPatterns),
/* harmony export */   "GatewayCloseCodes": () => (/* binding */ GatewayCloseCodes),
/* harmony export */   "GatewayDispatchEvents": () => (/* binding */ GatewayDispatchEvents),
/* harmony export */   "GatewayIntentBits": () => (/* binding */ GatewayIntentBits),
/* harmony export */   "GatewayOpcodes": () => (/* binding */ GatewayOpcodes),
/* harmony export */   "GatewayVersion": () => (/* binding */ GatewayVersion),
/* harmony export */   "GuildDefaultMessageNotifications": () => (/* binding */ GuildDefaultMessageNotifications),
/* harmony export */   "GuildExplicitContentFilter": () => (/* binding */ GuildExplicitContentFilter),
/* harmony export */   "GuildFeature": () => (/* binding */ GuildFeature),
/* harmony export */   "GuildHubType": () => (/* binding */ GuildHubType),
/* harmony export */   "GuildMFALevel": () => (/* binding */ GuildMFALevel),
/* harmony export */   "GuildNSFWLevel": () => (/* binding */ GuildNSFWLevel),
/* harmony export */   "GuildPremiumTier": () => (/* binding */ GuildPremiumTier),
/* harmony export */   "GuildScheduledEventEntityType": () => (/* binding */ GuildScheduledEventEntityType),
/* harmony export */   "GuildScheduledEventPrivacyLevel": () => (/* binding */ GuildScheduledEventPrivacyLevel),
/* harmony export */   "GuildScheduledEventStatus": () => (/* binding */ GuildScheduledEventStatus),
/* harmony export */   "GuildSystemChannelFlags": () => (/* binding */ GuildSystemChannelFlags),
/* harmony export */   "GuildVerificationLevel": () => (/* binding */ GuildVerificationLevel),
/* harmony export */   "GuildWidgetStyle": () => (/* binding */ GuildWidgetStyle),
/* harmony export */   "ImageFormat": () => (/* binding */ ImageFormat),
/* harmony export */   "IntegrationExpireBehavior": () => (/* binding */ IntegrationExpireBehavior),
/* harmony export */   "InteractionResponseType": () => (/* binding */ InteractionResponseType),
/* harmony export */   "InteractionType": () => (/* binding */ InteractionType),
/* harmony export */   "InviteTargetType": () => (/* binding */ InviteTargetType),
/* harmony export */   "Locale": () => (/* binding */ Locale),
/* harmony export */   "MembershipScreeningFieldType": () => (/* binding */ MembershipScreeningFieldType),
/* harmony export */   "MessageActivityType": () => (/* binding */ MessageActivityType),
/* harmony export */   "MessageFlags": () => (/* binding */ MessageFlags),
/* harmony export */   "MessageType": () => (/* binding */ MessageType),
/* harmony export */   "OAuth2Routes": () => (/* binding */ OAuth2Routes),
/* harmony export */   "OAuth2Scopes": () => (/* binding */ OAuth2Scopes),
/* harmony export */   "OverwriteType": () => (/* binding */ OverwriteType),
/* harmony export */   "PermissionFlagsBits": () => (/* binding */ PermissionFlagsBits),
/* harmony export */   "PresenceUpdateStatus": () => (/* binding */ PresenceUpdateStatus),
/* harmony export */   "RESTJSONErrorCodes": () => (/* binding */ RESTJSONErrorCodes),
/* harmony export */   "RPCCloseEventCodes": () => (/* binding */ RPCCloseEventCodes),
/* harmony export */   "RPCErrorCodes": () => (/* binding */ RPCErrorCodes),
/* harmony export */   "RouteBases": () => (/* binding */ RouteBases),
/* harmony export */   "Routes": () => (/* binding */ Routes),
/* harmony export */   "SortOrderType": () => (/* binding */ SortOrderType),
/* harmony export */   "StageInstancePrivacyLevel": () => (/* binding */ StageInstancePrivacyLevel),
/* harmony export */   "StickerFormatType": () => (/* binding */ StickerFormatType),
/* harmony export */   "StickerPackApplicationId": () => (/* binding */ StickerPackApplicationId),
/* harmony export */   "StickerType": () => (/* binding */ StickerType),
/* harmony export */   "TeamMemberMembershipState": () => (/* binding */ TeamMemberMembershipState),
/* harmony export */   "TextInputStyle": () => (/* binding */ TextInputStyle),
/* harmony export */   "ThreadAutoArchiveDuration": () => (/* binding */ ThreadAutoArchiveDuration),
/* harmony export */   "ThreadMemberFlags": () => (/* binding */ ThreadMemberFlags),
/* harmony export */   "UserFlags": () => (/* binding */ UserFlags),
/* harmony export */   "UserPremiumType": () => (/* binding */ UserPremiumType),
/* harmony export */   "Utils": () => (/* binding */ Utils),
/* harmony export */   "VideoQualityMode": () => (/* binding */ VideoQualityMode),
/* harmony export */   "WebhookType": () => (/* binding */ WebhookType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v10_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v10.js */ "./node_modules/discord-api-types/v10.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_v10_js__WEBPACK_IMPORTED_MODULE_0__);
const APIApplicationCommandPermissionsConstant = _v10_js__WEBPACK_IMPORTED_MODULE_0__.APIApplicationCommandPermissionsConstant;
const APIVersion = _v10_js__WEBPACK_IMPORTED_MODULE_0__.APIVersion;
const ActivityFlags = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ActivityFlags;
const ActivityPlatform = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ActivityPlatform;
const ActivityType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ActivityType;
const AllowedMentionsTypes = _v10_js__WEBPACK_IMPORTED_MODULE_0__.AllowedMentionsTypes;
const ApplicationCommandOptionType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ApplicationCommandOptionType;
const ApplicationCommandPermissionType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ApplicationCommandPermissionType;
const ApplicationCommandType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ApplicationCommandType;
const ApplicationFlags = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ApplicationFlags;
const AuditLogEvent = _v10_js__WEBPACK_IMPORTED_MODULE_0__.AuditLogEvent;
const AuditLogOptionsType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.AuditLogOptionsType;
const ButtonStyle = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle;
const CDNRoutes = _v10_js__WEBPACK_IMPORTED_MODULE_0__.CDNRoutes;
const ChannelFlags = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ChannelFlags;
const ChannelType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ChannelType;
const ComponentType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ComponentType;
const ConnectionService = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ConnectionService;
const ConnectionVisibility = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ConnectionVisibility;
const EmbedType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.EmbedType;
const FormattingPatterns = _v10_js__WEBPACK_IMPORTED_MODULE_0__.FormattingPatterns;
const GatewayCloseCodes = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GatewayCloseCodes;
const GatewayDispatchEvents = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GatewayDispatchEvents;
const GatewayIntentBits = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GatewayIntentBits;
const GatewayOpcodes = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GatewayOpcodes;
const GatewayVersion = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GatewayVersion;
const GuildDefaultMessageNotifications = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildDefaultMessageNotifications;
const GuildExplicitContentFilter = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildExplicitContentFilter;
const GuildFeature = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildFeature;
const GuildHubType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildHubType;
const GuildMFALevel = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildMFALevel;
const GuildNSFWLevel = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildNSFWLevel;
const GuildPremiumTier = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildPremiumTier;
const GuildScheduledEventEntityType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildScheduledEventEntityType;
const GuildScheduledEventPrivacyLevel = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildScheduledEventPrivacyLevel;
const GuildScheduledEventStatus = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildScheduledEventStatus;
const GuildSystemChannelFlags = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildSystemChannelFlags;
const GuildVerificationLevel = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildVerificationLevel;
const GuildWidgetStyle = _v10_js__WEBPACK_IMPORTED_MODULE_0__.GuildWidgetStyle;
const ImageFormat = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ImageFormat;
const IntegrationExpireBehavior = _v10_js__WEBPACK_IMPORTED_MODULE_0__.IntegrationExpireBehavior;
const InteractionResponseType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.InteractionResponseType;
const InteractionType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.InteractionType;
const InviteTargetType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.InviteTargetType;
const Locale = _v10_js__WEBPACK_IMPORTED_MODULE_0__.Locale;
const MembershipScreeningFieldType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.MembershipScreeningFieldType;
const MessageActivityType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.MessageActivityType;
const MessageFlags = _v10_js__WEBPACK_IMPORTED_MODULE_0__.MessageFlags;
const MessageType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.MessageType;
const OAuth2Routes = _v10_js__WEBPACK_IMPORTED_MODULE_0__.OAuth2Routes;
const OAuth2Scopes = _v10_js__WEBPACK_IMPORTED_MODULE_0__.OAuth2Scopes;
const OverwriteType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.OverwriteType;
const PermissionFlagsBits = _v10_js__WEBPACK_IMPORTED_MODULE_0__.PermissionFlagsBits;
const PresenceUpdateStatus = _v10_js__WEBPACK_IMPORTED_MODULE_0__.PresenceUpdateStatus;
const RESTJSONErrorCodes = _v10_js__WEBPACK_IMPORTED_MODULE_0__.RESTJSONErrorCodes;
const RPCCloseEventCodes = _v10_js__WEBPACK_IMPORTED_MODULE_0__.RPCCloseEventCodes;
const RPCErrorCodes = _v10_js__WEBPACK_IMPORTED_MODULE_0__.RPCErrorCodes;
const RouteBases = _v10_js__WEBPACK_IMPORTED_MODULE_0__.RouteBases;
const Routes = _v10_js__WEBPACK_IMPORTED_MODULE_0__.Routes;
const SortOrderType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.SortOrderType;
const StageInstancePrivacyLevel = _v10_js__WEBPACK_IMPORTED_MODULE_0__.StageInstancePrivacyLevel;
const StickerFormatType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.StickerFormatType;
const StickerPackApplicationId = _v10_js__WEBPACK_IMPORTED_MODULE_0__.StickerPackApplicationId;
const StickerType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.StickerType;
const TeamMemberMembershipState = _v10_js__WEBPACK_IMPORTED_MODULE_0__.TeamMemberMembershipState;
const TextInputStyle = _v10_js__WEBPACK_IMPORTED_MODULE_0__.TextInputStyle;
const ThreadAutoArchiveDuration = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ThreadAutoArchiveDuration;
const ThreadMemberFlags = _v10_js__WEBPACK_IMPORTED_MODULE_0__.ThreadMemberFlags;
const UserFlags = _v10_js__WEBPACK_IMPORTED_MODULE_0__.UserFlags;
const UserPremiumType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.UserPremiumType;
const Utils = _v10_js__WEBPACK_IMPORTED_MODULE_0__.Utils;
const VideoQualityMode = _v10_js__WEBPACK_IMPORTED_MODULE_0__.VideoQualityMode;
const WebhookType = _v10_js__WEBPACK_IMPORTED_MODULE_0__.WebhookType;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIApplicationCommandPermissionsConstant": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.APIApplicationCommandPermissionsConstant),
/* harmony export */   "APIVersion": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.APIVersion),
/* harmony export */   "ActivityFlags": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ActivityFlags),
/* harmony export */   "ActivityPlatform": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ActivityPlatform),
/* harmony export */   "ActivityType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ActivityType),
/* harmony export */   "AllowedMentionsTypes": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.AllowedMentionsTypes),
/* harmony export */   "ApplicationCommandOptionType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ApplicationCommandOptionType),
/* harmony export */   "ApplicationCommandPermissionType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ApplicationCommandPermissionType),
/* harmony export */   "ApplicationCommandType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ApplicationCommandType),
/* harmony export */   "ApplicationFlags": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ApplicationFlags),
/* harmony export */   "AuditLogEvent": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.AuditLogEvent),
/* harmony export */   "AuditLogOptionsType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.AuditLogOptionsType),
/* harmony export */   "ButtonStyle": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ButtonStyle),
/* harmony export */   "CDNRoutes": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.CDNRoutes),
/* harmony export */   "ChannelFlags": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ChannelFlags),
/* harmony export */   "ChannelType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ChannelType),
/* harmony export */   "Client": () => (/* reexport safe */ _client_Client__WEBPACK_IMPORTED_MODULE_0__.Client),
/* harmony export */   "ComponentType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ComponentType),
/* harmony export */   "ConnectionService": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ConnectionService),
/* harmony export */   "ConnectionVisibility": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ConnectionVisibility),
/* harmony export */   "EmbedType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.EmbedType),
/* harmony export */   "FormattingPatterns": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.FormattingPatterns),
/* harmony export */   "GatewayCloseCodes": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GatewayCloseCodes),
/* harmony export */   "GatewayDispatchEvents": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GatewayDispatchEvents),
/* harmony export */   "GatewayIntentBits": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GatewayIntentBits),
/* harmony export */   "GatewayOpcodes": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GatewayOpcodes),
/* harmony export */   "GatewayVersion": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GatewayVersion),
/* harmony export */   "GuildDefaultMessageNotifications": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildDefaultMessageNotifications),
/* harmony export */   "GuildExplicitContentFilter": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildExplicitContentFilter),
/* harmony export */   "GuildFeature": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildFeature),
/* harmony export */   "GuildHubType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildHubType),
/* harmony export */   "GuildMFALevel": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildMFALevel),
/* harmony export */   "GuildNSFWLevel": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildNSFWLevel),
/* harmony export */   "GuildPremiumTier": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildPremiumTier),
/* harmony export */   "GuildScheduledEventEntityType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildScheduledEventEntityType),
/* harmony export */   "GuildScheduledEventPrivacyLevel": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildScheduledEventPrivacyLevel),
/* harmony export */   "GuildScheduledEventStatus": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildScheduledEventStatus),
/* harmony export */   "GuildSystemChannelFlags": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildSystemChannelFlags),
/* harmony export */   "GuildVerificationLevel": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildVerificationLevel),
/* harmony export */   "GuildWidgetStyle": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.GuildWidgetStyle),
/* harmony export */   "ImageFormat": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ImageFormat),
/* harmony export */   "IntegrationExpireBehavior": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.IntegrationExpireBehavior),
/* harmony export */   "InteractionResponseType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.InteractionResponseType),
/* harmony export */   "InteractionType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.InteractionType),
/* harmony export */   "InviteTargetType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.InviteTargetType),
/* harmony export */   "Locale": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.Locale),
/* harmony export */   "MembershipScreeningFieldType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.MembershipScreeningFieldType),
/* harmony export */   "MessageActivityType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.MessageActivityType),
/* harmony export */   "MessageFlags": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.MessageFlags),
/* harmony export */   "MessageType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.MessageType),
/* harmony export */   "OAuth2Routes": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.OAuth2Routes),
/* harmony export */   "OAuth2Scopes": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.OAuth2Scopes),
/* harmony export */   "OverwriteType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.OverwriteType),
/* harmony export */   "PermissionFlagsBits": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.PermissionFlagsBits),
/* harmony export */   "PresenceUpdateStatus": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.PresenceUpdateStatus),
/* harmony export */   "RESTJSONErrorCodes": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.RESTJSONErrorCodes),
/* harmony export */   "RPCCloseEventCodes": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.RPCCloseEventCodes),
/* harmony export */   "RPCErrorCodes": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.RPCErrorCodes),
/* harmony export */   "RouteBases": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.RouteBases),
/* harmony export */   "Routes": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.Routes),
/* harmony export */   "SortOrderType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.SortOrderType),
/* harmony export */   "StageInstancePrivacyLevel": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.StageInstancePrivacyLevel),
/* harmony export */   "StickerFormatType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.StickerFormatType),
/* harmony export */   "StickerPackApplicationId": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.StickerPackApplicationId),
/* harmony export */   "StickerType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.StickerType),
/* harmony export */   "TeamMemberMembershipState": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.TeamMemberMembershipState),
/* harmony export */   "TextInputStyle": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.TextInputStyle),
/* harmony export */   "ThreadAutoArchiveDuration": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ThreadAutoArchiveDuration),
/* harmony export */   "ThreadMemberFlags": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.ThreadMemberFlags),
/* harmony export */   "UserFlags": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.UserFlags),
/* harmony export */   "UserPremiumType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.UserPremiumType),
/* harmony export */   "Utils": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.Utils),
/* harmony export */   "VideoQualityMode": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.VideoQualityMode),
/* harmony export */   "WebhookType": () => (/* reexport safe */ discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__.WebhookType)
/* harmony export */ });
/* harmony import */ var _client_Client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client/Client */ "./src/client/Client.ts");
/* harmony import */ var discord_api_types_v10__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! discord-api-types/v10 */ "./node_modules/discord-api-types/v10.mjs");



})();

Discord = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7Ozs7Ozs7Ozs7O0FDRmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsNkJBQTZCLEdBQUcseUJBQXlCLEdBQUcseUJBQXlCLEdBQUcsc0JBQXNCLEdBQUcsc0JBQXNCO0FBQ3ZJLGFBQWEsbUJBQU8sQ0FBQyxvRUFBVTtBQUMvQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDLHNCQUFzQixLQUFLO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvREFBb0QseUJBQXlCLEtBQUs7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9EQUFvRCx5QkFBeUIsS0FBSztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNERBQTRELDZCQUE2QixLQUFLO0FBQy9GO0FBQ0E7Ozs7Ozs7Ozs7O0FDbFBhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsTUFBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxLQUFLLGdDQUFnQyxLQUFLLDJCQUEyQixLQUFLLGNBQWMsTUFBTTtBQUM5STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEtBQUssV0FBVyxNQUFNO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSyxXQUFXLE1BQU07QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLLFdBQVcsTUFBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxLQUFLO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsS0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2RmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxRGE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7Ozs7Ozs7Ozs7O0FDRmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7Ozs7Ozs7Ozs7O0FDRmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7Ozs7Ozs7Ozs7O0FDRmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7Ozs7Ozs7Ozs7O0FDRmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7Ozs7Ozs7Ozs7O0FDRmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7Ozs7Ozs7Ozs7O0FDRmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7Ozs7Ozs7Ozs7O0FDRmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7Ozs7Ozs7Ozs7O0FDRmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwRUFBMEUsb0NBQW9DLEtBQUs7QUFDcEg7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEOzs7Ozs7Ozs7OztBQ0ZhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEOzs7Ozs7Ozs7OztBQ0ZhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEOzs7Ozs7Ozs7OztBQ0ZhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEOzs7Ozs7Ozs7OztBQ0ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWEsbUJBQU8sQ0FBQywwSUFBeUI7QUFDOUMsYUFBYSxtQkFBTyxDQUFDLDhIQUFtQjtBQUN4QyxhQUFhLG1CQUFPLENBQUMsb0lBQXNCO0FBQzNDLGFBQWEsbUJBQU8sQ0FBQyxvSUFBc0I7QUFDM0MsYUFBYSxtQkFBTyxDQUFDLG9JQUFzQjtBQUMzQyxhQUFhLG1CQUFPLENBQUMsNElBQTBCO0FBQy9DLGFBQWEsbUJBQU8sQ0FBQyxrSUFBcUI7QUFDMUMsYUFBYSxtQkFBTyxDQUFDLDhIQUFtQjtBQUN4QyxhQUFhLG1CQUFPLENBQUMsa0lBQXFCO0FBQzFDLGFBQWEsbUJBQU8sQ0FBQyxrSUFBcUI7QUFDMUMsYUFBYSxtQkFBTyxDQUFDLDBJQUF5QjtBQUM5QyxhQUFhLG1CQUFPLENBQUMsb0pBQThCO0FBQ25ELGFBQWEsbUJBQU8sQ0FBQyw4SEFBbUI7QUFDeEM7Ozs7Ozs7Ozs7O0FDN0JhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEOzs7Ozs7Ozs7OztBQ0ZhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdEQUFnRCxHQUFHLHdDQUF3QztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrRkFBa0Ysd0NBQXdDLEtBQUs7QUFDaEk7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25CYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEI7QUFDOUIsYUFBYSxtQkFBTyxDQUFDLHVJQUFrQztBQUN2RCxhQUFhLG1CQUFPLENBQUMsMklBQW9DO0FBQ3pELGFBQWEsbUJBQU8sQ0FBQywySUFBb0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOERBQThELDhCQUE4QixLQUFLO0FBQ2xHOzs7Ozs7Ozs7OztBQzdCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDs7Ozs7Ozs7Ozs7QUNGYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDs7Ozs7Ozs7Ozs7QUNGYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDs7Ozs7Ozs7Ozs7QUNGYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDs7Ozs7Ozs7Ozs7QUNGYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDs7Ozs7Ozs7Ozs7QUNGYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwrQkFBK0IsR0FBRyx1QkFBdUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdEQUFnRCx1QkFBdUIsS0FBSztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdFQUFnRSwrQkFBK0IsS0FBSztBQUNyRzs7Ozs7Ozs7Ozs7QUNoRGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrREFBa0Qsd0JBQXdCLEtBQUs7QUFDaEY7Ozs7Ozs7Ozs7O0FDMUJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQixHQUFHLHFCQUFxQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEMscUJBQXFCLEtBQUs7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdEQUF3RCwyQkFBMkIsS0FBSztBQUN6Rjs7Ozs7Ozs7Ozs7QUNqRWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLEdBQUcsc0JBQXNCLEdBQUcsbUJBQW1CLEdBQUcscUJBQXFCLEdBQUcsNEJBQTRCLEdBQUcsaUJBQWlCLEdBQUcseUJBQXlCLEdBQUcsaUNBQWlDLEdBQUcscUJBQXFCLEdBQUcsb0JBQW9CLEdBQUcsMkJBQTJCLEdBQUcsbUJBQW1CLEdBQUcsd0JBQXdCLEdBQUcsbUJBQW1CLEdBQUcscUJBQXFCO0FBQzFYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEMscUJBQXFCLEtBQUs7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLENBQUMsd0NBQXdDLG1CQUFtQixLQUFLO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrREFBa0Qsd0JBQXdCLEtBQUs7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdDQUF3QyxtQkFBbUIsS0FBSztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdEQUF3RCwyQkFBMkIsS0FBSztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEMsb0JBQW9CLEtBQUs7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0QyxxQkFBcUIsS0FBSztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9FQUFvRSxpQ0FBaUMsS0FBSztBQUMzRztBQUNBO0FBQ0EsQ0FBQyxvREFBb0QseUJBQXlCLEtBQUs7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0MsaUJBQWlCLEtBQUs7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMERBQTBELDRCQUE0QixLQUFLO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNENBQTRDLHFCQUFxQixLQUFLO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0MsbUJBQW1CLEtBQUs7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QyxzQkFBc0IsS0FBSztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEMsb0JBQW9CLEtBQUs7QUFDcEU7Ozs7Ozs7Ozs7O0FDalVhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEOzs7Ozs7Ozs7OztBQ0xhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHFCQUFxQixHQUFHLG9CQUFvQixHQUFHLHdCQUF3QixHQUFHLDRCQUE0QjtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMERBQTBELDRCQUE0QixLQUFLO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtEQUFrRCx3QkFBd0IsS0FBSztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxRQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEMsb0JBQW9CLEtBQUs7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNENBQTRDLHFCQUFxQixLQUFLO0FBQ3ZFOzs7Ozs7Ozs7OztBQzdFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQ0FBb0MsR0FBRyx3QkFBd0IsR0FBRyxpQ0FBaUMsR0FBRyxvQkFBb0IsR0FBRywrQkFBK0IsR0FBRyxvQkFBb0IsR0FBRyx3QkFBd0IsR0FBRyw4QkFBOEIsR0FBRyxzQkFBc0IsR0FBRyxxQkFBcUIsR0FBRyxrQ0FBa0MsR0FBRyx3Q0FBd0M7QUFDaFg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtGQUFrRix3Q0FBd0MsS0FBSztBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzRUFBc0Usa0NBQWtDLEtBQUs7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0QyxxQkFBcUIsS0FBSztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QyxzQkFBc0IsS0FBSztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOERBQThELDhCQUE4QixLQUFLO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0RBQWtELHdCQUF3QixLQUFLO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDBDQUEwQyxvQkFBb0IsS0FBSztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdFQUFnRSwrQkFBK0IsS0FBSztBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEMsb0JBQW9CLEtBQUs7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9FQUFvRSxpQ0FBaUMsS0FBSztBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrREFBa0Qsd0JBQXdCLEtBQUs7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwRUFBMEUsb0NBQW9DLEtBQUs7QUFDcEg7Ozs7Ozs7Ozs7O0FDbFFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVDQUF1QyxHQUFHLGlDQUFpQyxHQUFHLHFDQUFxQztBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0RUFBNEUscUNBQXFDLEtBQUs7QUFDdkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvRUFBb0UsaUNBQWlDLEtBQUs7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnRkFBZ0YsdUNBQXVDLEtBQUs7QUFDN0g7Ozs7Ozs7Ozs7O0FDaENhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWEsbUJBQU8sQ0FBQyxzRUFBVztBQUNoQyxhQUFhLG1CQUFPLENBQUMsbUZBQWU7QUFDcEMsYUFBYSxtQkFBTyxDQUFDLDZFQUFZO0FBQ2pDLGFBQWEsbUJBQU8sQ0FBQywyRUFBVztBQUNoQyxhQUFhLG1CQUFPLENBQUMsdUVBQVM7QUFDOUIsYUFBYSxtQkFBTyxDQUFDLDJFQUFXO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBUztBQUM5QixhQUFhLG1CQUFPLENBQUMsbUdBQXVCO0FBQzVDLGFBQWEsbUJBQU8sQ0FBQyxxRkFBZ0I7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHlFQUFVO0FBQy9CLGFBQWEsbUJBQU8sQ0FBQyx5RUFBVTtBQUMvQixhQUFhLG1CQUFPLENBQUMsbUZBQWU7QUFDcEMsYUFBYSxtQkFBTyxDQUFDLHVGQUFpQjtBQUN0QyxhQUFhLG1CQUFPLENBQUMsMkVBQVc7QUFDaEMsYUFBYSxtQkFBTyxDQUFDLHVFQUFTO0FBQzlCLGFBQWEsbUJBQU8sQ0FBQyw2RUFBWTtBQUNqQyxhQUFhLG1CQUFPLENBQUMscUVBQVE7QUFDN0IsYUFBYSxtQkFBTyxDQUFDLHVFQUFTO0FBQzlCLGFBQWEsbUJBQU8sQ0FBQywyRUFBVztBQUNoQzs7Ozs7Ozs7Ozs7QUNuQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYSxtQkFBTyxDQUFDLCtIQUFxQztBQUMxRCxhQUFhLG1CQUFPLENBQUMsaUhBQThCO0FBQ25ELGFBQWEsbUJBQU8sQ0FBQyxpR0FBc0I7QUFDM0MsYUFBYSxtQkFBTyxDQUFDLDJIQUFtQztBQUN4RCxhQUFhLG1CQUFPLENBQUMsK0dBQTZCO0FBQ2xELGFBQWEsbUJBQU8sQ0FBQyxpR0FBc0I7QUFDM0MsYUFBYSxtQkFBTyxDQUFDLDJHQUEyQjtBQUNoRDs7Ozs7Ozs7Ozs7QUN2QmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrREFBa0Qsd0JBQXdCLEtBQUs7QUFDaEY7Ozs7Ozs7Ozs7O0FDZGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVMsVUFBVSxRQUFRO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEMsb0JBQW9CLEtBQUs7QUFDcEU7Ozs7Ozs7Ozs7O0FDbklhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEOzs7Ozs7Ozs7OztBQ0xhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0VBQW9FLGlDQUFpQyxLQUFLO0FBQzNHOzs7Ozs7Ozs7OztBQ2pCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx5QkFBeUIsR0FBRyxtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdDQUF3QyxtQkFBbUIsS0FBSztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvREFBb0QseUJBQXlCLEtBQUs7QUFDbkY7Ozs7Ozs7Ozs7O0FDN0JhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0VBQW9FLGlDQUFpQyxLQUFLO0FBQzNHOzs7Ozs7Ozs7OztBQ2RhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEOzs7Ozs7Ozs7OztBQ0xhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDRCQUE0QixHQUFHLHlCQUF5QixHQUFHLHVCQUF1QixHQUFHLGlCQUFpQjtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DLGlCQUFpQixLQUFLO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdEQUFnRCx1QkFBdUIsS0FBSztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0RBQW9ELHlCQUF5QixLQUFLO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwREFBMEQsNEJBQTRCLEtBQUs7QUFDNUY7Ozs7Ozs7Ozs7O0FDeEhhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEOzs7Ozs7Ozs7OztBQ0xhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0MsbUJBQW1CLEtBQUs7QUFDakU7Ozs7Ozs7Ozs7O0FDckJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWMsR0FBRywwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNEQUFzRCwwQkFBMEIsS0FBSztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsR0FBRztBQUNoQixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsR0FBRztBQUNoQixhQUFhLFFBQVE7QUFDckIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWUsR0FBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Es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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELEdBQUc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU0sSUFBMEU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG1DQUFPO0FBQ1g7QUFDQSxLQUFLO0FBQUEsa0dBQUM7QUFDTjtBQUNBO0FBQ0EsT0FBTyxFQVNKO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM3VDaUc7QUFFbkI7QUFDdkI7QUFDRTtBQUNNO0FBQ2Q7QUFDa0I7QUFDVjtBQVExRCxNQUFNLE1BQU8sU0FBUSxXQUFXO0lBMkM5Qjs7OztPQUlHO0lBQ0gsWUFDRSxrQkFBdUMsZ0VBQXFCLEVBQzVELG1CQUFzQyxpRUFBc0I7UUFFNUQsS0FBSyxFQUFFO1FBdENUOzs7O1dBSUc7UUFDSCxhQUFRLEdBQVcsMEJBQTBCO1FBc0I3QyxvQkFBZSxHQUFrQixJQUFJO1FBNkRyQyxVQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFFdEIsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBbkRsQixJQUFJLENBQUMsZUFBZSxtQ0FBTyxnRUFBcUIsR0FBSyxlQUFlLENBQUM7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixtQ0FBTyxpRUFBc0IsR0FBSyxnQkFBZ0IsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdCQUF3QjtJQUNsQixLQUFLLENBQUMsUUFBaUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLOztZQUNyRCxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUFFLE1BQU0sZUFBZTtZQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxLQUFLO1lBRWxDLE1BQU0sVUFBVSxHQUFHLElBQUksZUFBZSxFQUFFO1lBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFpQixFQUFFLEVBQUU7Z0JBQzdFLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUMvQixDQUFDLENBQUM7WUFFRixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxHQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVqRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQWUsRUFBRSxFQUFFO2dCQUN0QyxNQUFNLE9BQU8sR0FBMkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxRQUFRLE9BQU8sQ0FBQyxFQUFFLEVBQUU7b0JBQ2xCLEtBQUssMEVBQXVCO3dCQUMxQixzRUFBb0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO3dCQUNuQyxNQUFNO29CQUNSLEtBQUssMkVBQXdCO3dCQUMzQix1RUFBcUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO3dCQUNwQyxNQUFNO29CQUNSLEtBQUssMkVBQXdCO3dCQUMzQix1RUFBcUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO3dCQUNwQyxNQUFNO29CQUNSLEtBQUssZ0ZBQTZCO3dCQUNoQyw0RUFBMEIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO3dCQUN6QyxNQUFNO29CQUNSLEtBQUssdUVBQW9CO3dCQUN2QixtRUFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO3dCQUNoQyxNQUFNO29CQUNSLEtBQUssOEVBQTJCO3dCQUM5QiwwRUFBd0IsQ0FBQyxJQUFJLENBQUM7d0JBQzlCLE1BQU07aUJBQ1Q7WUFDSCxDQUFDO1lBRUQsT0FBTyxJQUFJO1FBQ2IsQ0FBQztLQUFBO0NBS0Y7QUFFRCwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLDJEQUEyRDtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzNIcEIsU0FBUyxlQUFlLENBQWdCLE9BQStCO0FBRXRGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGYyxTQUFTLGdCQUFnQixDQUFlLE9BQWdDO0lBQ3JGLElBQUksQ0FBQyxFQUFFO0FBQ1QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINkM7QUFFL0IsU0FBUyxtQkFBbUI7SUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyw0REFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO0FBQ3hGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0o2QztBQUNGO0FBRTdCLFNBQVMsWUFBWSxDQUFnQixPQUFxQjtJQUN2RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7SUFDdEQsNERBQWtCLENBQUMsSUFBSSxDQUFDO0lBQ3hCLDJEQUFpQixDQUFDLElBQUksQ0FBQztBQUN6QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmMsU0FBUyxxQkFBcUIsQ0FBZ0IsT0FBOEI7QUFFM0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZjLFNBQVMsZ0JBQWdCLENBQWdCLE9BQXlCO0FBRWpGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHdFO0FBRzFELFNBQVMsYUFBYTtJQUNuQyxNQUFNLE9BQU8sR0FBc0I7UUFDakMsRUFBRSxFQUFFLDJFQUF3QjtRQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWU7S0FDeEI7SUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHVFO0FBR3pELFNBQVMsWUFBWTtJQUNsQyxNQUFNLE9BQU8sR0FBcUI7UUFDaEMsRUFBRSxFQUFFLDBFQUF1QjtRQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWU7S0FDeEI7SUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUitCO0FBR3pCLE1BQU0scUJBQXFCLEdBQXlCO0lBQ3pELEtBQUssRUFBRyxFQUFFO0lBQ1YsVUFBVSxFQUFHO1FBQ1gsRUFBRSxFQUFFLDJEQUFXLDBDQUFFLFFBQVEsRUFBRSxLQUFJLE9BQU87UUFDdEMsT0FBTyxFQUFFLGNBQWM7UUFDdkIsTUFBTSxFQUFFLGNBQWM7S0FDdkI7SUFDRCxPQUFPLEVBQUUsQ0FBQztDQUNYO0FBRU0sTUFBTSxzQkFBc0IsR0FBc0I7SUFDdkQsQ0FBQyxFQUFFLEVBQUU7SUFDTCxRQUFRLEVBQUUsTUFBTTtDQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakIwQjs7QUFFM0IsaUVBQWUsb0NBQUcsRUFBQztBQUNaLGlEQUFpRCw2RUFBNEM7QUFDN0YsbUJBQW1CLCtDQUFjO0FBQ2pDLHNCQUFzQixrREFBaUI7QUFDdkMseUJBQXlCLHFEQUFvQjtBQUM3QyxxQkFBcUIsaURBQWdCO0FBQ3JDLDZCQUE2Qix5REFBd0I7QUFDckQscUNBQXFDLGlFQUFnQztBQUNyRSx5Q0FBeUMscUVBQW9DO0FBQzdFLCtCQUErQiwyREFBMEI7QUFDekQseUJBQXlCLHFEQUFvQjtBQUM3QyxzQkFBc0Isa0RBQWlCO0FBQ3ZDLDRCQUE0Qix3REFBdUI7QUFDbkQsb0JBQW9CLGdEQUFlO0FBQ25DLGtCQUFrQiw4Q0FBYTtBQUMvQixxQkFBcUIsaURBQWdCO0FBQ3JDLG9CQUFvQixnREFBZTtBQUNuQyxzQkFBc0Isa0RBQWlCO0FBQ3ZDLDBCQUEwQixzREFBcUI7QUFDL0MsNkJBQTZCLHlEQUF3QjtBQUNyRCxrQkFBa0IsOENBQWE7QUFDL0IsMkJBQTJCLHVEQUFzQjtBQUNqRCwwQkFBMEIsc0RBQXFCO0FBQy9DLDhCQUE4QiwwREFBeUI7QUFDdkQsMEJBQTBCLHNEQUFxQjtBQUMvQyx1QkFBdUIsbURBQWtCO0FBQ3pDLHVCQUF1QixtREFBa0I7QUFDekMseUNBQXlDLHFFQUFvQztBQUM3RSxtQ0FBbUMsK0RBQThCO0FBQ2pFLHFCQUFxQixpREFBZ0I7QUFDckMscUJBQXFCLGlEQUFnQjtBQUNyQyxzQkFBc0Isa0RBQWlCO0FBQ3ZDLHVCQUF1QixtREFBa0I7QUFDekMseUJBQXlCLHFEQUFvQjtBQUM3QyxzQ0FBc0Msa0VBQWlDO0FBQ3ZFLHdDQUF3QyxvRUFBbUM7QUFDM0Usa0NBQWtDLDhEQUE2QjtBQUMvRCxnQ0FBZ0MsNERBQTJCO0FBQzNELCtCQUErQiwyREFBMEI7QUFDekQseUJBQXlCLHFEQUFvQjtBQUM3QyxvQkFBb0IsZ0RBQWU7QUFDbkMsa0NBQWtDLDhEQUE2QjtBQUMvRCxnQ0FBZ0MsNERBQTJCO0FBQzNELHdCQUF3QixvREFBbUI7QUFDM0MseUJBQXlCLHFEQUFvQjtBQUM3QyxlQUFlLDJDQUFVO0FBQ3pCLHFDQUFxQyxpRUFBZ0M7QUFDckUsNEJBQTRCLHdEQUF1QjtBQUNuRCxxQkFBcUIsaURBQWdCO0FBQ3JDLG9CQUFvQixnREFBZTtBQUNuQyxxQkFBcUIsaURBQWdCO0FBQ3JDLHFCQUFxQixpREFBZ0I7QUFDckMsc0JBQXNCLGtEQUFpQjtBQUN2Qyw0QkFBNEIsd0RBQXVCO0FBQ25ELDZCQUE2Qix5REFBd0I7QUFDckQsMkJBQTJCLHVEQUFzQjtBQUNqRCwyQkFBMkIsdURBQXNCO0FBQ2pELHNCQUFzQixrREFBaUI7QUFDdkMsbUJBQW1CLCtDQUFjO0FBQ2pDLGVBQWUsMkNBQVU7QUFDekIsc0JBQXNCLGtEQUFpQjtBQUN2QyxrQ0FBa0MsOERBQTZCO0FBQy9ELDBCQUEwQixzREFBcUI7QUFDL0MsaUNBQWlDLDZEQUE0QjtBQUM3RCxvQkFBb0IsZ0RBQWU7QUFDbkMsa0NBQWtDLDhEQUE2QjtBQUMvRCx1QkFBdUIsbURBQWtCO0FBQ3pDLGtDQUFrQyw4REFBNkI7QUFDL0QsMEJBQTBCLHNEQUFxQjtBQUMvQyxrQkFBa0IsOENBQWE7QUFDL0Isd0JBQXdCLG9EQUFtQjtBQUMzQyxjQUFjLDBDQUFTO0FBQ3ZCLHlCQUF5QixxREFBb0I7QUFDN0Msb0JBQW9CLGdEQUFlOzs7Ozs7O1VDM0UxQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0orQjtBQUVNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9nYXRld2F5L2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL2dhdGV3YXkvdjEwLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL19hcHBsaWNhdGlvbkNvbW1hbmRzL19jaGF0SW5wdXQvYXR0YWNobWVudC5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL19hcHBsaWNhdGlvbkNvbW1hbmRzL19jaGF0SW5wdXQvYmFzZS5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL19hcHBsaWNhdGlvbkNvbW1hbmRzL19jaGF0SW5wdXQvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL19hcHBsaWNhdGlvbkNvbW1hbmRzL19jaGF0SW5wdXQvY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL19hcHBsaWNhdGlvbkNvbW1hbmRzL19jaGF0SW5wdXQvaW50ZWdlci5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL19hcHBsaWNhdGlvbkNvbW1hbmRzL19jaGF0SW5wdXQvbWVudGlvbmFibGUuanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9wYXlsb2Fkcy92MTAvX2ludGVyYWN0aW9ucy9fYXBwbGljYXRpb25Db21tYW5kcy9fY2hhdElucHV0L251bWJlci5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL19hcHBsaWNhdGlvbkNvbW1hbmRzL19jaGF0SW5wdXQvcm9sZS5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL19hcHBsaWNhdGlvbkNvbW1hbmRzL19jaGF0SW5wdXQvc2hhcmVkLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL19pbnRlcmFjdGlvbnMvX2FwcGxpY2F0aW9uQ29tbWFuZHMvX2NoYXRJbnB1dC9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9wYXlsb2Fkcy92MTAvX2ludGVyYWN0aW9ucy9fYXBwbGljYXRpb25Db21tYW5kcy9fY2hhdElucHV0L3N1YmNvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9wYXlsb2Fkcy92MTAvX2ludGVyYWN0aW9ucy9fYXBwbGljYXRpb25Db21tYW5kcy9fY2hhdElucHV0L3N1YmNvbW1hbmRHcm91cC5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL19hcHBsaWNhdGlvbkNvbW1hbmRzL19jaGF0SW5wdXQvdXNlci5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL19hcHBsaWNhdGlvbkNvbW1hbmRzL2NoYXRJbnB1dC5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL19hcHBsaWNhdGlvbkNvbW1hbmRzL2NvbnRleHRNZW51LmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL19pbnRlcmFjdGlvbnMvX2FwcGxpY2F0aW9uQ29tbWFuZHMvcGVybWlzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9wYXlsb2Fkcy92MTAvX2ludGVyYWN0aW9ucy9hcHBsaWNhdGlvbkNvbW1hbmRzLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL19pbnRlcmFjdGlvbnMvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL19pbnRlcmFjdGlvbnMvYmFzZS5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9faW50ZXJhY3Rpb25zL21lc3NhZ2VDb21wb25lbnRzLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL19pbnRlcmFjdGlvbnMvbW9kYWxTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9wYXlsb2Fkcy92MTAvX2ludGVyYWN0aW9ucy9waW5nLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL19pbnRlcmFjdGlvbnMvcmVzcG9uc2VzLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL2F1ZGl0TG9nLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9wYXlsb2Fkcy92MTAvZW1vamkuanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9wYXlsb2Fkcy92MTAvZ2F0ZXdheS5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9ndWlsZC5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9ndWlsZFNjaGVkdWxlZEV2ZW50LmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL2luZGV4LmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL2ludGVyYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC9pbnZpdGUuanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9wYXlsb2Fkcy92MTAvb2F1dGgyLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL3Blcm1pc3Npb25zLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL3N0YWdlSW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9wYXlsb2Fkcy92MTAvc3RpY2tlci5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC90ZWFtcy5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3BheWxvYWRzL3YxMC91c2VyLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL3ZvaWNlLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcGF5bG9hZHMvdjEwL3dlYmhvb2suanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9yZXN0L2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3Jlc3QvdjEwL2F1ZGl0TG9nLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcmVzdC92MTAvY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3Jlc3QvdjEwL2Vtb2ppLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcmVzdC92MTAvZ2F0ZXdheS5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3Jlc3QvdjEwL2d1aWxkLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcmVzdC92MTAvZ3VpbGRTY2hlZHVsZWRFdmVudC5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3Jlc3QvdjEwL2luZGV4LmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcmVzdC92MTAvaW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcmVzdC92MTAvaW52aXRlLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcmVzdC92MTAvb2F1dGgyLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcmVzdC92MTAvc3RhZ2VJbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3Jlc3QvdjEwL3N0aWNrZXIuanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9yZXN0L3YxMC90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3Jlc3QvdjEwL3VzZXIuanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9yZXN0L3YxMC92b2ljZS5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3Jlc3QvdjEwL3dlYmhvb2suanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL25vZGVfbW9kdWxlcy9kaXNjb3JkLWFwaS10eXBlcy9ycGMvY29tbW9uLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9ub2RlX21vZHVsZXMvZGlzY29yZC1hcGktdHlwZXMvcnBjL3YxMC5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3V0aWxzL3YxMC5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3YxMC5qcyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL3BsYXRmb3JtL3BsYXRmb3JtLmpzIiwid2VicGFjazovL0Rpc2NvcmQvLi9zcmMvY2xpZW50L0NsaWVudC50cyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vc3JjL2NsaWVudC9nYXRld2F5L3JlY2VpdmUvZGlzcGF0Y2gudHMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL3NyYy9jbGllbnQvZ2F0ZXdheS9yZWNlaXZlL2hlYXJ0YmVhdC50cyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vc3JjL2NsaWVudC9nYXRld2F5L3JlY2VpdmUvaGVhcnRiZWF0QWNrLnRzIiwid2VicGFjazovL0Rpc2NvcmQvLi9zcmMvY2xpZW50L2dhdGV3YXkvcmVjZWl2ZS9oZWxsby50cyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vc3JjL2NsaWVudC9nYXRld2F5L3JlY2VpdmUvaW52YWxpZFNlc3Npb24udHMiLCJ3ZWJwYWNrOi8vRGlzY29yZC8uL3NyYy9jbGllbnQvZ2F0ZXdheS9yZWNlaXZlL3JlY29ubmVjdC50cyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vc3JjL2NsaWVudC9nYXRld2F5L3NlbmQvaGVhcnRiZWF0LnRzIiwid2VicGFjazovL0Rpc2NvcmQvLi9zcmMvY2xpZW50L2dhdGV3YXkvc2VuZC9pZGVudGlmeS50cyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vc3JjL3V0aWwvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtYXBpLXR5cGVzL3YxMC5tanMiLCJ3ZWJwYWNrOi8vRGlzY29yZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EaXNjb3JkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0Rpc2NvcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0Rpc2NvcmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9EaXNjb3JkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRGlzY29yZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0Rpc2NvcmQvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9EaXNjb3JkLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBUeXBlcyBleHRyYWN0ZWQgZnJvbSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheVxuICovXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2F0ZXdheURpc3BhdGNoRXZlbnRzID0gZXhwb3J0cy5HYXRld2F5SW50ZW50Qml0cyA9IGV4cG9ydHMuR2F0ZXdheUNsb3NlQ29kZXMgPSBleHBvcnRzLkdhdGV3YXlPcGNvZGVzID0gZXhwb3J0cy5HYXRld2F5VmVyc2lvbiA9IHZvaWQgMDtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21tb25cIiksIGV4cG9ydHMpO1xuZXhwb3J0cy5HYXRld2F5VmVyc2lvbiA9ICcxMCc7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3RvcGljcy9vcGNvZGVzLWFuZC1zdGF0dXMtY29kZXMjZ2F0ZXdheS1nYXRld2F5LW9wY29kZXNcbiAqL1xudmFyIEdhdGV3YXlPcGNvZGVzO1xuKGZ1bmN0aW9uIChHYXRld2F5T3Bjb2Rlcykge1xuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IHdhcyBkaXNwYXRjaGVkXG4gICAgICovXG4gICAgR2F0ZXdheU9wY29kZXNbR2F0ZXdheU9wY29kZXNbXCJEaXNwYXRjaFwiXSA9IDBdID0gXCJEaXNwYXRjaFwiO1xuICAgIC8qKlxuICAgICAqIEEgYmlkaXJlY3Rpb25hbCBvcGNvZGUgdG8gbWFpbnRhaW4gYW4gYWN0aXZlIGdhdGV3YXkgY29ubmVjdGlvbi5cbiAgICAgKiBGaXJlZCBwZXJpb2RpY2FsbHkgYnkgdGhlIGNsaWVudCwgb3IgZmlyZWQgYnkgdGhlIGdhdGV3YXkgdG8gcmVxdWVzdCBhbiBpbW1lZGlhdGUgaGVhcnRiZWF0IGZyb20gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICBHYXRld2F5T3Bjb2Rlc1tHYXRld2F5T3Bjb2Rlc1tcIkhlYXJ0YmVhdFwiXSA9IDFdID0gXCJIZWFydGJlYXRcIjtcbiAgICAvKipcbiAgICAgKiBTdGFydHMgYSBuZXcgc2Vzc2lvbiBkdXJpbmcgdGhlIGluaXRpYWwgaGFuZHNoYWtlXG4gICAgICovXG4gICAgR2F0ZXdheU9wY29kZXNbR2F0ZXdheU9wY29kZXNbXCJJZGVudGlmeVwiXSA9IDJdID0gXCJJZGVudGlmeVwiO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY2xpZW50J3MgcHJlc2VuY2VcbiAgICAgKi9cbiAgICBHYXRld2F5T3Bjb2Rlc1tHYXRld2F5T3Bjb2Rlc1tcIlByZXNlbmNlVXBkYXRlXCJdID0gM10gPSBcIlByZXNlbmNlVXBkYXRlXCI7XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBqb2luL2xlYXZlIG9yIG1vdmUgYmV0d2VlbiB2b2ljZSBjaGFubmVsc1xuICAgICAqL1xuICAgIEdhdGV3YXlPcGNvZGVzW0dhdGV3YXlPcGNvZGVzW1wiVm9pY2VTdGF0ZVVwZGF0ZVwiXSA9IDRdID0gXCJWb2ljZVN0YXRlVXBkYXRlXCI7XG4gICAgLyoqXG4gICAgICogUmVzdW1lIGEgcHJldmlvdXMgc2Vzc2lvbiB0aGF0IHdhcyBkaXNjb25uZWN0ZWRcbiAgICAgKi9cbiAgICBHYXRld2F5T3Bjb2Rlc1tHYXRld2F5T3Bjb2Rlc1tcIlJlc3VtZVwiXSA9IDZdID0gXCJSZXN1bWVcIjtcbiAgICAvKipcbiAgICAgKiBZb3Ugc2hvdWxkIGF0dGVtcHQgdG8gcmVjb25uZWN0IGFuZCByZXN1bWUgaW1tZWRpYXRlbHlcbiAgICAgKi9cbiAgICBHYXRld2F5T3Bjb2Rlc1tHYXRld2F5T3Bjb2Rlc1tcIlJlY29ubmVjdFwiXSA9IDddID0gXCJSZWNvbm5lY3RcIjtcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGluZm9ybWF0aW9uIGFib3V0IG9mZmxpbmUgZ3VpbGQgbWVtYmVycyBpbiBhIGxhcmdlIGd1aWxkXG4gICAgICovXG4gICAgR2F0ZXdheU9wY29kZXNbR2F0ZXdheU9wY29kZXNbXCJSZXF1ZXN0R3VpbGRNZW1iZXJzXCJdID0gOF0gPSBcIlJlcXVlc3RHdWlsZE1lbWJlcnNcIjtcbiAgICAvKipcbiAgICAgKiBUaGUgc2Vzc2lvbiBoYXMgYmVlbiBpbnZhbGlkYXRlZC4gWW91IHNob3VsZCByZWNvbm5lY3QgYW5kIGlkZW50aWZ5L3Jlc3VtZSBhY2NvcmRpbmdseVxuICAgICAqL1xuICAgIEdhdGV3YXlPcGNvZGVzW0dhdGV3YXlPcGNvZGVzW1wiSW52YWxpZFNlc3Npb25cIl0gPSA5XSA9IFwiSW52YWxpZFNlc3Npb25cIjtcbiAgICAvKipcbiAgICAgKiBTZW50IGltbWVkaWF0ZWx5IGFmdGVyIGNvbm5lY3RpbmcsIGNvbnRhaW5zIHRoZSBgaGVhcnRiZWF0X2ludGVydmFsYCB0byB1c2VcbiAgICAgKi9cbiAgICBHYXRld2F5T3Bjb2Rlc1tHYXRld2F5T3Bjb2Rlc1tcIkhlbGxvXCJdID0gMTBdID0gXCJIZWxsb1wiO1xuICAgIC8qKlxuICAgICAqIFNlbnQgaW4gcmVzcG9uc2UgdG8gcmVjZWl2aW5nIGEgaGVhcnRiZWF0IHRvIGFja25vd2xlZGdlIHRoYXQgaXQgaGFzIGJlZW4gcmVjZWl2ZWRcbiAgICAgKi9cbiAgICBHYXRld2F5T3Bjb2Rlc1tHYXRld2F5T3Bjb2Rlc1tcIkhlYXJ0YmVhdEFja1wiXSA9IDExXSA9IFwiSGVhcnRiZWF0QWNrXCI7XG59KShHYXRld2F5T3Bjb2RlcyA9IGV4cG9ydHMuR2F0ZXdheU9wY29kZXMgfHwgKGV4cG9ydHMuR2F0ZXdheU9wY29kZXMgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3Mvb3Bjb2Rlcy1hbmQtc3RhdHVzLWNvZGVzI2dhdGV3YXktZ2F0ZXdheS1jbG9zZS1ldmVudC1jb2Rlc1xuICovXG52YXIgR2F0ZXdheUNsb3NlQ29kZXM7XG4oZnVuY3Rpb24gKEdhdGV3YXlDbG9zZUNvZGVzKSB7XG4gICAgLyoqXG4gICAgICogV2UncmUgbm90IHN1cmUgd2hhdCB3ZW50IHdyb25nLiBUcnkgcmVjb25uZWN0aW5nP1xuICAgICAqL1xuICAgIEdhdGV3YXlDbG9zZUNvZGVzW0dhdGV3YXlDbG9zZUNvZGVzW1wiVW5rbm93bkVycm9yXCJdID0gNDAwMF0gPSBcIlVua25vd25FcnJvclwiO1xuICAgIC8qKlxuICAgICAqIFlvdSBzZW50IGFuIGludmFsaWQgR2F0ZXdheSBvcGNvZGUgb3IgYW4gaW52YWxpZCBwYXlsb2FkIGZvciBhbiBvcGNvZGUuIERvbid0IGRvIHRoYXQhXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvdG9waWNzL2dhdGV3YXkjcGF5bG9hZHMtYW5kLW9wY29kZXNcbiAgICAgKi9cbiAgICBHYXRld2F5Q2xvc2VDb2Rlc1tHYXRld2F5Q2xvc2VDb2Rlc1tcIlVua25vd25PcGNvZGVcIl0gPSA0MDAxXSA9IFwiVW5rbm93bk9wY29kZVwiO1xuICAgIC8qKlxuICAgICAqIFlvdSBzZW50IGFuIGludmFsaWQgcGF5bG9hZCB0byB1cy4gRG9uJ3QgZG8gdGhhdCFcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheSNzZW5kaW5nLXBheWxvYWRzXG4gICAgICovXG4gICAgR2F0ZXdheUNsb3NlQ29kZXNbR2F0ZXdheUNsb3NlQ29kZXNbXCJEZWNvZGVFcnJvclwiXSA9IDQwMDJdID0gXCJEZWNvZGVFcnJvclwiO1xuICAgIC8qKlxuICAgICAqIFlvdSBzZW50IHVzIGEgcGF5bG9hZCBwcmlvciB0byBpZGVudGlmeWluZ1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3RvcGljcy9nYXRld2F5I2lkZW50aWZ5XG4gICAgICovXG4gICAgR2F0ZXdheUNsb3NlQ29kZXNbR2F0ZXdheUNsb3NlQ29kZXNbXCJOb3RBdXRoZW50aWNhdGVkXCJdID0gNDAwM10gPSBcIk5vdEF1dGhlbnRpY2F0ZWRcIjtcbiAgICAvKipcbiAgICAgKiBUaGUgYWNjb3VudCB0b2tlbiBzZW50IHdpdGggeW91ciBpZGVudGlmeSBwYXlsb2FkIGlzIGluY29ycmVjdFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3RvcGljcy9nYXRld2F5I2lkZW50aWZ5XG4gICAgICovXG4gICAgR2F0ZXdheUNsb3NlQ29kZXNbR2F0ZXdheUNsb3NlQ29kZXNbXCJBdXRoZW50aWNhdGlvbkZhaWxlZFwiXSA9IDQwMDRdID0gXCJBdXRoZW50aWNhdGlvbkZhaWxlZFwiO1xuICAgIC8qKlxuICAgICAqIFlvdSBzZW50IG1vcmUgdGhhbiBvbmUgaWRlbnRpZnkgcGF5bG9hZC4gRG9uJ3QgZG8gdGhhdCFcbiAgICAgKi9cbiAgICBHYXRld2F5Q2xvc2VDb2Rlc1tHYXRld2F5Q2xvc2VDb2Rlc1tcIkFscmVhZHlBdXRoZW50aWNhdGVkXCJdID0gNDAwNV0gPSBcIkFscmVhZHlBdXRoZW50aWNhdGVkXCI7XG4gICAgLyoqXG4gICAgICogVGhlIHNlcXVlbmNlIHNlbnQgd2hlbiByZXN1bWluZyB0aGUgc2Vzc2lvbiB3YXMgaW52YWxpZC4gUmVjb25uZWN0IGFuZCBzdGFydCBhIG5ldyBzZXNzaW9uXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvdG9waWNzL2dhdGV3YXkjcmVzdW1lXG4gICAgICovXG4gICAgR2F0ZXdheUNsb3NlQ29kZXNbR2F0ZXdheUNsb3NlQ29kZXNbXCJJbnZhbGlkU2VxXCJdID0gNDAwN10gPSBcIkludmFsaWRTZXFcIjtcbiAgICAvKipcbiAgICAgKiBXb2FoIG5lbGx5ISBZb3UncmUgc2VuZGluZyBwYXlsb2FkcyB0byB1cyB0b28gcXVpY2tseS4gU2xvdyBpdCBkb3duISBZb3Ugd2lsbCBiZSBkaXNjb25uZWN0ZWQgb24gcmVjZWl2aW5nIHRoaXNcbiAgICAgKi9cbiAgICBHYXRld2F5Q2xvc2VDb2Rlc1tHYXRld2F5Q2xvc2VDb2Rlc1tcIlJhdGVMaW1pdGVkXCJdID0gNDAwOF0gPSBcIlJhdGVMaW1pdGVkXCI7XG4gICAgLyoqXG4gICAgICogWW91ciBzZXNzaW9uIHRpbWVkIG91dC4gUmVjb25uZWN0IGFuZCBzdGFydCBhIG5ldyBvbmVcbiAgICAgKi9cbiAgICBHYXRld2F5Q2xvc2VDb2Rlc1tHYXRld2F5Q2xvc2VDb2Rlc1tcIlNlc3Npb25UaW1lZE91dFwiXSA9IDQwMDldID0gXCJTZXNzaW9uVGltZWRPdXRcIjtcbiAgICAvKipcbiAgICAgKiBZb3Ugc2VudCB1cyBhbiBpbnZhbGlkIHNoYXJkIHdoZW4gaWRlbnRpZnlpbmdcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheSNzaGFyZGluZ1xuICAgICAqL1xuICAgIEdhdGV3YXlDbG9zZUNvZGVzW0dhdGV3YXlDbG9zZUNvZGVzW1wiSW52YWxpZFNoYXJkXCJdID0gNDAxMF0gPSBcIkludmFsaWRTaGFyZFwiO1xuICAgIC8qKlxuICAgICAqIFRoZSBzZXNzaW9uIHdvdWxkIGhhdmUgaGFuZGxlZCB0b28gbWFueSBndWlsZHMgLSB5b3UgYXJlIHJlcXVpcmVkIHRvIHNoYXJkIHlvdXIgY29ubmVjdGlvbiBpbiBvcmRlciB0byBjb25uZWN0XG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvdG9waWNzL2dhdGV3YXkjc2hhcmRpbmdcbiAgICAgKi9cbiAgICBHYXRld2F5Q2xvc2VDb2Rlc1tHYXRld2F5Q2xvc2VDb2Rlc1tcIlNoYXJkaW5nUmVxdWlyZWRcIl0gPSA0MDExXSA9IFwiU2hhcmRpbmdSZXF1aXJlZFwiO1xuICAgIC8qKlxuICAgICAqIFlvdSBzZW50IGFuIGludmFsaWQgdmVyc2lvbiBmb3IgdGhlIGdhdGV3YXlcbiAgICAgKi9cbiAgICBHYXRld2F5Q2xvc2VDb2Rlc1tHYXRld2F5Q2xvc2VDb2Rlc1tcIkludmFsaWRBUElWZXJzaW9uXCJdID0gNDAxMl0gPSBcIkludmFsaWRBUElWZXJzaW9uXCI7XG4gICAgLyoqXG4gICAgICogWW91IHNlbnQgYW4gaW52YWxpZCBpbnRlbnQgZm9yIGEgR2F0ZXdheSBJbnRlbnQuIFlvdSBtYXkgaGF2ZSBpbmNvcnJlY3RseSBjYWxjdWxhdGVkIHRoZSBiaXR3aXNlIHZhbHVlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvdG9waWNzL2dhdGV3YXkjZ2F0ZXdheS1pbnRlbnRzXG4gICAgICovXG4gICAgR2F0ZXdheUNsb3NlQ29kZXNbR2F0ZXdheUNsb3NlQ29kZXNbXCJJbnZhbGlkSW50ZW50c1wiXSA9IDQwMTNdID0gXCJJbnZhbGlkSW50ZW50c1wiO1xuICAgIC8qKlxuICAgICAqIFlvdSBzZW50IGEgZGlzYWxsb3dlZCBpbnRlbnQgZm9yIGEgR2F0ZXdheSBJbnRlbnQuIFlvdSBtYXkgaGF2ZSB0cmllZCB0byBzcGVjaWZ5IGFuIGludGVudCB0aGF0IHlvdSBoYXZlIG5vdFxuICAgICAqIGVuYWJsZWQgb3IgYXJlIG5vdCB3aGl0ZWxpc3RlZCBmb3JcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheSNnYXRld2F5LWludGVudHNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheSNwcml2aWxlZ2VkLWludGVudHNcbiAgICAgKi9cbiAgICBHYXRld2F5Q2xvc2VDb2Rlc1tHYXRld2F5Q2xvc2VDb2Rlc1tcIkRpc2FsbG93ZWRJbnRlbnRzXCJdID0gNDAxNF0gPSBcIkRpc2FsbG93ZWRJbnRlbnRzXCI7XG59KShHYXRld2F5Q2xvc2VDb2RlcyA9IGV4cG9ydHMuR2F0ZXdheUNsb3NlQ29kZXMgfHwgKGV4cG9ydHMuR2F0ZXdheUNsb3NlQ29kZXMgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheSNsaXN0LW9mLWludGVudHNcbiAqL1xudmFyIEdhdGV3YXlJbnRlbnRCaXRzO1xuKGZ1bmN0aW9uIChHYXRld2F5SW50ZW50Qml0cykge1xuICAgIEdhdGV3YXlJbnRlbnRCaXRzW0dhdGV3YXlJbnRlbnRCaXRzW1wiR3VpbGRzXCJdID0gMV0gPSBcIkd1aWxkc1wiO1xuICAgIEdhdGV3YXlJbnRlbnRCaXRzW0dhdGV3YXlJbnRlbnRCaXRzW1wiR3VpbGRNZW1iZXJzXCJdID0gMl0gPSBcIkd1aWxkTWVtYmVyc1wiO1xuICAgIEdhdGV3YXlJbnRlbnRCaXRzW0dhdGV3YXlJbnRlbnRCaXRzW1wiR3VpbGRCYW5zXCJdID0gNF0gPSBcIkd1aWxkQmFuc1wiO1xuICAgIEdhdGV3YXlJbnRlbnRCaXRzW0dhdGV3YXlJbnRlbnRCaXRzW1wiR3VpbGRFbW9qaXNBbmRTdGlja2Vyc1wiXSA9IDhdID0gXCJHdWlsZEVtb2ppc0FuZFN0aWNrZXJzXCI7XG4gICAgR2F0ZXdheUludGVudEJpdHNbR2F0ZXdheUludGVudEJpdHNbXCJHdWlsZEludGVncmF0aW9uc1wiXSA9IDE2XSA9IFwiR3VpbGRJbnRlZ3JhdGlvbnNcIjtcbiAgICBHYXRld2F5SW50ZW50Qml0c1tHYXRld2F5SW50ZW50Qml0c1tcIkd1aWxkV2ViaG9va3NcIl0gPSAzMl0gPSBcIkd1aWxkV2ViaG9va3NcIjtcbiAgICBHYXRld2F5SW50ZW50Qml0c1tHYXRld2F5SW50ZW50Qml0c1tcIkd1aWxkSW52aXRlc1wiXSA9IDY0XSA9IFwiR3VpbGRJbnZpdGVzXCI7XG4gICAgR2F0ZXdheUludGVudEJpdHNbR2F0ZXdheUludGVudEJpdHNbXCJHdWlsZFZvaWNlU3RhdGVzXCJdID0gMTI4XSA9IFwiR3VpbGRWb2ljZVN0YXRlc1wiO1xuICAgIEdhdGV3YXlJbnRlbnRCaXRzW0dhdGV3YXlJbnRlbnRCaXRzW1wiR3VpbGRQcmVzZW5jZXNcIl0gPSAyNTZdID0gXCJHdWlsZFByZXNlbmNlc1wiO1xuICAgIEdhdGV3YXlJbnRlbnRCaXRzW0dhdGV3YXlJbnRlbnRCaXRzW1wiR3VpbGRNZXNzYWdlc1wiXSA9IDUxMl0gPSBcIkd1aWxkTWVzc2FnZXNcIjtcbiAgICBHYXRld2F5SW50ZW50Qml0c1tHYXRld2F5SW50ZW50Qml0c1tcIkd1aWxkTWVzc2FnZVJlYWN0aW9uc1wiXSA9IDEwMjRdID0gXCJHdWlsZE1lc3NhZ2VSZWFjdGlvbnNcIjtcbiAgICBHYXRld2F5SW50ZW50Qml0c1tHYXRld2F5SW50ZW50Qml0c1tcIkd1aWxkTWVzc2FnZVR5cGluZ1wiXSA9IDIwNDhdID0gXCJHdWlsZE1lc3NhZ2VUeXBpbmdcIjtcbiAgICBHYXRld2F5SW50ZW50Qml0c1tHYXRld2F5SW50ZW50Qml0c1tcIkRpcmVjdE1lc3NhZ2VzXCJdID0gNDA5Nl0gPSBcIkRpcmVjdE1lc3NhZ2VzXCI7XG4gICAgR2F0ZXdheUludGVudEJpdHNbR2F0ZXdheUludGVudEJpdHNbXCJEaXJlY3RNZXNzYWdlUmVhY3Rpb25zXCJdID0gODE5Ml0gPSBcIkRpcmVjdE1lc3NhZ2VSZWFjdGlvbnNcIjtcbiAgICBHYXRld2F5SW50ZW50Qml0c1tHYXRld2F5SW50ZW50Qml0c1tcIkRpcmVjdE1lc3NhZ2VUeXBpbmdcIl0gPSAxNjM4NF0gPSBcIkRpcmVjdE1lc3NhZ2VUeXBpbmdcIjtcbiAgICBHYXRld2F5SW50ZW50Qml0c1tHYXRld2F5SW50ZW50Qml0c1tcIk1lc3NhZ2VDb250ZW50XCJdID0gMzI3NjhdID0gXCJNZXNzYWdlQ29udGVudFwiO1xuICAgIEdhdGV3YXlJbnRlbnRCaXRzW0dhdGV3YXlJbnRlbnRCaXRzW1wiR3VpbGRTY2hlZHVsZWRFdmVudHNcIl0gPSA2NTUzNl0gPSBcIkd1aWxkU2NoZWR1bGVkRXZlbnRzXCI7XG59KShHYXRld2F5SW50ZW50Qml0cyA9IGV4cG9ydHMuR2F0ZXdheUludGVudEJpdHMgfHwgKGV4cG9ydHMuR2F0ZXdheUludGVudEJpdHMgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheSNjb21tYW5kcy1hbmQtZXZlbnRzLWdhdGV3YXktZXZlbnRzXG4gKi9cbnZhciBHYXRld2F5RGlzcGF0Y2hFdmVudHM7XG4oZnVuY3Rpb24gKEdhdGV3YXlEaXNwYXRjaEV2ZW50cykge1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIkFwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb25zVXBkYXRlXCJdID0gXCJBUFBMSUNBVElPTl9DT01NQU5EX1BFUk1JU1NJT05TX1VQREFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIkNoYW5uZWxDcmVhdGVcIl0gPSBcIkNIQU5ORUxfQ1JFQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiQ2hhbm5lbERlbGV0ZVwiXSA9IFwiQ0hBTk5FTF9ERUxFVEVcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJDaGFubmVsUGluc1VwZGF0ZVwiXSA9IFwiQ0hBTk5FTF9QSU5TX1VQREFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIkNoYW5uZWxVcGRhdGVcIl0gPSBcIkNIQU5ORUxfVVBEQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiR3VpbGRCYW5BZGRcIl0gPSBcIkdVSUxEX0JBTl9BRERcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJHdWlsZEJhblJlbW92ZVwiXSA9IFwiR1VJTERfQkFOX1JFTU9WRVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIkd1aWxkQ3JlYXRlXCJdID0gXCJHVUlMRF9DUkVBVEVcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJHdWlsZERlbGV0ZVwiXSA9IFwiR1VJTERfREVMRVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiR3VpbGRFbW9qaXNVcGRhdGVcIl0gPSBcIkdVSUxEX0VNT0pJU19VUERBVEVcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJHdWlsZEludGVncmF0aW9uc1VwZGF0ZVwiXSA9IFwiR1VJTERfSU5URUdSQVRJT05TX1VQREFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIkd1aWxkTWVtYmVyQWRkXCJdID0gXCJHVUlMRF9NRU1CRVJfQUREXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiR3VpbGRNZW1iZXJSZW1vdmVcIl0gPSBcIkdVSUxEX01FTUJFUl9SRU1PVkVcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJHdWlsZE1lbWJlcnNDaHVua1wiXSA9IFwiR1VJTERfTUVNQkVSU19DSFVOS1wiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIkd1aWxkTWVtYmVyVXBkYXRlXCJdID0gXCJHVUlMRF9NRU1CRVJfVVBEQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiR3VpbGRSb2xlQ3JlYXRlXCJdID0gXCJHVUlMRF9ST0xFX0NSRUFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIkd1aWxkUm9sZURlbGV0ZVwiXSA9IFwiR1VJTERfUk9MRV9ERUxFVEVcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJHdWlsZFJvbGVVcGRhdGVcIl0gPSBcIkdVSUxEX1JPTEVfVVBEQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiR3VpbGRTdGlja2Vyc1VwZGF0ZVwiXSA9IFwiR1VJTERfU1RJQ0tFUlNfVVBEQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiR3VpbGRVcGRhdGVcIl0gPSBcIkdVSUxEX1VQREFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIkludGVncmF0aW9uQ3JlYXRlXCJdID0gXCJJTlRFR1JBVElPTl9DUkVBVEVcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJJbnRlZ3JhdGlvbkRlbGV0ZVwiXSA9IFwiSU5URUdSQVRJT05fREVMRVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiSW50ZWdyYXRpb25VcGRhdGVcIl0gPSBcIklOVEVHUkFUSU9OX1VQREFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIkludGVyYWN0aW9uQ3JlYXRlXCJdID0gXCJJTlRFUkFDVElPTl9DUkVBVEVcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJJbnZpdGVDcmVhdGVcIl0gPSBcIklOVklURV9DUkVBVEVcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJJbnZpdGVEZWxldGVcIl0gPSBcIklOVklURV9ERUxFVEVcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJNZXNzYWdlQ3JlYXRlXCJdID0gXCJNRVNTQUdFX0NSRUFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIk1lc3NhZ2VEZWxldGVcIl0gPSBcIk1FU1NBR0VfREVMRVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiTWVzc2FnZURlbGV0ZUJ1bGtcIl0gPSBcIk1FU1NBR0VfREVMRVRFX0JVTEtcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJNZXNzYWdlUmVhY3Rpb25BZGRcIl0gPSBcIk1FU1NBR0VfUkVBQ1RJT05fQUREXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiTWVzc2FnZVJlYWN0aW9uUmVtb3ZlXCJdID0gXCJNRVNTQUdFX1JFQUNUSU9OX1JFTU9WRVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIk1lc3NhZ2VSZWFjdGlvblJlbW92ZUFsbFwiXSA9IFwiTUVTU0FHRV9SRUFDVElPTl9SRU1PVkVfQUxMXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiTWVzc2FnZVJlYWN0aW9uUmVtb3ZlRW1vamlcIl0gPSBcIk1FU1NBR0VfUkVBQ1RJT05fUkVNT1ZFX0VNT0pJXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiTWVzc2FnZVVwZGF0ZVwiXSA9IFwiTUVTU0FHRV9VUERBVEVcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJQcmVzZW5jZVVwZGF0ZVwiXSA9IFwiUFJFU0VOQ0VfVVBEQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiU3RhZ2VJbnN0YW5jZUNyZWF0ZVwiXSA9IFwiU1RBR0VfSU5TVEFOQ0VfQ1JFQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiU3RhZ2VJbnN0YW5jZURlbGV0ZVwiXSA9IFwiU1RBR0VfSU5TVEFOQ0VfREVMRVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiU3RhZ2VJbnN0YW5jZVVwZGF0ZVwiXSA9IFwiU1RBR0VfSU5TVEFOQ0VfVVBEQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiUmVhZHlcIl0gPSBcIlJFQURZXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiUmVzdW1lZFwiXSA9IFwiUkVTVU1FRFwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIlRocmVhZENyZWF0ZVwiXSA9IFwiVEhSRUFEX0NSRUFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIlRocmVhZERlbGV0ZVwiXSA9IFwiVEhSRUFEX0RFTEVURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIlRocmVhZExpc3RTeW5jXCJdID0gXCJUSFJFQURfTElTVF9TWU5DXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiVGhyZWFkTWVtYmVyc1VwZGF0ZVwiXSA9IFwiVEhSRUFEX01FTUJFUlNfVVBEQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiVGhyZWFkTWVtYmVyVXBkYXRlXCJdID0gXCJUSFJFQURfTUVNQkVSX1VQREFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIlRocmVhZFVwZGF0ZVwiXSA9IFwiVEhSRUFEX1VQREFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIlR5cGluZ1N0YXJ0XCJdID0gXCJUWVBJTkdfU1RBUlRcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJVc2VyVXBkYXRlXCJdID0gXCJVU0VSX1VQREFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIlZvaWNlU2VydmVyVXBkYXRlXCJdID0gXCJWT0lDRV9TRVJWRVJfVVBEQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiVm9pY2VTdGF0ZVVwZGF0ZVwiXSA9IFwiVk9JQ0VfU1RBVEVfVVBEQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiV2ViaG9va3NVcGRhdGVcIl0gPSBcIldFQkhPT0tTX1VQREFURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIkd1aWxkU2NoZWR1bGVkRXZlbnRDcmVhdGVcIl0gPSBcIkdVSUxEX1NDSEVEVUxFRF9FVkVOVF9DUkVBVEVcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJHdWlsZFNjaGVkdWxlZEV2ZW50VXBkYXRlXCJdID0gXCJHVUlMRF9TQ0hFRFVMRURfRVZFTlRfVVBEQVRFXCI7XG4gICAgR2F0ZXdheURpc3BhdGNoRXZlbnRzW1wiR3VpbGRTY2hlZHVsZWRFdmVudERlbGV0ZVwiXSA9IFwiR1VJTERfU0NIRURVTEVEX0VWRU5UX0RFTEVURVwiO1xuICAgIEdhdGV3YXlEaXNwYXRjaEV2ZW50c1tcIkd1aWxkU2NoZWR1bGVkRXZlbnRVc2VyQWRkXCJdID0gXCJHVUlMRF9TQ0hFRFVMRURfRVZFTlRfVVNFUl9BRERcIjtcbiAgICBHYXRld2F5RGlzcGF0Y2hFdmVudHNbXCJHdWlsZFNjaGVkdWxlZEV2ZW50VXNlclJlbW92ZVwiXSA9IFwiR1VJTERfU0NIRURVTEVEX0VWRU5UX1VTRVJfUkVNT1ZFXCI7XG59KShHYXRld2F5RGlzcGF0Y2hFdmVudHMgPSBleHBvcnRzLkdhdGV3YXlEaXNwYXRjaEV2ZW50cyB8fCAoZXhwb3J0cy5HYXRld2F5RGlzcGF0Y2hFdmVudHMgPSB7fSkpO1xuLy8gI2VuZHJlZ2lvbiBTaGFyZWRcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXYxMC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRm9ybWF0dGluZ1BhdHRlcm5zID0gdm9pZCAwO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZWZlcmVuY2UjbWVzc2FnZS1mb3JtYXR0aW5nLWZvcm1hdHNcbiAqL1xuZXhwb3J0cy5Gb3JtYXR0aW5nUGF0dGVybnMgPSB7XG4gICAgLyoqXG4gICAgICogUmVndWxhciBleHByZXNzaW9uIGZvciBtYXRjaGluZyBhIHVzZXIgbWVudGlvbiwgc3RyaWN0bHkgd2l0aG91dCBhIG5pY2tuYW1lXG4gICAgICpcbiAgICAgKiBUaGUgYGlkYCBncm91cCBwcm9wZXJ0eSBpcyBwcmVzZW50IG9uIHRoZSBgZXhlY2AgcmVzdWx0IG9mIHRoaXMgZXhwcmVzc2lvblxuICAgICAqL1xuICAgIFVzZXI6IC88QCg/PGlkPlxcZHsxNywyMH0pPi8sXG4gICAgLyoqXG4gICAgICogUmVndWxhciBleHByZXNzaW9uIGZvciBtYXRjaGluZyBhIHVzZXIgbWVudGlvbiwgc3RyaWN0bHkgd2l0aCBhIG5pY2tuYW1lXG4gICAgICpcbiAgICAgKiBUaGUgYGlkYCBncm91cCBwcm9wZXJ0eSBpcyBwcmVzZW50IG9uIHRoZSBgZXhlY2AgcmVzdWx0IG9mIHRoaXMgZXhwcmVzc2lvblxuICAgICAqIEBkZXByZWNhdGVkIFBhc3NpbmcgYCFgIGluIHVzZXIgbWVudGlvbnMgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeSAvIHN1cHBvcnRlZCwgYW5kIGZ1dHVyZSBtZXNzYWdlIGNvbnRlbnRzIHdvbid0IGhhdmUgaXRcbiAgICAgKi9cbiAgICBVc2VyV2l0aE5pY2tuYW1lOiAvPEAhKD88aWQ+XFxkezE3LDIwfSk+LyxcbiAgICAvKipcbiAgICAgKiBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIG1hdGNoaW5nIGEgdXNlciBtZW50aW9uLCB3aXRoIG9yIHdpdGhvdXQgYSBuaWNrbmFtZVxuICAgICAqXG4gICAgICogVGhlIGBpZGAgZ3JvdXAgcHJvcGVydHkgaXMgcHJlc2VudCBvbiB0aGUgYGV4ZWNgIHJlc3VsdCBvZiB0aGlzIGV4cHJlc3Npb25cbiAgICAgKiBAZGVwcmVjYXRlZCBQYXNzaW5nIGAhYCBpbiB1c2VyIG1lbnRpb25zIGlzIG5vIGxvbmdlciBuZWNlc3NhcnkgLyBzdXBwb3J0ZWQsIGFuZCBmdXR1cmUgbWVzc2FnZSBjb250ZW50cyB3b24ndCBoYXZlIGl0XG4gICAgICovXG4gICAgVXNlcldpdGhPcHRpb25hbE5pY2tuYW1lOiAvPEAhPyg/PGlkPlxcZHsxNywyMH0pPi8sXG4gICAgLyoqXG4gICAgICogUmVndWxhciBleHByZXNzaW9uIGZvciBtYXRjaGluZyBhIGNoYW5uZWwgbWVudGlvblxuICAgICAqXG4gICAgICogVGhlIGBpZGAgZ3JvdXAgcHJvcGVydHkgaXMgcHJlc2VudCBvbiB0aGUgYGV4ZWNgIHJlc3VsdCBvZiB0aGlzIGV4cHJlc3Npb25cbiAgICAgKi9cbiAgICBDaGFubmVsOiAvPCMoPzxpZD5cXGR7MTcsMjB9KT4vLFxuICAgIC8qKlxuICAgICAqIFJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgbWF0Y2hpbmcgYSByb2xlIG1lbnRpb25cbiAgICAgKlxuICAgICAqIFRoZSBgaWRgIGdyb3VwIHByb3BlcnR5IGlzIHByZXNlbnQgb24gdGhlIGBleGVjYCByZXN1bHQgb2YgdGhpcyBleHByZXNzaW9uXG4gICAgICovXG4gICAgUm9sZTogLzxAJig/PGlkPlxcZHsxNywyMH0pPi8sXG4gICAgLyoqXG4gICAgICogUmVndWxhciBleHByZXNzaW9uIGZvciBtYXRjaGluZyBhIGFwcGxpY2F0aW9uIGNvbW1hbmQgbWVudGlvblxuICAgICAqXG4gICAgICogVGhlIGBmdWxsTmFtZWAgKHBvc3NpYmx5IGluY2x1ZGluZyBgbmFtZWAsIGBzdWJjb21tYW5kT3JHcm91cGAgYW5kIGBzdWJjb21tYW5kYCkgYW5kIGBpZGAgZ3JvdXAgcHJvcGVydGllcyBhcmUgcHJlc2VudCBvbiB0aGUgYGV4ZWNgIHJlc3VsdCBvZiB0aGlzIGV4cHJlc3Npb25cbiAgICAgKi9cbiAgICBTbGFzaENvbW1hbmQ6IC88XFwvKD88ZnVsbE5hbWU+KD88bmFtZT5bXFx3LV17MSwzMn0pKD86ICg/PHN1YmNvbW1hbmRPckdyb3VwPltcXHctXXsxLDMyfSkpPyg/OiAoPzxzdWJjb21tYW5kPltcXHctXXsxLDMyfSkpPyk6KD88aWQ+XFxkezE3LDIwfSk+LyxcbiAgICAvKipcbiAgICAgKiBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIG1hdGNoaW5nIGEgY3VzdG9tIGVtb2ppLCBlaXRoZXIgc3RhdGljIG9yIGFuaW1hdGVkXG4gICAgICpcbiAgICAgKiBUaGUgYGFuaW1hdGVkYCwgYG5hbWVgIGFuZCBgaWRgIGdyb3VwIHByb3BlcnRpZXMgYXJlIHByZXNlbnQgb24gdGhlIGBleGVjYCByZXN1bHQgb2YgdGhpcyBleHByZXNzaW9uXG4gICAgICovXG4gICAgRW1vamk6IC88KD88YW5pbWF0ZWQ+YSk/Oig/PG5hbWU+XFx3ezIsMzJ9KTooPzxpZD5cXGR7MTcsMjB9KT4vLFxuICAgIC8qKlxuICAgICAqIFJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgbWF0Y2hpbmcgc3RyaWN0bHkgYW4gYW5pbWF0ZWQgY3VzdG9tIGVtb2ppXG4gICAgICpcbiAgICAgKiBUaGUgYGFuaW1hdGVkYCwgYG5hbWVgIGFuZCBgaWRgIGdyb3VwIHByb3BlcnRpZXMgYXJlIHByZXNlbnQgb24gdGhlIGBleGVjYCByZXN1bHQgb2YgdGhpcyBleHByZXNzaW9uXG4gICAgICovXG4gICAgQW5pbWF0ZWRFbW9qaTogLzwoPzxhbmltYXRlZD5hKTooPzxuYW1lPlxcd3syLDMyfSk6KD88aWQ+XFxkezE3LDIwfSk+LyxcbiAgICAvKipcbiAgICAgKiBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIG1hdGNoaW5nIHN0cmljdGx5IGEgc3RhdGljIGN1c3RvbSBlbW9qaVxuICAgICAqXG4gICAgICogVGhlIGBuYW1lYCBhbmQgYGlkYCBncm91cCBwcm9wZXJ0aWVzIGFyZSBwcmVzZW50IG9uIHRoZSBgZXhlY2AgcmVzdWx0IG9mIHRoaXMgZXhwcmVzc2lvblxuICAgICAqL1xuICAgIFN0YXRpY0Vtb2ppOiAvPDooPzxuYW1lPlxcd3syLDMyfSk6KD88aWQ+XFxkezE3LDIwfSk+LyxcbiAgICAvKipcbiAgICAgKiBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIG1hdGNoaW5nIGEgdGltZXN0YW1wLCBlaXRoZXIgZGVmYXVsdCBvciBjdXN0b20gc3R5bGVkXG4gICAgICpcbiAgICAgKiBUaGUgYHRpbWVzdGFtcGAgYW5kIGBzdHlsZWAgZ3JvdXAgcHJvcGVydGllcyBhcmUgcHJlc2VudCBvbiB0aGUgYGV4ZWNgIHJlc3VsdCBvZiB0aGlzIGV4cHJlc3Npb25cbiAgICAgKi9cbiAgICBUaW1lc3RhbXA6IC88dDooPzx0aW1lc3RhbXA+LT9cXGR7MSwxM30pKDooPzxzdHlsZT5bdFRkRGZGUl0pKT8+LyxcbiAgICAvKipcbiAgICAgKiBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIG1hdGNoaW5nIHN0cmljdGx5IGRlZmF1bHQgc3R5bGVkIHRpbWVzdGFtcHNcbiAgICAgKlxuICAgICAqIFRoZSBgdGltZXN0YW1wYCBncm91cCBwcm9wZXJ0eSBpcyBwcmVzZW50IG9uIHRoZSBgZXhlY2AgcmVzdWx0IG9mIHRoaXMgZXhwcmVzc2lvblxuICAgICAqL1xuICAgIERlZmF1bHRTdHlsZWRUaW1lc3RhbXA6IC88dDooPzx0aW1lc3RhbXA+LT9cXGR7MSwxM30pPi8sXG4gICAgLyoqXG4gICAgICogUmVndWxhciBleHByZXNzaW9uIGZvciBtYXRjaGluZyBzdHJpY3RseSBjdXN0b20gc3R5bGVkIHRpbWVzdGFtcHNcbiAgICAgKlxuICAgICAqIFRoZSBgdGltZXN0YW1wYCBhbmQgYHN0eWxlYCBncm91cCBwcm9wZXJ0aWVzIGFyZSBwcmVzZW50IG9uIHRoZSBgZXhlY2AgcmVzdWx0IG9mIHRoaXMgZXhwcmVzc2lvblxuICAgICAqL1xuICAgIFN0eWxlZFRpbWVzdGFtcDogLzx0Oig/PHRpbWVzdGFtcD4tP1xcZHsxLDEzfSk6KD88c3R5bGU+W3RUZERmRlJdKT4vLFxufTtcbi8qKlxuICogRnJlZXplcyB0aGUgZm9ybWF0dGluZyBwYXR0ZXJuc1xuICogQGludGVybmFsXG4gKi9cbk9iamVjdC5mcmVlemUoZXhwb3J0cy5Gb3JtYXR0aW5nUGF0dGVybnMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2xvYmFscy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGVybWlzc2lvbkZsYWdzQml0cyA9IHZvaWQgMDtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvdG9waWNzL3Blcm1pc3Npb25zI3Blcm1pc3Npb25zLWJpdHdpc2UtcGVybWlzc2lvbi1mbGFnc1xuICpcbiAqIFRoZXNlIGZsYWdzIGFyZSBleHBvcnRlZCBhcyBgQmlnSW50YHMgYW5kIE5PVCBudW1iZXJzLiBXcmFwcGluZyB0aGVtIGluIGBOdW1iZXIoKWBcbiAqIG1heSBjYXVzZSBpc3N1ZXMsIHRyeSB0byB1c2UgQmlnSW50cyBhcyBtdWNoIGFzIHBvc3NpYmxlIG9yIG1vZHVsZXMgdGhhdCBjYW5cbiAqIHJlcGxpY2F0ZSB0aGVtIGluIHNvbWUgd2F5XG4gKi9cbmV4cG9ydHMuUGVybWlzc2lvbkZsYWdzQml0cyA9IHtcbiAgICBDcmVhdGVJbnN0YW50SW52aXRlOiAxbiA8PCAwbixcbiAgICBLaWNrTWVtYmVyczogMW4gPDwgMW4sXG4gICAgQmFuTWVtYmVyczogMW4gPDwgMm4sXG4gICAgQWRtaW5pc3RyYXRvcjogMW4gPDwgM24sXG4gICAgTWFuYWdlQ2hhbm5lbHM6IDFuIDw8IDRuLFxuICAgIE1hbmFnZUd1aWxkOiAxbiA8PCA1bixcbiAgICBBZGRSZWFjdGlvbnM6IDFuIDw8IDZuLFxuICAgIFZpZXdBdWRpdExvZzogMW4gPDwgN24sXG4gICAgUHJpb3JpdHlTcGVha2VyOiAxbiA8PCA4bixcbiAgICBTdHJlYW06IDFuIDw8IDluLFxuICAgIFZpZXdDaGFubmVsOiAxbiA8PCAxMG4sXG4gICAgU2VuZE1lc3NhZ2VzOiAxbiA8PCAxMW4sXG4gICAgU2VuZFRUU01lc3NhZ2VzOiAxbiA8PCAxMm4sXG4gICAgTWFuYWdlTWVzc2FnZXM6IDFuIDw8IDEzbixcbiAgICBFbWJlZExpbmtzOiAxbiA8PCAxNG4sXG4gICAgQXR0YWNoRmlsZXM6IDFuIDw8IDE1bixcbiAgICBSZWFkTWVzc2FnZUhpc3Rvcnk6IDFuIDw8IDE2bixcbiAgICBNZW50aW9uRXZlcnlvbmU6IDFuIDw8IDE3bixcbiAgICBVc2VFeHRlcm5hbEVtb2ppczogMW4gPDwgMThuLFxuICAgIFZpZXdHdWlsZEluc2lnaHRzOiAxbiA8PCAxOW4sXG4gICAgQ29ubmVjdDogMW4gPDwgMjBuLFxuICAgIFNwZWFrOiAxbiA8PCAyMW4sXG4gICAgTXV0ZU1lbWJlcnM6IDFuIDw8IDIybixcbiAgICBEZWFmZW5NZW1iZXJzOiAxbiA8PCAyM24sXG4gICAgTW92ZU1lbWJlcnM6IDFuIDw8IDI0bixcbiAgICBVc2VWQUQ6IDFuIDw8IDI1bixcbiAgICBDaGFuZ2VOaWNrbmFtZTogMW4gPDwgMjZuLFxuICAgIE1hbmFnZU5pY2tuYW1lczogMW4gPDwgMjduLFxuICAgIE1hbmFnZVJvbGVzOiAxbiA8PCAyOG4sXG4gICAgTWFuYWdlV2ViaG9va3M6IDFuIDw8IDI5bixcbiAgICBNYW5hZ2VFbW9qaXNBbmRTdGlja2VyczogMW4gPDwgMzBuLFxuICAgIFVzZUFwcGxpY2F0aW9uQ29tbWFuZHM6IDFuIDw8IDMxbixcbiAgICBSZXF1ZXN0VG9TcGVhazogMW4gPDwgMzJuLFxuICAgIE1hbmFnZUV2ZW50czogMW4gPDwgMzNuLFxuICAgIE1hbmFnZVRocmVhZHM6IDFuIDw8IDM0bixcbiAgICBDcmVhdGVQdWJsaWNUaHJlYWRzOiAxbiA8PCAzNW4sXG4gICAgQ3JlYXRlUHJpdmF0ZVRocmVhZHM6IDFuIDw8IDM2bixcbiAgICBVc2VFeHRlcm5hbFN0aWNrZXJzOiAxbiA8PCAzN24sXG4gICAgU2VuZE1lc3NhZ2VzSW5UaHJlYWRzOiAxbiA8PCAzOG4sXG4gICAgVXNlRW1iZWRkZWRBY3Rpdml0aWVzOiAxbiA8PCAzOW4sXG4gICAgTW9kZXJhdGVNZW1iZXJzOiAxbiA8PCA0MG4sXG59O1xuLyoqXG4gKiBGcmVlemUgdGhlIG9iamVjdCBvZiBiaXRzLCBwcmV2ZW50aW5nIGFueSBtb2RpZmljYXRpb25zIHRvIGl0XG4gKiBAaW50ZXJuYWxcbiAqL1xuT2JqZWN0LmZyZWV6ZShleHBvcnRzLlBlcm1pc3Npb25GbGFnc0JpdHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXR0YWNobWVudC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29sZWFuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hhbm5lbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVnZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZW50aW9uYWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW51bWJlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvbGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGUgPSB2b2lkIDA7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL2ludGVyYWN0aW9ucy9hcHBsaWNhdGlvbi1jb21tYW5kcyNhcHBsaWNhdGlvbi1jb21tYW5kLW9iamVjdC1hcHBsaWNhdGlvbi1jb21tYW5kLW9wdGlvbi10eXBlXG4gKi9cbnZhciBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlO1xuKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlKSB7XG4gICAgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZVtBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlW1wiU3ViY29tbWFuZFwiXSA9IDFdID0gXCJTdWJjb21tYW5kXCI7XG4gICAgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZVtBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlW1wiU3ViY29tbWFuZEdyb3VwXCJdID0gMl0gPSBcIlN1YmNvbW1hbmRHcm91cFwiO1xuICAgIEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVbQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZVtcIlN0cmluZ1wiXSA9IDNdID0gXCJTdHJpbmdcIjtcbiAgICBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlW0FwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVbXCJJbnRlZ2VyXCJdID0gNF0gPSBcIkludGVnZXJcIjtcbiAgICBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlW0FwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVbXCJCb29sZWFuXCJdID0gNV0gPSBcIkJvb2xlYW5cIjtcbiAgICBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlW0FwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVbXCJVc2VyXCJdID0gNl0gPSBcIlVzZXJcIjtcbiAgICBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlW0FwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVbXCJDaGFubmVsXCJdID0gN10gPSBcIkNoYW5uZWxcIjtcbiAgICBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlW0FwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVbXCJSb2xlXCJdID0gOF0gPSBcIlJvbGVcIjtcbiAgICBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlW0FwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVbXCJNZW50aW9uYWJsZVwiXSA9IDldID0gXCJNZW50aW9uYWJsZVwiO1xuICAgIEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVbQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZVtcIk51bWJlclwiXSA9IDEwXSA9IFwiTnVtYmVyXCI7XG4gICAgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZVtBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlW1wiQXR0YWNobWVudFwiXSA9IDExXSA9IFwiQXR0YWNobWVudFwiO1xufSkoQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZSA9IGV4cG9ydHMuQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZSB8fCAoZXhwb3J0cy5BcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNoYXJlZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YmNvbW1hbmQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJjb21tYW5kR3JvdXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vX2NoYXRJbnB1dC9hdHRhY2htZW50XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9fY2hhdElucHV0L2Jhc2VcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL19jaGF0SW5wdXQvYm9vbGVhblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vX2NoYXRJbnB1dC9jaGFubmVsXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9fY2hhdElucHV0L2ludGVnZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL19jaGF0SW5wdXQvbWVudGlvbmFibGVcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL19jaGF0SW5wdXQvbnVtYmVyXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9fY2hhdElucHV0L3JvbGVcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL19jaGF0SW5wdXQvc2hhcmVkXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9fY2hhdElucHV0L3N0cmluZ1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vX2NoYXRJbnB1dC9zdWJjb21tYW5kXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9fY2hhdElucHV0L3N1YmNvbW1hbmRHcm91cFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vX2NoYXRJbnB1dC91c2VyXCIpLCBleHBvcnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoYXRJbnB1dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHRNZW51LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BUElBcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uc0NvbnN0YW50ID0gZXhwb3J0cy5BcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uVHlwZSA9IHZvaWQgMDtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvaW50ZXJhY3Rpb25zL2FwcGxpY2F0aW9uLWNvbW1hbmRzI2FwcGxpY2F0aW9uLWNvbW1hbmQtcGVybWlzc2lvbnMtb2JqZWN0LWFwcGxpY2F0aW9uLWNvbW1hbmQtcGVybWlzc2lvbi10eXBlXG4gKi9cbnZhciBBcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uVHlwZTtcbihmdW5jdGlvbiAoQXBwbGljYXRpb25Db21tYW5kUGVybWlzc2lvblR5cGUpIHtcbiAgICBBcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uVHlwZVtBcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uVHlwZVtcIlJvbGVcIl0gPSAxXSA9IFwiUm9sZVwiO1xuICAgIEFwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb25UeXBlW0FwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb25UeXBlW1wiVXNlclwiXSA9IDJdID0gXCJVc2VyXCI7XG4gICAgQXBwbGljYXRpb25Db21tYW5kUGVybWlzc2lvblR5cGVbQXBwbGljYXRpb25Db21tYW5kUGVybWlzc2lvblR5cGVbXCJDaGFubmVsXCJdID0gM10gPSBcIkNoYW5uZWxcIjtcbn0pKEFwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb25UeXBlID0gZXhwb3J0cy5BcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uVHlwZSB8fCAoZXhwb3J0cy5BcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uVHlwZSA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL2ludGVyYWN0aW9ucy9hcHBsaWNhdGlvbi1jb21tYW5kcyNhcHBsaWNhdGlvbi1jb21tYW5kLXBlcm1pc3Npb25zLW9iamVjdC1hcHBsaWNhdGlvbi1jb21tYW5kLXBlcm1pc3Npb25zLWNvbnN0YW50c1xuICovXG5leHBvcnRzLkFQSUFwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb25zQ29uc3RhbnQgPSB7XG4gICAgRXZlcnlvbmU6IChndWlsZElkKSA9PiBTdHJpbmcoZ3VpbGRJZCksXG4gICAgQWxsQ2hhbm5lbHM6IChndWlsZElkKSA9PiBTdHJpbmcoQmlnSW50KGd1aWxkSWQpIC0gMW4pLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBlcm1pc3Npb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFwcGxpY2F0aW9uQ29tbWFuZFR5cGUgPSB2b2lkIDA7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vX2FwcGxpY2F0aW9uQ29tbWFuZHMvY2hhdElucHV0XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9fYXBwbGljYXRpb25Db21tYW5kcy9jb250ZXh0TWVudVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vX2FwcGxpY2F0aW9uQ29tbWFuZHMvcGVybWlzc2lvbnNcIiksIGV4cG9ydHMpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9pbnRlcmFjdGlvbnMvYXBwbGljYXRpb24tY29tbWFuZHMjYXBwbGljYXRpb24tY29tbWFuZC1vYmplY3QtYXBwbGljYXRpb24tY29tbWFuZC10eXBlc1xuICovXG52YXIgQXBwbGljYXRpb25Db21tYW5kVHlwZTtcbihmdW5jdGlvbiAoQXBwbGljYXRpb25Db21tYW5kVHlwZSkge1xuICAgIEFwcGxpY2F0aW9uQ29tbWFuZFR5cGVbQXBwbGljYXRpb25Db21tYW5kVHlwZVtcIkNoYXRJbnB1dFwiXSA9IDFdID0gXCJDaGF0SW5wdXRcIjtcbiAgICBBcHBsaWNhdGlvbkNvbW1hbmRUeXBlW0FwcGxpY2F0aW9uQ29tbWFuZFR5cGVbXCJVc2VyXCJdID0gMl0gPSBcIlVzZXJcIjtcbiAgICBBcHBsaWNhdGlvbkNvbW1hbmRUeXBlW0FwcGxpY2F0aW9uQ29tbWFuZFR5cGVbXCJNZXNzYWdlXCJdID0gM10gPSBcIk1lc3NhZ2VcIjtcbn0pKEFwcGxpY2F0aW9uQ29tbWFuZFR5cGUgPSBleHBvcnRzLkFwcGxpY2F0aW9uQ29tbWFuZFR5cGUgfHwgKGV4cG9ydHMuQXBwbGljYXRpb25Db21tYW5kVHlwZSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHBsaWNhdGlvbkNvbW1hbmRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXV0b2NvbXBsZXRlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lc3NhZ2VDb21wb25lbnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kYWxTdWJtaXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbnRlcmFjdGlvblJlc3BvbnNlVHlwZSA9IGV4cG9ydHMuSW50ZXJhY3Rpb25UeXBlID0gdm9pZCAwO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9pbnRlcmFjdGlvbnMvcmVjZWl2aW5nLWFuZC1yZXNwb25kaW5nI2ludGVyYWN0aW9uLW9iamVjdC1pbnRlcmFjdGlvbi10eXBlXG4gKi9cbnZhciBJbnRlcmFjdGlvblR5cGU7XG4oZnVuY3Rpb24gKEludGVyYWN0aW9uVHlwZSkge1xuICAgIEludGVyYWN0aW9uVHlwZVtJbnRlcmFjdGlvblR5cGVbXCJQaW5nXCJdID0gMV0gPSBcIlBpbmdcIjtcbiAgICBJbnRlcmFjdGlvblR5cGVbSW50ZXJhY3Rpb25UeXBlW1wiQXBwbGljYXRpb25Db21tYW5kXCJdID0gMl0gPSBcIkFwcGxpY2F0aW9uQ29tbWFuZFwiO1xuICAgIEludGVyYWN0aW9uVHlwZVtJbnRlcmFjdGlvblR5cGVbXCJNZXNzYWdlQ29tcG9uZW50XCJdID0gM10gPSBcIk1lc3NhZ2VDb21wb25lbnRcIjtcbiAgICBJbnRlcmFjdGlvblR5cGVbSW50ZXJhY3Rpb25UeXBlW1wiQXBwbGljYXRpb25Db21tYW5kQXV0b2NvbXBsZXRlXCJdID0gNF0gPSBcIkFwcGxpY2F0aW9uQ29tbWFuZEF1dG9jb21wbGV0ZVwiO1xuICAgIEludGVyYWN0aW9uVHlwZVtJbnRlcmFjdGlvblR5cGVbXCJNb2RhbFN1Ym1pdFwiXSA9IDVdID0gXCJNb2RhbFN1Ym1pdFwiO1xufSkoSW50ZXJhY3Rpb25UeXBlID0gZXhwb3J0cy5JbnRlcmFjdGlvblR5cGUgfHwgKGV4cG9ydHMuSW50ZXJhY3Rpb25UeXBlID0ge30pKTtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvaW50ZXJhY3Rpb25zL3JlY2VpdmluZy1hbmQtcmVzcG9uZGluZyNpbnRlcmFjdGlvbi1yZXNwb25zZS1vYmplY3QtaW50ZXJhY3Rpb24tY2FsbGJhY2stdHlwZVxuICovXG52YXIgSW50ZXJhY3Rpb25SZXNwb25zZVR5cGU7XG4oZnVuY3Rpb24gKEludGVyYWN0aW9uUmVzcG9uc2VUeXBlKSB7XG4gICAgLyoqXG4gICAgICogQUNLIGEgYFBpbmdgXG4gICAgICovXG4gICAgSW50ZXJhY3Rpb25SZXNwb25zZVR5cGVbSW50ZXJhY3Rpb25SZXNwb25zZVR5cGVbXCJQb25nXCJdID0gMV0gPSBcIlBvbmdcIjtcbiAgICAvKipcbiAgICAgKiBSZXNwb25kIHRvIGFuIGludGVyYWN0aW9uIHdpdGggYSBtZXNzYWdlXG4gICAgICovXG4gICAgSW50ZXJhY3Rpb25SZXNwb25zZVR5cGVbSW50ZXJhY3Rpb25SZXNwb25zZVR5cGVbXCJDaGFubmVsTWVzc2FnZVdpdGhTb3VyY2VcIl0gPSA0XSA9IFwiQ2hhbm5lbE1lc3NhZ2VXaXRoU291cmNlXCI7XG4gICAgLyoqXG4gICAgICogQUNLIGFuIGludGVyYWN0aW9uIGFuZCBlZGl0IHRvIGEgcmVzcG9uc2UgbGF0ZXIsIHRoZSB1c2VyIHNlZXMgYSBsb2FkaW5nIHN0YXRlXG4gICAgICovXG4gICAgSW50ZXJhY3Rpb25SZXNwb25zZVR5cGVbSW50ZXJhY3Rpb25SZXNwb25zZVR5cGVbXCJEZWZlcnJlZENoYW5uZWxNZXNzYWdlV2l0aFNvdXJjZVwiXSA9IDVdID0gXCJEZWZlcnJlZENoYW5uZWxNZXNzYWdlV2l0aFNvdXJjZVwiO1xuICAgIC8qKlxuICAgICAqIEFDSyBhIGJ1dHRvbiBpbnRlcmFjdGlvbiBhbmQgdXBkYXRlIGl0IHRvIGEgbG9hZGluZyBzdGF0ZVxuICAgICAqL1xuICAgIEludGVyYWN0aW9uUmVzcG9uc2VUeXBlW0ludGVyYWN0aW9uUmVzcG9uc2VUeXBlW1wiRGVmZXJyZWRNZXNzYWdlVXBkYXRlXCJdID0gNl0gPSBcIkRlZmVycmVkTWVzc2FnZVVwZGF0ZVwiO1xuICAgIC8qKlxuICAgICAqIEFDSyBhIGJ1dHRvbiBpbnRlcmFjdGlvbiBhbmQgZWRpdCB0aGUgbWVzc2FnZSB0byB3aGljaCB0aGUgYnV0dG9uIHdhcyBhdHRhY2hlZFxuICAgICAqL1xuICAgIEludGVyYWN0aW9uUmVzcG9uc2VUeXBlW0ludGVyYWN0aW9uUmVzcG9uc2VUeXBlW1wiVXBkYXRlTWVzc2FnZVwiXSA9IDddID0gXCJVcGRhdGVNZXNzYWdlXCI7XG4gICAgLyoqXG4gICAgICogRm9yIGF1dG9jb21wbGV0ZSBpbnRlcmFjdGlvbnNcbiAgICAgKi9cbiAgICBJbnRlcmFjdGlvblJlc3BvbnNlVHlwZVtJbnRlcmFjdGlvblJlc3BvbnNlVHlwZVtcIkFwcGxpY2F0aW9uQ29tbWFuZEF1dG9jb21wbGV0ZVJlc3VsdFwiXSA9IDhdID0gXCJBcHBsaWNhdGlvbkNvbW1hbmRBdXRvY29tcGxldGVSZXN1bHRcIjtcbiAgICAvKipcbiAgICAgKiBSZXNwb25kIHRvIGFuIGludGVyYWN0aW9uIHdpdGggYW4gbW9kYWwgZm9yIGEgdXNlciB0byBmaWxsLW91dFxuICAgICAqL1xuICAgIEludGVyYWN0aW9uUmVzcG9uc2VUeXBlW0ludGVyYWN0aW9uUmVzcG9uc2VUeXBlW1wiTW9kYWxcIl0gPSA5XSA9IFwiTW9kYWxcIjtcbn0pKEludGVyYWN0aW9uUmVzcG9uc2VUeXBlID0gZXhwb3J0cy5JbnRlcmFjdGlvblJlc3BvbnNlVHlwZSB8fCAoZXhwb3J0cy5JbnRlcmFjdGlvblJlc3BvbnNlVHlwZSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNwb25zZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIFR5cGVzIGV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9hcHBsaWNhdGlvblxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFwcGxpY2F0aW9uRmxhZ3MgPSB2b2lkIDA7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9hcHBsaWNhdGlvbiNhcHBsaWNhdGlvbi1vYmplY3QtYXBwbGljYXRpb24tZmxhZ3NcbiAqL1xudmFyIEFwcGxpY2F0aW9uRmxhZ3M7XG4oZnVuY3Rpb24gKEFwcGxpY2F0aW9uRmxhZ3MpIHtcbiAgICBBcHBsaWNhdGlvbkZsYWdzW0FwcGxpY2F0aW9uRmxhZ3NbXCJFbWJlZGRlZFJlbGVhc2VkXCJdID0gMl0gPSBcIkVtYmVkZGVkUmVsZWFzZWRcIjtcbiAgICBBcHBsaWNhdGlvbkZsYWdzW0FwcGxpY2F0aW9uRmxhZ3NbXCJNYW5hZ2VkRW1vamlcIl0gPSA0XSA9IFwiTWFuYWdlZEVtb2ppXCI7XG4gICAgQXBwbGljYXRpb25GbGFnc1tBcHBsaWNhdGlvbkZsYWdzW1wiR3JvdXBETUNyZWF0ZVwiXSA9IDE2XSA9IFwiR3JvdXBETUNyZWF0ZVwiO1xuICAgIEFwcGxpY2F0aW9uRmxhZ3NbQXBwbGljYXRpb25GbGFnc1tcIlJQQ0hhc0Nvbm5lY3RlZFwiXSA9IDIwNDhdID0gXCJSUENIYXNDb25uZWN0ZWRcIjtcbiAgICBBcHBsaWNhdGlvbkZsYWdzW0FwcGxpY2F0aW9uRmxhZ3NbXCJHYXRld2F5UHJlc2VuY2VcIl0gPSA0MDk2XSA9IFwiR2F0ZXdheVByZXNlbmNlXCI7XG4gICAgQXBwbGljYXRpb25GbGFnc1tBcHBsaWNhdGlvbkZsYWdzW1wiR2F0ZXdheVByZXNlbmNlTGltaXRlZFwiXSA9IDgxOTJdID0gXCJHYXRld2F5UHJlc2VuY2VMaW1pdGVkXCI7XG4gICAgQXBwbGljYXRpb25GbGFnc1tBcHBsaWNhdGlvbkZsYWdzW1wiR2F0ZXdheUd1aWxkTWVtYmVyc1wiXSA9IDE2Mzg0XSA9IFwiR2F0ZXdheUd1aWxkTWVtYmVyc1wiO1xuICAgIEFwcGxpY2F0aW9uRmxhZ3NbQXBwbGljYXRpb25GbGFnc1tcIkdhdGV3YXlHdWlsZE1lbWJlcnNMaW1pdGVkXCJdID0gMzI3NjhdID0gXCJHYXRld2F5R3VpbGRNZW1iZXJzTGltaXRlZFwiO1xuICAgIEFwcGxpY2F0aW9uRmxhZ3NbQXBwbGljYXRpb25GbGFnc1tcIlZlcmlmaWNhdGlvblBlbmRpbmdHdWlsZExpbWl0XCJdID0gNjU1MzZdID0gXCJWZXJpZmljYXRpb25QZW5kaW5nR3VpbGRMaW1pdFwiO1xuICAgIEFwcGxpY2F0aW9uRmxhZ3NbQXBwbGljYXRpb25GbGFnc1tcIkVtYmVkZGVkXCJdID0gMTMxMDcyXSA9IFwiRW1iZWRkZWRcIjtcbiAgICBBcHBsaWNhdGlvbkZsYWdzW0FwcGxpY2F0aW9uRmxhZ3NbXCJHYXRld2F5TWVzc2FnZUNvbnRlbnRcIl0gPSAyNjIxNDRdID0gXCJHYXRld2F5TWVzc2FnZUNvbnRlbnRcIjtcbiAgICBBcHBsaWNhdGlvbkZsYWdzW0FwcGxpY2F0aW9uRmxhZ3NbXCJHYXRld2F5TWVzc2FnZUNvbnRlbnRMaW1pdGVkXCJdID0gNTI0Mjg4XSA9IFwiR2F0ZXdheU1lc3NhZ2VDb250ZW50TGltaXRlZFwiO1xuICAgIEFwcGxpY2F0aW9uRmxhZ3NbQXBwbGljYXRpb25GbGFnc1tcIkVtYmVkZGVkRmlyc3RQYXJ0eVwiXSA9IDEwNDg1NzZdID0gXCJFbWJlZGRlZEZpcnN0UGFydHlcIjtcbiAgICBBcHBsaWNhdGlvbkZsYWdzW0FwcGxpY2F0aW9uRmxhZ3NbXCJBcHBsaWNhdGlvbkNvbW1hbmRCYWRnZVwiXSA9IDgzODg2MDhdID0gXCJBcHBsaWNhdGlvbkNvbW1hbmRCYWRnZVwiO1xufSkoQXBwbGljYXRpb25GbGFncyA9IGV4cG9ydHMuQXBwbGljYXRpb25GbGFncyB8fCAoZXhwb3J0cy5BcHBsaWNhdGlvbkZsYWdzID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcGxpY2F0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBUeXBlcyBleHRyYWN0ZWQgZnJvbSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvYXVkaXQtbG9nXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXVkaXRMb2dPcHRpb25zVHlwZSA9IGV4cG9ydHMuQXVkaXRMb2dFdmVudCA9IHZvaWQgMDtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2F1ZGl0LWxvZyNhdWRpdC1sb2ctZW50cnktb2JqZWN0LWF1ZGl0LWxvZy1ldmVudHNcbiAqL1xudmFyIEF1ZGl0TG9nRXZlbnQ7XG4oZnVuY3Rpb24gKEF1ZGl0TG9nRXZlbnQpIHtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJHdWlsZFVwZGF0ZVwiXSA9IDFdID0gXCJHdWlsZFVwZGF0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIkNoYW5uZWxDcmVhdGVcIl0gPSAxMF0gPSBcIkNoYW5uZWxDcmVhdGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJDaGFubmVsVXBkYXRlXCJdID0gMTFdID0gXCJDaGFubmVsVXBkYXRlXCI7XG4gICAgQXVkaXRMb2dFdmVudFtBdWRpdExvZ0V2ZW50W1wiQ2hhbm5lbERlbGV0ZVwiXSA9IDEyXSA9IFwiQ2hhbm5lbERlbGV0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIkNoYW5uZWxPdmVyd3JpdGVDcmVhdGVcIl0gPSAxM10gPSBcIkNoYW5uZWxPdmVyd3JpdGVDcmVhdGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJDaGFubmVsT3ZlcndyaXRlVXBkYXRlXCJdID0gMTRdID0gXCJDaGFubmVsT3ZlcndyaXRlVXBkYXRlXCI7XG4gICAgQXVkaXRMb2dFdmVudFtBdWRpdExvZ0V2ZW50W1wiQ2hhbm5lbE92ZXJ3cml0ZURlbGV0ZVwiXSA9IDE1XSA9IFwiQ2hhbm5lbE92ZXJ3cml0ZURlbGV0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIk1lbWJlcktpY2tcIl0gPSAyMF0gPSBcIk1lbWJlcktpY2tcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJNZW1iZXJQcnVuZVwiXSA9IDIxXSA9IFwiTWVtYmVyUHJ1bmVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJNZW1iZXJCYW5BZGRcIl0gPSAyMl0gPSBcIk1lbWJlckJhbkFkZFwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIk1lbWJlckJhblJlbW92ZVwiXSA9IDIzXSA9IFwiTWVtYmVyQmFuUmVtb3ZlXCI7XG4gICAgQXVkaXRMb2dFdmVudFtBdWRpdExvZ0V2ZW50W1wiTWVtYmVyVXBkYXRlXCJdID0gMjRdID0gXCJNZW1iZXJVcGRhdGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJNZW1iZXJSb2xlVXBkYXRlXCJdID0gMjVdID0gXCJNZW1iZXJSb2xlVXBkYXRlXCI7XG4gICAgQXVkaXRMb2dFdmVudFtBdWRpdExvZ0V2ZW50W1wiTWVtYmVyTW92ZVwiXSA9IDI2XSA9IFwiTWVtYmVyTW92ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIk1lbWJlckRpc2Nvbm5lY3RcIl0gPSAyN10gPSBcIk1lbWJlckRpc2Nvbm5lY3RcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJCb3RBZGRcIl0gPSAyOF0gPSBcIkJvdEFkZFwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIlJvbGVDcmVhdGVcIl0gPSAzMF0gPSBcIlJvbGVDcmVhdGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJSb2xlVXBkYXRlXCJdID0gMzFdID0gXCJSb2xlVXBkYXRlXCI7XG4gICAgQXVkaXRMb2dFdmVudFtBdWRpdExvZ0V2ZW50W1wiUm9sZURlbGV0ZVwiXSA9IDMyXSA9IFwiUm9sZURlbGV0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIkludml0ZUNyZWF0ZVwiXSA9IDQwXSA9IFwiSW52aXRlQ3JlYXRlXCI7XG4gICAgQXVkaXRMb2dFdmVudFtBdWRpdExvZ0V2ZW50W1wiSW52aXRlVXBkYXRlXCJdID0gNDFdID0gXCJJbnZpdGVVcGRhdGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJJbnZpdGVEZWxldGVcIl0gPSA0Ml0gPSBcIkludml0ZURlbGV0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIldlYmhvb2tDcmVhdGVcIl0gPSA1MF0gPSBcIldlYmhvb2tDcmVhdGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJXZWJob29rVXBkYXRlXCJdID0gNTFdID0gXCJXZWJob29rVXBkYXRlXCI7XG4gICAgQXVkaXRMb2dFdmVudFtBdWRpdExvZ0V2ZW50W1wiV2ViaG9va0RlbGV0ZVwiXSA9IDUyXSA9IFwiV2ViaG9va0RlbGV0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIkVtb2ppQ3JlYXRlXCJdID0gNjBdID0gXCJFbW9qaUNyZWF0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIkVtb2ppVXBkYXRlXCJdID0gNjFdID0gXCJFbW9qaVVwZGF0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIkVtb2ppRGVsZXRlXCJdID0gNjJdID0gXCJFbW9qaURlbGV0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIk1lc3NhZ2VEZWxldGVcIl0gPSA3Ml0gPSBcIk1lc3NhZ2VEZWxldGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJNZXNzYWdlQnVsa0RlbGV0ZVwiXSA9IDczXSA9IFwiTWVzc2FnZUJ1bGtEZWxldGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJNZXNzYWdlUGluXCJdID0gNzRdID0gXCJNZXNzYWdlUGluXCI7XG4gICAgQXVkaXRMb2dFdmVudFtBdWRpdExvZ0V2ZW50W1wiTWVzc2FnZVVucGluXCJdID0gNzVdID0gXCJNZXNzYWdlVW5waW5cIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJJbnRlZ3JhdGlvbkNyZWF0ZVwiXSA9IDgwXSA9IFwiSW50ZWdyYXRpb25DcmVhdGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJJbnRlZ3JhdGlvblVwZGF0ZVwiXSA9IDgxXSA9IFwiSW50ZWdyYXRpb25VcGRhdGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJJbnRlZ3JhdGlvbkRlbGV0ZVwiXSA9IDgyXSA9IFwiSW50ZWdyYXRpb25EZWxldGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJTdGFnZUluc3RhbmNlQ3JlYXRlXCJdID0gODNdID0gXCJTdGFnZUluc3RhbmNlQ3JlYXRlXCI7XG4gICAgQXVkaXRMb2dFdmVudFtBdWRpdExvZ0V2ZW50W1wiU3RhZ2VJbnN0YW5jZVVwZGF0ZVwiXSA9IDg0XSA9IFwiU3RhZ2VJbnN0YW5jZVVwZGF0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIlN0YWdlSW5zdGFuY2VEZWxldGVcIl0gPSA4NV0gPSBcIlN0YWdlSW5zdGFuY2VEZWxldGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJTdGlja2VyQ3JlYXRlXCJdID0gOTBdID0gXCJTdGlja2VyQ3JlYXRlXCI7XG4gICAgQXVkaXRMb2dFdmVudFtBdWRpdExvZ0V2ZW50W1wiU3RpY2tlclVwZGF0ZVwiXSA9IDkxXSA9IFwiU3RpY2tlclVwZGF0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIlN0aWNrZXJEZWxldGVcIl0gPSA5Ml0gPSBcIlN0aWNrZXJEZWxldGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJHdWlsZFNjaGVkdWxlZEV2ZW50Q3JlYXRlXCJdID0gMTAwXSA9IFwiR3VpbGRTY2hlZHVsZWRFdmVudENyZWF0ZVwiO1xuICAgIEF1ZGl0TG9nRXZlbnRbQXVkaXRMb2dFdmVudFtcIkd1aWxkU2NoZWR1bGVkRXZlbnRVcGRhdGVcIl0gPSAxMDFdID0gXCJHdWlsZFNjaGVkdWxlZEV2ZW50VXBkYXRlXCI7XG4gICAgQXVkaXRMb2dFdmVudFtBdWRpdExvZ0V2ZW50W1wiR3VpbGRTY2hlZHVsZWRFdmVudERlbGV0ZVwiXSA9IDEwMl0gPSBcIkd1aWxkU2NoZWR1bGVkRXZlbnREZWxldGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJUaHJlYWRDcmVhdGVcIl0gPSAxMTBdID0gXCJUaHJlYWRDcmVhdGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJUaHJlYWRVcGRhdGVcIl0gPSAxMTFdID0gXCJUaHJlYWRVcGRhdGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJUaHJlYWREZWxldGVcIl0gPSAxMTJdID0gXCJUaHJlYWREZWxldGVcIjtcbiAgICBBdWRpdExvZ0V2ZW50W0F1ZGl0TG9nRXZlbnRbXCJBcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uVXBkYXRlXCJdID0gMTIxXSA9IFwiQXBwbGljYXRpb25Db21tYW5kUGVybWlzc2lvblVwZGF0ZVwiO1xufSkoQXVkaXRMb2dFdmVudCA9IGV4cG9ydHMuQXVkaXRMb2dFdmVudCB8fCAoZXhwb3J0cy5BdWRpdExvZ0V2ZW50ID0ge30pKTtcbnZhciBBdWRpdExvZ09wdGlvbnNUeXBlO1xuKGZ1bmN0aW9uIChBdWRpdExvZ09wdGlvbnNUeXBlKSB7XG4gICAgQXVkaXRMb2dPcHRpb25zVHlwZVtcIlJvbGVcIl0gPSBcIjBcIjtcbiAgICBBdWRpdExvZ09wdGlvbnNUeXBlW1wiTWVtYmVyXCJdID0gXCIxXCI7XG59KShBdWRpdExvZ09wdGlvbnNUeXBlID0gZXhwb3J0cy5BdWRpdExvZ09wdGlvbnNUeXBlIHx8IChleHBvcnRzLkF1ZGl0TG9nT3B0aW9uc1R5cGUgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXVkaXRMb2cuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIFR5cGVzIGV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9jaGFubmVsXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2hhbm5lbEZsYWdzID0gZXhwb3J0cy5UZXh0SW5wdXRTdHlsZSA9IGV4cG9ydHMuQnV0dG9uU3R5bGUgPSBleHBvcnRzLkNvbXBvbmVudFR5cGUgPSBleHBvcnRzLkFsbG93ZWRNZW50aW9uc1R5cGVzID0gZXhwb3J0cy5FbWJlZFR5cGUgPSBleHBvcnRzLlRocmVhZE1lbWJlckZsYWdzID0gZXhwb3J0cy5UaHJlYWRBdXRvQXJjaGl2ZUR1cmF0aW9uID0gZXhwb3J0cy5PdmVyd3JpdGVUeXBlID0gZXhwb3J0cy5NZXNzYWdlRmxhZ3MgPSBleHBvcnRzLk1lc3NhZ2VBY3Rpdml0eVR5cGUgPSBleHBvcnRzLk1lc3NhZ2VUeXBlID0gZXhwb3J0cy5WaWRlb1F1YWxpdHlNb2RlID0gZXhwb3J0cy5DaGFubmVsVHlwZSA9IGV4cG9ydHMuU29ydE9yZGVyVHlwZSA9IHZvaWQgMDtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2NoYW5uZWwvI2NoYW5uZWwtb2JqZWN0LXNvcnQtb3JkZXItdHlwZXNcbiAqL1xudmFyIFNvcnRPcmRlclR5cGU7XG4oZnVuY3Rpb24gKFNvcnRPcmRlclR5cGUpIHtcbiAgICAvKipcbiAgICAgKiBTb3J0IGZvcnVtIHBvc3RzIGJ5IGFjdGl2aXR5XG4gICAgICovXG4gICAgU29ydE9yZGVyVHlwZVtTb3J0T3JkZXJUeXBlW1wiTGF0ZXN0QWN0aXZpdHlcIl0gPSAwXSA9IFwiTGF0ZXN0QWN0aXZpdHlcIjtcbiAgICAvKipcbiAgICAgKiBTb3J0IGZvcnVtIHBvc3RzIGJ5IGNyZWF0aW9uIHRpbWUgKGZyb20gbW9zdCByZWNlbnQgdG8gb2xkZXN0KVxuICAgICAqL1xuICAgIFNvcnRPcmRlclR5cGVbU29ydE9yZGVyVHlwZVtcIkNyZWF0aW9uRGF0ZVwiXSA9IDFdID0gXCJDcmVhdGlvbkRhdGVcIjtcbn0pKFNvcnRPcmRlclR5cGUgPSBleHBvcnRzLlNvcnRPcmRlclR5cGUgfHwgKGV4cG9ydHMuU29ydE9yZGVyVHlwZSA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9jaGFubmVsI2NoYW5uZWwtb2JqZWN0LWNoYW5uZWwtdHlwZXNcbiAqL1xudmFyIENoYW5uZWxUeXBlO1xuKGZ1bmN0aW9uIChDaGFubmVsVHlwZSkge1xuICAgIC8qKlxuICAgICAqIEEgdGV4dCBjaGFubmVsIHdpdGhpbiBhIGd1aWxkXG4gICAgICovXG4gICAgQ2hhbm5lbFR5cGVbQ2hhbm5lbFR5cGVbXCJHdWlsZFRleHRcIl0gPSAwXSA9IFwiR3VpbGRUZXh0XCI7XG4gICAgLyoqXG4gICAgICogQSBkaXJlY3QgbWVzc2FnZSBiZXR3ZWVuIHVzZXJzXG4gICAgICovXG4gICAgQ2hhbm5lbFR5cGVbQ2hhbm5lbFR5cGVbXCJETVwiXSA9IDFdID0gXCJETVwiO1xuICAgIC8qKlxuICAgICAqIEEgdm9pY2UgY2hhbm5lbCB3aXRoaW4gYSBndWlsZFxuICAgICAqL1xuICAgIENoYW5uZWxUeXBlW0NoYW5uZWxUeXBlW1wiR3VpbGRWb2ljZVwiXSA9IDJdID0gXCJHdWlsZFZvaWNlXCI7XG4gICAgLyoqXG4gICAgICogQSBkaXJlY3QgbWVzc2FnZSBiZXR3ZWVuIG11bHRpcGxlIHVzZXJzXG4gICAgICovXG4gICAgQ2hhbm5lbFR5cGVbQ2hhbm5lbFR5cGVbXCJHcm91cERNXCJdID0gM10gPSBcIkdyb3VwRE1cIjtcbiAgICAvKipcbiAgICAgKiBBbiBvcmdhbml6YXRpb25hbCBjYXRlZ29yeSB0aGF0IGNvbnRhaW5zIHVwIHRvIDUwIGNoYW5uZWxzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9zdXBwb3J0LmRpc2NvcmQuY29tL2hjL2VuLXVzL2FydGljbGVzLzExNTAwMTU4MDE3MS1DaGFubmVsLUNhdGVnb3JpZXMtMTAxXG4gICAgICovXG4gICAgQ2hhbm5lbFR5cGVbQ2hhbm5lbFR5cGVbXCJHdWlsZENhdGVnb3J5XCJdID0gNF0gPSBcIkd1aWxkQ2F0ZWdvcnlcIjtcbiAgICAvKipcbiAgICAgKiBBIGNoYW5uZWwgdGhhdCB1c2VycyBjYW4gZm9sbG93IGFuZCBjcm9zc3Bvc3QgaW50byB0aGVpciBvd24gZ3VpbGRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL3N1cHBvcnQuZGlzY29yZC5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMzYwMDMyMDA4MTkyXG4gICAgICovXG4gICAgQ2hhbm5lbFR5cGVbQ2hhbm5lbFR5cGVbXCJHdWlsZEFubm91bmNlbWVudFwiXSA9IDVdID0gXCJHdWlsZEFubm91bmNlbWVudFwiO1xuICAgIC8qKlxuICAgICAqIEEgdGVtcG9yYXJ5IHN1Yi1jaGFubmVsIHdpdGhpbiBhIEd1aWxkIEFubm91bmNlbWVudCBjaGFubmVsXG4gICAgICovXG4gICAgQ2hhbm5lbFR5cGVbQ2hhbm5lbFR5cGVbXCJBbm5vdW5jZW1lbnRUaHJlYWRcIl0gPSAxMF0gPSBcIkFubm91bmNlbWVudFRocmVhZFwiO1xuICAgIC8qKlxuICAgICAqIEEgdGVtcG9yYXJ5IHN1Yi1jaGFubmVsIHdpdGhpbiBhIEd1aWxkIFRleHQgY2hhbm5lbFxuICAgICAqL1xuICAgIENoYW5uZWxUeXBlW0NoYW5uZWxUeXBlW1wiUHVibGljVGhyZWFkXCJdID0gMTFdID0gXCJQdWJsaWNUaHJlYWRcIjtcbiAgICAvKipcbiAgICAgKiBBIHRlbXBvcmFyeSBzdWItY2hhbm5lbCB3aXRoaW4gYSBHdWlsZCBUZXh0IGNoYW5uZWwgdGhhdCBpcyBvbmx5IHZpZXdhYmxlIGJ5IHRob3NlIGludml0ZWQgYW5kIHRob3NlIHdpdGggdGhlIE1hbmFnZSBUaHJlYWRzIHBlcm1pc3Npb25cbiAgICAgKi9cbiAgICBDaGFubmVsVHlwZVtDaGFubmVsVHlwZVtcIlByaXZhdGVUaHJlYWRcIl0gPSAxMl0gPSBcIlByaXZhdGVUaHJlYWRcIjtcbiAgICAvKipcbiAgICAgKiBBIHZvaWNlIGNoYW5uZWwgZm9yIGhvc3RpbmcgZXZlbnRzIHdpdGggYW4gYXVkaWVuY2VcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL3N1cHBvcnQuZGlzY29yZC5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMTUwMDAwNTUxMzcyMlxuICAgICAqL1xuICAgIENoYW5uZWxUeXBlW0NoYW5uZWxUeXBlW1wiR3VpbGRTdGFnZVZvaWNlXCJdID0gMTNdID0gXCJHdWlsZFN0YWdlVm9pY2VcIjtcbiAgICAvKipcbiAgICAgKiBUaGUgY2hhbm5lbCBpbiBhIFN0dWRlbnQgSHViIGNvbnRhaW5pbmcgdGhlIGxpc3RlZCBzZXJ2ZXJzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9zdXBwb3J0LmRpc2NvcmQuY29tL2hjL2VuLXVzL2FydGljbGVzLzQ0MDYwNDY2NTE5MjctRGlzY29yZC1TdHVkZW50LUh1YnMtRkFRXG4gICAgICovXG4gICAgQ2hhbm5lbFR5cGVbQ2hhbm5lbFR5cGVbXCJHdWlsZERpcmVjdG9yeVwiXSA9IDE0XSA9IFwiR3VpbGREaXJlY3RvcnlcIjtcbiAgICAvKipcbiAgICAgKiBBIGNoYW5uZWwgdGhhdCBjYW4gb25seSBjb250YWluIHRocmVhZHNcbiAgICAgKi9cbiAgICBDaGFubmVsVHlwZVtDaGFubmVsVHlwZVtcIkd1aWxkRm9ydW1cIl0gPSAxNV0gPSBcIkd1aWxkRm9ydW1cIjtcbiAgICAvLyBFVkVSWVRISU5HIEJFTE9XIFRISVMgTElORSBTSE9VTEQgQkUgT0xEIE5BTUVTIEZPUiBSRU5BTUVEIEVOVU0gTUVNQkVSUyAvL1xuICAgIC8qKlxuICAgICAqIEEgY2hhbm5lbCB0aGF0IHVzZXJzIGNhbiBmb2xsb3cgYW5kIGNyb3NzcG9zdCBpbnRvIHRoZWlyIG93biBndWlsZFxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgVGhpcyBpcyB0aGUgb2xkIG5hbWUgZm9yIHtAYXBpbGluayBDaGFubmVsVHlwZSNHdWlsZEFubm91bmNlbWVudH1cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL3N1cHBvcnQuZGlzY29yZC5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMzYwMDMyMDA4MTkyXG4gICAgICovXG4gICAgQ2hhbm5lbFR5cGVbQ2hhbm5lbFR5cGVbXCJHdWlsZE5ld3NcIl0gPSA1XSA9IFwiR3VpbGROZXdzXCI7XG4gICAgLyoqXG4gICAgICogQSB0ZW1wb3Jhcnkgc3ViLWNoYW5uZWwgd2l0aGluIGEgR3VpbGQgQW5ub3VuY2VtZW50IGNoYW5uZWxcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIFRoaXMgaXMgdGhlIG9sZCBuYW1lIGZvciB7QGFwaWxpbmsgQ2hhbm5lbFR5cGUjQW5ub3VuY2VtZW50VGhyZWFkfVxuICAgICAqL1xuICAgIENoYW5uZWxUeXBlW0NoYW5uZWxUeXBlW1wiR3VpbGROZXdzVGhyZWFkXCJdID0gMTBdID0gXCJHdWlsZE5ld3NUaHJlYWRcIjtcbiAgICAvKipcbiAgICAgKiBBIHRlbXBvcmFyeSBzdWItY2hhbm5lbCB3aXRoaW4gYSBHdWlsZCBUZXh0IGNoYW5uZWxcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIFRoaXMgaXMgdGhlIG9sZCBuYW1lIGZvciB7QGFwaWxpbmsgQ2hhbm5lbFR5cGUjUHVibGljVGhyZWFkfVxuICAgICAqL1xuICAgIENoYW5uZWxUeXBlW0NoYW5uZWxUeXBlW1wiR3VpbGRQdWJsaWNUaHJlYWRcIl0gPSAxMV0gPSBcIkd1aWxkUHVibGljVGhyZWFkXCI7XG4gICAgLyoqXG4gICAgICogQSB0ZW1wb3Jhcnkgc3ViLWNoYW5uZWwgd2l0aGluIGEgR3VpbGQgVGV4dCBjaGFubmVsIHRoYXQgaXMgb25seSB2aWV3YWJsZSBieSB0aG9zZSBpbnZpdGVkIGFuZCB0aG9zZSB3aXRoIHRoZSBNYW5hZ2UgVGhyZWFkcyBwZXJtaXNzaW9uXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIGlzIHRoZSBvbGQgbmFtZSBmb3Ige0BhcGlsaW5rIENoYW5uZWxUeXBlI1ByaXZhdGVUaHJlYWR9XG4gICAgICovXG4gICAgQ2hhbm5lbFR5cGVbQ2hhbm5lbFR5cGVbXCJHdWlsZFByaXZhdGVUaHJlYWRcIl0gPSAxMl0gPSBcIkd1aWxkUHJpdmF0ZVRocmVhZFwiO1xufSkoQ2hhbm5lbFR5cGUgPSBleHBvcnRzLkNoYW5uZWxUeXBlIHx8IChleHBvcnRzLkNoYW5uZWxUeXBlID0ge30pKTtcbnZhciBWaWRlb1F1YWxpdHlNb2RlO1xuKGZ1bmN0aW9uIChWaWRlb1F1YWxpdHlNb2RlKSB7XG4gICAgLyoqXG4gICAgICogRGlzY29yZCBjaG9vc2VzIHRoZSBxdWFsaXR5IGZvciBvcHRpbWFsIHBlcmZvcm1hbmNlXG4gICAgICovXG4gICAgVmlkZW9RdWFsaXR5TW9kZVtWaWRlb1F1YWxpdHlNb2RlW1wiQXV0b1wiXSA9IDFdID0gXCJBdXRvXCI7XG4gICAgLyoqXG4gICAgICogNzIwcFxuICAgICAqL1xuICAgIFZpZGVvUXVhbGl0eU1vZGVbVmlkZW9RdWFsaXR5TW9kZVtcIkZ1bGxcIl0gPSAyXSA9IFwiRnVsbFwiO1xufSkoVmlkZW9RdWFsaXR5TW9kZSA9IGV4cG9ydHMuVmlkZW9RdWFsaXR5TW9kZSB8fCAoZXhwb3J0cy5WaWRlb1F1YWxpdHlNb2RlID0ge30pKTtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2NoYW5uZWwjbWVzc2FnZS1vYmplY3QtbWVzc2FnZS10eXBlc1xuICovXG52YXIgTWVzc2FnZVR5cGU7XG4oZnVuY3Rpb24gKE1lc3NhZ2VUeXBlKSB7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJEZWZhdWx0XCJdID0gMF0gPSBcIkRlZmF1bHRcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIlJlY2lwaWVudEFkZFwiXSA9IDFdID0gXCJSZWNpcGllbnRBZGRcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIlJlY2lwaWVudFJlbW92ZVwiXSA9IDJdID0gXCJSZWNpcGllbnRSZW1vdmVcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkNhbGxcIl0gPSAzXSA9IFwiQ2FsbFwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiQ2hhbm5lbE5hbWVDaGFuZ2VcIl0gPSA0XSA9IFwiQ2hhbm5lbE5hbWVDaGFuZ2VcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkNoYW5uZWxJY29uQ2hhbmdlXCJdID0gNV0gPSBcIkNoYW5uZWxJY29uQ2hhbmdlXCI7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJDaGFubmVsUGlubmVkTWVzc2FnZVwiXSA9IDZdID0gXCJDaGFubmVsUGlubmVkTWVzc2FnZVwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiVXNlckpvaW5cIl0gPSA3XSA9IFwiVXNlckpvaW5cIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkd1aWxkQm9vc3RcIl0gPSA4XSA9IFwiR3VpbGRCb29zdFwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiR3VpbGRCb29zdFRpZXIxXCJdID0gOV0gPSBcIkd1aWxkQm9vc3RUaWVyMVwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiR3VpbGRCb29zdFRpZXIyXCJdID0gMTBdID0gXCJHdWlsZEJvb3N0VGllcjJcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkd1aWxkQm9vc3RUaWVyM1wiXSA9IDExXSA9IFwiR3VpbGRCb29zdFRpZXIzXCI7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJDaGFubmVsRm9sbG93QWRkXCJdID0gMTJdID0gXCJDaGFubmVsRm9sbG93QWRkXCI7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJHdWlsZERpc2NvdmVyeURpc3F1YWxpZmllZFwiXSA9IDE0XSA9IFwiR3VpbGREaXNjb3ZlcnlEaXNxdWFsaWZpZWRcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkd1aWxkRGlzY292ZXJ5UmVxdWFsaWZpZWRcIl0gPSAxNV0gPSBcIkd1aWxkRGlzY292ZXJ5UmVxdWFsaWZpZWRcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkd1aWxkRGlzY292ZXJ5R3JhY2VQZXJpb2RJbml0aWFsV2FybmluZ1wiXSA9IDE2XSA9IFwiR3VpbGREaXNjb3ZlcnlHcmFjZVBlcmlvZEluaXRpYWxXYXJuaW5nXCI7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJHdWlsZERpc2NvdmVyeUdyYWNlUGVyaW9kRmluYWxXYXJuaW5nXCJdID0gMTddID0gXCJHdWlsZERpc2NvdmVyeUdyYWNlUGVyaW9kRmluYWxXYXJuaW5nXCI7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJUaHJlYWRDcmVhdGVkXCJdID0gMThdID0gXCJUaHJlYWRDcmVhdGVkXCI7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJSZXBseVwiXSA9IDE5XSA9IFwiUmVwbHlcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkNoYXRJbnB1dENvbW1hbmRcIl0gPSAyMF0gPSBcIkNoYXRJbnB1dENvbW1hbmRcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIlRocmVhZFN0YXJ0ZXJNZXNzYWdlXCJdID0gMjFdID0gXCJUaHJlYWRTdGFydGVyTWVzc2FnZVwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiR3VpbGRJbnZpdGVSZW1pbmRlclwiXSA9IDIyXSA9IFwiR3VpbGRJbnZpdGVSZW1pbmRlclwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiQ29udGV4dE1lbnVDb21tYW5kXCJdID0gMjNdID0gXCJDb250ZXh0TWVudUNvbW1hbmRcIjtcbn0pKE1lc3NhZ2VUeXBlID0gZXhwb3J0cy5NZXNzYWdlVHlwZSB8fCAoZXhwb3J0cy5NZXNzYWdlVHlwZSA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9jaGFubmVsI21lc3NhZ2Utb2JqZWN0LW1lc3NhZ2UtYWN0aXZpdHktdHlwZXNcbiAqL1xudmFyIE1lc3NhZ2VBY3Rpdml0eVR5cGU7XG4oZnVuY3Rpb24gKE1lc3NhZ2VBY3Rpdml0eVR5cGUpIHtcbiAgICBNZXNzYWdlQWN0aXZpdHlUeXBlW01lc3NhZ2VBY3Rpdml0eVR5cGVbXCJKb2luXCJdID0gMV0gPSBcIkpvaW5cIjtcbiAgICBNZXNzYWdlQWN0aXZpdHlUeXBlW01lc3NhZ2VBY3Rpdml0eVR5cGVbXCJTcGVjdGF0ZVwiXSA9IDJdID0gXCJTcGVjdGF0ZVwiO1xuICAgIE1lc3NhZ2VBY3Rpdml0eVR5cGVbTWVzc2FnZUFjdGl2aXR5VHlwZVtcIkxpc3RlblwiXSA9IDNdID0gXCJMaXN0ZW5cIjtcbiAgICBNZXNzYWdlQWN0aXZpdHlUeXBlW01lc3NhZ2VBY3Rpdml0eVR5cGVbXCJKb2luUmVxdWVzdFwiXSA9IDVdID0gXCJKb2luUmVxdWVzdFwiO1xufSkoTWVzc2FnZUFjdGl2aXR5VHlwZSA9IGV4cG9ydHMuTWVzc2FnZUFjdGl2aXR5VHlwZSB8fCAoZXhwb3J0cy5NZXNzYWdlQWN0aXZpdHlUeXBlID0ge30pKTtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2NoYW5uZWwjbWVzc2FnZS1vYmplY3QtbWVzc2FnZS1mbGFnc1xuICovXG52YXIgTWVzc2FnZUZsYWdzO1xuKGZ1bmN0aW9uIChNZXNzYWdlRmxhZ3MpIHtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1lc3NhZ2UgaGFzIGJlZW4gcHVibGlzaGVkIHRvIHN1YnNjcmliZWQgY2hhbm5lbHMgKHZpYSBDaGFubmVsIEZvbGxvd2luZylcbiAgICAgKi9cbiAgICBNZXNzYWdlRmxhZ3NbTWVzc2FnZUZsYWdzW1wiQ3Jvc3Nwb3N0ZWRcIl0gPSAxXSA9IFwiQ3Jvc3Nwb3N0ZWRcIjtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1lc3NhZ2Ugb3JpZ2luYXRlZCBmcm9tIGEgbWVzc2FnZSBpbiBhbm90aGVyIGNoYW5uZWwgKHZpYSBDaGFubmVsIEZvbGxvd2luZylcbiAgICAgKi9cbiAgICBNZXNzYWdlRmxhZ3NbTWVzc2FnZUZsYWdzW1wiSXNDcm9zc3Bvc3RcIl0gPSAyXSA9IFwiSXNDcm9zc3Bvc3RcIjtcbiAgICAvKipcbiAgICAgKiBEbyBub3QgaW5jbHVkZSBhbnkgZW1iZWRzIHdoZW4gc2VyaWFsaXppbmcgdGhpcyBtZXNzYWdlXG4gICAgICovXG4gICAgTWVzc2FnZUZsYWdzW01lc3NhZ2VGbGFnc1tcIlN1cHByZXNzRW1iZWRzXCJdID0gNF0gPSBcIlN1cHByZXNzRW1iZWRzXCI7XG4gICAgLyoqXG4gICAgICogVGhlIHNvdXJjZSBtZXNzYWdlIGZvciB0aGlzIGNyb3NzcG9zdCBoYXMgYmVlbiBkZWxldGVkICh2aWEgQ2hhbm5lbCBGb2xsb3dpbmcpXG4gICAgICovXG4gICAgTWVzc2FnZUZsYWdzW01lc3NhZ2VGbGFnc1tcIlNvdXJjZU1lc3NhZ2VEZWxldGVkXCJdID0gOF0gPSBcIlNvdXJjZU1lc3NhZ2VEZWxldGVkXCI7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXNzYWdlIGNhbWUgZnJvbSB0aGUgdXJnZW50IG1lc3NhZ2Ugc3lzdGVtXG4gICAgICovXG4gICAgTWVzc2FnZUZsYWdzW01lc3NhZ2VGbGFnc1tcIlVyZ2VudFwiXSA9IDE2XSA9IFwiVXJnZW50XCI7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXNzYWdlIGhhcyBhbiBhc3NvY2lhdGVkIHRocmVhZCwgd2hpY2ggc2hhcmVzIGl0cyBpZFxuICAgICAqL1xuICAgIE1lc3NhZ2VGbGFnc1tNZXNzYWdlRmxhZ3NbXCJIYXNUaHJlYWRcIl0gPSAzMl0gPSBcIkhhc1RocmVhZFwiO1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWVzc2FnZSBpcyBvbmx5IHZpc2libGUgdG8gdGhlIHVzZXIgd2hvIGludm9rZWQgdGhlIEludGVyYWN0aW9uXG4gICAgICovXG4gICAgTWVzc2FnZUZsYWdzW01lc3NhZ2VGbGFnc1tcIkVwaGVtZXJhbFwiXSA9IDY0XSA9IFwiRXBoZW1lcmFsXCI7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXNzYWdlIGlzIGFuIEludGVyYWN0aW9uIFJlc3BvbnNlIGFuZCB0aGUgYm90IGlzIFwidGhpbmtpbmdcIlxuICAgICAqL1xuICAgIE1lc3NhZ2VGbGFnc1tNZXNzYWdlRmxhZ3NbXCJMb2FkaW5nXCJdID0gMTI4XSA9IFwiTG9hZGluZ1wiO1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWVzc2FnZSBmYWlsZWQgdG8gbWVudGlvbiBzb21lIHJvbGVzIGFuZCBhZGQgdGhlaXIgbWVtYmVycyB0byB0aGUgdGhyZWFkXG4gICAgICovXG4gICAgTWVzc2FnZUZsYWdzW01lc3NhZ2VGbGFnc1tcIkZhaWxlZFRvTWVudGlvblNvbWVSb2xlc0luVGhyZWFkXCJdID0gMjU2XSA9IFwiRmFpbGVkVG9NZW50aW9uU29tZVJvbGVzSW5UaHJlYWRcIjtcbn0pKE1lc3NhZ2VGbGFncyA9IGV4cG9ydHMuTWVzc2FnZUZsYWdzIHx8IChleHBvcnRzLk1lc3NhZ2VGbGFncyA9IHt9KSk7XG52YXIgT3ZlcndyaXRlVHlwZTtcbihmdW5jdGlvbiAoT3ZlcndyaXRlVHlwZSkge1xuICAgIE92ZXJ3cml0ZVR5cGVbT3ZlcndyaXRlVHlwZVtcIlJvbGVcIl0gPSAwXSA9IFwiUm9sZVwiO1xuICAgIE92ZXJ3cml0ZVR5cGVbT3ZlcndyaXRlVHlwZVtcIk1lbWJlclwiXSA9IDFdID0gXCJNZW1iZXJcIjtcbn0pKE92ZXJ3cml0ZVR5cGUgPSBleHBvcnRzLk92ZXJ3cml0ZVR5cGUgfHwgKGV4cG9ydHMuT3ZlcndyaXRlVHlwZSA9IHt9KSk7XG52YXIgVGhyZWFkQXV0b0FyY2hpdmVEdXJhdGlvbjtcbihmdW5jdGlvbiAoVGhyZWFkQXV0b0FyY2hpdmVEdXJhdGlvbikge1xuICAgIFRocmVhZEF1dG9BcmNoaXZlRHVyYXRpb25bVGhyZWFkQXV0b0FyY2hpdmVEdXJhdGlvbltcIk9uZUhvdXJcIl0gPSA2MF0gPSBcIk9uZUhvdXJcIjtcbiAgICBUaHJlYWRBdXRvQXJjaGl2ZUR1cmF0aW9uW1RocmVhZEF1dG9BcmNoaXZlRHVyYXRpb25bXCJPbmVEYXlcIl0gPSAxNDQwXSA9IFwiT25lRGF5XCI7XG4gICAgVGhyZWFkQXV0b0FyY2hpdmVEdXJhdGlvbltUaHJlYWRBdXRvQXJjaGl2ZUR1cmF0aW9uW1wiVGhyZWVEYXlzXCJdID0gNDMyMF0gPSBcIlRocmVlRGF5c1wiO1xuICAgIFRocmVhZEF1dG9BcmNoaXZlRHVyYXRpb25bVGhyZWFkQXV0b0FyY2hpdmVEdXJhdGlvbltcIk9uZVdlZWtcIl0gPSAxMDA4MF0gPSBcIk9uZVdlZWtcIjtcbn0pKFRocmVhZEF1dG9BcmNoaXZlRHVyYXRpb24gPSBleHBvcnRzLlRocmVhZEF1dG9BcmNoaXZlRHVyYXRpb24gfHwgKGV4cG9ydHMuVGhyZWFkQXV0b0FyY2hpdmVEdXJhdGlvbiA9IHt9KSk7XG52YXIgVGhyZWFkTWVtYmVyRmxhZ3M7XG4oZnVuY3Rpb24gKFRocmVhZE1lbWJlckZsYWdzKSB7XG59KShUaHJlYWRNZW1iZXJGbGFncyA9IGV4cG9ydHMuVGhyZWFkTWVtYmVyRmxhZ3MgfHwgKGV4cG9ydHMuVGhyZWFkTWVtYmVyRmxhZ3MgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvY2hhbm5lbCNlbWJlZC1vYmplY3QtZW1iZWQtdHlwZXNcbiAqIEBkZXByZWNhdGVkICpFbWJlZCB0eXBlcyBzaG91bGQgYmUgY29uc2lkZXJlZCBkZXByZWNhdGVkIGFuZCBtaWdodCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIEFQSSB2ZXJzaW9uKlxuICovXG52YXIgRW1iZWRUeXBlO1xuKGZ1bmN0aW9uIChFbWJlZFR5cGUpIHtcbiAgICAvKipcbiAgICAgKiBHZW5lcmljIGVtYmVkIHJlbmRlcmVkIGZyb20gZW1iZWQgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIEVtYmVkVHlwZVtcIlJpY2hcIl0gPSBcInJpY2hcIjtcbiAgICAvKipcbiAgICAgKiBJbWFnZSBlbWJlZFxuICAgICAqL1xuICAgIEVtYmVkVHlwZVtcIkltYWdlXCJdID0gXCJpbWFnZVwiO1xuICAgIC8qKlxuICAgICAqIFZpZGVvIGVtYmVkXG4gICAgICovXG4gICAgRW1iZWRUeXBlW1wiVmlkZW9cIl0gPSBcInZpZGVvXCI7XG4gICAgLyoqXG4gICAgICogQW5pbWF0ZWQgZ2lmIGltYWdlIGVtYmVkIHJlbmRlcmVkIGFzIGEgdmlkZW8gZW1iZWRcbiAgICAgKi9cbiAgICBFbWJlZFR5cGVbXCJHSUZWXCJdID0gXCJnaWZ2XCI7XG4gICAgLyoqXG4gICAgICogQXJ0aWNsZSBlbWJlZFxuICAgICAqL1xuICAgIEVtYmVkVHlwZVtcIkFydGljbGVcIl0gPSBcImFydGljbGVcIjtcbiAgICAvKipcbiAgICAgKiBMaW5rIGVtYmVkXG4gICAgICovXG4gICAgRW1iZWRUeXBlW1wiTGlua1wiXSA9IFwibGlua1wiO1xufSkoRW1iZWRUeXBlID0gZXhwb3J0cy5FbWJlZFR5cGUgfHwgKGV4cG9ydHMuRW1iZWRUeXBlID0ge30pKTtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2NoYW5uZWwjYWxsb3dlZC1tZW50aW9ucy1vYmplY3QtYWxsb3dlZC1tZW50aW9uLXR5cGVzXG4gKi9cbnZhciBBbGxvd2VkTWVudGlvbnNUeXBlcztcbihmdW5jdGlvbiAoQWxsb3dlZE1lbnRpb25zVHlwZXMpIHtcbiAgICAvKipcbiAgICAgKiBDb250cm9scyBAZXZlcnlvbmUgYW5kIEBoZXJlIG1lbnRpb25zXG4gICAgICovXG4gICAgQWxsb3dlZE1lbnRpb25zVHlwZXNbXCJFdmVyeW9uZVwiXSA9IFwiZXZlcnlvbmVcIjtcbiAgICAvKipcbiAgICAgKiBDb250cm9scyByb2xlIG1lbnRpb25zXG4gICAgICovXG4gICAgQWxsb3dlZE1lbnRpb25zVHlwZXNbXCJSb2xlXCJdID0gXCJyb2xlc1wiO1xuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHVzZXIgbWVudGlvbnNcbiAgICAgKi9cbiAgICBBbGxvd2VkTWVudGlvbnNUeXBlc1tcIlVzZXJcIl0gPSBcInVzZXJzXCI7XG59KShBbGxvd2VkTWVudGlvbnNUeXBlcyA9IGV4cG9ydHMuQWxsb3dlZE1lbnRpb25zVHlwZXMgfHwgKGV4cG9ydHMuQWxsb3dlZE1lbnRpb25zVHlwZXMgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9pbnRlcmFjdGlvbnMvbWVzc2FnZS1jb21wb25lbnRzI2NvbXBvbmVudC1vYmplY3QtY29tcG9uZW50LXR5cGVzXG4gKi9cbnZhciBDb21wb25lbnRUeXBlO1xuKGZ1bmN0aW9uIChDb21wb25lbnRUeXBlKSB7XG4gICAgLyoqXG4gICAgICogQWN0aW9uIFJvdyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBDb21wb25lbnRUeXBlW0NvbXBvbmVudFR5cGVbXCJBY3Rpb25Sb3dcIl0gPSAxXSA9IFwiQWN0aW9uUm93XCI7XG4gICAgLyoqXG4gICAgICogQnV0dG9uIGNvbXBvbmVudFxuICAgICAqL1xuICAgIENvbXBvbmVudFR5cGVbQ29tcG9uZW50VHlwZVtcIkJ1dHRvblwiXSA9IDJdID0gXCJCdXR0b25cIjtcbiAgICAvKipcbiAgICAgKiBTZWxlY3QgTWVudSBjb21wb25lbnRcbiAgICAgKi9cbiAgICBDb21wb25lbnRUeXBlW0NvbXBvbmVudFR5cGVbXCJTZWxlY3RNZW51XCJdID0gM10gPSBcIlNlbGVjdE1lbnVcIjtcbiAgICAvKipcbiAgICAgKiBUZXh0IElucHV0IGNvbXBvbmVudFxuICAgICAqL1xuICAgIENvbXBvbmVudFR5cGVbQ29tcG9uZW50VHlwZVtcIlRleHRJbnB1dFwiXSA9IDRdID0gXCJUZXh0SW5wdXRcIjtcbn0pKENvbXBvbmVudFR5cGUgPSBleHBvcnRzLkNvbXBvbmVudFR5cGUgfHwgKGV4cG9ydHMuQ29tcG9uZW50VHlwZSA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL2ludGVyYWN0aW9ucy9tZXNzYWdlLWNvbXBvbmVudHMjYnV0dG9uLW9iamVjdC1idXR0b24tc3R5bGVzXG4gKi9cbnZhciBCdXR0b25TdHlsZTtcbihmdW5jdGlvbiAoQnV0dG9uU3R5bGUpIHtcbiAgICBCdXR0b25TdHlsZVtCdXR0b25TdHlsZVtcIlByaW1hcnlcIl0gPSAxXSA9IFwiUHJpbWFyeVwiO1xuICAgIEJ1dHRvblN0eWxlW0J1dHRvblN0eWxlW1wiU2Vjb25kYXJ5XCJdID0gMl0gPSBcIlNlY29uZGFyeVwiO1xuICAgIEJ1dHRvblN0eWxlW0J1dHRvblN0eWxlW1wiU3VjY2Vzc1wiXSA9IDNdID0gXCJTdWNjZXNzXCI7XG4gICAgQnV0dG9uU3R5bGVbQnV0dG9uU3R5bGVbXCJEYW5nZXJcIl0gPSA0XSA9IFwiRGFuZ2VyXCI7XG4gICAgQnV0dG9uU3R5bGVbQnV0dG9uU3R5bGVbXCJMaW5rXCJdID0gNV0gPSBcIkxpbmtcIjtcbn0pKEJ1dHRvblN0eWxlID0gZXhwb3J0cy5CdXR0b25TdHlsZSB8fCAoZXhwb3J0cy5CdXR0b25TdHlsZSA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL2ludGVyYWN0aW9ucy9tZXNzYWdlLWNvbXBvbmVudHMjdGV4dC1pbnB1dHMtdGV4dC1pbnB1dC1zdHlsZXNcbiAqL1xudmFyIFRleHRJbnB1dFN0eWxlO1xuKGZ1bmN0aW9uIChUZXh0SW5wdXRTdHlsZSkge1xuICAgIFRleHRJbnB1dFN0eWxlW1RleHRJbnB1dFN0eWxlW1wiU2hvcnRcIl0gPSAxXSA9IFwiU2hvcnRcIjtcbiAgICBUZXh0SW5wdXRTdHlsZVtUZXh0SW5wdXRTdHlsZVtcIlBhcmFncmFwaFwiXSA9IDJdID0gXCJQYXJhZ3JhcGhcIjtcbn0pKFRleHRJbnB1dFN0eWxlID0gZXhwb3J0cy5UZXh0SW5wdXRTdHlsZSB8fCAoZXhwb3J0cy5UZXh0SW5wdXRTdHlsZSA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9jaGFubmVsI2NoYW5uZWwtb2JqZWN0LWNoYW5uZWwtZmxhZ3NcbiAqL1xudmFyIENoYW5uZWxGbGFncztcbihmdW5jdGlvbiAoQ2hhbm5lbEZsYWdzKSB7XG4gICAgLyoqXG4gICAgICogVGhpcyB0aHJlYWQgaXMgcGlubmVkIHRvIHRoZSB0b3Agb2YgaXRzIHBhcmVudCBmb3J1bSBjaGFubmVsXG4gICAgICovXG4gICAgQ2hhbm5lbEZsYWdzW0NoYW5uZWxGbGFnc1tcIlBpbm5lZFwiXSA9IDJdID0gXCJQaW5uZWRcIjtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGEgdGFnIGlzIHJlcXVpcmVkIHRvIGJlIHNwZWNpZmllZCB3aGVuIGNyZWF0aW5nIGEgdGhyZWFkIGluIGEgZm9ydW0gY2hhbm5lbC5cbiAgICAgKiBUYWdzIGFyZSBzcGVjaWZpZWQgaW4gdGhlIGBhcHBsaWVkX3RhZ3NgIGZpZWxkXG4gICAgICovXG4gICAgQ2hhbm5lbEZsYWdzW0NoYW5uZWxGbGFnc1tcIlJlcXVpcmVUYWdcIl0gPSAxNl0gPSBcIlJlcXVpcmVUYWdcIjtcbn0pKENoYW5uZWxGbGFncyA9IGV4cG9ydHMuQ2hhbm5lbEZsYWdzIHx8IChleHBvcnRzLkNoYW5uZWxGbGFncyA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGFubmVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBUeXBlcyBleHRyYWN0ZWQgZnJvbSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvZW1vamlcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1vamkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIFR5cGVzIGV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3RvcGljcy9nYXRld2F5XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWN0aXZpdHlGbGFncyA9IGV4cG9ydHMuQWN0aXZpdHlUeXBlID0gZXhwb3J0cy5BY3Rpdml0eVBsYXRmb3JtID0gZXhwb3J0cy5QcmVzZW5jZVVwZGF0ZVN0YXR1cyA9IHZvaWQgMDtcbnZhciBQcmVzZW5jZVVwZGF0ZVN0YXR1cztcbihmdW5jdGlvbiAoUHJlc2VuY2VVcGRhdGVTdGF0dXMpIHtcbiAgICBQcmVzZW5jZVVwZGF0ZVN0YXR1c1tcIk9ubGluZVwiXSA9IFwib25saW5lXCI7XG4gICAgUHJlc2VuY2VVcGRhdGVTdGF0dXNbXCJEb05vdERpc3R1cmJcIl0gPSBcImRuZFwiO1xuICAgIFByZXNlbmNlVXBkYXRlU3RhdHVzW1wiSWRsZVwiXSA9IFwiaWRsZVwiO1xuICAgIC8qKlxuICAgICAqIEludmlzaWJsZSBhbmQgc2hvd24gYXMgb2ZmbGluZVxuICAgICAqL1xuICAgIFByZXNlbmNlVXBkYXRlU3RhdHVzW1wiSW52aXNpYmxlXCJdID0gXCJpbnZpc2libGVcIjtcbiAgICBQcmVzZW5jZVVwZGF0ZVN0YXR1c1tcIk9mZmxpbmVcIl0gPSBcIm9mZmxpbmVcIjtcbn0pKFByZXNlbmNlVXBkYXRlU3RhdHVzID0gZXhwb3J0cy5QcmVzZW5jZVVwZGF0ZVN0YXR1cyB8fCAoZXhwb3J0cy5QcmVzZW5jZVVwZGF0ZVN0YXR1cyA9IHt9KSk7XG4vKipcbiAqIEB1bnN0YWJsZSBUaGlzIGVudW0gaXMgY3VycmVudGx5IG5vdCBkb2N1bWVudGVkIGJ5IERpc2NvcmQgYnV0IGhhcyBrbm93biB2YWx1ZXMgd2hpY2ggd2Ugd2lsbCB0cnkgdG8ga2VlcCB1cCB0byBkYXRlLlxuICogVmFsdWVzIG1pZ2h0IGJlIGFkZGVkIG9yIHJlbW92ZWQgd2l0aG91dCBhIG1ham9yIHZlcnNpb24gYnVtcC5cbiAqL1xudmFyIEFjdGl2aXR5UGxhdGZvcm07XG4oZnVuY3Rpb24gKEFjdGl2aXR5UGxhdGZvcm0pIHtcbiAgICBBY3Rpdml0eVBsYXRmb3JtW1wiRGVza3RvcFwiXSA9IFwiZGVza3RvcFwiO1xuICAgIEFjdGl2aXR5UGxhdGZvcm1bXCJYYm94XCJdID0gXCJ4Ym94XCI7XG4gICAgQWN0aXZpdHlQbGF0Zm9ybVtcIlNhbXN1bmdcIl0gPSBcInNhbXN1bmdcIjtcbiAgICBBY3Rpdml0eVBsYXRmb3JtW1wiSU9TXCJdID0gXCJpb3NcIjtcbiAgICBBY3Rpdml0eVBsYXRmb3JtW1wiQW5kcm9pZFwiXSA9IFwiYW5kcm9pZFwiO1xuICAgIEFjdGl2aXR5UGxhdGZvcm1bXCJFbWJlZGRlZFwiXSA9IFwiZW1iZWRkZWRcIjtcbiAgICBBY3Rpdml0eVBsYXRmb3JtW1wiUFM0XCJdID0gXCJwczRcIjtcbiAgICBBY3Rpdml0eVBsYXRmb3JtW1wiUFM1XCJdID0gXCJwczVcIjtcbn0pKEFjdGl2aXR5UGxhdGZvcm0gPSBleHBvcnRzLkFjdGl2aXR5UGxhdGZvcm0gfHwgKGV4cG9ydHMuQWN0aXZpdHlQbGF0Zm9ybSA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3RvcGljcy9nYXRld2F5I2FjdGl2aXR5LW9iamVjdC1hY3Rpdml0eS10eXBlc1xuICovXG52YXIgQWN0aXZpdHlUeXBlO1xuKGZ1bmN0aW9uIChBY3Rpdml0eVR5cGUpIHtcbiAgICAvKipcbiAgICAgKiBQbGF5aW5nIHtnYW1lfVxuICAgICAqL1xuICAgIEFjdGl2aXR5VHlwZVtBY3Rpdml0eVR5cGVbXCJQbGF5aW5nXCJdID0gMF0gPSBcIlBsYXlpbmdcIjtcbiAgICAvKipcbiAgICAgKiBTdHJlYW1pbmcge2RldGFpbHN9XG4gICAgICovXG4gICAgQWN0aXZpdHlUeXBlW0FjdGl2aXR5VHlwZVtcIlN0cmVhbWluZ1wiXSA9IDFdID0gXCJTdHJlYW1pbmdcIjtcbiAgICAvKipcbiAgICAgKiBMaXN0ZW5pbmcgdG8ge25hbWV9XG4gICAgICovXG4gICAgQWN0aXZpdHlUeXBlW0FjdGl2aXR5VHlwZVtcIkxpc3RlbmluZ1wiXSA9IDJdID0gXCJMaXN0ZW5pbmdcIjtcbiAgICAvKipcbiAgICAgKiBXYXRjaGluZyB7ZGV0YWlsc31cbiAgICAgKi9cbiAgICBBY3Rpdml0eVR5cGVbQWN0aXZpdHlUeXBlW1wiV2F0Y2hpbmdcIl0gPSAzXSA9IFwiV2F0Y2hpbmdcIjtcbiAgICAvKipcbiAgICAgKiB7ZW1vaml9IHtkZXRhaWxzfVxuICAgICAqL1xuICAgIEFjdGl2aXR5VHlwZVtBY3Rpdml0eVR5cGVbXCJDdXN0b21cIl0gPSA0XSA9IFwiQ3VzdG9tXCI7XG4gICAgLyoqXG4gICAgICogQ29tcGV0aW5nIGluIHtuYW1lfVxuICAgICAqL1xuICAgIEFjdGl2aXR5VHlwZVtBY3Rpdml0eVR5cGVbXCJDb21wZXRpbmdcIl0gPSA1XSA9IFwiQ29tcGV0aW5nXCI7XG59KShBY3Rpdml0eVR5cGUgPSBleHBvcnRzLkFjdGl2aXR5VHlwZSB8fCAoZXhwb3J0cy5BY3Rpdml0eVR5cGUgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheSNhY3Rpdml0eS1vYmplY3QtYWN0aXZpdHktZmxhZ3NcbiAqL1xudmFyIEFjdGl2aXR5RmxhZ3M7XG4oZnVuY3Rpb24gKEFjdGl2aXR5RmxhZ3MpIHtcbiAgICBBY3Rpdml0eUZsYWdzW0FjdGl2aXR5RmxhZ3NbXCJJbnN0YW5jZVwiXSA9IDFdID0gXCJJbnN0YW5jZVwiO1xuICAgIEFjdGl2aXR5RmxhZ3NbQWN0aXZpdHlGbGFnc1tcIkpvaW5cIl0gPSAyXSA9IFwiSm9pblwiO1xuICAgIEFjdGl2aXR5RmxhZ3NbQWN0aXZpdHlGbGFnc1tcIlNwZWN0YXRlXCJdID0gNF0gPSBcIlNwZWN0YXRlXCI7XG4gICAgQWN0aXZpdHlGbGFnc1tBY3Rpdml0eUZsYWdzW1wiSm9pblJlcXVlc3RcIl0gPSA4XSA9IFwiSm9pblJlcXVlc3RcIjtcbiAgICBBY3Rpdml0eUZsYWdzW0FjdGl2aXR5RmxhZ3NbXCJTeW5jXCJdID0gMTZdID0gXCJTeW5jXCI7XG4gICAgQWN0aXZpdHlGbGFnc1tBY3Rpdml0eUZsYWdzW1wiUGxheVwiXSA9IDMyXSA9IFwiUGxheVwiO1xuICAgIEFjdGl2aXR5RmxhZ3NbQWN0aXZpdHlGbGFnc1tcIlBhcnR5UHJpdmFjeUZyaWVuZHNcIl0gPSA2NF0gPSBcIlBhcnR5UHJpdmFjeUZyaWVuZHNcIjtcbiAgICBBY3Rpdml0eUZsYWdzW0FjdGl2aXR5RmxhZ3NbXCJQYXJ0eVByaXZhY3lWb2ljZUNoYW5uZWxcIl0gPSAxMjhdID0gXCJQYXJ0eVByaXZhY3lWb2ljZUNoYW5uZWxcIjtcbiAgICBBY3Rpdml0eUZsYWdzW0FjdGl2aXR5RmxhZ3NbXCJFbWJlZGRlZFwiXSA9IDI1Nl0gPSBcIkVtYmVkZGVkXCI7XG59KShBY3Rpdml0eUZsYWdzID0gZXhwb3J0cy5BY3Rpdml0eUZsYWdzIHx8IChleHBvcnRzLkFjdGl2aXR5RmxhZ3MgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2F0ZXdheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogVHlwZXMgZXh0cmFjdGVkIGZyb20gaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2d1aWxkXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVtYmVyc2hpcFNjcmVlbmluZ0ZpZWxkVHlwZSA9IGV4cG9ydHMuR3VpbGRXaWRnZXRTdHlsZSA9IGV4cG9ydHMuSW50ZWdyYXRpb25FeHBpcmVCZWhhdmlvciA9IGV4cG9ydHMuR3VpbGRGZWF0dXJlID0gZXhwb3J0cy5HdWlsZFN5c3RlbUNoYW5uZWxGbGFncyA9IGV4cG9ydHMuR3VpbGRIdWJUeXBlID0gZXhwb3J0cy5HdWlsZFByZW1pdW1UaWVyID0gZXhwb3J0cy5HdWlsZFZlcmlmaWNhdGlvbkxldmVsID0gZXhwb3J0cy5HdWlsZE5TRldMZXZlbCA9IGV4cG9ydHMuR3VpbGRNRkFMZXZlbCA9IGV4cG9ydHMuR3VpbGRFeHBsaWNpdENvbnRlbnRGaWx0ZXIgPSBleHBvcnRzLkd1aWxkRGVmYXVsdE1lc3NhZ2VOb3RpZmljYXRpb25zID0gdm9pZCAwO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvZ3VpbGQjZ3VpbGQtb2JqZWN0LWRlZmF1bHQtbWVzc2FnZS1ub3RpZmljYXRpb24tbGV2ZWxcbiAqL1xudmFyIEd1aWxkRGVmYXVsdE1lc3NhZ2VOb3RpZmljYXRpb25zO1xuKGZ1bmN0aW9uIChHdWlsZERlZmF1bHRNZXNzYWdlTm90aWZpY2F0aW9ucykge1xuICAgIEd1aWxkRGVmYXVsdE1lc3NhZ2VOb3RpZmljYXRpb25zW0d1aWxkRGVmYXVsdE1lc3NhZ2VOb3RpZmljYXRpb25zW1wiQWxsTWVzc2FnZXNcIl0gPSAwXSA9IFwiQWxsTWVzc2FnZXNcIjtcbiAgICBHdWlsZERlZmF1bHRNZXNzYWdlTm90aWZpY2F0aW9uc1tHdWlsZERlZmF1bHRNZXNzYWdlTm90aWZpY2F0aW9uc1tcIk9ubHlNZW50aW9uc1wiXSA9IDFdID0gXCJPbmx5TWVudGlvbnNcIjtcbn0pKEd1aWxkRGVmYXVsdE1lc3NhZ2VOb3RpZmljYXRpb25zID0gZXhwb3J0cy5HdWlsZERlZmF1bHRNZXNzYWdlTm90aWZpY2F0aW9ucyB8fCAoZXhwb3J0cy5HdWlsZERlZmF1bHRNZXNzYWdlTm90aWZpY2F0aW9ucyA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9ndWlsZCNndWlsZC1vYmplY3QtZXhwbGljaXQtY29udGVudC1maWx0ZXItbGV2ZWxcbiAqL1xudmFyIEd1aWxkRXhwbGljaXRDb250ZW50RmlsdGVyO1xuKGZ1bmN0aW9uIChHdWlsZEV4cGxpY2l0Q29udGVudEZpbHRlcikge1xuICAgIEd1aWxkRXhwbGljaXRDb250ZW50RmlsdGVyW0d1aWxkRXhwbGljaXRDb250ZW50RmlsdGVyW1wiRGlzYWJsZWRcIl0gPSAwXSA9IFwiRGlzYWJsZWRcIjtcbiAgICBHdWlsZEV4cGxpY2l0Q29udGVudEZpbHRlcltHdWlsZEV4cGxpY2l0Q29udGVudEZpbHRlcltcIk1lbWJlcnNXaXRob3V0Um9sZXNcIl0gPSAxXSA9IFwiTWVtYmVyc1dpdGhvdXRSb2xlc1wiO1xuICAgIEd1aWxkRXhwbGljaXRDb250ZW50RmlsdGVyW0d1aWxkRXhwbGljaXRDb250ZW50RmlsdGVyW1wiQWxsTWVtYmVyc1wiXSA9IDJdID0gXCJBbGxNZW1iZXJzXCI7XG59KShHdWlsZEV4cGxpY2l0Q29udGVudEZpbHRlciA9IGV4cG9ydHMuR3VpbGRFeHBsaWNpdENvbnRlbnRGaWx0ZXIgfHwgKGV4cG9ydHMuR3VpbGRFeHBsaWNpdENvbnRlbnRGaWx0ZXIgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvZ3VpbGQjZ3VpbGQtb2JqZWN0LW1mYS1sZXZlbFxuICovXG52YXIgR3VpbGRNRkFMZXZlbDtcbihmdW5jdGlvbiAoR3VpbGRNRkFMZXZlbCkge1xuICAgIEd1aWxkTUZBTGV2ZWxbR3VpbGRNRkFMZXZlbFtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIEd1aWxkTUZBTGV2ZWxbR3VpbGRNRkFMZXZlbFtcIkVsZXZhdGVkXCJdID0gMV0gPSBcIkVsZXZhdGVkXCI7XG59KShHdWlsZE1GQUxldmVsID0gZXhwb3J0cy5HdWlsZE1GQUxldmVsIHx8IChleHBvcnRzLkd1aWxkTUZBTGV2ZWwgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvZ3VpbGQjZ3VpbGQtb2JqZWN0LWd1aWxkLW5zZnctbGV2ZWxcbiAqL1xudmFyIEd1aWxkTlNGV0xldmVsO1xuKGZ1bmN0aW9uIChHdWlsZE5TRldMZXZlbCkge1xuICAgIEd1aWxkTlNGV0xldmVsW0d1aWxkTlNGV0xldmVsW1wiRGVmYXVsdFwiXSA9IDBdID0gXCJEZWZhdWx0XCI7XG4gICAgR3VpbGROU0ZXTGV2ZWxbR3VpbGROU0ZXTGV2ZWxbXCJFeHBsaWNpdFwiXSA9IDFdID0gXCJFeHBsaWNpdFwiO1xuICAgIEd1aWxkTlNGV0xldmVsW0d1aWxkTlNGV0xldmVsW1wiU2FmZVwiXSA9IDJdID0gXCJTYWZlXCI7XG4gICAgR3VpbGROU0ZXTGV2ZWxbR3VpbGROU0ZXTGV2ZWxbXCJBZ2VSZXN0cmljdGVkXCJdID0gM10gPSBcIkFnZVJlc3RyaWN0ZWRcIjtcbn0pKEd1aWxkTlNGV0xldmVsID0gZXhwb3J0cy5HdWlsZE5TRldMZXZlbCB8fCAoZXhwb3J0cy5HdWlsZE5TRldMZXZlbCA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9ndWlsZCNndWlsZC1vYmplY3QtdmVyaWZpY2F0aW9uLWxldmVsXG4gKi9cbnZhciBHdWlsZFZlcmlmaWNhdGlvbkxldmVsO1xuKGZ1bmN0aW9uIChHdWlsZFZlcmlmaWNhdGlvbkxldmVsKSB7XG4gICAgLyoqXG4gICAgICogVW5yZXN0cmljdGVkXG4gICAgICovXG4gICAgR3VpbGRWZXJpZmljYXRpb25MZXZlbFtHdWlsZFZlcmlmaWNhdGlvbkxldmVsW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gICAgLyoqXG4gICAgICogTXVzdCBoYXZlIHZlcmlmaWVkIGVtYWlsIG9uIGFjY291bnRcbiAgICAgKi9cbiAgICBHdWlsZFZlcmlmaWNhdGlvbkxldmVsW0d1aWxkVmVyaWZpY2F0aW9uTGV2ZWxbXCJMb3dcIl0gPSAxXSA9IFwiTG93XCI7XG4gICAgLyoqXG4gICAgICogTXVzdCBiZSByZWdpc3RlcmVkIG9uIERpc2NvcmQgZm9yIGxvbmdlciB0aGFuIDUgbWludXRlc1xuICAgICAqL1xuICAgIEd1aWxkVmVyaWZpY2F0aW9uTGV2ZWxbR3VpbGRWZXJpZmljYXRpb25MZXZlbFtcIk1lZGl1bVwiXSA9IDJdID0gXCJNZWRpdW1cIjtcbiAgICAvKipcbiAgICAgKiBNdXN0IGJlIGEgbWVtYmVyIG9mIHRoZSBndWlsZCBmb3IgbG9uZ2VyIHRoYW4gMTAgbWludXRlc1xuICAgICAqL1xuICAgIEd1aWxkVmVyaWZpY2F0aW9uTGV2ZWxbR3VpbGRWZXJpZmljYXRpb25MZXZlbFtcIkhpZ2hcIl0gPSAzXSA9IFwiSGlnaFwiO1xuICAgIC8qKlxuICAgICAqIE11c3QgaGF2ZSBhIHZlcmlmaWVkIHBob25lIG51bWJlclxuICAgICAqL1xuICAgIEd1aWxkVmVyaWZpY2F0aW9uTGV2ZWxbR3VpbGRWZXJpZmljYXRpb25MZXZlbFtcIlZlcnlIaWdoXCJdID0gNF0gPSBcIlZlcnlIaWdoXCI7XG59KShHdWlsZFZlcmlmaWNhdGlvbkxldmVsID0gZXhwb3J0cy5HdWlsZFZlcmlmaWNhdGlvbkxldmVsIHx8IChleHBvcnRzLkd1aWxkVmVyaWZpY2F0aW9uTGV2ZWwgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvZ3VpbGQjZ3VpbGQtb2JqZWN0LXByZW1pdW0tdGllclxuICovXG52YXIgR3VpbGRQcmVtaXVtVGllcjtcbihmdW5jdGlvbiAoR3VpbGRQcmVtaXVtVGllcikge1xuICAgIEd1aWxkUHJlbWl1bVRpZXJbR3VpbGRQcmVtaXVtVGllcltcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIEd1aWxkUHJlbWl1bVRpZXJbR3VpbGRQcmVtaXVtVGllcltcIlRpZXIxXCJdID0gMV0gPSBcIlRpZXIxXCI7XG4gICAgR3VpbGRQcmVtaXVtVGllcltHdWlsZFByZW1pdW1UaWVyW1wiVGllcjJcIl0gPSAyXSA9IFwiVGllcjJcIjtcbiAgICBHdWlsZFByZW1pdW1UaWVyW0d1aWxkUHJlbWl1bVRpZXJbXCJUaWVyM1wiXSA9IDNdID0gXCJUaWVyM1wiO1xufSkoR3VpbGRQcmVtaXVtVGllciA9IGV4cG9ydHMuR3VpbGRQcmVtaXVtVGllciB8fCAoZXhwb3J0cy5HdWlsZFByZW1pdW1UaWVyID0ge30pKTtcbnZhciBHdWlsZEh1YlR5cGU7XG4oZnVuY3Rpb24gKEd1aWxkSHViVHlwZSkge1xuICAgIEd1aWxkSHViVHlwZVtHdWlsZEh1YlR5cGVbXCJEZWZhdWx0XCJdID0gMF0gPSBcIkRlZmF1bHRcIjtcbiAgICBHdWlsZEh1YlR5cGVbR3VpbGRIdWJUeXBlW1wiSGlnaFNjaG9vbFwiXSA9IDFdID0gXCJIaWdoU2Nob29sXCI7XG4gICAgR3VpbGRIdWJUeXBlW0d1aWxkSHViVHlwZVtcIkNvbGxlZ2VcIl0gPSAyXSA9IFwiQ29sbGVnZVwiO1xufSkoR3VpbGRIdWJUeXBlID0gZXhwb3J0cy5HdWlsZEh1YlR5cGUgfHwgKGV4cG9ydHMuR3VpbGRIdWJUeXBlID0ge30pKTtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2d1aWxkI2d1aWxkLW9iamVjdC1zeXN0ZW0tY2hhbm5lbC1mbGFnc1xuICovXG52YXIgR3VpbGRTeXN0ZW1DaGFubmVsRmxhZ3M7XG4oZnVuY3Rpb24gKEd1aWxkU3lzdGVtQ2hhbm5lbEZsYWdzKSB7XG4gICAgLyoqXG4gICAgICogU3VwcHJlc3MgbWVtYmVyIGpvaW4gbm90aWZpY2F0aW9uc1xuICAgICAqL1xuICAgIEd1aWxkU3lzdGVtQ2hhbm5lbEZsYWdzW0d1aWxkU3lzdGVtQ2hhbm5lbEZsYWdzW1wiU3VwcHJlc3NKb2luTm90aWZpY2F0aW9uc1wiXSA9IDFdID0gXCJTdXBwcmVzc0pvaW5Ob3RpZmljYXRpb25zXCI7XG4gICAgLyoqXG4gICAgICogU3VwcHJlc3Mgc2VydmVyIGJvb3N0IG5vdGlmaWNhdGlvbnNcbiAgICAgKi9cbiAgICBHdWlsZFN5c3RlbUNoYW5uZWxGbGFnc1tHdWlsZFN5c3RlbUNoYW5uZWxGbGFnc1tcIlN1cHByZXNzUHJlbWl1bVN1YnNjcmlwdGlvbnNcIl0gPSAyXSA9IFwiU3VwcHJlc3NQcmVtaXVtU3Vic2NyaXB0aW9uc1wiO1xuICAgIC8qKlxuICAgICAqIFN1cHByZXNzIHNlcnZlciBzZXR1cCB0aXBzXG4gICAgICovXG4gICAgR3VpbGRTeXN0ZW1DaGFubmVsRmxhZ3NbR3VpbGRTeXN0ZW1DaGFubmVsRmxhZ3NbXCJTdXBwcmVzc0d1aWxkUmVtaW5kZXJOb3RpZmljYXRpb25zXCJdID0gNF0gPSBcIlN1cHByZXNzR3VpbGRSZW1pbmRlck5vdGlmaWNhdGlvbnNcIjtcbiAgICAvKipcbiAgICAgKiBIaWRlIG1lbWJlciBqb2luIHN0aWNrZXIgcmVwbHkgYnV0dG9uc1xuICAgICAqL1xuICAgIEd1aWxkU3lzdGVtQ2hhbm5lbEZsYWdzW0d1aWxkU3lzdGVtQ2hhbm5lbEZsYWdzW1wiU3VwcHJlc3NKb2luTm90aWZpY2F0aW9uUmVwbGllc1wiXSA9IDhdID0gXCJTdXBwcmVzc0pvaW5Ob3RpZmljYXRpb25SZXBsaWVzXCI7XG59KShHdWlsZFN5c3RlbUNoYW5uZWxGbGFncyA9IGV4cG9ydHMuR3VpbGRTeXN0ZW1DaGFubmVsRmxhZ3MgfHwgKGV4cG9ydHMuR3VpbGRTeXN0ZW1DaGFubmVsRmxhZ3MgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvZ3VpbGQjZ3VpbGQtb2JqZWN0LWd1aWxkLWZlYXR1cmVzXG4gKi9cbnZhciBHdWlsZEZlYXR1cmU7XG4oZnVuY3Rpb24gKEd1aWxkRmVhdHVyZSkge1xuICAgIC8qKlxuICAgICAqIEd1aWxkIGhhcyBhY2Nlc3MgdG8gc2V0IGFuIGFuaW1hdGVkIGd1aWxkIGJhbm5lciBpbWFnZVxuICAgICAqL1xuICAgIEd1aWxkRmVhdHVyZVtcIkFuaW1hdGVkQmFubmVyXCJdID0gXCJBTklNQVRFRF9CQU5ORVJcIjtcbiAgICAvKipcbiAgICAgKiBHdWlsZCBoYXMgYWNjZXNzIHRvIHNldCBhbiBhbmltYXRlZCBndWlsZCBpY29uXG4gICAgICovXG4gICAgR3VpbGRGZWF0dXJlW1wiQW5pbWF0ZWRJY29uXCJdID0gXCJBTklNQVRFRF9JQ09OXCI7XG4gICAgLyoqXG4gICAgICogR3VpbGQgaGFzIGFjY2VzcyB0byBzZXQgYSBndWlsZCBiYW5uZXIgaW1hZ2VcbiAgICAgKi9cbiAgICBHdWlsZEZlYXR1cmVbXCJCYW5uZXJcIl0gPSBcIkJBTk5FUlwiO1xuICAgIC8qKlxuICAgICAqIEd1aWxkIGNhbiBlbmFibGUgd2VsY29tZSBzY3JlZW4sIE1lbWJlcnNoaXAgU2NyZWVuaW5nIGFuZCBkaXNjb3ZlcnksIGFuZCByZWNlaXZlcyBjb21tdW5pdHkgdXBkYXRlc1xuICAgICAqL1xuICAgIEd1aWxkRmVhdHVyZVtcIkNvbW11bml0eVwiXSA9IFwiQ09NTVVOSVRZXCI7XG4gICAgLyoqXG4gICAgICogR3VpbGQgaXMgYWJsZSB0byBiZSBkaXNjb3ZlcmVkIGluIHRoZSBkaXJlY3RvcnlcbiAgICAgKi9cbiAgICBHdWlsZEZlYXR1cmVbXCJEaXNjb3ZlcmFibGVcIl0gPSBcIkRJU0NPVkVSQUJMRVwiO1xuICAgIC8qKlxuICAgICAqIEd1aWxkIGlzIGFibGUgdG8gYmUgZmVhdHVyZWQgaW4gdGhlIGRpcmVjdG9yeVxuICAgICAqL1xuICAgIEd1aWxkRmVhdHVyZVtcIkZlYXR1cmFibGVcIl0gPSBcIkZFQVRVUkFCTEVcIjtcbiAgICAvKipcbiAgICAgKiBHdWlsZCBpcyBsaXN0ZWQgaW4gYSBkaXJlY3RvcnkgY2hhbm5lbFxuICAgICAqL1xuICAgIEd1aWxkRmVhdHVyZVtcIkhhc0RpcmVjdG9yeUVudHJ5XCJdID0gXCJIQVNfRElSRUNUT1JZX0VOVFJZXCI7XG4gICAgLyoqXG4gICAgICogR3VpbGQgaXMgYSBTdHVkZW50IEh1YlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vc3VwcG9ydC5kaXNjb3JkLmNvbS9oYy9lbi11cy9hcnRpY2xlcy80NDA2MDQ2NjUxOTI3LURpc2NvcmQtU3R1ZGVudC1IdWJzLUZBUVxuICAgICAqXG4gICAgICogQHVuc3RhYmxlIFRoaXMgZmVhdHVyZSBpcyBjdXJyZW50bHkgbm90IGRvY3VtZW50ZWQgYnkgRGlzY29yZCwgYnV0IGhhcyBrbm93biB2YWx1ZVxuICAgICAqL1xuICAgIEd1aWxkRmVhdHVyZVtcIkh1YlwiXSA9IFwiSFVCXCI7XG4gICAgLyoqXG4gICAgICogR3VpbGQgaGFzIGRpc2FibGVkIGludml0ZSB1c2FnZSwgcHJldmVudGluZyB1c2VycyBmcm9tIGpvaW5pbmdcbiAgICAgKi9cbiAgICBHdWlsZEZlYXR1cmVbXCJJbnZpdGVzRGlzYWJsZWRcIl0gPSBcIklOVklURVNfRElTQUJMRURcIjtcbiAgICAvKipcbiAgICAgKiBHdWlsZCBoYXMgYWNjZXNzIHRvIHNldCBhbiBpbnZpdGUgc3BsYXNoIGJhY2tncm91bmRcbiAgICAgKi9cbiAgICBHdWlsZEZlYXR1cmVbXCJJbnZpdGVTcGxhc2hcIl0gPSBcIklOVklURV9TUExBU0hcIjtcbiAgICAvKipcbiAgICAgKiBHdWlsZCBpcyBpbiBhIFN0dWRlbnQgSHViXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9zdXBwb3J0LmRpc2NvcmQuY29tL2hjL2VuLXVzL2FydGljbGVzLzQ0MDYwNDY2NTE5MjctRGlzY29yZC1TdHVkZW50LUh1YnMtRkFRXG4gICAgICpcbiAgICAgKiBAdW5zdGFibGUgVGhpcyBmZWF0dXJlIGlzIGN1cnJlbnRseSBub3QgZG9jdW1lbnRlZCBieSBEaXNjb3JkLCBidXQgaGFzIGtub3duIHZhbHVlXG4gICAgICovXG4gICAgR3VpbGRGZWF0dXJlW1wiTGlua2VkVG9IdWJcIl0gPSBcIkxJTktFRF9UT19IVUJcIjtcbiAgICAvKipcbiAgICAgKiBHdWlsZCBoYXMgZW5hYmxlZCBNZW1iZXJzaGlwIFNjcmVlbmluZ1xuICAgICAqL1xuICAgIEd1aWxkRmVhdHVyZVtcIk1lbWJlclZlcmlmaWNhdGlvbkdhdGVFbmFibGVkXCJdID0gXCJNRU1CRVJfVkVSSUZJQ0FUSU9OX0dBVEVfRU5BQkxFRFwiO1xuICAgIC8qKlxuICAgICAqIEd1aWxkIGhhcyBlbmFibGVkIG1vbmV0aXphdGlvblxuICAgICAqL1xuICAgIEd1aWxkRmVhdHVyZVtcIk1vbmV0aXphdGlvbkVuYWJsZWRcIl0gPSBcIk1PTkVUSVpBVElPTl9FTkFCTEVEXCI7XG4gICAgLyoqXG4gICAgICogR3VpbGQgaGFzIGluY3JlYXNlZCBjdXN0b20gc3RpY2tlciBzbG90c1xuICAgICAqL1xuICAgIEd1aWxkRmVhdHVyZVtcIk1vcmVTdGlja2Vyc1wiXSA9IFwiTU9SRV9TVElDS0VSU1wiO1xuICAgIC8qKlxuICAgICAqIEd1aWxkIGhhcyBhY2Nlc3MgdG8gY3JlYXRlIG5ld3MgY2hhbm5lbHNcbiAgICAgKi9cbiAgICBHdWlsZEZlYXR1cmVbXCJOZXdzXCJdID0gXCJORVdTXCI7XG4gICAgLyoqXG4gICAgICogR3VpbGQgaXMgcGFydG5lcmVkXG4gICAgICovXG4gICAgR3VpbGRGZWF0dXJlW1wiUGFydG5lcmVkXCJdID0gXCJQQVJUTkVSRURcIjtcbiAgICAvKipcbiAgICAgKiBHdWlsZCBjYW4gYmUgcHJldmlld2VkIGJlZm9yZSBqb2luaW5nIHZpYSBNZW1iZXJzaGlwIFNjcmVlbmluZyBvciB0aGUgZGlyZWN0b3J5XG4gICAgICovXG4gICAgR3VpbGRGZWF0dXJlW1wiUHJldmlld0VuYWJsZWRcIl0gPSBcIlBSRVZJRVdfRU5BQkxFRFwiO1xuICAgIC8qKlxuICAgICAqIEd1aWxkIGhhcyBhY2Nlc3MgdG8gY3JlYXRlIHByaXZhdGUgdGhyZWFkc1xuICAgICAqL1xuICAgIEd1aWxkRmVhdHVyZVtcIlByaXZhdGVUaHJlYWRzXCJdID0gXCJQUklWQVRFX1RIUkVBRFNcIjtcbiAgICBHdWlsZEZlYXR1cmVbXCJSZWxheUVuYWJsZWRcIl0gPSBcIlJFTEFZX0VOQUJMRURcIjtcbiAgICAvKipcbiAgICAgKiBHdWlsZCBpcyBhYmxlIHRvIHNldCByb2xlIGljb25zXG4gICAgICovXG4gICAgR3VpbGRGZWF0dXJlW1wiUm9sZUljb25zXCJdID0gXCJST0xFX0lDT05TXCI7XG4gICAgLyoqXG4gICAgICogR3VpbGQgaGFzIGVuYWJsZWQgdGlja2V0ZWQgZXZlbnRzXG4gICAgICovXG4gICAgR3VpbGRGZWF0dXJlW1wiVGlja2V0ZWRFdmVudHNFbmFibGVkXCJdID0gXCJUSUNLRVRFRF9FVkVOVFNfRU5BQkxFRFwiO1xuICAgIC8qKlxuICAgICAqIEd1aWxkIGhhcyBhY2Nlc3MgdG8gc2V0IGEgdmFuaXR5IFVSTFxuICAgICAqL1xuICAgIEd1aWxkRmVhdHVyZVtcIlZhbml0eVVSTFwiXSA9IFwiVkFOSVRZX1VSTFwiO1xuICAgIC8qKlxuICAgICAqIEd1aWxkIGlzIHZlcmlmaWVkXG4gICAgICovXG4gICAgR3VpbGRGZWF0dXJlW1wiVmVyaWZpZWRcIl0gPSBcIlZFUklGSUVEXCI7XG4gICAgLyoqXG4gICAgICogR3VpbGQgaGFzIGFjY2VzcyB0byBzZXQgMzg0a2JwcyBiaXRyYXRlIGluIHZvaWNlIChwcmV2aW91c2x5IFZJUCB2b2ljZSBzZXJ2ZXJzKVxuICAgICAqL1xuICAgIEd1aWxkRmVhdHVyZVtcIlZJUFJlZ2lvbnNcIl0gPSBcIlZJUF9SRUdJT05TXCI7XG4gICAgLyoqXG4gICAgICogR3VpbGQgaGFzIGVuYWJsZWQgdGhlIHdlbGNvbWUgc2NyZWVuXG4gICAgICovXG4gICAgR3VpbGRGZWF0dXJlW1wiV2VsY29tZVNjcmVlbkVuYWJsZWRcIl0gPSBcIldFTENPTUVfU0NSRUVOX0VOQUJMRURcIjtcbn0pKEd1aWxkRmVhdHVyZSA9IGV4cG9ydHMuR3VpbGRGZWF0dXJlIHx8IChleHBvcnRzLkd1aWxkRmVhdHVyZSA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9ndWlsZCNpbnRlZ3JhdGlvbi1vYmplY3QtaW50ZWdyYXRpb24tZXhwaXJlLWJlaGF2aW9yc1xuICovXG52YXIgSW50ZWdyYXRpb25FeHBpcmVCZWhhdmlvcjtcbihmdW5jdGlvbiAoSW50ZWdyYXRpb25FeHBpcmVCZWhhdmlvcikge1xuICAgIEludGVncmF0aW9uRXhwaXJlQmVoYXZpb3JbSW50ZWdyYXRpb25FeHBpcmVCZWhhdmlvcltcIlJlbW92ZVJvbGVcIl0gPSAwXSA9IFwiUmVtb3ZlUm9sZVwiO1xuICAgIEludGVncmF0aW9uRXhwaXJlQmVoYXZpb3JbSW50ZWdyYXRpb25FeHBpcmVCZWhhdmlvcltcIktpY2tcIl0gPSAxXSA9IFwiS2lja1wiO1xufSkoSW50ZWdyYXRpb25FeHBpcmVCZWhhdmlvciA9IGV4cG9ydHMuSW50ZWdyYXRpb25FeHBpcmVCZWhhdmlvciB8fCAoZXhwb3J0cy5JbnRlZ3JhdGlvbkV4cGlyZUJlaGF2aW9yID0ge30pKTtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2d1aWxkI2dldC1ndWlsZC13aWRnZXQtaW1hZ2Utd2lkZ2V0LXN0eWxlLW9wdGlvbnNcbiAqL1xudmFyIEd1aWxkV2lkZ2V0U3R5bGU7XG4oZnVuY3Rpb24gKEd1aWxkV2lkZ2V0U3R5bGUpIHtcbiAgICAvKipcbiAgICAgKiBTaGllbGQgc3R5bGUgd2lkZ2V0IHdpdGggRGlzY29yZCBpY29uIGFuZCBndWlsZCBtZW1iZXJzIG9ubGluZSBjb3VudFxuICAgICAqL1xuICAgIEd1aWxkV2lkZ2V0U3R5bGVbXCJTaGllbGRcIl0gPSBcInNoaWVsZFwiO1xuICAgIC8qKlxuICAgICAqIExhcmdlIGltYWdlIHdpdGggZ3VpbGQgaWNvbiwgbmFtZSBhbmQgb25saW5lIGNvdW50LiBcIlBPV0VSRUQgQlkgRElTQ09SRFwiIGFzIHRoZSBmb290ZXIgb2YgdGhlIHdpZGdldFxuICAgICAqL1xuICAgIEd1aWxkV2lkZ2V0U3R5bGVbXCJCYW5uZXIxXCJdID0gXCJiYW5uZXIxXCI7XG4gICAgLyoqXG4gICAgICogU21hbGxlciB3aWRnZXQgc3R5bGUgd2l0aCBndWlsZCBpY29uLCBuYW1lIGFuZCBvbmxpbmUgY291bnQuIFNwbGl0IG9uIHRoZSByaWdodCB3aXRoIERpc2NvcmQgbG9nb1xuICAgICAqL1xuICAgIEd1aWxkV2lkZ2V0U3R5bGVbXCJCYW5uZXIyXCJdID0gXCJiYW5uZXIyXCI7XG4gICAgLyoqXG4gICAgICogTGFyZ2UgaW1hZ2Ugd2l0aCBndWlsZCBpY29uLCBuYW1lIGFuZCBvbmxpbmUgY291bnQuIEluIHRoZSBmb290ZXIsIERpc2NvcmQgbG9nbyBvbiB0aGUgbGVmdCBhbmQgXCJDaGF0IE5vd1wiIG9uIHRoZSByaWdodFxuICAgICAqL1xuICAgIEd1aWxkV2lkZ2V0U3R5bGVbXCJCYW5uZXIzXCJdID0gXCJiYW5uZXIzXCI7XG4gICAgLyoqXG4gICAgICogTGFyZ2UgRGlzY29yZCBsb2dvIGF0IHRoZSB0b3Agb2YgdGhlIHdpZGdldC4gR3VpbGQgaWNvbiwgbmFtZSBhbmQgb25saW5lIGNvdW50IGluIHRoZSBtaWRkbGUgcG9ydGlvbiBvZiB0aGUgd2lkZ2V0XG4gICAgICogYW5kIGEgXCJKT0lOIE1ZIFNFUlZFUlwiIGJ1dHRvbiBhdCB0aGUgYm90dG9tXG4gICAgICovXG4gICAgR3VpbGRXaWRnZXRTdHlsZVtcIkJhbm5lcjRcIl0gPSBcImJhbm5lcjRcIjtcbn0pKEd1aWxkV2lkZ2V0U3R5bGUgPSBleHBvcnRzLkd1aWxkV2lkZ2V0U3R5bGUgfHwgKGV4cG9ydHMuR3VpbGRXaWRnZXRTdHlsZSA9IHt9KSk7XG52YXIgTWVtYmVyc2hpcFNjcmVlbmluZ0ZpZWxkVHlwZTtcbihmdW5jdGlvbiAoTWVtYmVyc2hpcFNjcmVlbmluZ0ZpZWxkVHlwZSkge1xuICAgIC8qKlxuICAgICAqIFNlcnZlciBSdWxlc1xuICAgICAqL1xuICAgIE1lbWJlcnNoaXBTY3JlZW5pbmdGaWVsZFR5cGVbXCJUZXJtc1wiXSA9IFwiVEVSTVNcIjtcbn0pKE1lbWJlcnNoaXBTY3JlZW5pbmdGaWVsZFR5cGUgPSBleHBvcnRzLk1lbWJlcnNoaXBTY3JlZW5pbmdGaWVsZFR5cGUgfHwgKGV4cG9ydHMuTWVtYmVyc2hpcFNjcmVlbmluZ0ZpZWxkVHlwZSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ndWlsZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR3VpbGRTY2hlZHVsZWRFdmVudFByaXZhY3lMZXZlbCA9IGV4cG9ydHMuR3VpbGRTY2hlZHVsZWRFdmVudFN0YXR1cyA9IGV4cG9ydHMuR3VpbGRTY2hlZHVsZWRFdmVudEVudGl0eVR5cGUgPSB2b2lkIDA7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9ndWlsZC1zY2hlZHVsZWQtZXZlbnQjZ3VpbGQtc2NoZWR1bGVkLWV2ZW50LW9iamVjdC1ndWlsZC1zY2hlZHVsZWQtZXZlbnQtZW50aXR5LXR5cGVzXG4gKi9cbnZhciBHdWlsZFNjaGVkdWxlZEV2ZW50RW50aXR5VHlwZTtcbihmdW5jdGlvbiAoR3VpbGRTY2hlZHVsZWRFdmVudEVudGl0eVR5cGUpIHtcbiAgICBHdWlsZFNjaGVkdWxlZEV2ZW50RW50aXR5VHlwZVtHdWlsZFNjaGVkdWxlZEV2ZW50RW50aXR5VHlwZVtcIlN0YWdlSW5zdGFuY2VcIl0gPSAxXSA9IFwiU3RhZ2VJbnN0YW5jZVwiO1xuICAgIEd1aWxkU2NoZWR1bGVkRXZlbnRFbnRpdHlUeXBlW0d1aWxkU2NoZWR1bGVkRXZlbnRFbnRpdHlUeXBlW1wiVm9pY2VcIl0gPSAyXSA9IFwiVm9pY2VcIjtcbiAgICBHdWlsZFNjaGVkdWxlZEV2ZW50RW50aXR5VHlwZVtHdWlsZFNjaGVkdWxlZEV2ZW50RW50aXR5VHlwZVtcIkV4dGVybmFsXCJdID0gM10gPSBcIkV4dGVybmFsXCI7XG59KShHdWlsZFNjaGVkdWxlZEV2ZW50RW50aXR5VHlwZSA9IGV4cG9ydHMuR3VpbGRTY2hlZHVsZWRFdmVudEVudGl0eVR5cGUgfHwgKGV4cG9ydHMuR3VpbGRTY2hlZHVsZWRFdmVudEVudGl0eVR5cGUgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvZ3VpbGQtc2NoZWR1bGVkLWV2ZW50I2d1aWxkLXNjaGVkdWxlZC1ldmVudC1vYmplY3QtZ3VpbGQtc2NoZWR1bGVkLWV2ZW50LXN0YXR1c1xuICovXG52YXIgR3VpbGRTY2hlZHVsZWRFdmVudFN0YXR1cztcbihmdW5jdGlvbiAoR3VpbGRTY2hlZHVsZWRFdmVudFN0YXR1cykge1xuICAgIEd1aWxkU2NoZWR1bGVkRXZlbnRTdGF0dXNbR3VpbGRTY2hlZHVsZWRFdmVudFN0YXR1c1tcIlNjaGVkdWxlZFwiXSA9IDFdID0gXCJTY2hlZHVsZWRcIjtcbiAgICBHdWlsZFNjaGVkdWxlZEV2ZW50U3RhdHVzW0d1aWxkU2NoZWR1bGVkRXZlbnRTdGF0dXNbXCJBY3RpdmVcIl0gPSAyXSA9IFwiQWN0aXZlXCI7XG4gICAgR3VpbGRTY2hlZHVsZWRFdmVudFN0YXR1c1tHdWlsZFNjaGVkdWxlZEV2ZW50U3RhdHVzW1wiQ29tcGxldGVkXCJdID0gM10gPSBcIkNvbXBsZXRlZFwiO1xuICAgIEd1aWxkU2NoZWR1bGVkRXZlbnRTdGF0dXNbR3VpbGRTY2hlZHVsZWRFdmVudFN0YXR1c1tcIkNhbmNlbGVkXCJdID0gNF0gPSBcIkNhbmNlbGVkXCI7XG59KShHdWlsZFNjaGVkdWxlZEV2ZW50U3RhdHVzID0gZXhwb3J0cy5HdWlsZFNjaGVkdWxlZEV2ZW50U3RhdHVzIHx8IChleHBvcnRzLkd1aWxkU2NoZWR1bGVkRXZlbnRTdGF0dXMgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvZ3VpbGQtc2NoZWR1bGVkLWV2ZW50I2d1aWxkLXNjaGVkdWxlZC1ldmVudC1vYmplY3QtZ3VpbGQtc2NoZWR1bGVkLWV2ZW50LXByaXZhY3ktbGV2ZWxcbiAqL1xudmFyIEd1aWxkU2NoZWR1bGVkRXZlbnRQcml2YWN5TGV2ZWw7XG4oZnVuY3Rpb24gKEd1aWxkU2NoZWR1bGVkRXZlbnRQcml2YWN5TGV2ZWwpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgc2NoZWR1bGVkIGV2ZW50IGlzIG9ubHkgYWNjZXNzaWJsZSB0byBndWlsZCBtZW1iZXJzXG4gICAgICovXG4gICAgR3VpbGRTY2hlZHVsZWRFdmVudFByaXZhY3lMZXZlbFtHdWlsZFNjaGVkdWxlZEV2ZW50UHJpdmFjeUxldmVsW1wiR3VpbGRPbmx5XCJdID0gMl0gPSBcIkd1aWxkT25seVwiO1xufSkoR3VpbGRTY2hlZHVsZWRFdmVudFByaXZhY3lMZXZlbCA9IGV4cG9ydHMuR3VpbGRTY2hlZHVsZWRFdmVudFByaXZhY3lMZXZlbCB8fCAoZXhwb3J0cy5HdWlsZFNjaGVkdWxlZEV2ZW50UHJpdmFjeUxldmVsID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWd1aWxkU2NoZWR1bGVkRXZlbnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi4vY29tbW9uXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hcHBsaWNhdGlvblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vYXVkaXRMb2dcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NoYW5uZWxcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2Vtb2ppXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9nYXRld2F5XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9ndWlsZFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZ3VpbGRTY2hlZHVsZWRFdmVudFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaW50ZXJhY3Rpb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pbnZpdGVcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL29hdXRoMlwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcGVybWlzc2lvbnNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3N0YWdlSW5zdGFuY2VcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3N0aWNrZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3RlYW1zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90ZW1wbGF0ZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdXNlclwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdm9pY2VcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3dlYmhvb2tcIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9faW50ZXJhY3Rpb25zL2FwcGxpY2F0aW9uQ29tbWFuZHNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL19pbnRlcmFjdGlvbnMvYXV0b2NvbXBsZXRlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9faW50ZXJhY3Rpb25zL2Jhc2VcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL19pbnRlcmFjdGlvbnMvbWVzc2FnZUNvbXBvbmVudHNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL19pbnRlcmFjdGlvbnMvbW9kYWxTdWJtaXRcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL19pbnRlcmFjdGlvbnMvcGluZ1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vX2ludGVyYWN0aW9ucy9yZXNwb25zZXNcIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJhY3Rpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBUeXBlcyBleHRyYWN0ZWQgZnJvbSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvaW52aXRlXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW52aXRlVGFyZ2V0VHlwZSA9IHZvaWQgMDtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2ludml0ZSNpbnZpdGUtb2JqZWN0LWludml0ZS10YXJnZXQtdHlwZXNcbiAqL1xudmFyIEludml0ZVRhcmdldFR5cGU7XG4oZnVuY3Rpb24gKEludml0ZVRhcmdldFR5cGUpIHtcbiAgICBJbnZpdGVUYXJnZXRUeXBlW0ludml0ZVRhcmdldFR5cGVbXCJTdHJlYW1cIl0gPSAxXSA9IFwiU3RyZWFtXCI7XG4gICAgSW52aXRlVGFyZ2V0VHlwZVtJbnZpdGVUYXJnZXRUeXBlW1wiRW1iZWRkZWRBcHBsaWNhdGlvblwiXSA9IDJdID0gXCJFbWJlZGRlZEFwcGxpY2F0aW9uXCI7XG59KShJbnZpdGVUYXJnZXRUeXBlID0gZXhwb3J0cy5JbnZpdGVUYXJnZXRUeXBlIHx8IChleHBvcnRzLkludml0ZVRhcmdldFR5cGUgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW52aXRlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBUeXBlcyBleHRyYWN0ZWQgZnJvbSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3Mvb2F1dGgyXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT0F1dGgyU2NvcGVzID0gdm9pZCAwO1xudmFyIE9BdXRoMlNjb3BlcztcbihmdW5jdGlvbiAoT0F1dGgyU2NvcGVzKSB7XG4gICAgLyoqXG4gICAgICogRm9yIG9hdXRoMiBib3RzLCB0aGlzIHB1dHMgdGhlIGJvdCBpbiB0aGUgdXNlcidzIHNlbGVjdGVkIGd1aWxkIGJ5IGRlZmF1bHRcbiAgICAgKi9cbiAgICBPQXV0aDJTY29wZXNbXCJCb3RcIl0gPSBcImJvdFwiO1xuICAgIC8qKlxuICAgICAqIEFsbG93cyBbL3VzZXJzL0BtZS9jb25uZWN0aW9uc10oaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL3VzZXIjZ2V0LXVzZXItY29ubmVjdGlvbnMpXG4gICAgICogdG8gcmV0dXJuIGxpbmtlZCB0aGlyZC1wYXJ0eSBhY2NvdW50c1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy91c2VyI2dldC11c2VyLWNvbm5lY3Rpb25zXG4gICAgICovXG4gICAgT0F1dGgyU2NvcGVzW1wiQ29ubmVjdGlvbnNcIl0gPSBcImNvbm5lY3Rpb25zXCI7XG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdXIgYXBwIHRvIHNlZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdXNlcidzIERNcyBhbmQgZ3JvdXAgRE1zIC0gcmVxdWlyZXMgRGlzY29yZCBhcHByb3ZhbFxuICAgICAqL1xuICAgIE9BdXRoMlNjb3Blc1tcIkRNQ2hhbm5lbHNSZWFkXCJdID0gXCJkbV9jaGFubmVscy5yZWFkXCI7XG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBbL3VzZXJzL0BtZV0oaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL3VzZXIjZ2V0LWN1cnJlbnQtdXNlcikgdG8gcmV0dXJuIGFuIGBlbWFpbGBcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvdXNlciNnZXQtY3VycmVudC11c2VyXG4gICAgICovXG4gICAgT0F1dGgyU2NvcGVzW1wiRW1haWxcIl0gPSBcImVtYWlsXCI7XG4gICAgLyoqXG4gICAgICogQWxsb3dzIFsvdXNlcnMvQG1lXShodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvdXNlciNnZXQtY3VycmVudC11c2VyKSB3aXRob3V0IGBlbWFpbGBcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvdXNlciNnZXQtY3VycmVudC11c2VyXG4gICAgICovXG4gICAgT0F1dGgyU2NvcGVzW1wiSWRlbnRpZnlcIl0gPSBcImlkZW50aWZ5XCI7XG4gICAgLyoqXG4gICAgICogQWxsb3dzIFsvdXNlcnMvQG1lL2d1aWxkc10oaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL3VzZXIjZ2V0LWN1cnJlbnQtdXNlci1ndWlsZHMpXG4gICAgICogdG8gcmV0dXJuIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGFsbCBvZiBhIHVzZXIncyBndWlsZHNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvdXNlciNnZXQtY3VycmVudC11c2VyLWd1aWxkc1xuICAgICAqL1xuICAgIE9BdXRoMlNjb3Blc1tcIkd1aWxkc1wiXSA9IFwiZ3VpbGRzXCI7XG4gICAgLyoqXG4gICAgICogQWxsb3dzIFsvZ3VpbGRzL3tndWlsZC5pZH0vbWVtYmVycy97dXNlci5pZH1dKGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9ndWlsZCNhZGQtZ3VpbGQtbWVtYmVyKVxuICAgICAqIHRvIGJlIHVzZWQgZm9yIGpvaW5pbmcgdXNlcnMgdG8gYSBndWlsZFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9ndWlsZCNhZGQtZ3VpbGQtbWVtYmVyXG4gICAgICovXG4gICAgT0F1dGgyU2NvcGVzW1wiR3VpbGRzSm9pblwiXSA9IFwiZ3VpbGRzLmpvaW5cIjtcbiAgICAvKipcbiAgICAgKiBBbGxvd3MgL3VzZXJzL0BtZS9ndWlsZHMve2d1aWxkLmlkfS9tZW1iZXIgdG8gcmV0dXJuIGEgdXNlcidzIG1lbWJlciBpbmZvcm1hdGlvbiBpbiBhIGd1aWxkXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL3VzZXIjZ2V0LWN1cnJlbnQtdXNlci1ndWlsZC1tZW1iZXJcbiAgICAgKi9cbiAgICBPQXV0aDJTY29wZXNbXCJHdWlsZHNNZW1iZXJzUmVhZFwiXSA9IFwiZ3VpbGRzLm1lbWJlcnMucmVhZFwiO1xuICAgIC8qKlxuICAgICAqIEFsbG93cyB5b3VyIGFwcCB0byBqb2luIHVzZXJzIHRvIGEgZ3JvdXAgZG1cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvY2hhbm5lbCNncm91cC1kbS1hZGQtcmVjaXBpZW50XG4gICAgICovXG4gICAgT0F1dGgyU2NvcGVzW1wiR3JvdXBETUpvaW5zXCJdID0gXCJnZG0uam9pblwiO1xuICAgIC8qKlxuICAgICAqIEZvciBsb2NhbCBycGMgc2VydmVyIGFwaSBhY2Nlc3MsIHRoaXMgYWxsb3dzIHlvdSB0byByZWFkIG1lc3NhZ2VzIGZyb20gYWxsIGNsaWVudCBjaGFubmVsc1xuICAgICAqIChvdGhlcndpc2UgcmVzdHJpY3RlZCB0byBjaGFubmVscy9ndWlsZHMgeW91ciBhcHAgY3JlYXRlcylcbiAgICAgKi9cbiAgICBPQXV0aDJTY29wZXNbXCJNZXNzYWdlc1JlYWRcIl0gPSBcIm1lc3NhZ2VzLnJlYWRcIjtcbiAgICAvKipcbiAgICAgKiBGb3IgbG9jYWwgcnBjIHNlcnZlciBhY2Nlc3MsIHRoaXMgYWxsb3dzIHlvdSB0byBjb250cm9sIGEgdXNlcidzIGxvY2FsIERpc2NvcmQgY2xpZW50IC0gcmVxdWlyZXMgRGlzY29yZCBhcHByb3ZhbFxuICAgICAqL1xuICAgIE9BdXRoMlNjb3Blc1tcIlJQQ1wiXSA9IFwicnBjXCI7XG4gICAgLyoqXG4gICAgICogRm9yIGxvY2FsIHJwYyBzZXJ2ZXIgYXBpIGFjY2VzcywgdGhpcyBhbGxvd3MgeW91IHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBwdXNoZWQgb3V0IHRvIHRoZSB1c2VyIC0gcmVxdWlyZXMgRGlzY29yZCBhcHByb3ZhbFxuICAgICAqL1xuICAgIE9BdXRoMlNjb3Blc1tcIlJQQ05vdGlmaWNhdGlvbnNSZWFkXCJdID0gXCJycGMubm90aWZpY2F0aW9ucy5yZWFkXCI7XG4gICAgLyoqXG4gICAgICogVGhpcyBnZW5lcmF0ZXMgYSB3ZWJob29rIHRoYXQgaXMgcmV0dXJuZWQgaW4gdGhlIG9hdXRoIHRva2VuIHJlc3BvbnNlIGZvciBhdXRob3JpemF0aW9uIGNvZGUgZ3JhbnRzXG4gICAgICovXG4gICAgT0F1dGgyU2NvcGVzW1wiV2ViaG9va0luY29taW5nXCJdID0gXCJ3ZWJob29rLmluY29taW5nXCI7XG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdXIgYXBwIHRvIGNvbm5lY3QgdG8gdm9pY2Ugb24gdXNlcidzIGJlaGFsZiBhbmQgc2VlIGFsbCB0aGUgdm9pY2UgbWVtYmVycyAtIHJlcXVpcmVzIERpc2NvcmQgYXBwcm92YWxcbiAgICAgKi9cbiAgICBPQXV0aDJTY29wZXNbXCJWb2ljZVwiXSA9IFwidm9pY2VcIjtcbiAgICAvKipcbiAgICAgKiBBbGxvd3MgeW91ciBhcHAgdG8gdXBsb2FkL3VwZGF0ZSBidWlsZHMgZm9yIGEgdXNlcidzIGFwcGxpY2F0aW9ucyAtIHJlcXVpcmVzIERpc2NvcmQgYXBwcm92YWxcbiAgICAgKi9cbiAgICBPQXV0aDJTY29wZXNbXCJBcHBsaWNhdGlvbnNCdWlsZHNVcGxvYWRcIl0gPSBcImFwcGxpY2F0aW9ucy5idWlsZHMudXBsb2FkXCI7XG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdXIgYXBwIHRvIHJlYWQgYnVpbGQgZGF0YSBmb3IgYSB1c2VyJ3MgYXBwbGljYXRpb25zXG4gICAgICovXG4gICAgT0F1dGgyU2NvcGVzW1wiQXBwbGljYXRpb25zQnVpbGRzUmVhZFwiXSA9IFwiYXBwbGljYXRpb25zLmJ1aWxkcy5yZWFkXCI7XG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdXIgYXBwIHRvIHJlYWQgYW5kIHVwZGF0ZSBzdG9yZSBkYXRhIChTS1VzLCBzdG9yZSBsaXN0aW5ncywgYWNoaWV2ZW1lbnRzLCBldGMuKSBmb3IgYSB1c2VyJ3MgYXBwbGljYXRpb25zXG4gICAgICovXG4gICAgT0F1dGgyU2NvcGVzW1wiQXBwbGljYXRpb25zU3RvcmVVcGRhdGVcIl0gPSBcImFwcGxpY2F0aW9ucy5zdG9yZS51cGRhdGVcIjtcbiAgICAvKipcbiAgICAgKiBBbGxvd3MgeW91ciBhcHAgdG8gcmVhZCBlbnRpdGxlbWVudHMgZm9yIGEgdXNlcidzIGFwcGxpY2F0aW9uc1xuICAgICAqL1xuICAgIE9BdXRoMlNjb3Blc1tcIkFwcGxpY2F0aW9uc0VudGl0bGVtZW50c1wiXSA9IFwiYXBwbGljYXRpb25zLmVudGl0bGVtZW50c1wiO1xuICAgIC8qKlxuICAgICAqIEFsbG93cyB5b3VyIGFwcCB0byBrbm93IGEgdXNlcidzIGZyaWVuZHMgYW5kIGltcGxpY2l0IHJlbGF0aW9uc2hpcHMgLSByZXF1aXJlcyBEaXNjb3JkIGFwcHJvdmFsXG4gICAgICovXG4gICAgT0F1dGgyU2NvcGVzW1wiUmVsYXRpb25zaGlwc1JlYWRcIl0gPSBcInJlbGF0aW9uc2hpcHMucmVhZFwiO1xuICAgIC8qKlxuICAgICAqIEFsbG93cyB5b3VyIGFwcCB0byBmZXRjaCBkYXRhIGZyb20gYSB1c2VyJ3MgXCJOb3cgUGxheWluZy9SZWNlbnRseSBQbGF5ZWRcIiBsaXN0IC0gcmVxdWlyZXMgRGlzY29yZCBhcHByb3ZhbFxuICAgICAqL1xuICAgIE9BdXRoMlNjb3Blc1tcIkFjdGl2aXRpZXNSZWFkXCJdID0gXCJhY3Rpdml0aWVzLnJlYWRcIjtcbiAgICAvKipcbiAgICAgKiBBbGxvd3MgeW91ciBhcHAgdG8gdXBkYXRlIGEgdXNlcidzIGFjdGl2aXR5IC0gcmVxdWlyZXMgRGlzY29yZCBhcHByb3ZhbCAoTk9UIFJFUVVJUkVEIEZPUiBHQU1FU0RLIEFDVElWSVRZIE1BTkFHRVIpXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvZ2FtZS1zZGsvYWN0aXZpdGllc1xuICAgICAqL1xuICAgIE9BdXRoMlNjb3Blc1tcIkFjdGl2aXRpZXNXcml0ZVwiXSA9IFwiYWN0aXZpdGllcy53cml0ZVwiO1xuICAgIC8qKlxuICAgICAqIEFsbG93cyB5b3VyIGFwcCB0byB1c2UgQXBwbGljYXRpb24gQ29tbWFuZHMgaW4gYSBndWlsZFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL2ludGVyYWN0aW9ucy9hcHBsaWNhdGlvbi1jb21tYW5kc1xuICAgICAqL1xuICAgIE9BdXRoMlNjb3Blc1tcIkFwcGxpY2F0aW9uc0NvbW1hbmRzXCJdID0gXCJhcHBsaWNhdGlvbnMuY29tbWFuZHNcIjtcbiAgICAvKipcbiAgICAgKiBBbGxvd3MgeW91ciBhcHAgdG8gdXBkYXRlIGl0cyBBcHBsaWNhdGlvbiBDb21tYW5kcyB2aWEgdGhpcyBiZWFyZXIgdG9rZW4gLSBjbGllbnQgY3JlZGVudGlhbHMgZ3JhbnQgb25seVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL2ludGVyYWN0aW9ucy9hcHBsaWNhdGlvbi1jb21tYW5kc1xuICAgICAqL1xuICAgIE9BdXRoMlNjb3Blc1tcIkFwcGxpY2F0aW9uc0NvbW1hbmRzVXBkYXRlXCJdID0gXCJhcHBsaWNhdGlvbnMuY29tbWFuZHMudXBkYXRlXCI7XG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdXIgYXBwIHRvIHVwZGF0ZSBwZXJtaXNzaW9ucyBmb3IgaXRzIGNvbW1hbmRzIHVzaW5nIGEgQmVhcmVyIHRva2VuIC0gY2xpZW50IGNyZWRlbnRpYWxzIGdyYW50IG9ubHlcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9pbnRlcmFjdGlvbnMvYXBwbGljYXRpb24tY29tbWFuZHNcbiAgICAgKi9cbiAgICBPQXV0aDJTY29wZXNbXCJBcHBsaWNhdGlvbkNvbW1hbmRzUGVybWlzc2lvbnNVcGRhdGVcIl0gPSBcImFwcGxpY2F0aW9ucy5jb21tYW5kcy5wZXJtaXNzaW9ucy51cGRhdGVcIjtcbn0pKE9BdXRoMlNjb3BlcyA9IGV4cG9ydHMuT0F1dGgyU2NvcGVzIHx8IChleHBvcnRzLk9BdXRoMlNjb3BlcyA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYXV0aDIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIFR5cGVzIGV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3RvcGljcy9wZXJtaXNzaW9uc1xuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wZXJtaXNzaW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3RhZ2VJbnN0YW5jZVByaXZhY3lMZXZlbCA9IHZvaWQgMDtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL3N0YWdlLWluc3RhbmNlI3N0YWdlLWluc3RhbmNlLW9iamVjdC1wcml2YWN5LWxldmVsXG4gKi9cbnZhciBTdGFnZUluc3RhbmNlUHJpdmFjeUxldmVsO1xuKGZ1bmN0aW9uIChTdGFnZUluc3RhbmNlUHJpdmFjeUxldmVsKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHN0YWdlIGluc3RhbmNlIGlzIHZpc2libGUgcHVibGljbHksIHN1Y2ggYXMgb24gc3RhZ2UgZGlzY292ZXJ5XG4gICAgICovXG4gICAgU3RhZ2VJbnN0YW5jZVByaXZhY3lMZXZlbFtTdGFnZUluc3RhbmNlUHJpdmFjeUxldmVsW1wiUHVibGljXCJdID0gMV0gPSBcIlB1YmxpY1wiO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdGFnZSBpbnN0YW5jZSBpcyB2aXNpYmxlIHRvIG9ubHkgZ3VpbGQgbWVtYmVyc1xuICAgICAqL1xuICAgIFN0YWdlSW5zdGFuY2VQcml2YWN5TGV2ZWxbU3RhZ2VJbnN0YW5jZVByaXZhY3lMZXZlbFtcIkd1aWxkT25seVwiXSA9IDJdID0gXCJHdWlsZE9ubHlcIjtcbn0pKFN0YWdlSW5zdGFuY2VQcml2YWN5TGV2ZWwgPSBleHBvcnRzLlN0YWdlSW5zdGFuY2VQcml2YWN5TGV2ZWwgfHwgKGV4cG9ydHMuU3RhZ2VJbnN0YW5jZVByaXZhY3lMZXZlbCA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGFnZUluc3RhbmNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBUeXBlcyBleHRyYWN0ZWQgZnJvbSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvc3RpY2tlclxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0aWNrZXJGb3JtYXRUeXBlID0gZXhwb3J0cy5TdGlja2VyVHlwZSA9IHZvaWQgMDtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL3N0aWNrZXIjc3RpY2tlci1vYmplY3Qtc3RpY2tlci10eXBlc1xuICovXG52YXIgU3RpY2tlclR5cGU7XG4oZnVuY3Rpb24gKFN0aWNrZXJUeXBlKSB7XG4gICAgLyoqXG4gICAgICogQW4gb2ZmaWNpYWwgc3RpY2tlciBpbiBhIHBhY2ssIHBhcnQgb2YgTml0cm8gb3IgaW4gYSByZW1vdmVkIHB1cmNoYXNhYmxlIHBhY2tcbiAgICAgKi9cbiAgICBTdGlja2VyVHlwZVtTdGlja2VyVHlwZVtcIlN0YW5kYXJkXCJdID0gMV0gPSBcIlN0YW5kYXJkXCI7XG4gICAgLyoqXG4gICAgICogQSBzdGlja2VyIHVwbG9hZGVkIHRvIGEgQm9vc3RlZCBndWlsZCBmb3IgdGhlIGd1aWxkJ3MgbWVtYmVyc1xuICAgICAqL1xuICAgIFN0aWNrZXJUeXBlW1N0aWNrZXJUeXBlW1wiR3VpbGRcIl0gPSAyXSA9IFwiR3VpbGRcIjtcbn0pKFN0aWNrZXJUeXBlID0gZXhwb3J0cy5TdGlja2VyVHlwZSB8fCAoZXhwb3J0cy5TdGlja2VyVHlwZSA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9zdGlja2VyI3N0aWNrZXItb2JqZWN0LXN0aWNrZXItZm9ybWF0LXR5cGVzXG4gKi9cbnZhciBTdGlja2VyRm9ybWF0VHlwZTtcbihmdW5jdGlvbiAoU3RpY2tlckZvcm1hdFR5cGUpIHtcbiAgICBTdGlja2VyRm9ybWF0VHlwZVtTdGlja2VyRm9ybWF0VHlwZVtcIlBOR1wiXSA9IDFdID0gXCJQTkdcIjtcbiAgICBTdGlja2VyRm9ybWF0VHlwZVtTdGlja2VyRm9ybWF0VHlwZVtcIkFQTkdcIl0gPSAyXSA9IFwiQVBOR1wiO1xuICAgIFN0aWNrZXJGb3JtYXRUeXBlW1N0aWNrZXJGb3JtYXRUeXBlW1wiTG90dGllXCJdID0gM10gPSBcIkxvdHRpZVwiO1xufSkoU3RpY2tlckZvcm1hdFR5cGUgPSBleHBvcnRzLlN0aWNrZXJGb3JtYXRUeXBlIHx8IChleHBvcnRzLlN0aWNrZXJGb3JtYXRUeXBlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0aWNrZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIFR5cGVzIGV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3RvcGljcy90ZWFtc1xuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRlYW1NZW1iZXJNZW1iZXJzaGlwU3RhdGUgPSB2b2lkIDA7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3RvcGljcy90ZWFtcyNkYXRhLW1vZGVscy1tZW1iZXJzaGlwLXN0YXRlLWVudW1cbiAqL1xudmFyIFRlYW1NZW1iZXJNZW1iZXJzaGlwU3RhdGU7XG4oZnVuY3Rpb24gKFRlYW1NZW1iZXJNZW1iZXJzaGlwU3RhdGUpIHtcbiAgICBUZWFtTWVtYmVyTWVtYmVyc2hpcFN0YXRlW1RlYW1NZW1iZXJNZW1iZXJzaGlwU3RhdGVbXCJJbnZpdGVkXCJdID0gMV0gPSBcIkludml0ZWRcIjtcbiAgICBUZWFtTWVtYmVyTWVtYmVyc2hpcFN0YXRlW1RlYW1NZW1iZXJNZW1iZXJzaGlwU3RhdGVbXCJBY2NlcHRlZFwiXSA9IDJdID0gXCJBY2NlcHRlZFwiO1xufSkoVGVhbU1lbWJlck1lbWJlcnNoaXBTdGF0ZSA9IGV4cG9ydHMuVGVhbU1lbWJlck1lbWJlcnNoaXBTdGF0ZSB8fCAoZXhwb3J0cy5UZWFtTWVtYmVyTWVtYmVyc2hpcFN0YXRlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlYW1zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBUeXBlcyBleHRyYWN0ZWQgZnJvbSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvZ3VpbGQtdGVtcGxhdGVcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIFR5cGVzIGV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy91c2VyXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29ubmVjdGlvblZpc2liaWxpdHkgPSBleHBvcnRzLkNvbm5lY3Rpb25TZXJ2aWNlID0gZXhwb3J0cy5Vc2VyUHJlbWl1bVR5cGUgPSBleHBvcnRzLlVzZXJGbGFncyA9IHZvaWQgMDtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL3VzZXIjdXNlci1vYmplY3QtdXNlci1mbGFnc1xuICovXG52YXIgVXNlckZsYWdzO1xuKGZ1bmN0aW9uIChVc2VyRmxhZ3MpIHtcbiAgICAvKipcbiAgICAgKiBEaXNjb3JkIEVtcGxveWVlXG4gICAgICovXG4gICAgVXNlckZsYWdzW1VzZXJGbGFnc1tcIlN0YWZmXCJdID0gMV0gPSBcIlN0YWZmXCI7XG4gICAgLyoqXG4gICAgICogUGFydG5lcmVkIFNlcnZlciBPd25lclxuICAgICAqL1xuICAgIFVzZXJGbGFnc1tVc2VyRmxhZ3NbXCJQYXJ0bmVyXCJdID0gMl0gPSBcIlBhcnRuZXJcIjtcbiAgICAvKipcbiAgICAgKiBIeXBlU3F1YWQgRXZlbnRzIE1lbWJlclxuICAgICAqL1xuICAgIFVzZXJGbGFnc1tVc2VyRmxhZ3NbXCJIeXBlc3F1YWRcIl0gPSA0XSA9IFwiSHlwZXNxdWFkXCI7XG4gICAgLyoqXG4gICAgICogQnVnIEh1bnRlciBMZXZlbCAxXG4gICAgICovXG4gICAgVXNlckZsYWdzW1VzZXJGbGFnc1tcIkJ1Z0h1bnRlckxldmVsMVwiXSA9IDhdID0gXCJCdWdIdW50ZXJMZXZlbDFcIjtcbiAgICAvKipcbiAgICAgKiBIb3VzZSBCcmF2ZXJ5IE1lbWJlclxuICAgICAqL1xuICAgIFVzZXJGbGFnc1tVc2VyRmxhZ3NbXCJIeXBlU3F1YWRPbmxpbmVIb3VzZTFcIl0gPSA2NF0gPSBcIkh5cGVTcXVhZE9ubGluZUhvdXNlMVwiO1xuICAgIC8qKlxuICAgICAqIEhvdXNlIEJyaWxsaWFuY2UgTWVtYmVyXG4gICAgICovXG4gICAgVXNlckZsYWdzW1VzZXJGbGFnc1tcIkh5cGVTcXVhZE9ubGluZUhvdXNlMlwiXSA9IDEyOF0gPSBcIkh5cGVTcXVhZE9ubGluZUhvdXNlMlwiO1xuICAgIC8qKlxuICAgICAqIEhvdXNlIEJhbGFuY2UgTWVtYmVyXG4gICAgICovXG4gICAgVXNlckZsYWdzW1VzZXJGbGFnc1tcIkh5cGVTcXVhZE9ubGluZUhvdXNlM1wiXSA9IDI1Nl0gPSBcIkh5cGVTcXVhZE9ubGluZUhvdXNlM1wiO1xuICAgIC8qKlxuICAgICAqIEVhcmx5IE5pdHJvIFN1cHBvcnRlclxuICAgICAqL1xuICAgIFVzZXJGbGFnc1tVc2VyRmxhZ3NbXCJQcmVtaXVtRWFybHlTdXBwb3J0ZXJcIl0gPSA1MTJdID0gXCJQcmVtaXVtRWFybHlTdXBwb3J0ZXJcIjtcbiAgICAvKipcbiAgICAgKiBVc2VyIGlzIGEgW3RlYW1dKGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3RvcGljcy90ZWFtcylcbiAgICAgKi9cbiAgICBVc2VyRmxhZ3NbVXNlckZsYWdzW1wiVGVhbVBzZXVkb1VzZXJcIl0gPSAxMDI0XSA9IFwiVGVhbVBzZXVkb1VzZXJcIjtcbiAgICAvKipcbiAgICAgKiBCdWcgSHVudGVyIExldmVsIDJcbiAgICAgKi9cbiAgICBVc2VyRmxhZ3NbVXNlckZsYWdzW1wiQnVnSHVudGVyTGV2ZWwyXCJdID0gMTYzODRdID0gXCJCdWdIdW50ZXJMZXZlbDJcIjtcbiAgICAvKipcbiAgICAgKiBWZXJpZmllZCBCb3RcbiAgICAgKi9cbiAgICBVc2VyRmxhZ3NbVXNlckZsYWdzW1wiVmVyaWZpZWRCb3RcIl0gPSA2NTUzNl0gPSBcIlZlcmlmaWVkQm90XCI7XG4gICAgLyoqXG4gICAgICogRWFybHkgVmVyaWZpZWQgQm90IERldmVsb3BlclxuICAgICAqL1xuICAgIFVzZXJGbGFnc1tVc2VyRmxhZ3NbXCJWZXJpZmllZERldmVsb3BlclwiXSA9IDEzMTA3Ml0gPSBcIlZlcmlmaWVkRGV2ZWxvcGVyXCI7XG4gICAgLyoqXG4gICAgICogRGlzY29yZCBDZXJ0aWZpZWQgTW9kZXJhdG9yXG4gICAgICovXG4gICAgVXNlckZsYWdzW1VzZXJGbGFnc1tcIkNlcnRpZmllZE1vZGVyYXRvclwiXSA9IDI2MjE0NF0gPSBcIkNlcnRpZmllZE1vZGVyYXRvclwiO1xuICAgIC8qKlxuICAgICAqIEJvdCB1c2VzIG9ubHkgW0hUVFAgaW50ZXJhY3Rpb25zXShodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9pbnRlcmFjdGlvbnMvcmVjZWl2aW5nLWFuZC1yZXNwb25kaW5nI3JlY2VpdmluZy1hbi1pbnRlcmFjdGlvbikgYW5kIGlzIHNob3duIGluIHRoZSBvbmxpbmUgbWVtYmVyIGxpc3RcbiAgICAgKi9cbiAgICBVc2VyRmxhZ3NbVXNlckZsYWdzW1wiQm90SFRUUEludGVyYWN0aW9uc1wiXSA9IDUyNDI4OF0gPSBcIkJvdEhUVFBJbnRlcmFjdGlvbnNcIjtcbiAgICAvKipcbiAgICAgKiBVc2VyIGhhcyBiZWVuIGlkZW50aWZpZWQgYXMgc3BhbW1lclxuICAgICAqXG4gICAgICogQHVuc3RhYmxlIFRoaXMgdXNlciBmbGFnIGlzIGN1cnJlbnRseSBub3QgZG9jdW1lbnRlZCBieSBEaXNjb3JkIGJ1dCBoYXMgYSBrbm93biB2YWx1ZSB3aGljaCB3ZSB3aWxsIHRyeSB0byBrZWVwIHVwIHRvIGRhdGUuXG4gICAgICovXG4gICAgVXNlckZsYWdzW1VzZXJGbGFnc1tcIlNwYW1tZXJcIl0gPSAxMDQ4NTc2XSA9IFwiU3BhbW1lclwiO1xuICAgIC8qKlxuICAgICAqIFVzZXIncyBhY2NvdW50IGhhcyBiZWVuIHF1YXJhbnRpbmVkIGJhc2VkIG9uIHJlY2VudCBhY3Rpdml0eVxuICAgICAqXG4gICAgICogQHVuc3RhYmxlIFRoaXMgdXNlciBmbGFnIGlzIGN1cnJlbnRseSBub3QgZG9jdW1lbnRlZCBieSBEaXNjb3JkIGJ1dCBoYXMgYSBrbm93biB2YWx1ZSB3aGljaCB3ZSB3aWxsIHRyeSB0byBrZWVwIHVwIHRvIGRhdGUuXG4gICAgICovXG4gICAgVXNlckZsYWdzW1VzZXJGbGFnc1tcIlF1YXJhbnRpbmVkXCJdID0gTWF0aC5wb3coMiwgNDQpXSA9IFwiUXVhcmFudGluZWRcIjtcbn0pKFVzZXJGbGFncyA9IGV4cG9ydHMuVXNlckZsYWdzIHx8IChleHBvcnRzLlVzZXJGbGFncyA9IHt9KSk7XG4vKipcbiAqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy91c2VyI3VzZXItb2JqZWN0LXByZW1pdW0tdHlwZXNcbiAqL1xudmFyIFVzZXJQcmVtaXVtVHlwZTtcbihmdW5jdGlvbiAoVXNlclByZW1pdW1UeXBlKSB7XG4gICAgVXNlclByZW1pdW1UeXBlW1VzZXJQcmVtaXVtVHlwZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIFVzZXJQcmVtaXVtVHlwZVtVc2VyUHJlbWl1bVR5cGVbXCJOaXRyb0NsYXNzaWNcIl0gPSAxXSA9IFwiTml0cm9DbGFzc2ljXCI7XG4gICAgVXNlclByZW1pdW1UeXBlW1VzZXJQcmVtaXVtVHlwZVtcIk5pdHJvXCJdID0gMl0gPSBcIk5pdHJvXCI7XG59KShVc2VyUHJlbWl1bVR5cGUgPSBleHBvcnRzLlVzZXJQcmVtaXVtVHlwZSB8fCAoZXhwb3J0cy5Vc2VyUHJlbWl1bVR5cGUgPSB7fSkpO1xudmFyIENvbm5lY3Rpb25TZXJ2aWNlO1xuKGZ1bmN0aW9uIChDb25uZWN0aW9uU2VydmljZSkge1xuICAgIENvbm5lY3Rpb25TZXJ2aWNlW1wiQmF0dGxlTmV0XCJdID0gXCJiYXR0bGVuZXRcIjtcbiAgICBDb25uZWN0aW9uU2VydmljZVtcImVCYXlcIl0gPSBcImViYXlcIjtcbiAgICBDb25uZWN0aW9uU2VydmljZVtcIkVwaWNHYW1lc1wiXSA9IFwiZXBpY2dhbWVzXCI7XG4gICAgQ29ubmVjdGlvblNlcnZpY2VbXCJGYWNlYm9va1wiXSA9IFwiZmFjZWJvb2tcIjtcbiAgICBDb25uZWN0aW9uU2VydmljZVtcIkdpdEh1YlwiXSA9IFwiZ2l0aHViXCI7XG4gICAgQ29ubmVjdGlvblNlcnZpY2VbXCJMZWFndWVPZkxlZ2VuZHNcIl0gPSBcImxlYWd1ZW9mbGVnZW5kc1wiO1xuICAgIENvbm5lY3Rpb25TZXJ2aWNlW1wiUGF5UGFsXCJdID0gXCJwYXlwYWxcIjtcbiAgICBDb25uZWN0aW9uU2VydmljZVtcIlBsYXlTdGF0aW9uTmV0d29ya1wiXSA9IFwicGxheXN0YXRpb25cIjtcbiAgICBDb25uZWN0aW9uU2VydmljZVtcIlJlZGRpdFwiXSA9IFwicmVkZGl0XCI7XG4gICAgQ29ubmVjdGlvblNlcnZpY2VbXCJSaW90R2FtZXNcIl0gPSBcInJpb3RnYW1lc1wiO1xuICAgIENvbm5lY3Rpb25TZXJ2aWNlW1wiU3BvdGlmeVwiXSA9IFwic3BvdGlmeVwiO1xuICAgIENvbm5lY3Rpb25TZXJ2aWNlW1wiU2t5cGVcIl0gPSBcInNreXBlXCI7XG4gICAgQ29ubmVjdGlvblNlcnZpY2VbXCJTdGVhbVwiXSA9IFwic3RlYW1cIjtcbiAgICBDb25uZWN0aW9uU2VydmljZVtcIlR3aXRjaFwiXSA9IFwidHdpdGNoXCI7XG4gICAgQ29ubmVjdGlvblNlcnZpY2VbXCJUd2l0dGVyXCJdID0gXCJ0d2l0dGVyXCI7XG4gICAgQ29ubmVjdGlvblNlcnZpY2VbXCJYYm94XCJdID0gXCJ4Ym94XCI7XG4gICAgQ29ubmVjdGlvblNlcnZpY2VbXCJZb3VUdWJlXCJdID0gXCJ5b3V0dWJlXCI7XG59KShDb25uZWN0aW9uU2VydmljZSA9IGV4cG9ydHMuQ29ubmVjdGlvblNlcnZpY2UgfHwgKGV4cG9ydHMuQ29ubmVjdGlvblNlcnZpY2UgPSB7fSkpO1xudmFyIENvbm5lY3Rpb25WaXNpYmlsaXR5O1xuKGZ1bmN0aW9uIChDb25uZWN0aW9uVmlzaWJpbGl0eSkge1xuICAgIC8qKlxuICAgICAqIEludmlzaWJsZSB0byBldmVyeW9uZSBleGNlcHQgdGhlIHVzZXIgdGhlbXNlbHZlc1xuICAgICAqL1xuICAgIENvbm5lY3Rpb25WaXNpYmlsaXR5W0Nvbm5lY3Rpb25WaXNpYmlsaXR5W1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gICAgLyoqXG4gICAgICogVmlzaWJsZSB0byBldmVyeW9uZVxuICAgICAqL1xuICAgIENvbm5lY3Rpb25WaXNpYmlsaXR5W0Nvbm5lY3Rpb25WaXNpYmlsaXR5W1wiRXZlcnlvbmVcIl0gPSAxXSA9IFwiRXZlcnlvbmVcIjtcbn0pKENvbm5lY3Rpb25WaXNpYmlsaXR5ID0gZXhwb3J0cy5Db25uZWN0aW9uVmlzaWJpbGl0eSB8fCAoZXhwb3J0cy5Db25uZWN0aW9uVmlzaWJpbGl0eSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBUeXBlcyBleHRyYWN0ZWQgZnJvbSBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvdm9pY2VcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dm9pY2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIFR5cGVzIGV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy93ZWJob29rXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuV2ViaG9va1R5cGUgPSB2b2lkIDA7XG52YXIgV2ViaG9va1R5cGU7XG4oZnVuY3Rpb24gKFdlYmhvb2tUeXBlKSB7XG4gICAgLyoqXG4gICAgICogSW5jb21pbmcgV2ViaG9va3MgY2FuIHBvc3QgbWVzc2FnZXMgdG8gY2hhbm5lbHMgd2l0aCBhIGdlbmVyYXRlZCB0b2tlblxuICAgICAqL1xuICAgIFdlYmhvb2tUeXBlW1dlYmhvb2tUeXBlW1wiSW5jb21pbmdcIl0gPSAxXSA9IFwiSW5jb21pbmdcIjtcbiAgICAvKipcbiAgICAgKiBDaGFubmVsIEZvbGxvd2VyIFdlYmhvb2tzIGFyZSBpbnRlcm5hbCB3ZWJob29rcyB1c2VkIHdpdGggQ2hhbm5lbCBGb2xsb3dpbmcgdG8gcG9zdCBuZXcgbWVzc2FnZXMgaW50byBjaGFubmVsc1xuICAgICAqL1xuICAgIFdlYmhvb2tUeXBlW1dlYmhvb2tUeXBlW1wiQ2hhbm5lbEZvbGxvd2VyXCJdID0gMl0gPSBcIkNoYW5uZWxGb2xsb3dlclwiO1xuICAgIC8qKlxuICAgICAqIEFwcGxpY2F0aW9uIHdlYmhvb2tzIGFyZSB3ZWJob29rcyB1c2VkIHdpdGggSW50ZXJhY3Rpb25zXG4gICAgICovXG4gICAgV2ViaG9va1R5cGVbV2ViaG9va1R5cGVbXCJBcHBsaWNhdGlvblwiXSA9IDNdID0gXCJBcHBsaWNhdGlvblwiO1xufSkoV2ViaG9va1R5cGUgPSBleHBvcnRzLldlYmhvb2tUeXBlIHx8IChleHBvcnRzLldlYmhvb2tUeXBlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdlYmhvb2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxvY2FsZSA9IGV4cG9ydHMuUkVTVEpTT05FcnJvckNvZGVzID0gdm9pZCAwO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3Mvb3Bjb2Rlcy1hbmQtc3RhdHVzLWNvZGVzI2pzb24tanNvbi1lcnJvci1jb2Rlc1xuICovXG52YXIgUkVTVEpTT05FcnJvckNvZGVzO1xuKGZ1bmN0aW9uIChSRVNUSlNPTkVycm9yQ29kZXMpIHtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiR2VuZXJhbEVycm9yXCJdID0gMF0gPSBcIkdlbmVyYWxFcnJvclwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duQWNjb3VudFwiXSA9IDEwMDAxXSA9IFwiVW5rbm93bkFjY291bnRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93bkFwcGxpY2F0aW9uXCJdID0gMTAwMDJdID0gXCJVbmtub3duQXBwbGljYXRpb25cIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93bkNoYW5uZWxcIl0gPSAxMDAwM10gPSBcIlVua25vd25DaGFubmVsXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25HdWlsZFwiXSA9IDEwMDA0XSA9IFwiVW5rbm93bkd1aWxkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25JbnRlZ3JhdGlvblwiXSA9IDEwMDA1XSA9IFwiVW5rbm93bkludGVncmF0aW9uXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25JbnZpdGVcIl0gPSAxMDAwNl0gPSBcIlVua25vd25JbnZpdGVcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93bk1lbWJlclwiXSA9IDEwMDA3XSA9IFwiVW5rbm93bk1lbWJlclwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duTWVzc2FnZVwiXSA9IDEwMDA4XSA9IFwiVW5rbm93bk1lc3NhZ2VcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93blBlcm1pc3Npb25PdmVyd3JpdGVcIl0gPSAxMDAwOV0gPSBcIlVua25vd25QZXJtaXNzaW9uT3ZlcndyaXRlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25Qcm92aWRlclwiXSA9IDEwMDEwXSA9IFwiVW5rbm93blByb3ZpZGVyXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25Sb2xlXCJdID0gMTAwMTFdID0gXCJVbmtub3duUm9sZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duVG9rZW5cIl0gPSAxMDAxMl0gPSBcIlVua25vd25Ub2tlblwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duVXNlclwiXSA9IDEwMDEzXSA9IFwiVW5rbm93blVzZXJcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93bkVtb2ppXCJdID0gMTAwMTRdID0gXCJVbmtub3duRW1vamlcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93bldlYmhvb2tcIl0gPSAxMDAxNV0gPSBcIlVua25vd25XZWJob29rXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25XZWJob29rU2VydmljZVwiXSA9IDEwMDE2XSA9IFwiVW5rbm93bldlYmhvb2tTZXJ2aWNlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25TZXNzaW9uXCJdID0gMTAwMjBdID0gXCJVbmtub3duU2Vzc2lvblwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duQmFuXCJdID0gMTAwMjZdID0gXCJVbmtub3duQmFuXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25TS1VcIl0gPSAxMDAyN10gPSBcIlVua25vd25TS1VcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93blN0b3JlTGlzdGluZ1wiXSA9IDEwMDI4XSA9IFwiVW5rbm93blN0b3JlTGlzdGluZ1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duRW50aXRsZW1lbnRcIl0gPSAxMDAyOV0gPSBcIlVua25vd25FbnRpdGxlbWVudFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duQnVpbGRcIl0gPSAxMDAzMF0gPSBcIlVua25vd25CdWlsZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duTG9iYnlcIl0gPSAxMDAzMV0gPSBcIlVua25vd25Mb2JieVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duQnJhbmNoXCJdID0gMTAwMzJdID0gXCJVbmtub3duQnJhbmNoXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25TdG9yZURpcmVjdG9yeUxheW91dFwiXSA9IDEwMDMzXSA9IFwiVW5rbm93blN0b3JlRGlyZWN0b3J5TGF5b3V0XCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25SZWRpc3RyaWJ1dGFibGVcIl0gPSAxMDAzNl0gPSBcIlVua25vd25SZWRpc3RyaWJ1dGFibGVcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93bkdpZnRDb2RlXCJdID0gMTAwMzhdID0gXCJVbmtub3duR2lmdENvZGVcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93blN0cmVhbVwiXSA9IDEwMDQ5XSA9IFwiVW5rbm93blN0cmVhbVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duUHJlbWl1bVNlcnZlclN1YnNjcmliZUNvb2xkb3duXCJdID0gMTAwNTBdID0gXCJVbmtub3duUHJlbWl1bVNlcnZlclN1YnNjcmliZUNvb2xkb3duXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25HdWlsZFRlbXBsYXRlXCJdID0gMTAwNTddID0gXCJVbmtub3duR3VpbGRUZW1wbGF0ZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duRGlzY292ZXJhYmxlU2VydmVyQ2F0ZWdvcnlcIl0gPSAxMDA1OV0gPSBcIlVua25vd25EaXNjb3ZlcmFibGVTZXJ2ZXJDYXRlZ29yeVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duU3RpY2tlclwiXSA9IDEwMDYwXSA9IFwiVW5rbm93blN0aWNrZXJcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93bkludGVyYWN0aW9uXCJdID0gMTAwNjJdID0gXCJVbmtub3duSW50ZXJhY3Rpb25cIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93bkFwcGxpY2F0aW9uQ29tbWFuZFwiXSA9IDEwMDYzXSA9IFwiVW5rbm93bkFwcGxpY2F0aW9uQ29tbWFuZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duVm9pY2VTdGF0ZVwiXSA9IDEwMDY1XSA9IFwiVW5rbm93blZvaWNlU3RhdGVcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93bkFwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb25zXCJdID0gMTAwNjZdID0gXCJVbmtub3duQXBwbGljYXRpb25Db21tYW5kUGVybWlzc2lvbnNcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93blN0YWdlSW5zdGFuY2VcIl0gPSAxMDA2N10gPSBcIlVua25vd25TdGFnZUluc3RhbmNlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVua25vd25HdWlsZE1lbWJlclZlcmlmaWNhdGlvbkZvcm1cIl0gPSAxMDA2OF0gPSBcIlVua25vd25HdWlsZE1lbWJlclZlcmlmaWNhdGlvbkZvcm1cIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93bkd1aWxkV2VsY29tZVNjcmVlblwiXSA9IDEwMDY5XSA9IFwiVW5rbm93bkd1aWxkV2VsY29tZVNjcmVlblwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVbmtub3duR3VpbGRTY2hlZHVsZWRFdmVudFwiXSA9IDEwMDcwXSA9IFwiVW5rbm93bkd1aWxkU2NoZWR1bGVkRXZlbnRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93bkd1aWxkU2NoZWR1bGVkRXZlbnRVc2VyXCJdID0gMTAwNzFdID0gXCJVbmtub3duR3VpbGRTY2hlZHVsZWRFdmVudFVzZXJcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVW5rbm93blRhZ1wiXSA9IDEwMDg3XSA9IFwiVW5rbm93blRhZ1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJCb3RzQ2Fubm90VXNlVGhpc0VuZHBvaW50XCJdID0gMjAwMDFdID0gXCJCb3RzQ2Fubm90VXNlVGhpc0VuZHBvaW50XCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk9ubHlCb3RzQ2FuVXNlVGhpc0VuZHBvaW50XCJdID0gMjAwMDJdID0gXCJPbmx5Qm90c0NhblVzZVRoaXNFbmRwb2ludFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJFeHBsaWNpdENvbnRlbnRDYW5ub3RCZVNlbnRUb1RoZURlc2lyZWRSZWNpcGllbnRcIl0gPSAyMDAwOV0gPSBcIkV4cGxpY2l0Q29udGVudENhbm5vdEJlU2VudFRvVGhlRGVzaXJlZFJlY2lwaWVudFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJOb3RBdXRob3JpemVkVG9QZXJmb3JtVGhpc0FjdGlvbk9uVGhpc0FwcGxpY2F0aW9uXCJdID0gMjAwMTJdID0gXCJOb3RBdXRob3JpemVkVG9QZXJmb3JtVGhpc0FjdGlvbk9uVGhpc0FwcGxpY2F0aW9uXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkFjdGlvbkNhbm5vdEJlUGVyZm9ybWVkRHVlVG9TbG93bW9kZVJhdGVMaW1pdFwiXSA9IDIwMDE2XSA9IFwiQWN0aW9uQ2Fubm90QmVQZXJmb3JtZWREdWVUb1Nsb3dtb2RlUmF0ZUxpbWl0XCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlRoZU1hemVJc250TWVhbnRGb3JZb3VcIl0gPSAyMDAxN10gPSBcIlRoZU1hemVJc250TWVhbnRGb3JZb3VcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiT25seVRoZU93bmVyT2ZUaGlzQWNjb3VudENhblBlcmZvcm1UaGlzQWN0aW9uXCJdID0gMjAwMThdID0gXCJPbmx5VGhlT3duZXJPZlRoaXNBY2NvdW50Q2FuUGVyZm9ybVRoaXNBY3Rpb25cIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiQW5ub3VuY2VtZW50RWRpdExpbWl0RXhjZWVkZWRcIl0gPSAyMDAyMl0gPSBcIkFubm91bmNlbWVudEVkaXRMaW1pdEV4Y2VlZGVkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVuZGVyTWluaW11bUFnZVwiXSA9IDIwMDI0XSA9IFwiVW5kZXJNaW5pbXVtQWdlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkNoYW5uZWxTZW5kUmF0ZUxpbWl0XCJdID0gMjAwMjhdID0gXCJDaGFubmVsU2VuZFJhdGVMaW1pdFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJTZXJ2ZXJTZW5kUmF0ZUxpbWl0XCJdID0gMjAwMjldID0gXCJTZXJ2ZXJTZW5kUmF0ZUxpbWl0XCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlN0YWdlVG9waWNTZXJ2ZXJOYW1lU2VydmVyRGVzY3JpcHRpb25PckNoYW5uZWxOYW1lc0NvbnRhaW5EaXNhbGxvd2VkV29yZHNcIl0gPSAyMDAzMV0gPSBcIlN0YWdlVG9waWNTZXJ2ZXJOYW1lU2VydmVyRGVzY3JpcHRpb25PckNoYW5uZWxOYW1lc0NvbnRhaW5EaXNhbGxvd2VkV29yZHNcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiR3VpbGRQcmVtaXVtU3Vic2NyaXB0aW9uTGV2ZWxUb29Mb3dcIl0gPSAyMDAzNV0gPSBcIkd1aWxkUHJlbWl1bVN1YnNjcmlwdGlvbkxldmVsVG9vTG93XCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk1heGltdW1OdW1iZXJPZkd1aWxkc1JlYWNoZWRcIl0gPSAzMDAwMV0gPSBcIk1heGltdW1OdW1iZXJPZkd1aWxkc1JlYWNoZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiTWF4aW11bU51bWJlck9mRnJpZW5kc1JlYWNoZWRcIl0gPSAzMDAwMl0gPSBcIk1heGltdW1OdW1iZXJPZkZyaWVuZHNSZWFjaGVkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk1heGltdW1OdW1iZXJPZlBpbnNSZWFjaGVkRm9yVGhlQ2hhbm5lbFwiXSA9IDMwMDAzXSA9IFwiTWF4aW11bU51bWJlck9mUGluc1JlYWNoZWRGb3JUaGVDaGFubmVsXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk1heGltdW1OdW1iZXJPZlJlY2lwaWVudHNSZWFjaGVkXCJdID0gMzAwMDRdID0gXCJNYXhpbXVtTnVtYmVyT2ZSZWNpcGllbnRzUmVhY2hlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtTnVtYmVyT2ZHdWlsZFJvbGVzUmVhY2hlZFwiXSA9IDMwMDA1XSA9IFwiTWF4aW11bU51bWJlck9mR3VpbGRSb2xlc1JlYWNoZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiTWF4aW11bU51bWJlck9mV2ViaG9va3NSZWFjaGVkXCJdID0gMzAwMDddID0gXCJNYXhpbXVtTnVtYmVyT2ZXZWJob29rc1JlYWNoZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiTWF4aW11bU51bWJlck9mRW1vamlzUmVhY2hlZFwiXSA9IDMwMDA4XSA9IFwiTWF4aW11bU51bWJlck9mRW1vamlzUmVhY2hlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtTnVtYmVyT2ZSZWFjdGlvbnNSZWFjaGVkXCJdID0gMzAwMTBdID0gXCJNYXhpbXVtTnVtYmVyT2ZSZWFjdGlvbnNSZWFjaGVkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk1heGltdW1OdW1iZXJPZkd1aWxkQ2hhbm5lbHNSZWFjaGVkXCJdID0gMzAwMTNdID0gXCJNYXhpbXVtTnVtYmVyT2ZHdWlsZENoYW5uZWxzUmVhY2hlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtTnVtYmVyT2ZBdHRhY2htZW50c0luQU1lc3NhZ2VSZWFjaGVkXCJdID0gMzAwMTVdID0gXCJNYXhpbXVtTnVtYmVyT2ZBdHRhY2htZW50c0luQU1lc3NhZ2VSZWFjaGVkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk1heGltdW1OdW1iZXJPZkludml0ZXNSZWFjaGVkXCJdID0gMzAwMTZdID0gXCJNYXhpbXVtTnVtYmVyT2ZJbnZpdGVzUmVhY2hlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtTnVtYmVyT2ZBbmltYXRlZEVtb2ppc1JlYWNoZWRcIl0gPSAzMDAxOF0gPSBcIk1heGltdW1OdW1iZXJPZkFuaW1hdGVkRW1vamlzUmVhY2hlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtTnVtYmVyT2ZTZXJ2ZXJNZW1iZXJzUmVhY2hlZFwiXSA9IDMwMDE5XSA9IFwiTWF4aW11bU51bWJlck9mU2VydmVyTWVtYmVyc1JlYWNoZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiTWF4aW11bU51bWJlck9mU2VydmVyQ2F0ZWdvcmllc1JlYWNoZWRcIl0gPSAzMDAzMF0gPSBcIk1heGltdW1OdW1iZXJPZlNlcnZlckNhdGVnb3JpZXNSZWFjaGVkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkd1aWxkQWxyZWFkeUhhc1RlbXBsYXRlXCJdID0gMzAwMzFdID0gXCJHdWlsZEFscmVhZHlIYXNUZW1wbGF0ZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtTnVtYmVyT2ZBcHBsaWNhdGlvbkNvbW1hbmRzUmVhY2hlZFwiXSA9IDMwMDMyXSA9IFwiTWF4aW11bU51bWJlck9mQXBwbGljYXRpb25Db21tYW5kc1JlYWNoZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiTWF4aW11bVRocmVhZFBhcnRpY2lwYW50c1JlYWNoZWRcIl0gPSAzMDAzM10gPSBcIk1heGltdW1UaHJlYWRQYXJ0aWNpcGFudHNSZWFjaGVkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk1heGltdW1EYWlseUFwcGxpY2F0aW9uQ29tbWFuZENyZWF0ZXNSZWFjaGVkXCJdID0gMzAwMzRdID0gXCJNYXhpbXVtRGFpbHlBcHBsaWNhdGlvbkNvbW1hbmRDcmVhdGVzUmVhY2hlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtTnVtYmVyT2ZOb25HdWlsZE1lbWJlckJhbnNIYXNCZWVuRXhjZWVkZWRcIl0gPSAzMDAzNV0gPSBcIk1heGltdW1OdW1iZXJPZk5vbkd1aWxkTWVtYmVyQmFuc0hhc0JlZW5FeGNlZWRlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtTnVtYmVyT2ZCYW5GZXRjaGVzSGFzQmVlblJlYWNoZWRcIl0gPSAzMDAzN10gPSBcIk1heGltdW1OdW1iZXJPZkJhbkZldGNoZXNIYXNCZWVuUmVhY2hlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtTnVtYmVyT2ZVbmNvbXBsZXRlZEd1aWxkU2NoZWR1bGVkRXZlbnRzUmVhY2hlZFwiXSA9IDMwMDM4XSA9IFwiTWF4aW11bU51bWJlck9mVW5jb21wbGV0ZWRHdWlsZFNjaGVkdWxlZEV2ZW50c1JlYWNoZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiTWF4aW11bU51bWJlck9mU3RpY2tlcnNSZWFjaGVkXCJdID0gMzAwMzldID0gXCJNYXhpbXVtTnVtYmVyT2ZTdGlja2Vyc1JlYWNoZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiTWF4aW11bU51bWJlck9mUHJ1bmVSZXF1ZXN0c0hhc0JlZW5SZWFjaGVkXCJdID0gMzAwNDBdID0gXCJNYXhpbXVtTnVtYmVyT2ZQcnVuZVJlcXVlc3RzSGFzQmVlblJlYWNoZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiTWF4aW11bU51bWJlck9mR3VpbGRXaWRnZXRTZXR0aW5nc1VwZGF0ZXNIYXNCZWVuUmVhY2hlZFwiXSA9IDMwMDQyXSA9IFwiTWF4aW11bU51bWJlck9mR3VpbGRXaWRnZXRTZXR0aW5nc1VwZGF0ZXNIYXNCZWVuUmVhY2hlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtTnVtYmVyT2ZFZGl0c1RvTWVzc2FnZXNPbGRlclRoYW5PbmVIb3VyUmVhY2hlZFwiXSA9IDMwMDQ2XSA9IFwiTWF4aW11bU51bWJlck9mRWRpdHNUb01lc3NhZ2VzT2xkZXJUaGFuT25lSG91clJlYWNoZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiTWF4aW11bU51bWJlck9mUGlubmVkVGhyZWFkc0luRm9ydW1IYXNCZWVuUmVhY2hlZFwiXSA9IDMwMDQ3XSA9IFwiTWF4aW11bU51bWJlck9mUGlubmVkVGhyZWFkc0luRm9ydW1IYXNCZWVuUmVhY2hlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtTnVtYmVyT2ZUYWdzSW5Gb3J1bUhhc0JlZW5SZWFjaGVkXCJdID0gMzAwNDhdID0gXCJNYXhpbXVtTnVtYmVyT2ZUYWdzSW5Gb3J1bUhhc0JlZW5SZWFjaGVkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkJpdHJhdGVJc1Rvb0hpZ2hGb3JDaGFubmVsT2ZUaGlzVHlwZVwiXSA9IDMwMDUyXSA9IFwiQml0cmF0ZUlzVG9vSGlnaEZvckNoYW5uZWxPZlRoaXNUeXBlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlVuYXV0aG9yaXplZFwiXSA9IDQwMDAxXSA9IFwiVW5hdXRob3JpemVkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlZlcmlmeVlvdXJBY2NvdW50XCJdID0gNDAwMDJdID0gXCJWZXJpZnlZb3VyQWNjb3VudFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJPcGVuaW5nRGlyZWN0TWVzc2FnZXNUb29GYXN0XCJdID0gNDAwMDNdID0gXCJPcGVuaW5nRGlyZWN0TWVzc2FnZXNUb29GYXN0XCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlNlbmRNZXNzYWdlc0hhc0JlZW5UZW1wb3JhcmlseURpc2FibGVkXCJdID0gNDAwMDRdID0gXCJTZW5kTWVzc2FnZXNIYXNCZWVuVGVtcG9yYXJpbHlEaXNhYmxlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJSZXF1ZXN0RW50aXR5VG9vTGFyZ2VcIl0gPSA0MDAwNV0gPSBcIlJlcXVlc3RFbnRpdHlUb29MYXJnZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJGZWF0dXJlVGVtcG9yYXJpbHlEaXNhYmxlZFNlcnZlclNpZGVcIl0gPSA0MDAwNl0gPSBcIkZlYXR1cmVUZW1wb3JhcmlseURpc2FibGVkU2VydmVyU2lkZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJVc2VyQmFubmVkRnJvbVRoaXNHdWlsZFwiXSA9IDQwMDA3XSA9IFwiVXNlckJhbm5lZEZyb21UaGlzR3VpbGRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiQ29ubmVjdGlvbkhhc0JlZW5SZXZva2VkXCJdID0gNDAwMTJdID0gXCJDb25uZWN0aW9uSGFzQmVlblJldm9rZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVGFyZ2V0VXNlcklzTm90Q29ubmVjdGVkVG9Wb2ljZVwiXSA9IDQwMDMyXSA9IFwiVGFyZ2V0VXNlcklzTm90Q29ubmVjdGVkVG9Wb2ljZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJUaGlzTWVzc2FnZVdhc0FscmVhZHlDcm9zc3Bvc3RlZFwiXSA9IDQwMDMzXSA9IFwiVGhpc01lc3NhZ2VXYXNBbHJlYWR5Q3Jvc3Nwb3N0ZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiQXBwbGljYXRpb25Db21tYW5kV2l0aFRoYXROYW1lQWxyZWFkeUV4aXN0c1wiXSA9IDQwMDQxXSA9IFwiQXBwbGljYXRpb25Db21tYW5kV2l0aFRoYXROYW1lQWxyZWFkeUV4aXN0c1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJBcHBsaWNhdGlvbkludGVyYWN0aW9uRmFpbGVkVG9TZW5kXCJdID0gNDAwNDNdID0gXCJBcHBsaWNhdGlvbkludGVyYWN0aW9uRmFpbGVkVG9TZW5kXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkNhbm5vdFNlbmRBTWVzc2FnZUluQUZvcnVtQ2hhbm5lbFwiXSA9IDQwMDU4XSA9IFwiQ2Fubm90U2VuZEFNZXNzYWdlSW5BRm9ydW1DaGFubmVsXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkludGVyYWN0aW9uSGFzQWxyZWFkeUJlZW5BY2tub3dsZWRnZWRcIl0gPSA0MDA2MF0gPSBcIkludGVyYWN0aW9uSGFzQWxyZWFkeUJlZW5BY2tub3dsZWRnZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVGFnTmFtZXNNdXN0QmVVbmlxdWVcIl0gPSA0MDA2MV0gPSBcIlRhZ05hbWVzTXVzdEJlVW5pcXVlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlRoZXJlQXJlTm9UYWdzQXZhaWxhYmxlVGhhdENhbkJlU2V0QnlOb25Nb2RlcmF0b3JzXCJdID0gNDAwNjZdID0gXCJUaGVyZUFyZU5vVGFnc0F2YWlsYWJsZVRoYXRDYW5CZVNldEJ5Tm9uTW9kZXJhdG9yc1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJUYWdSZXF1aXJlZFRvQ3JlYXRlQUZvcnVtUG9zdEluVGhpc0NoYW5uZWxcIl0gPSA0MDA2N10gPSBcIlRhZ1JlcXVpcmVkVG9DcmVhdGVBRm9ydW1Qb3N0SW5UaGlzQ2hhbm5lbFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNaXNzaW5nQWNjZXNzXCJdID0gNTAwMDFdID0gXCJNaXNzaW5nQWNjZXNzXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkludmFsaWRBY2NvdW50VHlwZVwiXSA9IDUwMDAyXSA9IFwiSW52YWxpZEFjY291bnRUeXBlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkNhbm5vdEV4ZWN1dGVBY3Rpb25PbkRNQ2hhbm5lbFwiXSA9IDUwMDAzXSA9IFwiQ2Fubm90RXhlY3V0ZUFjdGlvbk9uRE1DaGFubmVsXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkd1aWxkV2lkZ2V0RGlzYWJsZWRcIl0gPSA1MDAwNF0gPSBcIkd1aWxkV2lkZ2V0RGlzYWJsZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiQ2Fubm90RWRpdE1lc3NhZ2VBdXRob3JlZEJ5QW5vdGhlclVzZXJcIl0gPSA1MDAwNV0gPSBcIkNhbm5vdEVkaXRNZXNzYWdlQXV0aG9yZWRCeUFub3RoZXJVc2VyXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkNhbm5vdFNlbmRBbkVtcHR5TWVzc2FnZVwiXSA9IDUwMDA2XSA9IFwiQ2Fubm90U2VuZEFuRW1wdHlNZXNzYWdlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkNhbm5vdFNlbmRNZXNzYWdlc1RvVGhpc1VzZXJcIl0gPSA1MDAwN10gPSBcIkNhbm5vdFNlbmRNZXNzYWdlc1RvVGhpc1VzZXJcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiQ2Fubm90U2VuZE1lc3NhZ2VzSW5Ob25UZXh0Q2hhbm5lbFwiXSA9IDUwMDA4XSA9IFwiQ2Fubm90U2VuZE1lc3NhZ2VzSW5Ob25UZXh0Q2hhbm5lbFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJDaGFubmVsVmVyaWZpY2F0aW9uTGV2ZWxUb29IaWdoRm9yWW91VG9HYWluQWNjZXNzXCJdID0gNTAwMDldID0gXCJDaGFubmVsVmVyaWZpY2F0aW9uTGV2ZWxUb29IaWdoRm9yWW91VG9HYWluQWNjZXNzXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk9BdXRoMkFwcGxpY2F0aW9uRG9lc05vdEhhdmVCb3RcIl0gPSA1MDAxMF0gPSBcIk9BdXRoMkFwcGxpY2F0aW9uRG9lc05vdEhhdmVCb3RcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiT0F1dGgyQXBwbGljYXRpb25MaW1pdFJlYWNoZWRcIl0gPSA1MDAxMV0gPSBcIk9BdXRoMkFwcGxpY2F0aW9uTGltaXRSZWFjaGVkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkludmFsaWRPQXV0aDJTdGF0ZVwiXSA9IDUwMDEyXSA9IFwiSW52YWxpZE9BdXRoMlN0YXRlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk1pc3NpbmdQZXJtaXNzaW9uc1wiXSA9IDUwMDEzXSA9IFwiTWlzc2luZ1Blcm1pc3Npb25zXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkludmFsaWRUb2tlblwiXSA9IDUwMDE0XSA9IFwiSW52YWxpZFRva2VuXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk5vdGVXYXNUb29Mb25nXCJdID0gNTAwMTVdID0gXCJOb3RlV2FzVG9vTG9uZ1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJQcm92aWRlZFRvb0Zld09yVG9vTWFueU1lc3NhZ2VzVG9EZWxldGVcIl0gPSA1MDAxNl0gPSBcIlByb3ZpZGVkVG9vRmV3T3JUb29NYW55TWVzc2FnZXNUb0RlbGV0ZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJJbnZhbGlkTUZBTGV2ZWxcIl0gPSA1MDAxN10gPSBcIkludmFsaWRNRkFMZXZlbFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNZXNzYWdlQ2FuT25seUJlUGlubmVkSW5UaGVDaGFubmVsSXRXYXNTZW50SW5cIl0gPSA1MDAxOV0gPSBcIk1lc3NhZ2VDYW5Pbmx5QmVQaW5uZWRJblRoZUNoYW5uZWxJdFdhc1NlbnRJblwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJJbnZpdGVDb2RlSW52YWxpZE9yVGFrZW5cIl0gPSA1MDAyMF0gPSBcIkludml0ZUNvZGVJbnZhbGlkT3JUYWtlblwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJDYW5ub3RFeGVjdXRlQWN0aW9uT25TeXN0ZW1NZXNzYWdlXCJdID0gNTAwMjFdID0gXCJDYW5ub3RFeGVjdXRlQWN0aW9uT25TeXN0ZW1NZXNzYWdlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkNhbm5vdEV4ZWN1dGVBY3Rpb25PblRoaXNDaGFubmVsVHlwZVwiXSA9IDUwMDI0XSA9IFwiQ2Fubm90RXhlY3V0ZUFjdGlvbk9uVGhpc0NoYW5uZWxUeXBlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkludmFsaWRPQXV0aDJBY2Nlc3NUb2tlblwiXSA9IDUwMDI1XSA9IFwiSW52YWxpZE9BdXRoMkFjY2Vzc1Rva2VuXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk1pc3NpbmdSZXF1aXJlZE9BdXRoMlNjb3BlXCJdID0gNTAwMjZdID0gXCJNaXNzaW5nUmVxdWlyZWRPQXV0aDJTY29wZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJJbnZhbGlkV2ViaG9va1Rva2VuXCJdID0gNTAwMjddID0gXCJJbnZhbGlkV2ViaG9va1Rva2VuXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkludmFsaWRSb2xlXCJdID0gNTAwMjhdID0gXCJJbnZhbGlkUm9sZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJJbnZhbGlkUmVjaXBpZW50c1wiXSA9IDUwMDMzXSA9IFwiSW52YWxpZFJlY2lwaWVudHNcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiT25lT2ZUaGVNZXNzYWdlc1Byb3ZpZGVkV2FzVG9vT2xkRm9yQnVsa0RlbGV0ZVwiXSA9IDUwMDM0XSA9IFwiT25lT2ZUaGVNZXNzYWdlc1Byb3ZpZGVkV2FzVG9vT2xkRm9yQnVsa0RlbGV0ZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJJbnZhbGlkRm9ybUJvZHlPckNvbnRlbnRUeXBlXCJdID0gNTAwMzVdID0gXCJJbnZhbGlkRm9ybUJvZHlPckNvbnRlbnRUeXBlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkludml0ZUFjY2VwdGVkVG9HdWlsZFdpdGhvdXRUaGVCb3RCZWluZ0luXCJdID0gNTAwMzZdID0gXCJJbnZpdGVBY2NlcHRlZFRvR3VpbGRXaXRob3V0VGhlQm90QmVpbmdJblwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJJbnZhbGlkQVBJVmVyc2lvblwiXSA9IDUwMDQxXSA9IFwiSW52YWxpZEFQSVZlcnNpb25cIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiRmlsZVVwbG9hZGVkRXhjZWVkc01heGltdW1TaXplXCJdID0gNTAwNDVdID0gXCJGaWxlVXBsb2FkZWRFeGNlZWRzTWF4aW11bVNpemVcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiSW52YWxpZEZpbGVVcGxvYWRlZFwiXSA9IDUwMDQ2XSA9IFwiSW52YWxpZEZpbGVVcGxvYWRlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJDYW5ub3RTZWxmUmVkZWVtVGhpc0dpZnRcIl0gPSA1MDA1NF0gPSBcIkNhbm5vdFNlbGZSZWRlZW1UaGlzR2lmdFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJJbnZhbGlkR3VpbGRcIl0gPSA1MDA1NV0gPSBcIkludmFsaWRHdWlsZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJJbnZhbGlkTWVzc2FnZVR5cGVcIl0gPSA1MDA2OF0gPSBcIkludmFsaWRNZXNzYWdlVHlwZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJQYXltZW50U291cmNlUmVxdWlyZWRUb1JlZGVlbUdpZnRcIl0gPSA1MDA3MF0gPSBcIlBheW1lbnRTb3VyY2VSZXF1aXJlZFRvUmVkZWVtR2lmdFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJDYW5ub3REZWxldGVDaGFubmVsUmVxdWlyZWRGb3JDb21tdW5pdHlHdWlsZHNcIl0gPSA1MDA3NF0gPSBcIkNhbm5vdERlbGV0ZUNoYW5uZWxSZXF1aXJlZEZvckNvbW11bml0eUd1aWxkc1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJDYW5ub3RFZGl0U3RpY2tlcnNXaXRoaW5NZXNzYWdlXCJdID0gNTAwODBdID0gXCJDYW5ub3RFZGl0U3RpY2tlcnNXaXRoaW5NZXNzYWdlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkludmFsaWRTdGlja2VyU2VudFwiXSA9IDUwMDgxXSA9IFwiSW52YWxpZFN0aWNrZXJTZW50XCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkludmFsaWRBY3Rpb25PbkFyY2hpdmVkVGhyZWFkXCJdID0gNTAwODNdID0gXCJJbnZhbGlkQWN0aW9uT25BcmNoaXZlZFRocmVhZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJJbnZhbGlkVGhyZWFkTm90aWZpY2F0aW9uU2V0dGluZ3NcIl0gPSA1MDA4NF0gPSBcIkludmFsaWRUaHJlYWROb3RpZmljYXRpb25TZXR0aW5nc1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJQYXJhbWV0ZXJFYXJsaWVyVGhhbkNyZWF0aW9uXCJdID0gNTAwODVdID0gXCJQYXJhbWV0ZXJFYXJsaWVyVGhhbkNyZWF0aW9uXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkNvbW11bml0eVNlcnZlckNoYW5uZWxzTXVzdEJlVGV4dENoYW5uZWxzXCJdID0gNTAwODZdID0gXCJDb21tdW5pdHlTZXJ2ZXJDaGFubmVsc011c3RCZVRleHRDaGFubmVsc1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJTZXJ2ZXJOb3RBdmFpbGFibGVJbllvdXJMb2NhdGlvblwiXSA9IDUwMDk1XSA9IFwiU2VydmVyTm90QXZhaWxhYmxlSW5Zb3VyTG9jYXRpb25cIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiU2VydmVyTmVlZHNNb25ldGl6YXRpb25FbmFibGVkVG9QZXJmb3JtVGhpc0FjdGlvblwiXSA9IDUwMDk3XSA9IFwiU2VydmVyTmVlZHNNb25ldGl6YXRpb25FbmFibGVkVG9QZXJmb3JtVGhpc0FjdGlvblwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJTZXJ2ZXJOZWVkc01vcmVCb29zdHNUb1BlcmZvcm1UaGlzQWN0aW9uXCJdID0gNTAxMDFdID0gXCJTZXJ2ZXJOZWVkc01vcmVCb29zdHNUb1BlcmZvcm1UaGlzQWN0aW9uXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlJlcXVlc3RCb2R5Q29udGFpbnNJbnZhbGlkSlNPTlwiXSA9IDUwMTA5XSA9IFwiUmVxdWVzdEJvZHlDb250YWluc0ludmFsaWRKU09OXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk93bmVyc2hpcENhbm5vdEJlTW92ZWRUb0FCb3RVc2VyXCJdID0gNTAxMzJdID0gXCJPd25lcnNoaXBDYW5ub3RCZU1vdmVkVG9BQm90VXNlclwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJGYWlsZWRUb1Jlc2l6ZUFzc2V0QmVsb3dUaGVNaW5pbXVtU2l6ZVwiXSA9IDUwMTM4XSA9IFwiRmFpbGVkVG9SZXNpemVBc3NldEJlbG93VGhlTWluaW11bVNpemVcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVXBsb2FkZWRGaWxlTm90Rm91bmRcIl0gPSA1MDE0Nl0gPSBcIlVwbG9hZGVkRmlsZU5vdEZvdW5kXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIllvdURvTm90SGF2ZVBlcm1pc3Npb25Ub1NlbmRUaGlzU3RpY2tlclwiXSA9IDUwNjAwXSA9IFwiWW91RG9Ob3RIYXZlUGVybWlzc2lvblRvU2VuZFRoaXNTdGlja2VyXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlR3b0ZhY3RvckF1dGhlbnRpY2F0aW9uSXNSZXF1aXJlZFwiXSA9IDYwMDAzXSA9IFwiVHdvRmFjdG9yQXV0aGVudGljYXRpb25Jc1JlcXVpcmVkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIk5vVXNlcnNXaXRoRGlzY29yZFRhZ0V4aXN0XCJdID0gODAwMDRdID0gXCJOb1VzZXJzV2l0aERpc2NvcmRUYWdFeGlzdFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJSZWFjdGlvbldhc0Jsb2NrZWRcIl0gPSA5MDAwMV0gPSBcIlJlYWN0aW9uV2FzQmxvY2tlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJBcHBsaWNhdGlvbk5vdFlldEF2YWlsYWJsZVwiXSA9IDExMDAwMV0gPSBcIkFwcGxpY2F0aW9uTm90WWV0QXZhaWxhYmxlXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkFQSVJlc291cmNlT3ZlcmxvYWRlZFwiXSA9IDEzMDAwMF0gPSBcIkFQSVJlc291cmNlT3ZlcmxvYWRlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJUaGVTdGFnZUlzQWxyZWFkeU9wZW5cIl0gPSAxNTAwMDZdID0gXCJUaGVTdGFnZUlzQWxyZWFkeU9wZW5cIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiQ2Fubm90UmVwbHlXaXRob3V0UGVybWlzc2lvblRvUmVhZE1lc3NhZ2VIaXN0b3J5XCJdID0gMTYwMDAyXSA9IFwiQ2Fubm90UmVwbHlXaXRob3V0UGVybWlzc2lvblRvUmVhZE1lc3NhZ2VIaXN0b3J5XCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlRocmVhZEFscmVhZHlDcmVhdGVkRm9yTWVzc2FnZVwiXSA9IDE2MDAwNF0gPSBcIlRocmVhZEFscmVhZHlDcmVhdGVkRm9yTWVzc2FnZVwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJUaHJlYWRMb2NrZWRcIl0gPSAxNjAwMDVdID0gXCJUaHJlYWRMb2NrZWRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiTWF4aW11bUFjdGl2ZVRocmVhZHNcIl0gPSAxNjAwMDZdID0gXCJNYXhpbXVtQWN0aXZlVGhyZWFkc1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNYXhpbXVtQWN0aXZlQW5ub3VuY2VtZW50VGhyZWFkc1wiXSA9IDE2MDAwN10gPSBcIk1heGltdW1BY3RpdmVBbm5vdW5jZW1lbnRUaHJlYWRzXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkludmFsaWRKU09ORm9yVXBsb2FkZWRMb3R0aWVGaWxlXCJdID0gMTcwMDAxXSA9IFwiSW52YWxpZEpTT05Gb3JVcGxvYWRlZExvdHRpZUZpbGVcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiVXBsb2FkZWRMb3R0aWVzQ2Fubm90Q29udGFpblJhc3Rlcml6ZWRJbWFnZXNcIl0gPSAxNzAwMDJdID0gXCJVcGxvYWRlZExvdHRpZXNDYW5ub3RDb250YWluUmFzdGVyaXplZEltYWdlc1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJTdGlja2VyTWF4aW11bUZyYW1lcmF0ZUV4Y2VlZGVkXCJdID0gMTcwMDAzXSA9IFwiU3RpY2tlck1heGltdW1GcmFtZXJhdGVFeGNlZWRlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJTdGlja2VyRnJhbWVDb3VudEV4Y2VlZHNNYXhpbXVtT2YxMDAwRnJhbWVzXCJdID0gMTcwMDA0XSA9IFwiU3RpY2tlckZyYW1lQ291bnRFeGNlZWRzTWF4aW11bU9mMTAwMEZyYW1lc1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJMb3R0aWVBbmltYXRpb25NYXhpbXVtRGltZW5zaW9uc0V4Y2VlZGVkXCJdID0gMTcwMDA1XSA9IFwiTG90dGllQW5pbWF0aW9uTWF4aW11bURpbWVuc2lvbnNFeGNlZWRlZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJTdGlja2VyRnJhbWVyYXRlSXNUb29TbWFsbE9yVG9vTGFyZ2VcIl0gPSAxNzAwMDZdID0gXCJTdGlja2VyRnJhbWVyYXRlSXNUb29TbWFsbE9yVG9vTGFyZ2VcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiU3RpY2tlckFuaW1hdGlvbkR1cmF0aW9uRXhjZWVkc01heGltdW1PZjVTZWNvbmRzXCJdID0gMTcwMDA3XSA9IFwiU3RpY2tlckFuaW1hdGlvbkR1cmF0aW9uRXhjZWVkc01heGltdW1PZjVTZWNvbmRzXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIkNhbm5vdFVwZGF0ZUFGaW5pc2hlZEV2ZW50XCJdID0gMTgwMDAwXSA9IFwiQ2Fubm90VXBkYXRlQUZpbmlzaGVkRXZlbnRcIjtcbiAgICBSRVNUSlNPTkVycm9yQ29kZXNbUkVTVEpTT05FcnJvckNvZGVzW1wiRmFpbGVkVG9DcmVhdGVTdGFnZU5lZWRlZEZvclN0YWdlRXZlbnRcIl0gPSAxODAwMDJdID0gXCJGYWlsZWRUb0NyZWF0ZVN0YWdlTmVlZGVkRm9yU3RhZ2VFdmVudFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNZXNzYWdlV2FzQmxvY2tlZEJ5QXV0b21hdGljTW9kZXJhdGlvblwiXSA9IDIwMDAwMF0gPSBcIk1lc3NhZ2VXYXNCbG9ja2VkQnlBdXRvbWF0aWNNb2RlcmF0aW9uXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIlRpdGxlV2FzQmxvY2tlZEJ5QXV0b21hdGljTW9kZXJhdGlvblwiXSA9IDIwMDAwMV0gPSBcIlRpdGxlV2FzQmxvY2tlZEJ5QXV0b21hdGljTW9kZXJhdGlvblwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJXZWJob29rc1Bvc3RlZFRvRm9ydW1DaGFubmVsc011c3RIYXZlQVRocmVhZE5hbWVPclRocmVhZElkXCJdID0gMjIwMDAxXSA9IFwiV2ViaG9va3NQb3N0ZWRUb0ZvcnVtQ2hhbm5lbHNNdXN0SGF2ZUFUaHJlYWROYW1lT3JUaHJlYWRJZFwiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJXZWJob29rc1Bvc3RlZFRvRm9ydW1DaGFubmVsc0Nhbm5vdEhhdmVCb3RoQVRocmVhZE5hbWVBbmRUaHJlYWRJZFwiXSA9IDIyMDAwMl0gPSBcIldlYmhvb2tzUG9zdGVkVG9Gb3J1bUNoYW5uZWxzQ2Fubm90SGF2ZUJvdGhBVGhyZWFkTmFtZUFuZFRocmVhZElkXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIldlYmhvb2tzQ2FuT25seUNyZWF0ZVRocmVhZHNJbkZvcnVtQ2hhbm5lbHNcIl0gPSAyMjAwMDNdID0gXCJXZWJob29rc0Nhbk9ubHlDcmVhdGVUaHJlYWRzSW5Gb3J1bUNoYW5uZWxzXCI7XG4gICAgUkVTVEpTT05FcnJvckNvZGVzW1JFU1RKU09ORXJyb3JDb2Rlc1tcIldlYmhvb2tTZXJ2aWNlc0Nhbm5vdEJlVXNlZEluRm9ydW1DaGFubmVsc1wiXSA9IDIyMDAwNF0gPSBcIldlYmhvb2tTZXJ2aWNlc0Nhbm5vdEJlVXNlZEluRm9ydW1DaGFubmVsc1wiO1xuICAgIFJFU1RKU09ORXJyb3JDb2Rlc1tSRVNUSlNPTkVycm9yQ29kZXNbXCJNZXNzYWdlQmxvY2tlZEJ5SGFybWZ1bExpbmtzRmlsdGVyXCJdID0gMjQwMDAwXSA9IFwiTWVzc2FnZUJsb2NrZWRCeUhhcm1mdWxMaW5rc0ZpbHRlclwiO1xufSkoUkVTVEpTT05FcnJvckNvZGVzID0gZXhwb3J0cy5SRVNUSlNPTkVycm9yQ29kZXMgfHwgKGV4cG9ydHMuUkVTVEpTT05FcnJvckNvZGVzID0ge30pKTtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVmZXJlbmNlI2xvY2FsZXNcbiAqL1xudmFyIExvY2FsZTtcbihmdW5jdGlvbiAoTG9jYWxlKSB7XG4gICAgTG9jYWxlW1wiRW5nbGlzaFVTXCJdID0gXCJlbi1VU1wiO1xuICAgIExvY2FsZVtcIkVuZ2xpc2hHQlwiXSA9IFwiZW4tR0JcIjtcbiAgICBMb2NhbGVbXCJCdWxnYXJpYW5cIl0gPSBcImJnXCI7XG4gICAgTG9jYWxlW1wiQ2hpbmVzZUNOXCJdID0gXCJ6aC1DTlwiO1xuICAgIExvY2FsZVtcIkNoaW5lc2VUV1wiXSA9IFwiemgtVFdcIjtcbiAgICBMb2NhbGVbXCJDcm9hdGlhblwiXSA9IFwiaHJcIjtcbiAgICBMb2NhbGVbXCJDemVjaFwiXSA9IFwiY3NcIjtcbiAgICBMb2NhbGVbXCJEYW5pc2hcIl0gPSBcImRhXCI7XG4gICAgTG9jYWxlW1wiRHV0Y2hcIl0gPSBcIm5sXCI7XG4gICAgTG9jYWxlW1wiRmlubmlzaFwiXSA9IFwiZmlcIjtcbiAgICBMb2NhbGVbXCJGcmVuY2hcIl0gPSBcImZyXCI7XG4gICAgTG9jYWxlW1wiR2VybWFuXCJdID0gXCJkZVwiO1xuICAgIExvY2FsZVtcIkdyZWVrXCJdID0gXCJlbFwiO1xuICAgIExvY2FsZVtcIkhpbmRpXCJdID0gXCJoaVwiO1xuICAgIExvY2FsZVtcIkh1bmdhcmlhblwiXSA9IFwiaHVcIjtcbiAgICBMb2NhbGVbXCJJdGFsaWFuXCJdID0gXCJpdFwiO1xuICAgIExvY2FsZVtcIkphcGFuZXNlXCJdID0gXCJqYVwiO1xuICAgIExvY2FsZVtcIktvcmVhblwiXSA9IFwia29cIjtcbiAgICBMb2NhbGVbXCJMaXRodWFuaWFuXCJdID0gXCJsdFwiO1xuICAgIExvY2FsZVtcIk5vcndlZ2lhblwiXSA9IFwibm9cIjtcbiAgICBMb2NhbGVbXCJQb2xpc2hcIl0gPSBcInBsXCI7XG4gICAgTG9jYWxlW1wiUG9ydHVndWVzZUJSXCJdID0gXCJwdC1CUlwiO1xuICAgIExvY2FsZVtcIlJvbWFuaWFuXCJdID0gXCJyb1wiO1xuICAgIExvY2FsZVtcIlJ1c3NpYW5cIl0gPSBcInJ1XCI7XG4gICAgTG9jYWxlW1wiU3BhbmlzaEVTXCJdID0gXCJlcy1FU1wiO1xuICAgIExvY2FsZVtcIlN3ZWRpc2hcIl0gPSBcInN2LVNFXCI7XG4gICAgTG9jYWxlW1wiVGhhaVwiXSA9IFwidGhcIjtcbiAgICBMb2NhbGVbXCJUdXJraXNoXCJdID0gXCJ0clwiO1xuICAgIExvY2FsZVtcIlVrcmFpbmlhblwiXSA9IFwidWtcIjtcbiAgICBMb2NhbGVbXCJWaWV0bmFtZXNlXCJdID0gXCJ2aVwiO1xufSkoTG9jYWxlID0gZXhwb3J0cy5Mb2NhbGUgfHwgKGV4cG9ydHMuTG9jYWxlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1vbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1ZGl0TG9nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hhbm5lbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtb2ppLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2F0ZXdheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWd1aWxkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3VpbGRTY2hlZHVsZWRFdmVudC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5PQXV0aDJSb3V0ZXMgPSBleHBvcnRzLlJvdXRlQmFzZXMgPSBleHBvcnRzLkltYWdlRm9ybWF0ID0gZXhwb3J0cy5DRE5Sb3V0ZXMgPSBleHBvcnRzLlN0aWNrZXJQYWNrQXBwbGljYXRpb25JZCA9IGV4cG9ydHMuUm91dGVzID0gZXhwb3J0cy5BUElWZXJzaW9uID0gdm9pZCAwO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuLi9jb21tb25cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2F1ZGl0TG9nXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jaGFubmVsXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lbW9qaVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZ2F0ZXdheVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZ3VpbGRcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2d1aWxkU2NoZWR1bGVkRXZlbnRcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ludGVyYWN0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaW52aXRlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9vYXV0aDJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3N0YWdlSW5zdGFuY2VcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3N0aWNrZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3RlbXBsYXRlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi91c2VyXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi92b2ljZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vd2ViaG9va1wiKSwgZXhwb3J0cyk7XG5leHBvcnRzLkFQSVZlcnNpb24gPSAnMTAnO1xuZXhwb3J0cy5Sb3V0ZXMgPSB7XG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvZ3VpbGRzL3tndWlsZC5pZH0vYXVkaXQtbG9nc2BcbiAgICAgKi9cbiAgICBndWlsZEF1ZGl0TG9nKGd1aWxkSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vYXVkaXQtbG9nc2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgICAgYC9jaGFubmVscy97Y2hhbm5lbC5pZH1gXG4gICAgICogLSBQQVRDSCAgYC9jaGFubmVscy97Y2hhbm5lbC5pZH1gXG4gICAgICogLSBERUxFVEUgYC9jaGFubmVscy97Y2hhbm5lbC5pZH1gXG4gICAgICovXG4gICAgY2hhbm5lbChjaGFubmVsSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCAgYC9jaGFubmVscy97Y2hhbm5lbC5pZH0vbWVzc2FnZXNgXG4gICAgICogLSBQT1NUIGAvY2hhbm5lbHMve2NoYW5uZWwuaWR9L21lc3NhZ2VzYFxuICAgICAqL1xuICAgIGNoYW5uZWxNZXNzYWdlcyhjaGFubmVsSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L21lc3NhZ2VzYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCAgICBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS9tZXNzYWdlcy97bWVzc2FnZS5pZH1gXG4gICAgICogLSBQQVRDSCAgYC9jaGFubmVscy97Y2hhbm5lbC5pZH0vbWVzc2FnZXMve21lc3NhZ2UuaWR9YFxuICAgICAqIC0gREVMRVRFIGAvY2hhbm5lbHMve2NoYW5uZWwuaWR9L21lc3NhZ2VzL3ttZXNzYWdlLmlkfWBcbiAgICAgKi9cbiAgICBjaGFubmVsTWVzc2FnZShjaGFubmVsSWQsIG1lc3NhZ2VJZCkge1xuICAgICAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vbWVzc2FnZXMvJHttZXNzYWdlSWR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIFBPU1QgYC9jaGFubmVscy97Y2hhbm5lbC5pZH0vbWVzc2FnZXMve21lc3NhZ2UuaWR9L2Nyb3NzcG9zdGBcbiAgICAgKi9cbiAgICBjaGFubmVsTWVzc2FnZUNyb3NzcG9zdChjaGFubmVsSWQsIG1lc3NhZ2VJZCkge1xuICAgICAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vbWVzc2FnZXMvJHttZXNzYWdlSWR9L2Nyb3NzcG9zdGA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBQVVQgICAgYC9jaGFubmVscy97Y2hhbm5lbC5pZH0vbWVzc2FnZXMve21lc3NhZ2UuaWR9L3JlYWN0aW9ucy97ZW1vaml9L0BtZWBcbiAgICAgKiAtIERFTEVURSBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS9tZXNzYWdlcy97bWVzc2FnZS5pZH0vcmVhY3Rpb25zL3tlbW9qaX0vQG1lYFxuICAgICAqXG4gICAgICogKipOb3RlKio6IFlvdSBuZWVkIHRvIFVSTCBlbmNvZGUgdGhlIGVtb2ppIHlvdXJzZWxmXG4gICAgICovXG4gICAgY2hhbm5lbE1lc3NhZ2VPd25SZWFjdGlvbihjaGFubmVsSWQsIG1lc3NhZ2VJZCwgZW1vamkpIHtcbiAgICAgICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L21lc3NhZ2VzLyR7bWVzc2FnZUlkfS9yZWFjdGlvbnMvJHtlbW9qaX0vQG1lYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIERFTEVURSBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS9tZXNzYWdlcy97bWVzc2FnZS5pZH0vcmVhY3Rpb25zL3tlbW9qaX0ve3VzZXIuaWR9YFxuICAgICAqXG4gICAgICogKipOb3RlKio6IFlvdSBuZWVkIHRvIFVSTCBlbmNvZGUgdGhlIGVtb2ppIHlvdXJzZWxmXG4gICAgICovXG4gICAgY2hhbm5lbE1lc3NhZ2VVc2VyUmVhY3Rpb24oY2hhbm5lbElkLCBtZXNzYWdlSWQsIGVtb2ppLCB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L21lc3NhZ2VzLyR7bWVzc2FnZUlkfS9yZWFjdGlvbnMvJHtlbW9qaX0vJHt1c2VySWR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCAgICBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS9tZXNzYWdlcy97bWVzc2FnZS5pZH0vcmVhY3Rpb25zL3tlbW9qaX1gXG4gICAgICogLSBERUxFVEUgYC9jaGFubmVscy97Y2hhbm5lbC5pZH0vbWVzc2FnZXMve21lc3NhZ2UuaWR9L3JlYWN0aW9ucy97ZW1vaml9YFxuICAgICAqXG4gICAgICogKipOb3RlKio6IFlvdSBuZWVkIHRvIFVSTCBlbmNvZGUgdGhlIGVtb2ppIHlvdXJzZWxmXG4gICAgICovXG4gICAgY2hhbm5lbE1lc3NhZ2VSZWFjdGlvbihjaGFubmVsSWQsIG1lc3NhZ2VJZCwgZW1vamkpIHtcbiAgICAgICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L21lc3NhZ2VzLyR7bWVzc2FnZUlkfS9yZWFjdGlvbnMvJHtlbW9qaX1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gREVMRVRFIGAvY2hhbm5lbHMve2NoYW5uZWwuaWR9L21lc3NhZ2VzL3ttZXNzYWdlLmlkfS9yZWFjdGlvbnNgXG4gICAgICovXG4gICAgY2hhbm5lbE1lc3NhZ2VBbGxSZWFjdGlvbnMoY2hhbm5lbElkLCBtZXNzYWdlSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L21lc3NhZ2VzLyR7bWVzc2FnZUlkfS9yZWFjdGlvbnNgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gUE9TVCBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS9tZXNzYWdlcy9idWxrLWRlbGV0ZWBcbiAgICAgKi9cbiAgICBjaGFubmVsQnVsa0RlbGV0ZShjaGFubmVsSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L21lc3NhZ2VzL2J1bGstZGVsZXRlYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIFBVVCAgICBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS9wZXJtaXNzaW9ucy97b3ZlcndyaXRlLmlkfWBcbiAgICAgKiAtIERFTEVURSBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS9wZXJtaXNzaW9ucy97b3ZlcndyaXRlLmlkfWBcbiAgICAgKi9cbiAgICBjaGFubmVsUGVybWlzc2lvbihjaGFubmVsSWQsIG92ZXJ3cml0ZUlkKSB7XG4gICAgICAgIHJldHVybiBgL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9wZXJtaXNzaW9ucy8ke292ZXJ3cml0ZUlkfWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgIGAvY2hhbm5lbHMve2NoYW5uZWwuaWR9L2ludml0ZXNgXG4gICAgICogLSBQT1NUIGAvY2hhbm5lbHMve2NoYW5uZWwuaWR9L2ludml0ZXNgXG4gICAgICovXG4gICAgY2hhbm5lbEludml0ZXMoY2hhbm5lbElkKSB7XG4gICAgICAgIHJldHVybiBgL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9pbnZpdGVzYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIFBPU1QgYC9jaGFubmVscy97Y2hhbm5lbC5pZH0vZm9sbG93ZXJzYFxuICAgICAqL1xuICAgIGNoYW5uZWxGb2xsb3dlcnMoY2hhbm5lbElkKSB7XG4gICAgICAgIHJldHVybiBgL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9mb2xsb3dlcnNgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gUE9TVCBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS90eXBpbmdgXG4gICAgICovXG4gICAgY2hhbm5lbFR5cGluZyhjaGFubmVsSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L3R5cGluZ2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9jaGFubmVscy97Y2hhbm5lbC5pZH0vcGluc2BcbiAgICAgKi9cbiAgICBjaGFubmVsUGlucyhjaGFubmVsSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L3BpbnNgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gUFVUICAgIGAvY2hhbm5lbHMve2NoYW5uZWwuaWR9L3BpbnMve21lc3NhZ2UuaWR9YFxuICAgICAqIC0gREVMRVRFIGAvY2hhbm5lbHMve2NoYW5uZWwuaWR9L3BpbnMve21lc3NhZ2UuaWR9YFxuICAgICAqL1xuICAgIGNoYW5uZWxQaW4oY2hhbm5lbElkLCBtZXNzYWdlSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L3BpbnMvJHttZXNzYWdlSWR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIFBVVCAgICBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS9yZWNpcGllbnRzL3t1c2VyLmlkfWBcbiAgICAgKiAtIERFTEVURSBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS9yZWNpcGllbnRzL3t1c2VyLmlkfWBcbiAgICAgKi9cbiAgICBjaGFubmVsUmVjaXBpZW50KGNoYW5uZWxJZCwgdXNlcklkKSB7XG4gICAgICAgIHJldHVybiBgL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9yZWNpcGllbnRzLyR7dXNlcklkfWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgIGAvZ3VpbGRzL3tndWlsZC5pZH0vZW1vamlzYFxuICAgICAqIC0gUE9TVCBgL2d1aWxkcy97Z3VpbGQuaWR9L2Vtb2ppc2BcbiAgICAgKi9cbiAgICBndWlsZEVtb2ppcyhndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L2Vtb2ppc2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgICAgYC9ndWlsZHMve2d1aWxkLmlkfS9lbW9qaXMve2Vtb2ppLmlkfWBcbiAgICAgKiAtIFBBVENIICBgL2d1aWxkcy97Z3VpbGQuaWR9L2Vtb2ppcy97ZW1vamkuaWR9YFxuICAgICAqIC0gREVMRVRFIGAvZ3VpbGRzL3tndWlsZC5pZH0vZW1vamlzL3tlbW9qaS5pZH1gXG4gICAgICovXG4gICAgZ3VpbGRFbW9qaShndWlsZElkLCBlbW9qaUlkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L2Vtb2ppcy8ke2Vtb2ppSWR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIFBPU1QgYC9ndWlsZHNgXG4gICAgICovXG4gICAgZ3VpbGRzKCkge1xuICAgICAgICByZXR1cm4gJy9ndWlsZHMnO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUICAgIGAvZ3VpbGRzL3tndWlsZC5pZH1gXG4gICAgICogLSBQQVRDSCAgYC9ndWlsZHMve2d1aWxkLmlkfWBcbiAgICAgKiAtIERFTEVURSBgL2d1aWxkcy97Z3VpbGQuaWR9YFxuICAgICAqL1xuICAgIGd1aWxkKGd1aWxkSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvZ3VpbGRzL3tndWlsZC5pZH0vcHJldmlld2BcbiAgICAgKi9cbiAgICBndWlsZFByZXZpZXcoZ3VpbGRJZCkge1xuICAgICAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9wcmV2aWV3YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCAgIGAvZ3VpbGRzL3tndWlsZC5pZH0vY2hhbm5lbHNgXG4gICAgICogLSBQT1NUICBgL2d1aWxkcy97Z3VpbGQuaWR9L2NoYW5uZWxzYFxuICAgICAqIC0gUEFUQ0ggYC9ndWlsZHMve2d1aWxkLmlkfS9jaGFubmVsc2BcbiAgICAgKi9cbiAgICBndWlsZENoYW5uZWxzKGd1aWxkSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vY2hhbm5lbHNgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUICAgIGAvZ3VpbGRzL3tndWlsZC5pZH0vbWVtYmVycy97dXNlci5pZH1gXG4gICAgICogLSBQVVQgICAgYC9ndWlsZHMve2d1aWxkLmlkfS9tZW1iZXJzL3t1c2VyLmlkfWBcbiAgICAgKiAtIFBBVENIICBgL2d1aWxkcy97Z3VpbGQuaWR9L21lbWJlcnMvQG1lYFxuICAgICAqIC0gUEFUQ0ggIGAvZ3VpbGRzL3tndWlsZC5pZH0vbWVtYmVycy97dXNlci5pZH1gXG4gICAgICogLSBERUxFVEUgYC9ndWlsZHMve2d1aWxkLmlkfS9tZW1iZXJzL3t1c2VyLmlkfWBcbiAgICAgKi9cbiAgICBndWlsZE1lbWJlcihndWlsZElkLCB1c2VySWQgPSAnQG1lJykge1xuICAgICAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9tZW1iZXJzLyR7dXNlcklkfWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9ndWlsZHMve2d1aWxkLmlkfS9tZW1iZXJzYFxuICAgICAqL1xuICAgIGd1aWxkTWVtYmVycyhndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L21lbWJlcnNgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvZ3VpbGRzL3tndWlsZC5pZH0vbWVtYmVycy9zZWFyY2hgXG4gICAgICovXG4gICAgZ3VpbGRNZW1iZXJzU2VhcmNoKGd1aWxkSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vbWVtYmVycy9zZWFyY2hgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gUEFUQ0ggYC9ndWlsZHMve2d1aWxkLmlkfS9tZW1iZXJzL0BtZS9uaWNrYFxuICAgICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgUm91dGVzLmd1aWxkTWVtYmVyfSBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGd1aWxkQ3VycmVudE1lbWJlck5pY2tuYW1lKGd1aWxkSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vbWVtYmVycy9AbWUvbmlja2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBQVVQgICAgYC9ndWlsZHMve2d1aWxkLmlkfS9tZW1iZXJzL3t1c2VyLmlkfS9yb2xlcy97cm9sZS5pZH1gXG4gICAgICogLSBERUxFVEUgYC9ndWlsZHMve2d1aWxkLmlkfS9tZW1iZXJzL3t1c2VyLmlkfS9yb2xlcy97cm9sZS5pZH1gXG4gICAgICovXG4gICAgZ3VpbGRNZW1iZXJSb2xlKGd1aWxkSWQsIG1lbWJlcklkLCByb2xlSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vbWVtYmVycy8ke21lbWJlcklkfS9yb2xlcy8ke3JvbGVJZH1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gUE9TVCBgL2d1aWxkcy97Z3VpbGQuaWR9L21mYWBcbiAgICAgKi9cbiAgICBndWlsZE1GQShndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L21mYWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9ndWlsZHMve2d1aWxkLmlkfS9iYW5zYFxuICAgICAqL1xuICAgIGd1aWxkQmFucyhndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L2JhbnNgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUICAgIGAvZ3VpbGRzL3tndWlsZC5pZH0vYmFucy97dXNlci5pZH1gXG4gICAgICogLSBQVVQgICAgYC9ndWlsZHMve2d1aWxkLmlkfS9iYW5zL3t1c2VyLmlkfWBcbiAgICAgKiAtIERFTEVURSBgL2d1aWxkcy97Z3VpbGQuaWR9L2JhbnMve3VzZXIuaWR9YFxuICAgICAqL1xuICAgIGd1aWxkQmFuKGd1aWxkSWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9iYW5zLyR7dXNlcklkfWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgICBgL2d1aWxkcy97Z3VpbGQuaWR9L3JvbGVzYFxuICAgICAqIC0gUE9TVCAgYC9ndWlsZHMve2d1aWxkLmlkfS9yb2xlc2BcbiAgICAgKiAtIFBBVENIIGAvZ3VpbGRzL3tndWlsZC5pZH0vcm9sZXNgXG4gICAgICovXG4gICAgZ3VpbGRSb2xlcyhndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3JvbGVzYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIFBBVENIICBgL2d1aWxkcy97Z3VpbGQuaWR9L3JvbGVzL3tyb2xlLmlkfWBcbiAgICAgKiAtIERFTEVURSBgL2d1aWxkcy97Z3VpbGQuaWR9L3JvbGVzL3tyb2xlLmlkfWBcbiAgICAgKi9cbiAgICBndWlsZFJvbGUoZ3VpbGRJZCwgcm9sZUlkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3JvbGVzLyR7cm9sZUlkfWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgIGAvZ3VpbGRzL3tndWlsZC5pZH0vcHJ1bmVgXG4gICAgICogLSBQT1NUIGAvZ3VpbGRzL3tndWlsZC5pZH0vcHJ1bmVgXG4gICAgICovXG4gICAgZ3VpbGRQcnVuZShndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3BydW5lYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2d1aWxkcy97Z3VpbGQuaWR9L3JlZ2lvbnNgXG4gICAgICovXG4gICAgZ3VpbGRWb2ljZVJlZ2lvbnMoZ3VpbGRJZCkge1xuICAgICAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9yZWdpb25zYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2d1aWxkcy97Z3VpbGQuaWR9L2ludml0ZXNgXG4gICAgICovXG4gICAgZ3VpbGRJbnZpdGVzKGd1aWxkSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vaW52aXRlc2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgIGAvZ3VpbGRzL3tndWlsZC5pZH0vaW50ZWdyYXRpb25zYFxuICAgICAqL1xuICAgIGd1aWxkSW50ZWdyYXRpb25zKGd1aWxkSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vaW50ZWdyYXRpb25zYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIERFTEVURSBgL2d1aWxkcy97Z3VpbGQuaWR9L2ludGVncmF0aW9ucy97aW50ZWdyYXRpb24uaWR9YFxuICAgICAqL1xuICAgIGd1aWxkSW50ZWdyYXRpb24oZ3VpbGRJZCwgaW50ZWdyYXRpb25JZCkge1xuICAgICAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9pbnRlZ3JhdGlvbnMvJHtpbnRlZ3JhdGlvbklkfWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgICBgL2d1aWxkcy97Z3VpbGQuaWR9L3dpZGdldGBcbiAgICAgKiAtIFBBVENIIGAvZ3VpbGRzL3tndWlsZC5pZH0vd2lkZ2V0YFxuICAgICAqL1xuICAgIGd1aWxkV2lkZ2V0U2V0dGluZ3MoZ3VpbGRJZCkge1xuICAgICAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS93aWRnZXRgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvZ3VpbGRzL3tndWlsZC5pZH0vd2lkZ2V0Lmpzb25gXG4gICAgICovXG4gICAgZ3VpbGRXaWRnZXRKU09OKGd1aWxkSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vd2lkZ2V0Lmpzb25gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvZ3VpbGRzL3tndWlsZC5pZH0vdmFuaXR5LXVybGBcbiAgICAgKi9cbiAgICBndWlsZFZhbml0eVVybChndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3Zhbml0eS11cmxgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvZ3VpbGRzL3tndWlsZC5pZH0vd2lkZ2V0LnBuZ2BcbiAgICAgKi9cbiAgICBndWlsZFdpZGdldEltYWdlKGd1aWxkSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vd2lkZ2V0LnBuZ2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgICAgYC9pbnZpdGVzL3tpbnZpdGUuY29kZX1gXG4gICAgICogLSBERUxFVEUgYC9pbnZpdGVzL3tpbnZpdGUuY29kZX1gXG4gICAgICovXG4gICAgaW52aXRlKGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIGAvaW52aXRlcy8ke2NvZGV9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCAgYC9ndWlsZHMvdGVtcGxhdGVzL3t0ZW1wbGF0ZS5jb2RlfWBcbiAgICAgKiAtIFBPU1QgYC9ndWlsZHMvdGVtcGxhdGVzL3t0ZW1wbGF0ZS5jb2RlfWBcbiAgICAgKi9cbiAgICB0ZW1wbGF0ZShjb2RlKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy90ZW1wbGF0ZXMvJHtjb2RlfWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgIGAvZ3VpbGRzL3tndWlsZC5pZH0vdGVtcGxhdGVzYFxuICAgICAqIC0gUE9TVCBgL2d1aWxkcy97Z3VpbGQuaWR9L3RlbXBsYXRlc2BcbiAgICAgKi9cbiAgICBndWlsZFRlbXBsYXRlcyhndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3RlbXBsYXRlc2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBQVVQgICAgYC9ndWlsZHMve2d1aWxkLmlkfS90ZW1wbGF0ZXMve3RlbXBsYXRlLmNvZGV9YFxuICAgICAqIC0gUEFUQ0ggIGAvZ3VpbGRzL3tndWlsZC5pZH0vdGVtcGxhdGVzL3t0ZW1wbGF0ZS5jb2RlfWBcbiAgICAgKiAtIERFTEVURSBgL2d1aWxkcy97Z3VpbGQuaWR9L3RlbXBsYXRlcy97dGVtcGxhdGUuY29kZX1gXG4gICAgICovXG4gICAgZ3VpbGRUZW1wbGF0ZShndWlsZElkLCBjb2RlKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3RlbXBsYXRlcy8ke2NvZGV9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIFBPU1QgYC9jaGFubmVscy97Y2hhbm5lbC5pZH0vdGhyZWFkc2BcbiAgICAgKiAtIFBPU1QgYC9jaGFubmVscy97Y2hhbm5lbC5pZH0vbWVzc2FnZXMve21lc3NhZ2UuaWR9L3RocmVhZHNgXG4gICAgICovXG4gICAgdGhyZWFkcyhwYXJlbnRJZCwgbWVzc2FnZUlkKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gWycnLCAnY2hhbm5lbHMnLCBwYXJlbnRJZF07XG4gICAgICAgIGlmIChtZXNzYWdlSWQpXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKCdtZXNzYWdlcycsIG1lc3NhZ2VJZCk7XG4gICAgICAgIHBhcnRzLnB1c2goJ3RocmVhZHMnKTtcbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oJy8nKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2d1aWxkcy97Z3VpbGQuaWR9L3RocmVhZHMvYWN0aXZlYFxuICAgICAqL1xuICAgIGd1aWxkQWN0aXZlVGhyZWFkcyhndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3RocmVhZHMvYWN0aXZlYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS90aHJlYWRzL2FyY2hpdmVkL3B1YmxpY2BcbiAgICAgKiAtIEdFVCBgL2NoYW5uZWxzL3tjaGFubmVsLmlkfS90aHJlYWRzL2FyY2hpdmVkL3ByaXZhdGVgXG4gICAgICovXG4gICAgY2hhbm5lbFRocmVhZHMoY2hhbm5lbElkLCBhcmNoaXZlZFN0YXR1cykge1xuICAgICAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vdGhyZWFkcy9hcmNoaXZlZC8ke2FyY2hpdmVkU3RhdHVzfWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9jaGFubmVscy97Y2hhbm5lbC5pZH0vdXNlcnMvQG1lL3RocmVhZHMvYXJjaGl2ZWQvcHJ2aWF0ZWBcbiAgICAgKi9cbiAgICBjaGFubmVsSm9pbmVkQXJjaGl2ZWRUaHJlYWRzKGNoYW5uZWxJZCkge1xuICAgICAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vdXNlcnMvQG1lL3RocmVhZHMvYXJjaGl2ZWQvcHJpdmF0ZWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgICAgYC9jaGFubmVscy97dGhyZWFkLmlkfS90aHJlYWQtbWVtYmVyc2BcbiAgICAgKiAtIEdFVCAgICBgL2NoYW5uZWxzL3t0aHJlYWQuaWR9L3RocmVhZC1tZW1iZXJzL3t1c2VyLmlkfWBcbiAgICAgKiAtIFBVVCAgICBgL2NoYW5uZWxzL3t0aHJlYWQuaWR9L3RocmVhZC1tZW1iZXJzL0BtZWBcbiAgICAgKiAtIFBVVCAgICBgL2NoYW5uZWxzL3t0aHJlYWQuaWR9L3RocmVhZC1tZW1iZXJzL3t1c2VyLmlkfWBcbiAgICAgKiAtIERFTEVURSBgL2NoYW5uZWxzL3t0aHJlYWQuaWR9L3RocmVhZC1tZW1iZXJzL0BtZWBcbiAgICAgKiAtIERFTEVURSBgL2NoYW5uZWxzL3t0aHJlYWQuaWR9L3RocmVhZC1tZW1iZXJzL3t1c2VyLmlkfWBcbiAgICAgKi9cbiAgICB0aHJlYWRNZW1iZXJzKHRocmVhZElkLCB1c2VySWQpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBbJycsICdjaGFubmVscycsIHRocmVhZElkLCAndGhyZWFkLW1lbWJlcnMnXTtcbiAgICAgICAgaWYgKHVzZXJJZClcbiAgICAgICAgICAgIHBhcnRzLnB1c2godXNlcklkKTtcbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oJy8nKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCAgIGAvdXNlcnMvQG1lYFxuICAgICAqIC0gR0VUICAgYC91c2Vycy97dXNlci5pZH1gXG4gICAgICogLSBQQVRDSCBgL3VzZXJzL0BtZWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBbdXNlcklkPSdAbWUnXSBUaGUgdXNlciBJRCwgZGVmYXVsdGVkIHRvIGBAbWVgXG4gICAgICovXG4gICAgdXNlcih1c2VySWQgPSAnQG1lJykge1xuICAgICAgICByZXR1cm4gYC91c2Vycy8ke3VzZXJJZH1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvdXNlcnMvQG1lL2d1aWxkc2BcbiAgICAgKi9cbiAgICB1c2VyR3VpbGRzKCkge1xuICAgICAgICByZXR1cm4gYC91c2Vycy9AbWUvZ3VpbGRzYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL3VzZXJzL0BtZS9ndWlsZHMve2d1aWxkLmlkfS9tZW1iZXJgXG4gICAgICovXG4gICAgdXNlckd1aWxkTWVtYmVyKGd1aWxkSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvdXNlcnMvQG1lL2d1aWxkcy8ke2d1aWxkSWR9L21lbWJlcmA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBERUxFVEUgYC91c2Vycy9AbWUvZ3VpbGRzL3tndWlsZC5pZH1gXG4gICAgICovXG4gICAgdXNlckd1aWxkKGd1aWxkSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvdXNlcnMvQG1lL2d1aWxkcy8ke2d1aWxkSWR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIFBPU1QgYC91c2Vycy9AbWUvY2hhbm5lbHNgXG4gICAgICovXG4gICAgdXNlckNoYW5uZWxzKCkge1xuICAgICAgICByZXR1cm4gYC91c2Vycy9AbWUvY2hhbm5lbHNgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvdXNlcnMvQG1lL2Nvbm5lY3Rpb25zYFxuICAgICAqL1xuICAgIHVzZXJDb25uZWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGAvdXNlcnMvQG1lL2Nvbm5lY3Rpb25zYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL3ZvaWNlL3JlZ2lvbnNgXG4gICAgICovXG4gICAgdm9pY2VSZWdpb25zKCkge1xuICAgICAgICByZXR1cm4gYC92b2ljZS9yZWdpb25zYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCAgYC9jaGFubmVscy97Y2hhbm5lbC5pZH0vd2ViaG9va3NgXG4gICAgICogLSBQT1NUIGAvY2hhbm5lbHMve2NoYW5uZWwuaWR9L3dlYmhvb2tzYFxuICAgICAqL1xuICAgIGNoYW5uZWxXZWJob29rcyhjaGFubmVsSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L3dlYmhvb2tzYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2d1aWxkcy97Z3VpbGQuaWR9L3dlYmhvb2tzYFxuICAgICAqL1xuICAgIGd1aWxkV2ViaG9va3MoZ3VpbGRJZCkge1xuICAgICAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS93ZWJob29rc2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgICAgYC93ZWJob29rcy97d2ViaG9vay5pZH1gXG4gICAgICogLSBHRVQgICAgYC93ZWJob29rcy97d2ViaG9vay5pZH0ve3dlYmhvb2sudG9rZW59YFxuICAgICAqIC0gUEFUQ0ggIGAvd2ViaG9va3Mve3dlYmhvb2suaWR9YFxuICAgICAqIC0gUEFUQ0ggIGAvd2ViaG9va3Mve3dlYmhvb2suaWR9L3t3ZWJob29rLnRva2VufWBcbiAgICAgKiAtIERFTEVURSBgL3dlYmhvb2tzL3t3ZWJob29rLmlkfWBcbiAgICAgKiAtIERFTEVURSBgL3dlYmhvb2tzL3t3ZWJob29rLmlkfS97d2ViaG9vay50b2tlbn1gXG4gICAgICogLSBQT1NUICAgYC93ZWJob29rcy97d2ViaG9vay5pZH0ve3dlYmhvb2sudG9rZW59YFxuICAgICAqXG4gICAgICogLSBQT1NUICAgYC93ZWJob29rcy97YXBwbGljYXRpb24uaWR9L3tpbnRlcmFjdGlvbi50b2tlbn1gXG4gICAgICovXG4gICAgd2ViaG9vayh3ZWJob29rSWQsIHdlYmhvb2tUb2tlbikge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IFsnJywgJ3dlYmhvb2tzJywgd2ViaG9va0lkXTtcbiAgICAgICAgaWYgKHdlYmhvb2tUb2tlbilcbiAgICAgICAgICAgIHBhcnRzLnB1c2god2ViaG9va1Rva2VuKTtcbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oJy8nKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCAgICBgL3dlYmhvb2tzL3t3ZWJob29rLmlkfS97d2ViaG9vay50b2tlbn0vbWVzc2FnZXMvQG9yaWdpbmFsYFxuICAgICAqIC0gR0VUICAgIGAvd2ViaG9va3Mve3dlYmhvb2suaWR9L3t3ZWJob29rLnRva2VufS9tZXNzYWdlcy97bWVzc2FnZS5pZH1gXG4gICAgICogLSBQQVRDSCAgYC93ZWJob29rcy97d2ViaG9vay5pZH0ve3dlYmhvb2sudG9rZW59L21lc3NhZ2VzL0BvcmlnaW5hbGBcbiAgICAgKiAtIFBBVENIICBgL3dlYmhvb2tzL3t3ZWJob29rLmlkfS97d2ViaG9vay50b2tlbn0vbWVzc2FnZXMve21lc3NhZ2UuaWR9YFxuICAgICAqIC0gREVMRVRFIGAvd2ViaG9va3Mve3dlYmhvb2suaWR9L3t3ZWJob29rLnRva2VufS9tZXNzYWdlcy9Ab3JpZ2luYWxgXG4gICAgICogLSBERUxFVEUgYC93ZWJob29rcy97d2ViaG9vay5pZH0ve3dlYmhvb2sudG9rZW59L21lc3NhZ2VzL3ttZXNzYWdlLmlkfWBcbiAgICAgKlxuICAgICAqIC0gUEFUQ0ggIGAvd2ViaG9va3Mve2FwcGxpY2F0aW9uLmlkfS97aW50ZXJhY3Rpb24udG9rZW59L21lc3NhZ2VzL0BvcmlnaW5hbGBcbiAgICAgKiAtIFBBVENIICBgL3dlYmhvb2tzL3thcHBsaWNhdGlvbi5pZH0ve2ludGVyYWN0aW9uLnRva2VufS9tZXNzYWdlcy97bWVzc2FnZS5pZH1gXG4gICAgICogLSBERUxFVEUgYC93ZWJob29rcy97YXBwbGljYXRpb24uaWR9L3tpbnRlcmFjdGlvbi50b2tlbn0vbWVzc2FnZXMve21lc3NhZ2UuaWR9YFxuICAgICAqXG4gICAgICogQHBhcmFtIFttZXNzYWdlSWQ9J0BvcmlnaW5hbCddIFRoZSBtZXNzYWdlIElEIHRvIGNoYW5nZSwgZGVmYXVsdGVkIHRvIGBAb3JpZ2luYWxgXG4gICAgICovXG4gICAgd2ViaG9va01lc3NhZ2Uod2ViaG9va0lkLCB3ZWJob29rVG9rZW4sIG1lc3NhZ2VJZCA9ICdAb3JpZ2luYWwnKSB7XG4gICAgICAgIHJldHVybiBgL3dlYmhvb2tzLyR7d2ViaG9va0lkfS8ke3dlYmhvb2tUb2tlbn0vbWVzc2FnZXMvJHttZXNzYWdlSWR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIFBPU1QgYC93ZWJob29rcy97d2ViaG9vay5pZH0ve3dlYmhvb2sudG9rZW59L2dpdGh1YmBcbiAgICAgKiAtIFBPU1QgYC93ZWJob29rcy97d2ViaG9vay5pZH0ve3dlYmhvb2sudG9rZW59L3NsYWNrYFxuICAgICAqL1xuICAgIHdlYmhvb2tQbGF0Zm9ybSh3ZWJob29rSWQsIHdlYmhvb2tUb2tlbiwgcGxhdGZvcm0pIHtcbiAgICAgICAgcmV0dXJuIGAvd2ViaG9va3MvJHt3ZWJob29rSWR9LyR7d2ViaG9va1Rva2VufS8ke3BsYXRmb3JtfWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9nYXRld2F5YFxuICAgICAqL1xuICAgIGdhdGV3YXkoKSB7XG4gICAgICAgIHJldHVybiBgL2dhdGV3YXlgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvZ2F0ZXdheS9ib3RgXG4gICAgICovXG4gICAgZ2F0ZXdheUJvdCgpIHtcbiAgICAgICAgcmV0dXJuIGAvZ2F0ZXdheS9ib3RgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvb2F1dGgyL2FwcGxpY2F0aW9ucy9AbWVgXG4gICAgICovXG4gICAgb2F1dGgyQ3VycmVudEFwcGxpY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gYC9vYXV0aDIvYXBwbGljYXRpb25zL0BtZWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9vYXV0aDIvQG1lYFxuICAgICAqL1xuICAgIG9hdXRoMkN1cnJlbnRBdXRob3JpemF0aW9uKCkge1xuICAgICAgICByZXR1cm4gYC9vYXV0aDIvQG1lYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL29hdXRoMi9hdXRob3JpemVgXG4gICAgICovXG4gICAgb2F1dGgyQXV0aG9yaXphdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGAvb2F1dGgyL2F1dGhvcml6ZWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBQT1NUIGAvb2F1dGgyL3Rva2VuYFxuICAgICAqL1xuICAgIG9hdXRoMlRva2VuRXhjaGFuZ2UoKSB7XG4gICAgICAgIHJldHVybiBgL29hdXRoMi90b2tlbmA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBQT1NUIGAvb2F1dGgyL3Rva2VuL3Jldm9rZWBcbiAgICAgKi9cbiAgICBvYXV0aDJUb2tlblJldm9jYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBgL29hdXRoMi90b2tlbi9yZXZva2VgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUICBgL2FwcGxpY2F0aW9ucy97YXBwbGljYXRpb24uaWR9L2NvbW1hbmRzYFxuICAgICAqIC0gUFVUICBgL2FwcGxpY2F0aW9ucy97YXBwbGljYXRpb24uaWR9L2NvbW1hbmRzYFxuICAgICAqIC0gUE9TVCBgL2FwcGxpY2F0aW9ucy97YXBwbGljYXRpb24uaWR9L2NvbW1hbmRzYFxuICAgICAqL1xuICAgIGFwcGxpY2F0aW9uQ29tbWFuZHMoYXBwbGljYXRpb25JZCkge1xuICAgICAgICByZXR1cm4gYC9hcHBsaWNhdGlvbnMvJHthcHBsaWNhdGlvbklkfS9jb21tYW5kc2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgICAgYC9hcHBsaWNhdGlvbnMve2FwcGxpY2F0aW9uLmlkfS9jb21tYW5kcy97Y29tbWFuZC5pZH1gXG4gICAgICogLSBQQVRDSCAgYC9hcHBsaWNhdGlvbnMve2FwcGxpY2F0aW9uLmlkfS9jb21tYW5kcy97Y29tbWFuZC5pZH1gXG4gICAgICogLSBERUxFVEUgYC9hcHBsaWNhdGlvbnMve2FwcGxpY2F0aW9uLmlkfS9jb21tYW5kcy97Y29tbWFuZC5pZH1gXG4gICAgICovXG4gICAgYXBwbGljYXRpb25Db21tYW5kKGFwcGxpY2F0aW9uSWQsIGNvbW1hbmRJZCkge1xuICAgICAgICByZXR1cm4gYC9hcHBsaWNhdGlvbnMvJHthcHBsaWNhdGlvbklkfS9jb21tYW5kcy8ke2NvbW1hbmRJZH1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUICBgL2FwcGxpY2F0aW9ucy97YXBwbGljYXRpb24uaWR9L2d1aWxkcy97Z3VpbGQuaWR9L2NvbW1hbmRzYFxuICAgICAqIC0gUFVUICBgL2FwcGxpY2F0aW9ucy97YXBwbGljYXRpb24uaWR9L2d1aWxkcy97Z3VpbGQuaWR9L2NvbW1hbmRzYFxuICAgICAqIC0gUE9TVCBgL2FwcGxpY2F0aW9ucy97YXBwbGljYXRpb24uaWR9L2d1aWxkcy97Z3VpbGQuaWR9L2NvbW1hbmRzYFxuICAgICAqL1xuICAgIGFwcGxpY2F0aW9uR3VpbGRDb21tYW5kcyhhcHBsaWNhdGlvbklkLCBndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2FwcGxpY2F0aW9ucy8ke2FwcGxpY2F0aW9uSWR9L2d1aWxkcy8ke2d1aWxkSWR9L2NvbW1hbmRzYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCAgICBgL2FwcGxpY2F0aW9ucy97YXBwbGljYXRpb24uaWR9L2d1aWxkcy97Z3VpbGQuaWR9L2NvbW1hbmRzL3tjb21tYW5kLmlkfWBcbiAgICAgKiAtIFBBVENIICBgL2FwcGxpY2F0aW9ucy97YXBwbGljYXRpb24uaWR9L2d1aWxkcy97Z3VpbGQuaWR9L2NvbW1hbmRzL3tjb21tYW5kLmlkfWBcbiAgICAgKiAtIERFTEVURSBgL2FwcGxpY2F0aW9ucy97YXBwbGljYXRpb24uaWR9L2d1aWxkcy97Z3VpbGQuaWR9L2NvbW1hbmRzL3tjb21tYW5kLmlkfWBcbiAgICAgKi9cbiAgICBhcHBsaWNhdGlvbkd1aWxkQ29tbWFuZChhcHBsaWNhdGlvbklkLCBndWlsZElkLCBjb21tYW5kSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvYXBwbGljYXRpb25zLyR7YXBwbGljYXRpb25JZH0vZ3VpbGRzLyR7Z3VpbGRJZH0vY29tbWFuZHMvJHtjb21tYW5kSWR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIFBPU1QgYC9pbnRlcmFjdGlvbnMve2ludGVyYWN0aW9uLmlkfS97aW50ZXJhY3Rpb24udG9rZW59L2NhbGxiYWNrYFxuICAgICAqL1xuICAgIGludGVyYWN0aW9uQ2FsbGJhY2soaW50ZXJhY3Rpb25JZCwgaW50ZXJhY3Rpb25Ub2tlbikge1xuICAgICAgICByZXR1cm4gYC9pbnRlcmFjdGlvbnMvJHtpbnRlcmFjdGlvbklkfS8ke2ludGVyYWN0aW9uVG9rZW59L2NhbGxiYWNrYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCAgIGAvZ3VpbGRzL3tndWlsZC5pZH0vbWVtYmVyLXZlcmlmaWNhdGlvbmBcbiAgICAgKiAtIFBBVENIIGAvZ3VpbGRzL3tndWlsZC5pZH0vbWVtYmVyLXZlcmlmaWNhdGlvbmBcbiAgICAgKi9cbiAgICBndWlsZE1lbWJlclZlcmlmaWNhdGlvbihndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L21lbWJlci12ZXJpZmljYXRpb25gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gUEFUQ0ggYC9ndWlsZHMve2d1aWxkLmlkfS92b2ljZS1zdGF0ZXMvQG1lYFxuICAgICAqIC0gUEFUQ0ggYC9ndWlsZHMve2d1aWxkLmlkfS92b2ljZS1zdGF0ZXMve3VzZXIuaWR9YFxuICAgICAqL1xuICAgIGd1aWxkVm9pY2VTdGF0ZShndWlsZElkLCB1c2VySWQgPSAnQG1lJykge1xuICAgICAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS92b2ljZS1zdGF0ZXMvJHt1c2VySWR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2FwcGxpY2F0aW9ucy97YXBwbGljYXRpb24uaWR9L2d1aWxkcy97Z3VpbGQuaWR9L2NvbW1hbmRzL3Blcm1pc3Npb25zYFxuICAgICAqIC0gUFVUIGAvYXBwbGljYXRpb25zL3thcHBsaWNhdGlvbi5pZH0vZ3VpbGRzL3tndWlsZC5pZH0vY29tbWFuZHMvcGVybWlzc2lvbnNgXG4gICAgICovXG4gICAgZ3VpbGRBcHBsaWNhdGlvbkNvbW1hbmRzUGVybWlzc2lvbnMoYXBwbGljYXRpb25JZCwgZ3VpbGRJZCkge1xuICAgICAgICByZXR1cm4gYC9hcHBsaWNhdGlvbnMvJHthcHBsaWNhdGlvbklkfS9ndWlsZHMvJHtndWlsZElkfS9jb21tYW5kcy9wZXJtaXNzaW9uc2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9hcHBsaWNhdGlvbnMve2FwcGxpY2F0aW9uLmlkfS9ndWlsZHMve2d1aWxkLmlkfS9jb21tYW5kcy97Y29tbWFuZC5pZH0vcGVybWlzc2lvbnNgXG4gICAgICogLSBQVVQgYC9hcHBsaWNhdGlvbnMve2FwcGxpY2F0aW9uLmlkfS9ndWlsZHMve2d1aWxkLmlkfS9jb21tYW5kcy97Y29tbWFuZC5pZH0vcGVybWlzc2lvbnNgXG4gICAgICovXG4gICAgYXBwbGljYXRpb25Db21tYW5kUGVybWlzc2lvbnMoYXBwbGljYXRpb25JZCwgZ3VpbGRJZCwgY29tbWFuZElkKSB7XG4gICAgICAgIHJldHVybiBgL2FwcGxpY2F0aW9ucy8ke2FwcGxpY2F0aW9uSWR9L2d1aWxkcy8ke2d1aWxkSWR9L2NvbW1hbmRzLyR7Y29tbWFuZElkfS9wZXJtaXNzaW9uc2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgICBgL2d1aWxkcy97Z3VpbGQuaWR9L3dlbGNvbWUtc2NyZWVuYFxuICAgICAqIC0gUEFUQ0ggYC9ndWlsZHMve2d1aWxkLmlkfS93ZWxjb21lLXNjcmVlbmBcbiAgICAgKi9cbiAgICBndWlsZFdlbGNvbWVTY3JlZW4oZ3VpbGRJZCkge1xuICAgICAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS93ZWxjb21lLXNjcmVlbmA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBQT1NUIGAvc3RhZ2UtaW5zdGFuY2VzYFxuICAgICAqL1xuICAgIHN0YWdlSW5zdGFuY2VzKCkge1xuICAgICAgICByZXR1cm4gYC9zdGFnZS1pbnN0YW5jZXNgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvc3RhZ2UtaW5zdGFuY2VzL3tjaGFubmVsLmlkfWBcbiAgICAgKiAtIFBBVENIIGAvc3RhZ2UtaW5zdGFuY2VzL3tjaGFubmVsLmlkfWBcbiAgICAgKiAtIERFTEVURSBgL3N0YWdlLWluc3RhbmNlcy97Y2hhbm5lbC5pZH1gXG4gICAgICovXG4gICAgc3RhZ2VJbnN0YW5jZShjaGFubmVsSWQpIHtcbiAgICAgICAgcmV0dXJuIGAvc3RhZ2UtaW5zdGFuY2VzLyR7Y2hhbm5lbElkfWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9zdGlja2Vycy97c3RpY2tlci5pZH1gXG4gICAgICovXG4gICAgc3RpY2tlcihzdGlja2VySWQpIHtcbiAgICAgICAgcmV0dXJuIGAvc3RpY2tlcnMvJHtzdGlja2VySWR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL3N0aWNrZXItcGFja3NgXG4gICAgICovXG4gICAgbml0cm9TdGlja2VyUGFja3MoKSB7XG4gICAgICAgIHJldHVybiAnL3N0aWNrZXItcGFja3MnO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUICBgL2d1aWxkcy97Z3VpbGQuaWR9L3N0aWNrZXJzYFxuICAgICAqIC0gUE9TVCBgL2d1aWxkcy97Z3VpbGQuaWR9L3N0aWNrZXJzYFxuICAgICAqL1xuICAgIGd1aWxkU3RpY2tlcnMoZ3VpbGRJZCkge1xuICAgICAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9zdGlja2Vyc2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgICAgYC9ndWlsZHMve2d1aWxkLmlkfS9zdGlja2Vycy97c3RpY2tlci5pZH1gXG4gICAgICogLSBQQVRDSCAgYC9ndWlsZHMve2d1aWxkLmlkfS9zdGlja2Vycy97c3RpY2tlci5pZH1gXG4gICAgICogLSBERUxFVEUgYC9ndWlsZHMve2d1aWxkLmlkfS9zdGlja2Vycy97c3RpY2tlci5pZH1gXG4gICAgICovXG4gICAgZ3VpbGRTdGlja2VyKGd1aWxkSWQsIHN0aWNrZXJJZCkge1xuICAgICAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9zdGlja2Vycy8ke3N0aWNrZXJJZH1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUICBgL2d1aWxkcy97Z3VpbGQuaWR9L3NjaGVkdWxlZC1ldmVudHNgXG4gICAgICogLSBQT1NUIGAvZ3VpbGRzL3tndWlsZC5pZH0vc2NoZWR1bGVkLWV2ZW50c2BcbiAgICAgKi9cbiAgICBndWlsZFNjaGVkdWxlZEV2ZW50cyhndWlsZElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3NjaGVkdWxlZC1ldmVudHNgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUICBgL2d1aWxkcy97Z3VpbGQuaWR9L3NjaGVkdWxlZC1ldmVudHMve2d1aWxkU2NoZWR1bGVkRXZlbnQuaWR9YFxuICAgICAqIC0gUEFUQ0ggYC9ndWlsZHMve2d1aWxkLmlkfS9zY2hlZHVsZWQtZXZlbnRzL3tndWlsZFNjaGVkdWxlZEV2ZW50LmlkfWBcbiAgICAgKiAtIERFTEVURSBgL2d1aWxkcy97Z3VpbGQuaWR9L3NjaGVkdWxlZC1ldmVudHMve2d1aWxkU2NoZWR1bGVkRXZlbnQuaWR9YFxuICAgICAqL1xuICAgIGd1aWxkU2NoZWR1bGVkRXZlbnQoZ3VpbGRJZCwgZ3VpbGRTY2hlZHVsZWRFdmVudElkKSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3NjaGVkdWxlZC1ldmVudHMvJHtndWlsZFNjaGVkdWxlZEV2ZW50SWR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2d1aWxkcy97Z3VpbGQuaWR9L3NjaGVkdWxlZC1ldmVudHMve2d1aWxkU2NoZWR1bGVkRXZlbnQuaWR9L3VzZXJzYFxuICAgICAqL1xuICAgIGd1aWxkU2NoZWR1bGVkRXZlbnRVc2VycyhndWlsZElkLCBndWlsZFNjaGVkdWxlZEV2ZW50SWQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vc2NoZWR1bGVkLWV2ZW50cy8ke2d1aWxkU2NoZWR1bGVkRXZlbnRJZH0vdXNlcnNgO1xuICAgIH0sXG59O1xuZXhwb3J0cy5TdGlja2VyUGFja0FwcGxpY2F0aW9uSWQgPSAnNzEwOTgyNDE0MzAxNzkwMjE2JztcbmV4cG9ydHMuQ0ROUm91dGVzID0ge1xuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2Vtb2ppcy97ZW1vamkuaWR9Lntwbmd8anBlZ3x3ZWJwfGdpZn1gXG4gICAgICpcbiAgICAgKiBBcyB0aGlzIHJvdXRlIHN1cHBvcnRzIEdJRnMsIHRoZSBoYXNoIHdpbGwgYmVnaW4gd2l0aCBgYV9gIGlmIGl0IGlzIGF2YWlsYWJsZSBpbiBHSUYgZm9ybWF0XG4gICAgICpcbiAgICAgKiBUaGlzIHJvdXRlIHN1cHBvcnRzIHRoZSBleHRlbnNpb25zOiBQTkcsIEpQRUcsIFdlYlAsIEdJRlxuICAgICAqL1xuICAgIGVtb2ppKGVtb2ppSWQsIGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gYC9lbW9qaXMvJHtlbW9qaUlkfS4ke2Zvcm1hdH1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvZ3VpbGRzL3tndWlsZC5pZH0vaWNvbnMve2d1aWxkLmlkfS57cG5nfGpwZWd8d2VicHxnaWZ9YFxuICAgICAqXG4gICAgICogQXMgdGhpcyByb3V0ZSBzdXBwb3J0cyBHSUZzLCB0aGUgaGFzaCB3aWxsIGJlZ2luIHdpdGggYGFfYCBpZiBpdCBpcyBhdmFpbGFibGUgaW4gR0lGIGZvcm1hdFxuICAgICAqXG4gICAgICogVGhpcyByb3V0ZSBzdXBwb3J0cyB0aGUgZXh0ZW5zaW9uczogUE5HLCBKUEVHLCBXZWJQLCBHSUZcbiAgICAgKi9cbiAgICBndWlsZEljb24oZ3VpbGRJZCwgZ3VpbGRJY29uLCBmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGBpY29ucy8ke2d1aWxkSWR9LyR7Z3VpbGRJY29ufS4ke2Zvcm1hdH1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvc3BsYXNoZXMve2d1aWxkLmlkfS97Z3VpbGQuc3BsYXNofS57cG5nfGpwZWd8d2VicH1gXG4gICAgICpcbiAgICAgKiBUaGlzIHJvdXRlIHN1cHBvcnRzIHRoZSBleHRlbnNpb25zOiBQTkcsIEpQRUcsIFdlYlBcbiAgICAgKi9cbiAgICBndWlsZFNwbGFzaChndWlsZElkLCBndWlsZFNwbGFzaCwgZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBgL3NwbGFzaGVzLyR7Z3VpbGRJZH0vJHtndWlsZFNwbGFzaH0uJHtmb3JtYXR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2Rpc2NvdmVyeS1zcGxhc2hlcy97Z3VpbGQuaWR9L3tndWlsZC5kaXNjb3Zlcnlfc3BsYXNofS57cG5nfGpwZWd8d2VicH1gXG4gICAgICpcbiAgICAgKiBUaGlzIHJvdXRlIHN1cHBvcnRzIHRoZSBleHRlbnNpb25zOiBQTkcsIEpQRUcsIFdlYlBcbiAgICAgKi9cbiAgICBndWlsZERpc2NvdmVyeVNwbGFzaChndWlsZElkLCBndWlsZERpc2NvdmVyeVNwbGFzaCwgZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBgL2Rpc2NvdmVyeS1zcGxhc2hlcy8ke2d1aWxkSWR9LyR7Z3VpbGREaXNjb3ZlcnlTcGxhc2h9LiR7Zm9ybWF0fWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9iYW5uZXJzL3tndWlsZC5pZH0ve2d1aWxkLmJhbm5lcn0ue3BuZ3xqcGVnfHdlYnB8Z2lmfWBcbiAgICAgKlxuICAgICAqIEFzIHRoaXMgcm91dGUgc3VwcG9ydHMgR0lGcywgdGhlIGhhc2ggd2lsbCBiZWdpbiB3aXRoIGBhX2AgaWYgaXQgaXMgYXZhaWxhYmxlIGluIEdJRiBmb3JtYXRcbiAgICAgKlxuICAgICAqIFRoaXMgcm91dGUgc3VwcG9ydHMgdGhlIGV4dGVuc2lvbnM6IFBORywgSlBFRywgV2ViUCwgR0lGXG4gICAgICovXG4gICAgZ3VpbGRCYW5uZXIoZ3VpbGRJZCwgZ3VpbGRCYW5uZXIsIGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gYC9iYW5uZXJzLyR7Z3VpbGRJZH0vJHtndWlsZEJhbm5lcn0uJHtmb3JtYXR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2Jhbm5lcnMve3VzZXIuaWR9L3t1c2VyLmJhbm5lcn0ue3BuZ3xqcGVnfHdlYnB8Z2lmfWBcbiAgICAgKlxuICAgICAqIEFzIHRoaXMgcm91dGUgc3VwcG9ydHMgR0lGcywgdGhlIGhhc2ggd2lsbCBiZWdpbiB3aXRoIGBhX2AgaWYgaXQgaXMgYXZhaWxhYmxlIGluIEdJRiBmb3JtYXRcbiAgICAgKlxuICAgICAqIFRoaXMgcm91dGUgc3VwcG9ydHMgdGhlIGV4dGVuc2lvbnM6IFBORywgSlBFRywgV2ViUCwgR0lGXG4gICAgICovXG4gICAgdXNlckJhbm5lcih1c2VySWQsIHVzZXJCYW5uZXIsIGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gYC9iYW5uZXJzLyR7dXNlcklkfS8ke3VzZXJCYW5uZXJ9LiR7Zm9ybWF0fWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9lbWJlZC9hdmF0YXJzL3t1c2VyLmRpc2NyaW1pbmF0b3IgJSA1fS5wbmdgXG4gICAgICpcbiAgICAgKiBUaGUgYHVzZXJEaXNjcmltaW5hdG9yYCBwYXJhbWV0ZXIgc2hvdWxkIGJlIHRoZSB1c2VyIGRpc2NyaW1pbmF0b3IgbW9kdWxvIDUgKGUuZy4gMTMzNyAlIDUgPSAyKVxuICAgICAqXG4gICAgICogVGhpcyByb3V0ZSBzdXBwb3J0cyB0aGUgZXh0ZW5zaW9uOiBQTkdcbiAgICAgKi9cbiAgICBkZWZhdWx0VXNlckF2YXRhcih1c2VyRGlzY3JpbWluYXRvcikge1xuICAgICAgICByZXR1cm4gYC9lbWJlZC9hdmF0YXJzLyR7dXNlckRpc2NyaW1pbmF0b3J9LnBuZ2A7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9hdmF0YXJzL3t1c2VyLmlkfS97dXNlci5hdmF0YXJ9Lntwbmd8anBlZ3x3ZWJwfGdpZn1gXG4gICAgICpcbiAgICAgKiBBcyB0aGlzIHJvdXRlIHN1cHBvcnRzIEdJRnMsIHRoZSBoYXNoIHdpbGwgYmVnaW4gd2l0aCBgYV9gIGlmIGl0IGlzIGF2YWlsYWJsZSBpbiBHSUYgZm9ybWF0XG4gICAgICpcbiAgICAgKiBUaGlzIHJvdXRlIHN1cHBvcnRzIHRoZSBleHRlbnNpb25zOiBQTkcsIEpQRUcsIFdlYlAsIEdJRlxuICAgICAqL1xuICAgIHVzZXJBdmF0YXIodXNlcklkLCB1c2VyQXZhdGFyLCBmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGAvYXZhdGFycy8ke3VzZXJJZH0vJHt1c2VyQXZhdGFyfS4ke2Zvcm1hdH1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvZ3VpbGRzL3tndWlsZC5pZH0vdXNlcnMve3VzZXIuaWR9L3tndWlsZF9tZW1iZXIuYXZhdGFyfS57cG5nfGpwZWd8d2VicHxnaWZ9YFxuICAgICAqXG4gICAgICogQXMgdGhpcyByb3V0ZSBzdXBwb3J0cyBHSUZzLCB0aGUgaGFzaCB3aWxsIGJlZ2luIHdpdGggYGFfYCBpZiBpdCBpcyBhdmFpbGFibGUgaW4gR0lGIGZvcm1hdFxuICAgICAqXG4gICAgICogVGhpcyByb3V0ZSBzdXBwb3J0cyB0aGUgZXh0ZW5zaW9uczogUE5HLCBKUEVHLCBXZWJQLCBHSUZcbiAgICAgKi9cbiAgICBndWlsZE1lbWJlckF2YXRhcihndWlsZElkLCB1c2VySWQsIG1lbWJlckF2YXRhciwgZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3VzZXJzLyR7dXNlcklkfS9hdmF0YXJzLyR7bWVtYmVyQXZhdGFyfS4ke2Zvcm1hdH1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvYXBwLWljb25zL3thcHBsaWNhdGlvbi5pZH0ve2FwcGxpY2F0aW9uLmljb259Lntwbmd8anBlZ3x3ZWJwfWBcbiAgICAgKlxuICAgICAqIFRoaXMgcm91dGUgc3VwcG9ydHMgdGhlIGV4dGVuc2lvbnM6IFBORywgSlBFRywgV2ViUFxuICAgICAqL1xuICAgIGFwcGxpY2F0aW9uSWNvbihhcHBsaWNhdGlvbklkLCBhcHBsaWNhdGlvbkljb24sIGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gYC9hcHAtaWNvbnMvJHthcHBsaWNhdGlvbklkfS8ke2FwcGxpY2F0aW9uSWNvbn0uJHtmb3JtYXR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2FwcC1pY29ucy97YXBwbGljYXRpb24uaWR9L3thcHBsaWNhdGlvbi5jb3Zlcl9pbWFnZX0ue3BuZ3xqcGVnfHdlYnB9YFxuICAgICAqXG4gICAgICogVGhpcyByb3V0ZSBzdXBwb3J0cyB0aGUgZXh0ZW5zaW9uczogUE5HLCBKUEVHLCBXZWJQXG4gICAgICovXG4gICAgYXBwbGljYXRpb25Db3ZlcihhcHBsaWNhdGlvbklkLCBhcHBsaWNhdGlvbkNvdmVySW1hZ2UsIGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gYC9hcHAtaWNvbnMvJHthcHBsaWNhdGlvbklkfS8ke2FwcGxpY2F0aW9uQ292ZXJJbWFnZX0uJHtmb3JtYXR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2FwcC1pY29ucy97YXBwbGljYXRpb24uaWR9L3thcHBsaWNhdGlvbi5hc3NldF9pZH0ue3BuZ3xqcGVnfHdlYnB9YFxuICAgICAqXG4gICAgICogVGhpcyByb3V0ZSBzdXBwb3J0cyB0aGUgZXh0ZW5zaW9uczogUE5HLCBKUEVHLCBXZWJQXG4gICAgICovXG4gICAgYXBwbGljYXRpb25Bc3NldChhcHBsaWNhdGlvbklkLCBhcHBsaWNhdGlvbkFzc2V0SWQsIGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gYC9hcHAtaWNvbnMvJHthcHBsaWNhdGlvbklkfS8ke2FwcGxpY2F0aW9uQXNzZXRJZH0uJHtmb3JtYXR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2FwcC1hc3NldHMve2FwcGxpY2F0aW9uLmlkfS9hY2hpZXZlbWVudHMve2FjaGlldmVtZW50LmlkfS9pY29ucy97YWNoaWV2ZW1lbnQuaWNvbn0ue3BuZ3xqcGVnfHdlYnB9YFxuICAgICAqXG4gICAgICogVGhpcyByb3V0ZSBzdXBwb3J0cyB0aGUgZXh0ZW5zaW9uczogUE5HLCBKUEVHLCBXZWJQXG4gICAgICovXG4gICAgYWNoaWV2ZW1lbnRJY29uKGFwcGxpY2F0aW9uSWQsIGFjaGlldmVtZW50SWQsIGFjaGlldmVtZW50SWNvbkhhc2gsIGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gYC9hcHAtYXNzZXRzLyR7YXBwbGljYXRpb25JZH0vYWNoaWV2ZW1lbnRzLyR7YWNoaWV2ZW1lbnRJZH0vaWNvbnMvJHthY2hpZXZlbWVudEljb25IYXNofS4ke2Zvcm1hdH1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvYXBwLWFzc2V0cy83MTA5ODI0MTQzMDE3OTAyMTYvc3RvcmUve3N0aWNrZXJfcGFjay5iYW5uZXIuYXNzZXRfaWR9Lntwbmd8anBlZ3x3ZWJwfWBcbiAgICAgKlxuICAgICAqIFRoaXMgcm91dGUgc3VwcG9ydHMgdGhlIGV4dGVuc2lvbnM6IFBORywgSlBFRywgV2ViUFxuICAgICAqL1xuICAgIHN0aWNrZXJQYWNrQmFubmVyKHN0aWNrZXJQYWNrQmFubmVyQXNzZXRJZCwgZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBgL2FwcC1hc3NldHMvJHtleHBvcnRzLlN0aWNrZXJQYWNrQXBwbGljYXRpb25JZH0vc3RvcmUvJHtzdGlja2VyUGFja0Jhbm5lckFzc2V0SWR9LiR7Zm9ybWF0fWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYHRlYW0taWNvbnMve3RlYW0uaWR9L3t0ZWFtLmljb259Lntwbmd8anBlZ3x3ZWJwfWBcbiAgICAgKlxuICAgICAqIFRoaXMgcm91dGUgc3VwcG9ydHMgdGhlIGV4dGVuc2lvbnM6IFBORywgSlBFRywgV2ViUFxuICAgICAqL1xuICAgIHRlYW1JY29uKHRlYW1JZCwgdGVhbUljb24sIGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gYC90ZWFtLWljb25zLyR7dGVhbUlkfS8ke3RlYW1JY29ufS4ke2Zvcm1hdH1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm91dGUgZm9yOlxuICAgICAqIC0gR0VUIGAvc3RpY2tlcnMve3N0aWNrZXIuaWR9Lntwbmd8anNvbn1gXG4gICAgICpcbiAgICAgKiBUaGlzIHJvdXRlIHN1cHBvcnRzIHRoZSBleHRlbnNpb25zOiBQTkcsIExvdHRpZVxuICAgICAqL1xuICAgIHN0aWNrZXIoc3RpY2tlcklkLCBmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGAvc3RpY2tlcnMvJHtzdGlja2VySWR9LiR7Zm9ybWF0fWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3V0ZSBmb3I6XG4gICAgICogLSBHRVQgYC9yb2xlLWljb25zL3tyb2xlLmlkfS97cm9sZS5pY29ufS57cG5nfGpwZWd8d2VicH1gXG4gICAgICpcbiAgICAgKiBUaGlzIHJvdXRlIHN1cHBvcnRzIHRoZSBleHRlbnNpb25zOiBQTkcsIEpQRUcsIFdlYlBcbiAgICAgKi9cbiAgICByb2xlSWNvbihyb2xlSWQsIHJvbGVJY29uLCBmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGAvcm9sZS1pY29ucy8ke3JvbGVJZH0vJHtyb2xlSWNvbn0uJHtmb3JtYXR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2d1aWxkLWV2ZW50cy97Z3VpbGRfc2NoZWR1bGVkX2V2ZW50LmlkfS97Z3VpbGRfc2NoZWR1bGVkX2V2ZW50LmltYWdlfS57cG5nfGpwZWd8d2VicH1gXG4gICAgICpcbiAgICAgKiBUaGlzIHJvdXRlIHN1cHBvcnRzIHRoZSBleHRlbnNpb25zOiBQTkcsIEpQRUcsIFdlYlBcbiAgICAgKi9cbiAgICBndWlsZFNjaGVkdWxlZEV2ZW50Q292ZXIoZ3VpbGRTY2hlZHVsZWRFdmVudElkLCBndWlsZFNjaGVkdWxlZEV2ZW50Q292ZXJJbWFnZSwgZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBgL2d1aWxkLWV2ZW50cy8ke2d1aWxkU2NoZWR1bGVkRXZlbnRJZH0vJHtndWlsZFNjaGVkdWxlZEV2ZW50Q292ZXJJbWFnZX0uJHtmb3JtYXR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdXRlIGZvcjpcbiAgICAgKiAtIEdFVCBgL2d1aWxkcy8ke2d1aWxkLmlkfS91c2Vycy8ke3VzZXIuaWR9L2Jhbm5lcnMvJHtndWlsZF9tZW1iZXIuYmFubmVyfS57cG5nfGpwZWd8d2VicHxnaWZ9YFxuICAgICAqXG4gICAgICogVGhpcyByb3V0ZSBzdXBwb3J0cyB0aGUgZXh0ZW5zaW9uczogUE5HLCBKUEVHLCBXZWJQLCBHSUZcbiAgICAgKi9cbiAgICBndWlsZE1lbWJlckJhbm5lcihndWlsZElkLCB1c2VySWQsIGd1aWxkTWVtYmVyQmFubmVyLCBmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vdXNlcnMvJHt1c2VySWR9L2Jhbm5lcnMvJHtndWlsZE1lbWJlckJhbm5lcn0uJHtmb3JtYXR9YDtcbiAgICB9LFxufTtcbnZhciBJbWFnZUZvcm1hdDtcbihmdW5jdGlvbiAoSW1hZ2VGb3JtYXQpIHtcbiAgICBJbWFnZUZvcm1hdFtcIkpQRUdcIl0gPSBcImpwZWdcIjtcbiAgICBJbWFnZUZvcm1hdFtcIlBOR1wiXSA9IFwicG5nXCI7XG4gICAgSW1hZ2VGb3JtYXRbXCJXZWJQXCJdID0gXCJ3ZWJwXCI7XG4gICAgSW1hZ2VGb3JtYXRbXCJHSUZcIl0gPSBcImdpZlwiO1xuICAgIEltYWdlRm9ybWF0W1wiTG90dGllXCJdID0gXCJqc29uXCI7XG59KShJbWFnZUZvcm1hdCA9IGV4cG9ydHMuSW1hZ2VGb3JtYXQgfHwgKGV4cG9ydHMuSW1hZ2VGb3JtYXQgPSB7fSkpO1xuZXhwb3J0cy5Sb3V0ZUJhc2VzID0ge1xuICAgIGFwaTogYGh0dHBzOi8vZGlzY29yZC5jb20vYXBpL3Yke2V4cG9ydHMuQVBJVmVyc2lvbn1gLFxuICAgIGNkbjogJ2h0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tJyxcbiAgICBpbnZpdGU6ICdodHRwczovL2Rpc2NvcmQuZ2cnLFxuICAgIHRlbXBsYXRlOiAnaHR0cHM6Ly9kaXNjb3JkLm5ldycsXG4gICAgZ2lmdDogJ2h0dHBzOi8vZGlzY29yZC5naWZ0JyxcbiAgICBzY2hlZHVsZWRFdmVudDogJ2h0dHBzOi8vZGlzY29yZC5jb20vZXZlbnRzJyxcbn07XG4vLyBGcmVlemUgYmFzZXMgb2JqZWN0XG5PYmplY3QuZnJlZXplKGV4cG9ydHMuUm91dGVCYXNlcyk7XG5leHBvcnRzLk9BdXRoMlJvdXRlcyA9IHtcbiAgICBhdXRob3JpemF0aW9uVVJMOiBgJHtleHBvcnRzLlJvdXRlQmFzZXMuYXBpfSR7ZXhwb3J0cy5Sb3V0ZXMub2F1dGgyQXV0aG9yaXphdGlvbigpfWAsXG4gICAgdG9rZW5VUkw6IGAke2V4cG9ydHMuUm91dGVCYXNlcy5hcGl9JHtleHBvcnRzLlJvdXRlcy5vYXV0aDJUb2tlbkV4Y2hhbmdlKCl9YCxcbiAgICAvKipcbiAgICAgKiBTZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcwMDlcbiAgICAgKi9cbiAgICB0b2tlblJldm9jYXRpb25VUkw6IGAke2V4cG9ydHMuUm91dGVCYXNlcy5hcGl9JHtleHBvcnRzLlJvdXRlcy5vYXV0aDJUb2tlblJldm9jYXRpb24oKX1gLFxufTtcbi8vIEZyZWV6ZSBPQXV0aDIgcm91dGUgb2JqZWN0XG5PYmplY3QuZnJlZXplKGV4cG9ydHMuT0F1dGgyUm91dGVzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJhY3Rpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW52aXRlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2F1dGgyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhZ2VJbnN0YW5jZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0aWNrZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12b2ljZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdlYmhvb2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJQQ0Nsb3NlRXZlbnRDb2RlcyA9IGV4cG9ydHMuUlBDRXJyb3JDb2RlcyA9IHZvaWQgMDtcbi8qKlxuICogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvdG9waWNzL29wY29kZXMtYW5kLXN0YXR1cy1jb2RlcyNycGMtcnBjLWVycm9yLWNvZGVzXG4gKi9cbnZhciBSUENFcnJvckNvZGVzO1xuKGZ1bmN0aW9uIChSUENFcnJvckNvZGVzKSB7XG4gICAgUlBDRXJyb3JDb2Rlc1tSUENFcnJvckNvZGVzW1wiVW5rbm93bkVycm9yXCJdID0gMTAwMF0gPSBcIlVua25vd25FcnJvclwiO1xuICAgIFJQQ0Vycm9yQ29kZXNbUlBDRXJyb3JDb2Rlc1tcIkludmFsaWRQYXlsb2FkXCJdID0gNDAwMF0gPSBcIkludmFsaWRQYXlsb2FkXCI7XG4gICAgUlBDRXJyb3JDb2Rlc1tSUENFcnJvckNvZGVzW1wiSW52YWxpZENvbW1hbmRcIl0gPSA0MDAyXSA9IFwiSW52YWxpZENvbW1hbmRcIjtcbiAgICBSUENFcnJvckNvZGVzW1JQQ0Vycm9yQ29kZXNbXCJJbnZhbGlkR3VpbGRcIl0gPSA0MDAzXSA9IFwiSW52YWxpZEd1aWxkXCI7XG4gICAgUlBDRXJyb3JDb2Rlc1tSUENFcnJvckNvZGVzW1wiSW52YWxpZEV2ZW50XCJdID0gNDAwNF0gPSBcIkludmFsaWRFdmVudFwiO1xuICAgIFJQQ0Vycm9yQ29kZXNbUlBDRXJyb3JDb2Rlc1tcIkludmFsaWRDaGFubmVsXCJdID0gNDAwNV0gPSBcIkludmFsaWRDaGFubmVsXCI7XG4gICAgUlBDRXJyb3JDb2Rlc1tSUENFcnJvckNvZGVzW1wiSW52YWxpZFBlcm1pc3Npb25zXCJdID0gNDAwNl0gPSBcIkludmFsaWRQZXJtaXNzaW9uc1wiO1xuICAgIFJQQ0Vycm9yQ29kZXNbUlBDRXJyb3JDb2Rlc1tcIkludmFsaWRDbGllbnRJZFwiXSA9IDQwMDddID0gXCJJbnZhbGlkQ2xpZW50SWRcIjtcbiAgICBSUENFcnJvckNvZGVzW1JQQ0Vycm9yQ29kZXNbXCJJbnZhbGlkT3JpZ2luXCJdID0gNDAwOF0gPSBcIkludmFsaWRPcmlnaW5cIjtcbiAgICBSUENFcnJvckNvZGVzW1JQQ0Vycm9yQ29kZXNbXCJJbnZhbGlkVG9rZW5cIl0gPSA0MDA5XSA9IFwiSW52YWxpZFRva2VuXCI7XG4gICAgUlBDRXJyb3JDb2Rlc1tSUENFcnJvckNvZGVzW1wiSW52YWxpZFVzZXJcIl0gPSA0MDEwXSA9IFwiSW52YWxpZFVzZXJcIjtcbiAgICBSUENFcnJvckNvZGVzW1JQQ0Vycm9yQ29kZXNbXCJPQXV0aDJFcnJvclwiXSA9IDUwMDBdID0gXCJPQXV0aDJFcnJvclwiO1xuICAgIFJQQ0Vycm9yQ29kZXNbUlBDRXJyb3JDb2Rlc1tcIlNlbGVjdENoYW5uZWxUaW1lZE91dFwiXSA9IDUwMDFdID0gXCJTZWxlY3RDaGFubmVsVGltZWRPdXRcIjtcbiAgICBSUENFcnJvckNvZGVzW1JQQ0Vycm9yQ29kZXNbXCJHZXRHdWlsZFRpbWVkT3V0XCJdID0gNTAwMl0gPSBcIkdldEd1aWxkVGltZWRPdXRcIjtcbiAgICBSUENFcnJvckNvZGVzW1JQQ0Vycm9yQ29kZXNbXCJTZWxlY3RWb2ljZUZvcmNlUmVxdWlyZWRcIl0gPSA1MDAzXSA9IFwiU2VsZWN0Vm9pY2VGb3JjZVJlcXVpcmVkXCI7XG4gICAgUlBDRXJyb3JDb2Rlc1tSUENFcnJvckNvZGVzW1wiQ2FwdHVyZVNob3J0Y3V0QWxyZWFkeUxpc3RlbmluZ1wiXSA9IDUwMDRdID0gXCJDYXB0dXJlU2hvcnRjdXRBbHJlYWR5TGlzdGVuaW5nXCI7XG59KShSUENFcnJvckNvZGVzID0gZXhwb3J0cy5SUENFcnJvckNvZGVzIHx8IChleHBvcnRzLlJQQ0Vycm9yQ29kZXMgPSB7fSkpO1xuLyoqXG4gKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3Mvb3Bjb2Rlcy1hbmQtc3RhdHVzLWNvZGVzI3JwYy1ycGMtY2xvc2UtZXZlbnQtY29kZXNcbiAqL1xudmFyIFJQQ0Nsb3NlRXZlbnRDb2RlcztcbihmdW5jdGlvbiAoUlBDQ2xvc2VFdmVudENvZGVzKSB7XG4gICAgUlBDQ2xvc2VFdmVudENvZGVzW1JQQ0Nsb3NlRXZlbnRDb2Rlc1tcIkludmFsaWRDbGllbnRJZFwiXSA9IDQwMDBdID0gXCJJbnZhbGlkQ2xpZW50SWRcIjtcbiAgICBSUENDbG9zZUV2ZW50Q29kZXNbUlBDQ2xvc2VFdmVudENvZGVzW1wiSW52YWxpZE9yaWdpblwiXSA9IDQwMDFdID0gXCJJbnZhbGlkT3JpZ2luXCI7XG4gICAgUlBDQ2xvc2VFdmVudENvZGVzW1JQQ0Nsb3NlRXZlbnRDb2Rlc1tcIlJhdGVMaW1pdGVkXCJdID0gNDAwMl0gPSBcIlJhdGVMaW1pdGVkXCI7XG4gICAgUlBDQ2xvc2VFdmVudENvZGVzW1JQQ0Nsb3NlRXZlbnRDb2Rlc1tcIlRva2VuUmV2b2tlZFwiXSA9IDQwMDNdID0gXCJUb2tlblJldm9rZWRcIjtcbiAgICBSUENDbG9zZUV2ZW50Q29kZXNbUlBDQ2xvc2VFdmVudENvZGVzW1wiSW52YWxpZFZlcnNpb25cIl0gPSA0MDA0XSA9IFwiSW52YWxpZFZlcnNpb25cIjtcbiAgICBSUENDbG9zZUV2ZW50Q29kZXNbUlBDQ2xvc2VFdmVudENvZGVzW1wiSW52YWxpZEVuY29kaW5nXCJdID0gNDAwNV0gPSBcIkludmFsaWRFbmNvZGluZ1wiO1xufSkoUlBDQ2xvc2VFdmVudENvZGVzID0gZXhwb3J0cy5SUENDbG9zZUV2ZW50Q29kZXMgfHwgKGV4cG9ydHMuUlBDQ2xvc2VFdmVudENvZGVzID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1vbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbW1vblwiKSwgZXhwb3J0cyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12MTAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzQ29udGV4dE1lbnVBcHBsaWNhdGlvbkNvbW1hbmRJbnRlcmFjdGlvbiA9IGV4cG9ydHMuaXNDaGF0SW5wdXRBcHBsaWNhdGlvbkNvbW1hbmRJbnRlcmFjdGlvbiA9IGV4cG9ydHMuaXNNZXNzYWdlQ29tcG9uZW50U2VsZWN0TWVudUludGVyYWN0aW9uID0gZXhwb3J0cy5pc01lc3NhZ2VDb21wb25lbnRCdXR0b25JbnRlcmFjdGlvbiA9IGV4cG9ydHMuaXNNZXNzYWdlQ29tcG9uZW50SW50ZXJhY3Rpb24gPSBleHBvcnRzLmlzSW50ZXJhY3Rpb25CdXR0b24gPSBleHBvcnRzLmlzTGlua0J1dHRvbiA9IGV4cG9ydHMuaXNNZXNzYWdlQ29tcG9uZW50R3VpbGRJbnRlcmFjdGlvbiA9IGV4cG9ydHMuaXNNZXNzYWdlQ29tcG9uZW50RE1JbnRlcmFjdGlvbiA9IGV4cG9ydHMuaXNBcHBsaWNhdGlvbkNvbW1hbmRHdWlsZEludGVyYWN0aW9uID0gZXhwb3J0cy5pc0FwcGxpY2F0aW9uQ29tbWFuZERNSW50ZXJhY3Rpb24gPSBleHBvcnRzLmlzR3VpbGRJbnRlcmFjdGlvbiA9IGV4cG9ydHMuaXNETUludGVyYWN0aW9uID0gdm9pZCAwO1xuY29uc3QgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9wYXlsb2Fkcy92MTAvaW5kZXhcIik7XG4vLyBJbnRlcmFjdGlvbnNcbi8qKlxuICogQSB0eXBlLWd1YXJkIGNoZWNrIGZvciBETSBpbnRlcmFjdGlvbnNcbiAqIEBwYXJhbSBpbnRlcmFjdGlvbiBUaGUgaW50ZXJhY3Rpb24gdG8gY2hlY2sgYWdhaW5zdFxuICogQHJldHVybnMgQSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBpbnRlcmFjdGlvbiB3YXMgcmVjZWl2ZWQgaW4gYSBETSBjaGFubmVsXG4gKi9cbmZ1bmN0aW9uIGlzRE1JbnRlcmFjdGlvbihpbnRlcmFjdGlvbikge1xuICAgIHJldHVybiBSZWZsZWN0LmhhcyhpbnRlcmFjdGlvbiwgJ3VzZXInKTtcbn1cbmV4cG9ydHMuaXNETUludGVyYWN0aW9uID0gaXNETUludGVyYWN0aW9uO1xuLyoqXG4gKiBBIHR5cGUtZ3VhcmQgY2hlY2sgZm9yIGd1aWxkIGludGVyYWN0aW9uc1xuICogQHBhcmFtIGludGVyYWN0aW9uIFRoZSBpbnRlcmFjdGlvbiB0byBjaGVjayBhZ2FpbnN0XG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGludGVyYWN0aW9uIHdhcyByZWNlaXZlZCBpbiBhIGd1aWxkXG4gKi9cbmZ1bmN0aW9uIGlzR3VpbGRJbnRlcmFjdGlvbihpbnRlcmFjdGlvbikge1xuICAgIHJldHVybiBSZWZsZWN0LmhhcyhpbnRlcmFjdGlvbiwgJ2d1aWxkX2lkJyk7XG59XG5leHBvcnRzLmlzR3VpbGRJbnRlcmFjdGlvbiA9IGlzR3VpbGRJbnRlcmFjdGlvbjtcbi8vIEFwcGxpY2F0aW9uQ29tbWFuZEludGVyYWN0aW9uc1xuLyoqXG4gKiBBIHR5cGUtZ3VhcmQgY2hlY2sgZm9yIERNIGFwcGxpY2F0aW9uIGNvbW1hbmQgaW50ZXJhY3Rpb25zXG4gKiBAcGFyYW0gaW50ZXJhY3Rpb24gVGhlIGFwcGxpY2F0aW9uIGNvbW1hbmQgaW50ZXJhY3Rpb24gdG8gY2hlY2sgYWdhaW5zdFxuICogQHJldHVybnMgQSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBhcHBsaWNhdGlvbiBjb21tYW5kIGludGVyYWN0aW9uIHdhcyByZWNlaXZlZCBpbiBhIERNIGNoYW5uZWxcbiAqL1xuZnVuY3Rpb24gaXNBcHBsaWNhdGlvbkNvbW1hbmRETUludGVyYWN0aW9uKGludGVyYWN0aW9uKSB7XG4gICAgcmV0dXJuIGlzRE1JbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG59XG5leHBvcnRzLmlzQXBwbGljYXRpb25Db21tYW5kRE1JbnRlcmFjdGlvbiA9IGlzQXBwbGljYXRpb25Db21tYW5kRE1JbnRlcmFjdGlvbjtcbi8qKlxuICogQSB0eXBlLWd1YXJkIGNoZWNrIGZvciBndWlsZCBhcHBsaWNhdGlvbiBjb21tYW5kIGludGVyYWN0aW9uc1xuICogQHBhcmFtIGludGVyYWN0aW9uIFRoZSBpbnRlcmFjdGlvbiB0byBjaGVjayBhZ2FpbnN0XG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGFwcGxpY2F0aW9uIGNvbW1hbmQgaW50ZXJhY3Rpb24gd2FzIHJlY2VpdmVkIGluIGEgZ3VpbGRcbiAqL1xuZnVuY3Rpb24gaXNBcHBsaWNhdGlvbkNvbW1hbmRHdWlsZEludGVyYWN0aW9uKGludGVyYWN0aW9uKSB7XG4gICAgcmV0dXJuIGlzR3VpbGRJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG59XG5leHBvcnRzLmlzQXBwbGljYXRpb25Db21tYW5kR3VpbGRJbnRlcmFjdGlvbiA9IGlzQXBwbGljYXRpb25Db21tYW5kR3VpbGRJbnRlcmFjdGlvbjtcbi8vIE1lc3NhZ2VDb21wb25lbnRJbnRlcmFjdGlvbnNcbi8qKlxuICogQSB0eXBlLWd1YXJkIGNoZWNrIGZvciBETSBtZXNzYWdlIGNvbXBvbmVudCBpbnRlcmFjdGlvbnNcbiAqIEBwYXJhbSBpbnRlcmFjdGlvbiBUaGUgbWVzc2FnZSBjb21wb25lbnQgaW50ZXJhY3Rpb24gdG8gY2hlY2sgYWdhaW5zdFxuICogQHJldHVybnMgQSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBtZXNzYWdlIGNvbXBvbmVudCBpbnRlcmFjdGlvbiB3YXMgcmVjZWl2ZWQgaW4gYSBETSBjaGFubmVsXG4gKi9cbmZ1bmN0aW9uIGlzTWVzc2FnZUNvbXBvbmVudERNSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pIHtcbiAgICByZXR1cm4gaXNETUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbn1cbmV4cG9ydHMuaXNNZXNzYWdlQ29tcG9uZW50RE1JbnRlcmFjdGlvbiA9IGlzTWVzc2FnZUNvbXBvbmVudERNSW50ZXJhY3Rpb247XG4vKipcbiAqIEEgdHlwZS1ndWFyZCBjaGVjayBmb3IgZ3VpbGQgbWVzc2FnZSBjb21wb25lbnQgaW50ZXJhY3Rpb25zXG4gKiBAcGFyYW0gaW50ZXJhY3Rpb24gVGhlIGludGVyYWN0aW9uIHRvIGNoZWNrIGFnYWluc3RcbiAqIEByZXR1cm5zIEEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgbWVzc2FnZSBjb21wb25lbnQgaW50ZXJhY3Rpb24gd2FzIHJlY2VpdmVkIGluIGEgZ3VpbGRcbiAqL1xuZnVuY3Rpb24gaXNNZXNzYWdlQ29tcG9uZW50R3VpbGRJbnRlcmFjdGlvbihpbnRlcmFjdGlvbikge1xuICAgIHJldHVybiBpc0d1aWxkSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xufVxuZXhwb3J0cy5pc01lc3NhZ2VDb21wb25lbnRHdWlsZEludGVyYWN0aW9uID0gaXNNZXNzYWdlQ29tcG9uZW50R3VpbGRJbnRlcmFjdGlvbjtcbi8vIEJ1dHRvbnNcbi8qKlxuICogQSB0eXBlLWd1YXJkIGNoZWNrIGZvciBidXR0b25zIHRoYXQgaGF2ZSBhIGB1cmxgIGF0dGFjaGVkIHRvIHRoZW0uXG4gKiBAcGFyYW0gY29tcG9uZW50IFRoZSBidXR0b24gdG8gY2hlY2sgYWdhaW5zdFxuICogQHJldHVybnMgQSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBidXR0b24gaGFzIGEgYHVybGAgYXR0YWNoZWQgdG8gaXRcbiAqL1xuZnVuY3Rpb24gaXNMaW5rQnV0dG9uKGNvbXBvbmVudCkge1xuICAgIHJldHVybiBjb21wb25lbnQuc3R5bGUgPT09IGluZGV4XzEuQnV0dG9uU3R5bGUuTGluaztcbn1cbmV4cG9ydHMuaXNMaW5rQnV0dG9uID0gaXNMaW5rQnV0dG9uO1xuLyoqXG4gKiBBIHR5cGUtZ3VhcmQgY2hlY2sgZm9yIGJ1dHRvbnMgdGhhdCBoYXZlIGEgYGN1c3RvbV9pZGAgYXR0YWNoZWQgdG8gdGhlbS5cbiAqIEBwYXJhbSBidXR0b24gVGhlIGJ1dHRvbiB0byBjaGVjayBhZ2FpbnN0XG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJ1dHRvbiBoYXMgYSBgY3VzdG9tX2lkYCBhdHRhY2hlZCB0byBpdFxuICovXG5mdW5jdGlvbiBpc0ludGVyYWN0aW9uQnV0dG9uKGNvbXBvbmVudCkge1xuICAgIHJldHVybiBjb21wb25lbnQuc3R5bGUgIT09IGluZGV4XzEuQnV0dG9uU3R5bGUuTGluaztcbn1cbmV4cG9ydHMuaXNJbnRlcmFjdGlvbkJ1dHRvbiA9IGlzSW50ZXJhY3Rpb25CdXR0b247XG4vLyBNZXNzYWdlIENvbXBvbmVudHNcbi8qKlxuICogQSB0eXBlLWd1YXJkIGNoZWNrIGZvciBtZXNzYWdlIGNvbXBvbmVudCBpbnRlcmFjdGlvbnNcbiAqIEBwYXJhbSBpbnRlcmFjdGlvbiBUaGUgaW50ZXJhY3Rpb24gdG8gY2hlY2sgYWdhaW5zdFxuICogQHJldHVybnMgQSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBpbnRlcmFjdGlvbiBpcyBhIG1lc3NhZ2UgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGlzTWVzc2FnZUNvbXBvbmVudEludGVyYWN0aW9uKGludGVyYWN0aW9uKSB7XG4gICAgcmV0dXJuIGludGVyYWN0aW9uLnR5cGUgPT09IGluZGV4XzEuSW50ZXJhY3Rpb25UeXBlLk1lc3NhZ2VDb21wb25lbnQ7XG59XG5leHBvcnRzLmlzTWVzc2FnZUNvbXBvbmVudEludGVyYWN0aW9uID0gaXNNZXNzYWdlQ29tcG9uZW50SW50ZXJhY3Rpb247XG4vKipcbiAqIEEgdHlwZS1ndWFyZCBjaGVjayBmb3IgYnV0dG9uIG1lc3NhZ2UgY29tcG9uZW50IGludGVyYWN0aW9uc1xuICogQHBhcmFtIGludGVyYWN0aW9uIFRoZSBtZXNzYWdlIGNvbXBvbmVudCBpbnRlcmFjdGlvbiB0byBjaGVjayBhZ2FpbnN0XG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIG1lc3NhZ2UgY29tcG9uZW50IGlzIGEgYnV0dG9uXG4gKi9cbmZ1bmN0aW9uIGlzTWVzc2FnZUNvbXBvbmVudEJ1dHRvbkludGVyYWN0aW9uKGludGVyYWN0aW9uKSB7XG4gICAgcmV0dXJuIGludGVyYWN0aW9uLmRhdGEuY29tcG9uZW50X3R5cGUgPT09IGluZGV4XzEuQ29tcG9uZW50VHlwZS5CdXR0b247XG59XG5leHBvcnRzLmlzTWVzc2FnZUNvbXBvbmVudEJ1dHRvbkludGVyYWN0aW9uID0gaXNNZXNzYWdlQ29tcG9uZW50QnV0dG9uSW50ZXJhY3Rpb247XG4vKipcbiAqIEEgdHlwZS1ndWFyZCBjaGVjayBmb3Igc2VsZWN0IG1lbnUgbWVzc2FnZSBjb21wb25lbnQgaW50ZXJhY3Rpb25zXG4gKiBAcGFyYW0gaW50ZXJhY3Rpb24gVGhlIG1lc3NhZ2UgY29tcG9uZW50IGludGVyYWN0aW9uIHRvIGNoZWNrIGFnYWluc3RcbiAqIEByZXR1cm5zIEEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgbWVzc2FnZSBjb21wb25lbnQgaXMgYSBzZWxlY3QgbWVudVxuICovXG5mdW5jdGlvbiBpc01lc3NhZ2VDb21wb25lbnRTZWxlY3RNZW51SW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pIHtcbiAgICByZXR1cm4gaW50ZXJhY3Rpb24uZGF0YS5jb21wb25lbnRfdHlwZSA9PT0gaW5kZXhfMS5Db21wb25lbnRUeXBlLlNlbGVjdE1lbnU7XG59XG5leHBvcnRzLmlzTWVzc2FnZUNvbXBvbmVudFNlbGVjdE1lbnVJbnRlcmFjdGlvbiA9IGlzTWVzc2FnZUNvbXBvbmVudFNlbGVjdE1lbnVJbnRlcmFjdGlvbjtcbi8vIEFwcGxpY2F0aW9uIENvbW1hbmRzXG4vKipcbiAqIEEgdHlwZS1ndWFyZCBjaGVjayBmb3IgY2hhdCBpbnB1dCBhcHBsaWNhdGlvbiBjb21tYW5kcy5cbiAqIEBwYXJhbSBpbnRlcmFjdGlvbiBUaGUgaW50ZXJhY3Rpb24gdG8gY2hlY2sgYWdhaW5zdFxuICogQHJldHVybnMgQSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBpbnRlcmFjdGlvbiBpcyBhIGNoYXQgaW5wdXQgYXBwbGljYXRpb24gY29tbWFuZFxuICovXG5mdW5jdGlvbiBpc0NoYXRJbnB1dEFwcGxpY2F0aW9uQ29tbWFuZEludGVyYWN0aW9uKGludGVyYWN0aW9uKSB7XG4gICAgcmV0dXJuIGludGVyYWN0aW9uLmRhdGEudHlwZSA9PT0gaW5kZXhfMS5BcHBsaWNhdGlvbkNvbW1hbmRUeXBlLkNoYXRJbnB1dDtcbn1cbmV4cG9ydHMuaXNDaGF0SW5wdXRBcHBsaWNhdGlvbkNvbW1hbmRJbnRlcmFjdGlvbiA9IGlzQ2hhdElucHV0QXBwbGljYXRpb25Db21tYW5kSW50ZXJhY3Rpb247XG4vKipcbiAqIEEgdHlwZS1ndWFyZCBjaGVjayBmb3IgY29udGV4dCBtZW51IGFwcGxpY2F0aW9uIGNvbW1hbmRzLlxuICogQHBhcmFtIGludGVyYWN0aW9uIFRoZSBpbnRlcmFjdGlvbiB0byBjaGVjayBhZ2FpbnN0XG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGludGVyYWN0aW9uIGlzIGEgY29udGV4dCBtZW51IGFwcGxpY2F0aW9uIGNvbW1hbmRcbiAqL1xuZnVuY3Rpb24gaXNDb250ZXh0TWVudUFwcGxpY2F0aW9uQ29tbWFuZEludGVyYWN0aW9uKGludGVyYWN0aW9uKSB7XG4gICAgcmV0dXJuIChpbnRlcmFjdGlvbi5kYXRhLnR5cGUgPT09IGluZGV4XzEuQXBwbGljYXRpb25Db21tYW5kVHlwZS5NZXNzYWdlIHx8IGludGVyYWN0aW9uLmRhdGEudHlwZSA9PT0gaW5kZXhfMS5BcHBsaWNhdGlvbkNvbW1hbmRUeXBlLlVzZXIpO1xufVxuZXhwb3J0cy5pc0NvbnRleHRNZW51QXBwbGljYXRpb25Db21tYW5kSW50ZXJhY3Rpb24gPSBpc0NvbnRleHRNZW51QXBwbGljYXRpb25Db21tYW5kSW50ZXJhY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD12MTAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVXRpbHMgPSB2b2lkIDA7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZ2F0ZXdheS92MTBcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2dsb2JhbHNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3BheWxvYWRzL3YxMC9pbmRleFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcmVzdC92MTAvaW5kZXhcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3JwYy92MTBcIiksIGV4cG9ydHMpO1xuZXhwb3J0cy5VdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzL3YxMFwiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXYxMC5qcy5tYXAiLCIvKiFcbiAqIFBsYXRmb3JtLmpzIHYxLjMuNlxuICogQ29weXJpZ2h0IDIwMTQtMjAyMCBCZW5qYW1pbiBUYW5cbiAqIENvcHlyaWdodCAyMDExLTIwMTMgSm9obi1EYXZpZCBEYWx0b25cbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZVxuICovXG47KGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIHZhbHVlcyBhcmUgb2YgdGhlIGxhbmd1YWdlIHR5cGUgYE9iamVjdGAuICovXG4gIHZhciBvYmplY3RUeXBlcyA9IHtcbiAgICAnZnVuY3Rpb24nOiB0cnVlLFxuICAgICdvYmplY3QnOiB0cnVlXG4gIH07XG5cbiAgLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG4gIHZhciByb290ID0gKG9iamVjdFR5cGVzW3R5cGVvZiB3aW5kb3ddICYmIHdpbmRvdykgfHwgdGhpcztcblxuICAvKiogQmFja3VwIHBvc3NpYmxlIGdsb2JhbCBvYmplY3QuICovXG4gIHZhciBvbGRSb290ID0gcm9vdDtcblxuICAvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xuICB2YXIgZnJlZUV4cG9ydHMgPSBvYmplY3RUeXBlc1t0eXBlb2YgZXhwb3J0c10gJiYgZXhwb3J0cztcblxuICAvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG4gIHZhciBmcmVlTW9kdWxlID0gb2JqZWN0VHlwZXNbdHlwZW9mIG1vZHVsZV0gJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4gIC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMgb3IgQnJvd3NlcmlmaWVkIGNvZGUgYW5kIHVzZSBpdCBhcyBgcm9vdGAuICovXG4gIHZhciBmcmVlR2xvYmFsID0gZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSAmJiB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcbiAgaWYgKGZyZWVHbG9iYWwgJiYgKGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWwuc2VsZiA9PT0gZnJlZUdsb2JhbCkpIHtcbiAgICByb290ID0gZnJlZUdsb2JhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIGFzIHRoZSBtYXhpbXVtIGxlbmd0aCBvZiBhbiBhcnJheS1saWtlIG9iamVjdC5cbiAgICogU2VlIHRoZSBbRVM2IHNwZWNdKGh0dHA6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoKVxuICAgKiBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcblxuICAvKiogUmVndWxhciBleHByZXNzaW9uIHRvIGRldGVjdCBPcGVyYS4gKi9cbiAgdmFyIHJlT3BlcmEgPSAvXFxiT3BlcmEvO1xuXG4gIC8qKiBQb3NzaWJsZSBnbG9iYWwgb2JqZWN0LiAqL1xuICB2YXIgdGhpc0JpbmRpbmcgPSB0aGlzO1xuXG4gIC8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG4gIHZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbiAgLyoqIFVzZWQgdG8gY2hlY2sgZm9yIG93biBwcm9wZXJ0aWVzIG9mIGFuIG9iamVjdC4gKi9cbiAgdmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgaW50ZXJuYWwgYFtbQ2xhc3NdXWAgb2YgdmFsdWVzLiAqL1xuICB2YXIgdG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKipcbiAgICogQ2FwaXRhbGl6ZXMgYSBzdHJpbmcgdmFsdWUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY2FwaXRhbGl6ZWQgc3RyaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSBTdHJpbmcoc3RyaW5nKTtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0byBjbGVhbiB1cCB0aGUgT1MgbmFtZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9zIFRoZSBPUyBuYW1lIHRvIGNsZWFuIHVwLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3BhdHRlcm5dIEEgYFJlZ0V4cGAgcGF0dGVybiBtYXRjaGluZyB0aGUgT1MgbmFtZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsYWJlbF0gQSBsYWJlbCBmb3IgdGhlIE9TLlxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYW51cE9TKG9zLCBwYXR0ZXJuLCBsYWJlbCkge1xuICAgIC8vIFBsYXRmb3JtIHRva2VucyBhcmUgZGVmaW5lZCBhdDpcbiAgICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1Mzc1MDMoVlMuODUpLmFzcHhcbiAgICAvLyBodHRwOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDA4MTEyMjA1Mzk1MC9odHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1Mzc1MDMoVlMuODUpLmFzcHhcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICcxMC4wJzogJzEwJyxcbiAgICAgICc2LjQnOiAgJzEwIFRlY2huaWNhbCBQcmV2aWV3JyxcbiAgICAgICc2LjMnOiAgJzguMScsXG4gICAgICAnNi4yJzogICc4JyxcbiAgICAgICc2LjEnOiAgJ1NlcnZlciAyMDA4IFIyIC8gNycsXG4gICAgICAnNi4wJzogICdTZXJ2ZXIgMjAwOCAvIFZpc3RhJyxcbiAgICAgICc1LjInOiAgJ1NlcnZlciAyMDAzIC8gWFAgNjQtYml0JyxcbiAgICAgICc1LjEnOiAgJ1hQJyxcbiAgICAgICc1LjAxJzogJzIwMDAgU1AxJyxcbiAgICAgICc1LjAnOiAgJzIwMDAnLFxuICAgICAgJzQuMCc6ICAnTlQnLFxuICAgICAgJzQuOTAnOiAnTUUnXG4gICAgfTtcbiAgICAvLyBEZXRlY3QgV2luZG93cyB2ZXJzaW9uIGZyb20gcGxhdGZvcm0gdG9rZW5zLlxuICAgIGlmIChwYXR0ZXJuICYmIGxhYmVsICYmIC9eV2luL2kudGVzdChvcykgJiYgIS9eV2luZG93cyBQaG9uZSAvaS50ZXN0KG9zKSAmJlxuICAgICAgICAoZGF0YSA9IGRhdGFbL1tcXGQuXSskLy5leGVjKG9zKV0pKSB7XG4gICAgICBvcyA9ICdXaW5kb3dzICcgKyBkYXRhO1xuICAgIH1cbiAgICAvLyBDb3JyZWN0IGNoYXJhY3RlciBjYXNlIGFuZCBjbGVhbnVwIHN0cmluZy5cbiAgICBvcyA9IFN0cmluZyhvcyk7XG5cbiAgICBpZiAocGF0dGVybiAmJiBsYWJlbCkge1xuICAgICAgb3MgPSBvcy5yZXBsYWNlKFJlZ0V4cChwYXR0ZXJuLCAnaScpLCBsYWJlbCk7XG4gICAgfVxuXG4gICAgb3MgPSBmb3JtYXQoXG4gICAgICBvcy5yZXBsYWNlKC8gY2UkL2ksICcgQ0UnKVxuICAgICAgICAucmVwbGFjZSgvXFxiaHB3L2ksICd3ZWInKVxuICAgICAgICAucmVwbGFjZSgvXFxiTWFjaW50b3NoXFxiLywgJ01hYyBPUycpXG4gICAgICAgIC5yZXBsYWNlKC9fUG93ZXJQQ1xcYi9pLCAnIE9TJylcbiAgICAgICAgLnJlcGxhY2UoL1xcYihPUyBYKSBbXiBcXGRdKy9pLCAnJDEnKVxuICAgICAgICAucmVwbGFjZSgvXFxiTWFjIChPUyBYKVxcYi8sICckMScpXG4gICAgICAgIC5yZXBsYWNlKC9cXC8oXFxkKS8sICcgJDEnKVxuICAgICAgICAucmVwbGFjZSgvXy9nLCAnLicpXG4gICAgICAgIC5yZXBsYWNlKC8oPzogQmVQQ3xbIC5dKmZjWyBcXGQuXSspJC9pLCAnJylcbiAgICAgICAgLnJlcGxhY2UoL1xcYng4NlxcLjY0XFxiL2dpLCAneDg2XzY0JylcbiAgICAgICAgLnJlcGxhY2UoL1xcYihXaW5kb3dzIFBob25lKSBPU1xcYi8sICckMScpXG4gICAgICAgIC5yZXBsYWNlKC9cXGIoQ2hyb21lIE9TIFxcdyspIFtcXGQuXStcXGIvLCAnJDEnKVxuICAgICAgICAuc3BsaXQoJyBvbiAnKVswXVxuICAgICk7XG5cbiAgICByZXR1cm4gb3M7XG4gIH1cblxuICAvKipcbiAgICogQW4gaXRlcmF0aW9uIHV0aWxpdHkgZm9yIGFycmF5cyBhbmQgb2JqZWN0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIGNhbGxlZCBwZXIgaXRlcmF0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZWFjaChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG9iamVjdCA/IG9iamVjdC5sZW5ndGggOiAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZW5ndGggPT0gJ251bWJlcicgJiYgbGVuZ3RoID4gLTEgJiYgbGVuZ3RoIDw9IG1heFNhZmVJbnRlZ2VyKSB7XG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayhvYmplY3RbaW5kZXhdLCBpbmRleCwgb2JqZWN0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yT3duKG9iamVjdCwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmltIGFuZCBjb25kaXRpb25hbGx5IGNhcGl0YWxpemUgc3RyaW5nIHZhbHVlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGZvcm1hdC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBzdHJpbmcuXG4gICAqL1xuICBmdW5jdGlvbiBmb3JtYXQoc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gdHJpbShzdHJpbmcpO1xuICAgIHJldHVybiAvXig/OndlYk9TfGkoPzpPU3xQKSkvLnRlc3Qoc3RyaW5nKVxuICAgICAgPyBzdHJpbmdcbiAgICAgIDogY2FwaXRhbGl6ZShzdHJpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMsIGV4ZWN1dGluZyB0aGUgYGNhbGxiYWNrYCBmb3IgZWFjaC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIGV4ZWN1dGVkIHBlciBvd24gcHJvcGVydHkuXG4gICAqL1xuICBmdW5jdGlvbiBmb3JPd24ob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICBjYWxsYmFjayhvYmplY3Rba2V5XSwga2V5LCBvYmplY3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpbnRlcm5hbCBgW1tDbGFzc11dYCBvZiBhIHZhbHVlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZS5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGBbW0NsYXNzXV1gLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NPZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsXG4gICAgICA/IGNhcGl0YWxpemUodmFsdWUpXG4gICAgICA6IHRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIb3N0IG9iamVjdHMgY2FuIHJldHVybiB0eXBlIHZhbHVlcyB0aGF0IGFyZSBkaWZmZXJlbnQgZnJvbSB0aGVpciBhY3R1YWxcbiAgICogZGF0YSB0eXBlLiBUaGUgb2JqZWN0cyB3ZSBhcmUgY29uY2VybmVkIHdpdGggdXN1YWxseSByZXR1cm4gbm9uLXByaW1pdGl2ZVxuICAgKiB0eXBlcyBvZiBcIm9iamVjdFwiLCBcImZ1bmN0aW9uXCIsIG9yIFwidW5rbm93blwiLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgb3duZXIgb2YgdGhlIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgVGhlIHByb3BlcnR5IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGEgbm9uLXByaW1pdGl2ZSwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNIb3N0VHlwZShvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgdmFyIHR5cGUgPSBvYmplY3QgIT0gbnVsbCA/IHR5cGVvZiBvYmplY3RbcHJvcGVydHldIDogJ251bWJlcic7XG4gICAgcmV0dXJuICEvXig/OmJvb2xlYW58bnVtYmVyfHN0cmluZ3x1bmRlZmluZWQpJC8udGVzdCh0eXBlKSAmJlxuICAgICAgKHR5cGUgPT0gJ29iamVjdCcgPyAhIW9iamVjdFtwcm9wZXJ0eV0gOiB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlcyBhIHN0cmluZyBmb3IgdXNlIGluIGEgYFJlZ0V4cGAgYnkgbWFraW5nIGh5cGhlbnMgYW5kIHNwYWNlcyBvcHRpb25hbC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHF1YWxpZnkuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBxdWFsaWZpZWQgc3RyaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gcXVhbGlmeShzdHJpbmcpIHtcbiAgICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvKFsgLV0pKD8hJCkvZywgJyQxPycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgYmFyZS1ib25lcyBgQXJyYXkjcmVkdWNlYCBsaWtlIHV0aWxpdHkgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiBjYWxsZWQgcGVyIGl0ZXJhdGlvbi5cbiAgICogQHJldHVybnMgeyp9IFRoZSBhY2N1bXVsYXRlZCByZXN1bHQuXG4gICAqL1xuICBmdW5jdGlvbiByZWR1Y2UoYXJyYXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIGFjY3VtdWxhdG9yID0gbnVsbDtcbiAgICBlYWNoKGFycmF5LCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGFjY3VtdWxhdG9yID0gY2FsbGJhY2soYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgYXJyYXkpO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UgZnJvbSBhIHN0cmluZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB0cmltbWVkIHN0cmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIHRyaW0oc3RyaW5nKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL14gK3wgKyQvZywgJycpO1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgcGxhdGZvcm0gb2JqZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBbdWE9bmF2aWdhdG9yLnVzZXJBZ2VudF0gVGhlIHVzZXIgYWdlbnQgc3RyaW5nIG9yXG4gICAqICBjb250ZXh0IG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gQSBwbGF0Zm9ybSBvYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZSh1YSkge1xuXG4gICAgLyoqIFRoZSBlbnZpcm9ubWVudCBjb250ZXh0IG9iamVjdC4gKi9cbiAgICB2YXIgY29udGV4dCA9IHJvb3Q7XG5cbiAgICAvKiogVXNlZCB0byBmbGFnIHdoZW4gYSBjdXN0b20gY29udGV4dCBpcyBwcm92aWRlZC4gKi9cbiAgICB2YXIgaXNDdXN0b21Db250ZXh0ID0gdWEgJiYgdHlwZW9mIHVhID09ICdvYmplY3QnICYmIGdldENsYXNzT2YodWEpICE9ICdTdHJpbmcnO1xuXG4gICAgLy8gSnVnZ2xlIGFyZ3VtZW50cy5cbiAgICBpZiAoaXNDdXN0b21Db250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gdWE7XG4gICAgICB1YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqIEJyb3dzZXIgbmF2aWdhdG9yIG9iamVjdC4gKi9cbiAgICB2YXIgbmF2ID0gY29udGV4dC5uYXZpZ2F0b3IgfHwge307XG5cbiAgICAvKiogQnJvd3NlciB1c2VyIGFnZW50IHN0cmluZy4gKi9cbiAgICB2YXIgdXNlckFnZW50ID0gbmF2LnVzZXJBZ2VudCB8fCAnJztcblxuICAgIHVhIHx8ICh1YSA9IHVzZXJBZ2VudCk7XG5cbiAgICAvKiogVXNlZCB0byBmbGFnIHdoZW4gYHRoaXNCaW5kaW5nYCBpcyB0aGUgW01vZHVsZVNjb3BlXS4gKi9cbiAgICB2YXIgaXNNb2R1bGVTY29wZSA9IGlzQ3VzdG9tQ29udGV4dCB8fCB0aGlzQmluZGluZyA9PSBvbGRSb290O1xuXG4gICAgLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGJyb3dzZXIgaXMgbGlrZSBDaHJvbWUuICovXG4gICAgdmFyIGxpa2VDaHJvbWUgPSBpc0N1c3RvbUNvbnRleHRcbiAgICAgID8gISFuYXYubGlrZUNocm9tZVxuICAgICAgOiAvXFxiQ2hyb21lXFxiLy50ZXN0KHVhKSAmJiAhL2ludGVybmFsfFxcbi9pLnRlc3QodG9TdHJpbmcudG9TdHJpbmcoKSk7XG5cbiAgICAvKiogSW50ZXJuYWwgYFtbQ2xhc3NdXWAgdmFsdWUgc2hvcnRjdXRzLiAqL1xuICAgIHZhciBvYmplY3RDbGFzcyA9ICdPYmplY3QnLFxuICAgICAgICBhaXJSdW50aW1lQ2xhc3MgPSBpc0N1c3RvbUNvbnRleHQgPyBvYmplY3RDbGFzcyA6ICdTY3JpcHRCcmlkZ2luZ1Byb3h5T2JqZWN0JyxcbiAgICAgICAgZW52aXJvQ2xhc3MgPSBpc0N1c3RvbUNvbnRleHQgPyBvYmplY3RDbGFzcyA6ICdFbnZpcm9ubWVudCcsXG4gICAgICAgIGphdmFDbGFzcyA9IChpc0N1c3RvbUNvbnRleHQgJiYgY29udGV4dC5qYXZhKSA/ICdKYXZhUGFja2FnZScgOiBnZXRDbGFzc09mKGNvbnRleHQuamF2YSksXG4gICAgICAgIHBoYW50b21DbGFzcyA9IGlzQ3VzdG9tQ29udGV4dCA/IG9iamVjdENsYXNzIDogJ1J1bnRpbWVPYmplY3QnO1xuXG4gICAgLyoqIERldGVjdCBKYXZhIGVudmlyb25tZW50cy4gKi9cbiAgICB2YXIgamF2YSA9IC9cXGJKYXZhLy50ZXN0KGphdmFDbGFzcykgJiYgY29udGV4dC5qYXZhO1xuXG4gICAgLyoqIERldGVjdCBSaGluby4gKi9cbiAgICB2YXIgcmhpbm8gPSBqYXZhICYmIGdldENsYXNzT2YoY29udGV4dC5lbnZpcm9ubWVudCkgPT0gZW52aXJvQ2xhc3M7XG5cbiAgICAvKiogQSBjaGFyYWN0ZXIgdG8gcmVwcmVzZW50IGFscGhhLiAqL1xuICAgIHZhciBhbHBoYSA9IGphdmEgPyAnYScgOiAnXFx1MDNiMSc7XG5cbiAgICAvKiogQSBjaGFyYWN0ZXIgdG8gcmVwcmVzZW50IGJldGEuICovXG4gICAgdmFyIGJldGEgPSBqYXZhID8gJ2InIDogJ1xcdTAzYjInO1xuXG4gICAgLyoqIEJyb3dzZXIgZG9jdW1lbnQgb2JqZWN0LiAqL1xuICAgIHZhciBkb2MgPSBjb250ZXh0LmRvY3VtZW50IHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0IE9wZXJhIGJyb3dzZXIgKFByZXN0by1iYXNlZCkuXG4gICAgICogaHR0cDovL3d3dy5ob3d0b2NyZWF0ZS5jby51ay9vcGVyYVN0dWZmL29wZXJhT2JqZWN0Lmh0bWxcbiAgICAgKiBodHRwOi8vZGV2Lm9wZXJhLmNvbS9hcnRpY2xlcy92aWV3L29wZXJhLW1pbmktd2ViLWNvbnRlbnQtYXV0aG9yaW5nLWd1aWRlbGluZXMvI29wZXJhbWluaVxuICAgICAqL1xuICAgIHZhciBvcGVyYSA9IGNvbnRleHQub3BlcmFtaW5pIHx8IGNvbnRleHQub3BlcmE7XG5cbiAgICAvKiogT3BlcmEgYFtbQ2xhc3NdXWAuICovXG4gICAgdmFyIG9wZXJhQ2xhc3MgPSByZU9wZXJhLnRlc3Qob3BlcmFDbGFzcyA9IChpc0N1c3RvbUNvbnRleHQgJiYgb3BlcmEpID8gb3BlcmFbJ1tbQ2xhc3NdXSddIDogZ2V0Q2xhc3NPZihvcGVyYSkpXG4gICAgICA/IG9wZXJhQ2xhc3NcbiAgICAgIDogKG9wZXJhID0gbnVsbCk7XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvKiogVGVtcG9yYXJ5IHZhcmlhYmxlIHVzZWQgb3ZlciB0aGUgc2NyaXB0J3MgbGlmZXRpbWUuICovXG4gICAgdmFyIGRhdGE7XG5cbiAgICAvKiogVGhlIENQVSBhcmNoaXRlY3R1cmUuICovXG4gICAgdmFyIGFyY2ggPSB1YTtcblxuICAgIC8qKiBQbGF0Zm9ybSBkZXNjcmlwdGlvbiBhcnJheS4gKi9cbiAgICB2YXIgZGVzY3JpcHRpb24gPSBbXTtcblxuICAgIC8qKiBQbGF0Zm9ybSBhbHBoYS9iZXRhIGluZGljYXRvci4gKi9cbiAgICB2YXIgcHJlcmVsZWFzZSA9IG51bGw7XG5cbiAgICAvKiogQSBmbGFnIHRvIGluZGljYXRlIHRoYXQgZW52aXJvbm1lbnQgZmVhdHVyZXMgc2hvdWxkIGJlIHVzZWQgdG8gcmVzb2x2ZSB0aGUgcGxhdGZvcm0uICovXG4gICAgdmFyIHVzZUZlYXR1cmVzID0gdWEgPT0gdXNlckFnZW50O1xuXG4gICAgLyoqIFRoZSBicm93c2VyL2Vudmlyb25tZW50IHZlcnNpb24uICovXG4gICAgdmFyIHZlcnNpb24gPSB1c2VGZWF0dXJlcyAmJiBvcGVyYSAmJiB0eXBlb2Ygb3BlcmEudmVyc2lvbiA9PSAnZnVuY3Rpb24nICYmIG9wZXJhLnZlcnNpb24oKTtcblxuICAgIC8qKiBBIGZsYWcgdG8gaW5kaWNhdGUgaWYgdGhlIE9TIGVuZHMgd2l0aCBcIi8gVmVyc2lvblwiICovXG4gICAgdmFyIGlzU3BlY2lhbENhc2VkT1M7XG5cbiAgICAvKiBEZXRlY3RhYmxlIGxheW91dCBlbmdpbmVzIChvcmRlciBpcyBpbXBvcnRhbnQpLiAqL1xuICAgIHZhciBsYXlvdXQgPSBnZXRMYXlvdXQoW1xuICAgICAgeyAnbGFiZWwnOiAnRWRnZUhUTUwnLCAncGF0dGVybic6ICdFZGdlJyB9LFxuICAgICAgJ1RyaWRlbnQnLFxuICAgICAgeyAnbGFiZWwnOiAnV2ViS2l0JywgJ3BhdHRlcm4nOiAnQXBwbGVXZWJLaXQnIH0sXG4gICAgICAnaUNhYicsXG4gICAgICAnUHJlc3RvJyxcbiAgICAgICdOZXRGcm9udCcsXG4gICAgICAnVGFzbWFuJyxcbiAgICAgICdLSFRNTCcsXG4gICAgICAnR2Vja28nXG4gICAgXSk7XG5cbiAgICAvKiBEZXRlY3RhYmxlIGJyb3dzZXIgbmFtZXMgKG9yZGVyIGlzIGltcG9ydGFudCkuICovXG4gICAgdmFyIG5hbWUgPSBnZXROYW1lKFtcbiAgICAgICdBZG9iZSBBSVInLFxuICAgICAgJ0Fyb3JhJyxcbiAgICAgICdBdmFudCBCcm93c2VyJyxcbiAgICAgICdCcmVhY2gnLFxuICAgICAgJ0NhbWlubycsXG4gICAgICAnRWxlY3Ryb24nLFxuICAgICAgJ0VwaXBoYW55JyxcbiAgICAgICdGZW5uZWMnLFxuICAgICAgJ0Zsb2NrJyxcbiAgICAgICdHYWxlb24nLFxuICAgICAgJ0dyZWVuQnJvd3NlcicsXG4gICAgICAnaUNhYicsXG4gICAgICAnSWNld2Vhc2VsJyxcbiAgICAgICdLLU1lbGVvbicsXG4gICAgICAnS29ucXVlcm9yJyxcbiAgICAgICdMdW5hc2NhcGUnLFxuICAgICAgJ01heHRob24nLFxuICAgICAgeyAnbGFiZWwnOiAnTWljcm9zb2Z0IEVkZ2UnLCAncGF0dGVybic6ICcoPzpFZGdlfEVkZ3xFZGdBfEVkZ2lPUyknIH0sXG4gICAgICAnTWlkb3JpJyxcbiAgICAgICdOb29rIEJyb3dzZXInLFxuICAgICAgJ1BhbGVNb29uJyxcbiAgICAgICdQaGFudG9tSlMnLFxuICAgICAgJ1JhdmVuJyxcbiAgICAgICdSZWtvbnEnLFxuICAgICAgJ1JvY2tNZWx0JyxcbiAgICAgIHsgJ2xhYmVsJzogJ1NhbXN1bmcgSW50ZXJuZXQnLCAncGF0dGVybic6ICdTYW1zdW5nQnJvd3NlcicgfSxcbiAgICAgICdTZWFNb25rZXknLFxuICAgICAgeyAnbGFiZWwnOiAnU2lsaycsICdwYXR0ZXJuJzogJyg/OkNsb3VkOXxTaWxrLUFjY2VsZXJhdGVkKScgfSxcbiAgICAgICdTbGVpcG5pcicsXG4gICAgICAnU2xpbUJyb3dzZXInLFxuICAgICAgeyAnbGFiZWwnOiAnU1JXYXJlIElyb24nLCAncGF0dGVybic6ICdJcm9uJyB9LFxuICAgICAgJ1N1bnJpc2UnLFxuICAgICAgJ1N3aWZ0Zm94JyxcbiAgICAgICdWaXZhbGRpJyxcbiAgICAgICdXYXRlcmZveCcsXG4gICAgICAnV2ViUG9zaXRpdmUnLFxuICAgICAgeyAnbGFiZWwnOiAnWWFuZGV4IEJyb3dzZXInLCAncGF0dGVybic6ICdZYUJyb3dzZXInIH0sXG4gICAgICB7ICdsYWJlbCc6ICdVQyBCcm93c2VyJywgJ3BhdHRlcm4nOiAnVUNCcm93c2VyJyB9LFxuICAgICAgJ09wZXJhIE1pbmknLFxuICAgICAgeyAnbGFiZWwnOiAnT3BlcmEgTWluaScsICdwYXR0ZXJuJzogJ09QaU9TJyB9LFxuICAgICAgJ09wZXJhJyxcbiAgICAgIHsgJ2xhYmVsJzogJ09wZXJhJywgJ3BhdHRlcm4nOiAnT1BSJyB9LFxuICAgICAgJ0Nocm9taXVtJyxcbiAgICAgICdDaHJvbWUnLFxuICAgICAgeyAnbGFiZWwnOiAnQ2hyb21lJywgJ3BhdHRlcm4nOiAnKD86SGVhZGxlc3NDaHJvbWUpJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnQ2hyb21lIE1vYmlsZScsICdwYXR0ZXJuJzogJyg/OkNyaU9TfENyTW8pJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnRmlyZWZveCcsICdwYXR0ZXJuJzogJyg/OkZpcmVmb3h8TWluZWZpZWxkKScgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0ZpcmVmb3ggZm9yIGlPUycsICdwYXR0ZXJuJzogJ0Z4aU9TJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnSUUnLCAncGF0dGVybic6ICdJRU1vYmlsZScgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0lFJywgJ3BhdHRlcm4nOiAnTVNJRScgfSxcbiAgICAgICdTYWZhcmknXG4gICAgXSk7XG5cbiAgICAvKiBEZXRlY3RhYmxlIHByb2R1Y3RzIChvcmRlciBpcyBpbXBvcnRhbnQpLiAqL1xuICAgIHZhciBwcm9kdWN0ID0gZ2V0UHJvZHVjdChbXG4gICAgICB7ICdsYWJlbCc6ICdCbGFja0JlcnJ5JywgJ3BhdHRlcm4nOiAnQkIxMCcgfSxcbiAgICAgICdCbGFja0JlcnJ5JyxcbiAgICAgIHsgJ2xhYmVsJzogJ0dhbGF4eSBTJywgJ3BhdHRlcm4nOiAnR1QtSTkwMDAnIH0sXG4gICAgICB7ICdsYWJlbCc6ICdHYWxheHkgUzInLCAncGF0dGVybic6ICdHVC1JOTEwMCcgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0dhbGF4eSBTMycsICdwYXR0ZXJuJzogJ0dULUk5MzAwJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnR2FsYXh5IFM0JywgJ3BhdHRlcm4nOiAnR1QtSTk1MDAnIH0sXG4gICAgICB7ICdsYWJlbCc6ICdHYWxheHkgUzUnLCAncGF0dGVybic6ICdTTS1HOTAwJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnR2FsYXh5IFM2JywgJ3BhdHRlcm4nOiAnU00tRzkyMCcgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0dhbGF4eSBTNiBFZGdlJywgJ3BhdHRlcm4nOiAnU00tRzkyNScgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0dhbGF4eSBTNycsICdwYXR0ZXJuJzogJ1NNLUc5MzAnIH0sXG4gICAgICB7ICdsYWJlbCc6ICdHYWxheHkgUzcgRWRnZScsICdwYXR0ZXJuJzogJ1NNLUc5MzUnIH0sXG4gICAgICAnR29vZ2xlIFRWJyxcbiAgICAgICdMdW1pYScsXG4gICAgICAnaVBhZCcsXG4gICAgICAnaVBvZCcsXG4gICAgICAnaVBob25lJyxcbiAgICAgICdLaW5kbGUnLFxuICAgICAgeyAnbGFiZWwnOiAnS2luZGxlIEZpcmUnLCAncGF0dGVybic6ICcoPzpDbG91ZDl8U2lsay1BY2NlbGVyYXRlZCknIH0sXG4gICAgICAnTmV4dXMnLFxuICAgICAgJ05vb2snLFxuICAgICAgJ1BsYXlCb29rJyxcbiAgICAgICdQbGF5U3RhdGlvbiBWaXRhJyxcbiAgICAgICdQbGF5U3RhdGlvbicsXG4gICAgICAnVG91Y2hQYWQnLFxuICAgICAgJ1RyYW5zZm9ybWVyJyxcbiAgICAgIHsgJ2xhYmVsJzogJ1dpaSBVJywgJ3BhdHRlcm4nOiAnV2lpVScgfSxcbiAgICAgICdXaWknLFxuICAgICAgJ1hib3ggT25lJyxcbiAgICAgIHsgJ2xhYmVsJzogJ1hib3ggMzYwJywgJ3BhdHRlcm4nOiAnWGJveCcgfSxcbiAgICAgICdYb29tJ1xuICAgIF0pO1xuXG4gICAgLyogRGV0ZWN0YWJsZSBtYW51ZmFjdHVyZXJzLiAqL1xuICAgIHZhciBtYW51ZmFjdHVyZXIgPSBnZXRNYW51ZmFjdHVyZXIoe1xuICAgICAgJ0FwcGxlJzogeyAnaVBhZCc6IDEsICdpUGhvbmUnOiAxLCAnaVBvZCc6IDEgfSxcbiAgICAgICdBbGNhdGVsJzoge30sXG4gICAgICAnQXJjaG9zJzoge30sXG4gICAgICAnQW1hem9uJzogeyAnS2luZGxlJzogMSwgJ0tpbmRsZSBGaXJlJzogMSB9LFxuICAgICAgJ0FzdXMnOiB7ICdUcmFuc2Zvcm1lcic6IDEgfSxcbiAgICAgICdCYXJuZXMgJiBOb2JsZSc6IHsgJ05vb2snOiAxIH0sXG4gICAgICAnQmxhY2tCZXJyeSc6IHsgJ1BsYXlCb29rJzogMSB9LFxuICAgICAgJ0dvb2dsZSc6IHsgJ0dvb2dsZSBUVic6IDEsICdOZXh1cyc6IDEgfSxcbiAgICAgICdIUCc6IHsgJ1RvdWNoUGFkJzogMSB9LFxuICAgICAgJ0hUQyc6IHt9LFxuICAgICAgJ0h1YXdlaSc6IHt9LFxuICAgICAgJ0xlbm92byc6IHt9LFxuICAgICAgJ0xHJzoge30sXG4gICAgICAnTWljcm9zb2Z0JzogeyAnWGJveCc6IDEsICdYYm94IE9uZSc6IDEgfSxcbiAgICAgICdNb3Rvcm9sYSc6IHsgJ1hvb20nOiAxIH0sXG4gICAgICAnTmludGVuZG8nOiB7ICdXaWkgVSc6IDEsICAnV2lpJzogMSB9LFxuICAgICAgJ05va2lhJzogeyAnTHVtaWEnOiAxIH0sXG4gICAgICAnT3Bwbyc6IHt9LFxuICAgICAgJ1NhbXN1bmcnOiB7ICdHYWxheHkgUyc6IDEsICdHYWxheHkgUzInOiAxLCAnR2FsYXh5IFMzJzogMSwgJ0dhbGF4eSBTNCc6IDEgfSxcbiAgICAgICdTb255JzogeyAnUGxheVN0YXRpb24nOiAxLCAnUGxheVN0YXRpb24gVml0YSc6IDEgfSxcbiAgICAgICdYaWFvbWknOiB7ICdNaSc6IDEsICdSZWRtaSc6IDEgfVxuICAgIH0pO1xuXG4gICAgLyogRGV0ZWN0YWJsZSBvcGVyYXRpbmcgc3lzdGVtcyAob3JkZXIgaXMgaW1wb3J0YW50KS4gKi9cbiAgICB2YXIgb3MgPSBnZXRPUyhbXG4gICAgICAnV2luZG93cyBQaG9uZScsXG4gICAgICAnS2FpT1MnLFxuICAgICAgJ0FuZHJvaWQnLFxuICAgICAgJ0NlbnRPUycsXG4gICAgICB7ICdsYWJlbCc6ICdDaHJvbWUgT1MnLCAncGF0dGVybic6ICdDck9TJyB9LFxuICAgICAgJ0RlYmlhbicsXG4gICAgICB7ICdsYWJlbCc6ICdEcmFnb25GbHkgQlNEJywgJ3BhdHRlcm4nOiAnRHJhZ29uRmx5JyB9LFxuICAgICAgJ0ZlZG9yYScsXG4gICAgICAnRnJlZUJTRCcsXG4gICAgICAnR2VudG9vJyxcbiAgICAgICdIYWlrdScsXG4gICAgICAnS3VidW50dScsXG4gICAgICAnTGludXggTWludCcsXG4gICAgICAnT3BlbkJTRCcsXG4gICAgICAnUmVkIEhhdCcsXG4gICAgICAnU3VTRScsXG4gICAgICAnVWJ1bnR1JyxcbiAgICAgICdYdWJ1bnR1JyxcbiAgICAgICdDeWd3aW4nLFxuICAgICAgJ1N5bWJpYW4gT1MnLFxuICAgICAgJ2hwd09TJyxcbiAgICAgICd3ZWJPUyAnLFxuICAgICAgJ3dlYk9TJyxcbiAgICAgICdUYWJsZXQgT1MnLFxuICAgICAgJ1RpemVuJyxcbiAgICAgICdMaW51eCcsXG4gICAgICAnTWFjIE9TIFgnLFxuICAgICAgJ01hY2ludG9zaCcsXG4gICAgICAnTWFjJyxcbiAgICAgICdXaW5kb3dzIDk4OycsXG4gICAgICAnV2luZG93cyAnXG4gICAgXSk7XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvKipcbiAgICAgKiBQaWNrcyB0aGUgbGF5b3V0IGVuZ2luZSBmcm9tIGFuIGFycmF5IG9mIGd1ZXNzZXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGd1ZXNzZXMgQW4gYXJyYXkgb2YgZ3Vlc3Nlcy5cbiAgICAgKiBAcmV0dXJucyB7bnVsbHxzdHJpbmd9IFRoZSBkZXRlY3RlZCBsYXlvdXQgZW5naW5lLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldExheW91dChndWVzc2VzKSB7XG4gICAgICByZXR1cm4gcmVkdWNlKGd1ZXNzZXMsIGZ1bmN0aW9uKHJlc3VsdCwgZ3Vlc3MpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8fCBSZWdFeHAoJ1xcXFxiJyArIChcbiAgICAgICAgICBndWVzcy5wYXR0ZXJuIHx8IHF1YWxpZnkoZ3Vlc3MpXG4gICAgICAgICkgKyAnXFxcXGInLCAnaScpLmV4ZWModWEpICYmIChndWVzcy5sYWJlbCB8fCBndWVzcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQaWNrcyB0aGUgbWFudWZhY3R1cmVyIGZyb20gYW4gYXJyYXkgb2YgZ3Vlc3Nlcy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gZ3Vlc3NlcyBBbiBvYmplY3Qgb2YgZ3Vlc3Nlcy5cbiAgICAgKiBAcmV0dXJucyB7bnVsbHxzdHJpbmd9IFRoZSBkZXRlY3RlZCBtYW51ZmFjdHVyZXIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0TWFudWZhY3R1cmVyKGd1ZXNzZXMpIHtcbiAgICAgIHJldHVybiByZWR1Y2UoZ3Vlc3NlcywgZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgICAgIC8vIExvb2t1cCB0aGUgbWFudWZhY3R1cmVyIGJ5IHByb2R1Y3Qgb3Igc2NhbiB0aGUgVUEgZm9yIHRoZSBtYW51ZmFjdHVyZXIuXG4gICAgICAgIHJldHVybiByZXN1bHQgfHwgKFxuICAgICAgICAgIHZhbHVlW3Byb2R1Y3RdIHx8XG4gICAgICAgICAgdmFsdWVbL15bYS16XSsoPzogK1thLXpdK1xcYikqL2kuZXhlYyhwcm9kdWN0KV0gfHxcbiAgICAgICAgICBSZWdFeHAoJ1xcXFxiJyArIHF1YWxpZnkoa2V5KSArICcoPzpcXFxcYnxcXFxcdypcXFxcZCknLCAnaScpLmV4ZWModWEpXG4gICAgICAgICkgJiYga2V5O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGlja3MgdGhlIGJyb3dzZXIgbmFtZSBmcm9tIGFuIGFycmF5IG9mIGd1ZXNzZXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGd1ZXNzZXMgQW4gYXJyYXkgb2YgZ3Vlc3Nlcy5cbiAgICAgKiBAcmV0dXJucyB7bnVsbHxzdHJpbmd9IFRoZSBkZXRlY3RlZCBicm93c2VyIG5hbWUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0TmFtZShndWVzc2VzKSB7XG4gICAgICByZXR1cm4gcmVkdWNlKGd1ZXNzZXMsIGZ1bmN0aW9uKHJlc3VsdCwgZ3Vlc3MpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8fCBSZWdFeHAoJ1xcXFxiJyArIChcbiAgICAgICAgICBndWVzcy5wYXR0ZXJuIHx8IHF1YWxpZnkoZ3Vlc3MpXG4gICAgICAgICkgKyAnXFxcXGInLCAnaScpLmV4ZWModWEpICYmIChndWVzcy5sYWJlbCB8fCBndWVzcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQaWNrcyB0aGUgT1MgbmFtZSBmcm9tIGFuIGFycmF5IG9mIGd1ZXNzZXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGd1ZXNzZXMgQW4gYXJyYXkgb2YgZ3Vlc3Nlcy5cbiAgICAgKiBAcmV0dXJucyB7bnVsbHxzdHJpbmd9IFRoZSBkZXRlY3RlZCBPUyBuYW1lLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE9TKGd1ZXNzZXMpIHtcbiAgICAgIHJldHVybiByZWR1Y2UoZ3Vlc3NlcywgZnVuY3Rpb24ocmVzdWx0LCBndWVzcykge1xuICAgICAgICB2YXIgcGF0dGVybiA9IGd1ZXNzLnBhdHRlcm4gfHwgcXVhbGlmeShndWVzcyk7XG4gICAgICAgIGlmICghcmVzdWx0ICYmIChyZXN1bHQgPVxuICAgICAgICAgICAgICBSZWdFeHAoJ1xcXFxiJyArIHBhdHRlcm4gKyAnKD86L1tcXFxcZC5dK3xbIFxcXFx3Ll0qKScsICdpJykuZXhlYyh1YSlcbiAgICAgICAgICAgICkpIHtcbiAgICAgICAgICByZXN1bHQgPSBjbGVhbnVwT1MocmVzdWx0LCBwYXR0ZXJuLCBndWVzcy5sYWJlbCB8fCBndWVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBpY2tzIHRoZSBwcm9kdWN0IG5hbWUgZnJvbSBhbiBhcnJheSBvZiBndWVzc2VzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBndWVzc2VzIEFuIGFycmF5IG9mIGd1ZXNzZXMuXG4gICAgICogQHJldHVybnMge251bGx8c3RyaW5nfSBUaGUgZGV0ZWN0ZWQgcHJvZHVjdCBuYW1lLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFByb2R1Y3QoZ3Vlc3Nlcykge1xuICAgICAgcmV0dXJuIHJlZHVjZShndWVzc2VzLCBmdW5jdGlvbihyZXN1bHQsIGd1ZXNzKSB7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gZ3Vlc3MucGF0dGVybiB8fCBxdWFsaWZ5KGd1ZXNzKTtcbiAgICAgICAgaWYgKCFyZXN1bHQgJiYgKHJlc3VsdCA9XG4gICAgICAgICAgICAgIFJlZ0V4cCgnXFxcXGInICsgcGF0dGVybiArICcgKlxcXFxkK1suXFxcXHdfXSonLCAnaScpLmV4ZWModWEpIHx8XG4gICAgICAgICAgICAgIFJlZ0V4cCgnXFxcXGInICsgcGF0dGVybiArICcgKlxcXFx3Ky1bXFxcXHddKicsICdpJykuZXhlYyh1YSkgfHxcbiAgICAgICAgICAgICAgUmVnRXhwKCdcXFxcYicgKyBwYXR0ZXJuICsgJyg/OjsgKig/OlthLXpdK1tfLV0pP1thLXpdK1xcXFxkK3xbXiAoKTstXSopJywgJ2knKS5leGVjKHVhKVxuICAgICAgICAgICAgKSkge1xuICAgICAgICAgIC8vIFNwbGl0IGJ5IGZvcndhcmQgc2xhc2ggYW5kIGFwcGVuZCBwcm9kdWN0IHZlcnNpb24gaWYgbmVlZGVkLlxuICAgICAgICAgIGlmICgocmVzdWx0ID0gU3RyaW5nKChndWVzcy5sYWJlbCAmJiAhUmVnRXhwKHBhdHRlcm4sICdpJykudGVzdChndWVzcy5sYWJlbCkpID8gZ3Vlc3MubGFiZWwgOiByZXN1bHQpLnNwbGl0KCcvJykpWzFdICYmICEvW1xcZC5dKy8udGVzdChyZXN1bHRbMF0pKSB7XG4gICAgICAgICAgICByZXN1bHRbMF0gKz0gJyAnICsgcmVzdWx0WzFdO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDb3JyZWN0IGNoYXJhY3RlciBjYXNlIGFuZCBjbGVhbnVwIHN0cmluZy5cbiAgICAgICAgICBndWVzcyA9IGd1ZXNzLmxhYmVsIHx8IGd1ZXNzO1xuICAgICAgICAgIHJlc3VsdCA9IGZvcm1hdChyZXN1bHRbMF1cbiAgICAgICAgICAgIC5yZXBsYWNlKFJlZ0V4cChwYXR0ZXJuLCAnaScpLCBndWVzcylcbiAgICAgICAgICAgIC5yZXBsYWNlKFJlZ0V4cCgnOyAqKD86JyArIGd1ZXNzICsgJ1tfLV0pPycsICdpJyksICcgJylcbiAgICAgICAgICAgIC5yZXBsYWNlKFJlZ0V4cCgnKCcgKyBndWVzcyArICcpWy1fLl0/KFxcXFx3KScsICdpJyksICckMSAkMicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgdGhlIHZlcnNpb24gdXNpbmcgYW4gYXJyYXkgb2YgVUEgcGF0dGVybnMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdHRlcm5zIEFuIGFycmF5IG9mIFVBIHBhdHRlcm5zLlxuICAgICAqIEByZXR1cm5zIHtudWxsfHN0cmluZ30gVGhlIGRldGVjdGVkIHZlcnNpb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0VmVyc2lvbihwYXR0ZXJucykge1xuICAgICAgcmV0dXJuIHJlZHVjZShwYXR0ZXJucywgZnVuY3Rpb24ocmVzdWx0LCBwYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgfHwgKFJlZ0V4cChwYXR0ZXJuICtcbiAgICAgICAgICAnKD86LVtcXFxcZC5dKy98KD86IGZvciBbXFxcXHctXSspP1sgLy1dKShbXFxcXGQuXStbXiAoKTsvXy1dKiknLCAnaScpLmV4ZWModWEpIHx8IDApWzFdIHx8IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGBwbGF0Zm9ybS5kZXNjcmlwdGlvbmAgd2hlbiB0aGUgcGxhdGZvcm0gb2JqZWN0IGlzIGNvZXJjZWQgdG8gYSBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBAbmFtZSB0b1N0cmluZ1xuICAgICAqIEBtZW1iZXJPZiBwbGF0Zm9ybVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgYHBsYXRmb3JtLmRlc2NyaXB0aW9uYCBpZiBhdmFpbGFibGUsIGVsc2UgYW4gZW1wdHkgc3RyaW5nLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRvU3RyaW5nUGxhdGZvcm0oKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICB9XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvLyBDb252ZXJ0IGxheW91dCB0byBhbiBhcnJheSBzbyB3ZSBjYW4gYWRkIGV4dHJhIGRldGFpbHMuXG4gICAgbGF5b3V0ICYmIChsYXlvdXQgPSBbbGF5b3V0XSk7XG5cbiAgICAvLyBEZXRlY3QgQW5kcm9pZCBwcm9kdWN0cy5cbiAgICAvLyBCcm93c2VycyBvbiBBbmRyb2lkIGRldmljZXMgdHlwaWNhbGx5IHByb3ZpZGUgdGhlaXIgcHJvZHVjdCBJRFMgYWZ0ZXIgXCJBbmRyb2lkO1wiXG4gICAgLy8gdXAgdG8gXCJCdWlsZFwiIG9yIFwiKSBBcHBsZVdlYktpdFwiLlxuICAgIC8vIEV4YW1wbGU6XG4gICAgLy8gXCJNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgOC4xLjA7IE1vdG8gRyAoNSkgUGx1cykgQXBwbGVXZWJLaXQvNTM3LjM2XG4gICAgLy8gKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNzAuMC4zNTM4LjgwIE1vYmlsZSBTYWZhcmkvNTM3LjM2XCJcbiAgICBpZiAoL1xcYkFuZHJvaWRcXGIvLnRlc3Qob3MpICYmICFwcm9kdWN0ICYmXG4gICAgICAgIChkYXRhID0gL1xcYkFuZHJvaWRbXjtdKjsoLio/KSg/OkJ1aWxkfFxcKSBBcHBsZVdlYktpdClcXGIvaS5leGVjKHVhKSkpIHtcbiAgICAgIHByb2R1Y3QgPSB0cmltKGRhdGFbMV0pXG4gICAgICAgIC8vIFJlcGxhY2UgYW55IGxhbmd1YWdlIGNvZGVzIChlZy4gXCJlbi1VU1wiKS5cbiAgICAgICAgLnJlcGxhY2UoL15bYS16XXsyfS1bYS16XXsyfTtcXHMqL2ksICcnKVxuICAgICAgICB8fCBudWxsO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgcHJvZHVjdCBuYW1lcyB0aGF0IGNvbnRhaW4gdGhlaXIgbWFudWZhY3R1cmVyJ3MgbmFtZS5cbiAgICBpZiAobWFudWZhY3R1cmVyICYmICFwcm9kdWN0KSB7XG4gICAgICBwcm9kdWN0ID0gZ2V0UHJvZHVjdChbbWFudWZhY3R1cmVyXSk7XG4gICAgfSBlbHNlIGlmIChtYW51ZmFjdHVyZXIgJiYgcHJvZHVjdCkge1xuICAgICAgcHJvZHVjdCA9IHByb2R1Y3RcbiAgICAgICAgLnJlcGxhY2UoUmVnRXhwKCdeKCcgKyBxdWFsaWZ5KG1hbnVmYWN0dXJlcikgKyAnKVstXy5cXFxcc10nLCAnaScpLCBtYW51ZmFjdHVyZXIgKyAnICcpXG4gICAgICAgIC5yZXBsYWNlKFJlZ0V4cCgnXignICsgcXVhbGlmeShtYW51ZmFjdHVyZXIpICsgJylbLV8uXT8oXFxcXHcpJywgJ2knKSwgbWFudWZhY3R1cmVyICsgJyAkMicpO1xuICAgIH1cbiAgICAvLyBDbGVhbiB1cCBHb29nbGUgVFYuXG4gICAgaWYgKChkYXRhID0gL1xcYkdvb2dsZSBUVlxcYi8uZXhlYyhwcm9kdWN0KSkpIHtcbiAgICAgIHByb2R1Y3QgPSBkYXRhWzBdO1xuICAgIH1cbiAgICAvLyBEZXRlY3Qgc2ltdWxhdG9ycy5cbiAgICBpZiAoL1xcYlNpbXVsYXRvclxcYi9pLnRlc3QodWEpKSB7XG4gICAgICBwcm9kdWN0ID0gKHByb2R1Y3QgPyBwcm9kdWN0ICsgJyAnIDogJycpICsgJ1NpbXVsYXRvcic7XG4gICAgfVxuICAgIC8vIERldGVjdCBPcGVyYSBNaW5pIDgrIHJ1bm5pbmcgaW4gVHVyYm8vVW5jb21wcmVzc2VkIG1vZGUgb24gaU9TLlxuICAgIGlmIChuYW1lID09ICdPcGVyYSBNaW5pJyAmJiAvXFxiT1BpT1NcXGIvLnRlc3QodWEpKSB7XG4gICAgICBkZXNjcmlwdGlvbi5wdXNoKCdydW5uaW5nIGluIFR1cmJvL1VuY29tcHJlc3NlZCBtb2RlJyk7XG4gICAgfVxuICAgIC8vIERldGVjdCBJRSBNb2JpbGUgMTEuXG4gICAgaWYgKG5hbWUgPT0gJ0lFJyAmJiAvXFxibGlrZSBpUGhvbmUgT1NcXGIvLnRlc3QodWEpKSB7XG4gICAgICBkYXRhID0gcGFyc2UodWEucmVwbGFjZSgvbGlrZSBpUGhvbmUgT1MvLCAnJykpO1xuICAgICAgbWFudWZhY3R1cmVyID0gZGF0YS5tYW51ZmFjdHVyZXI7XG4gICAgICBwcm9kdWN0ID0gZGF0YS5wcm9kdWN0O1xuICAgIH1cbiAgICAvLyBEZXRlY3QgaU9TLlxuICAgIGVsc2UgaWYgKC9eaVAvLnRlc3QocHJvZHVjdCkpIHtcbiAgICAgIG5hbWUgfHwgKG5hbWUgPSAnU2FmYXJpJyk7XG4gICAgICBvcyA9ICdpT1MnICsgKChkYXRhID0gLyBPUyAoW1xcZF9dKykvaS5leGVjKHVhKSlcbiAgICAgICAgPyAnICcgKyBkYXRhWzFdLnJlcGxhY2UoL18vZywgJy4nKVxuICAgICAgICA6ICcnKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IEt1YnVudHUuXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnS29ucXVlcm9yJyAmJiAvXkxpbnV4XFxiL2kudGVzdChvcykpIHtcbiAgICAgIG9zID0gJ0t1YnVudHUnO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgQW5kcm9pZCBicm93c2Vycy5cbiAgICBlbHNlIGlmICgobWFudWZhY3R1cmVyICYmIG1hbnVmYWN0dXJlciAhPSAnR29vZ2xlJyAmJlxuICAgICAgICAoKC9DaHJvbWUvLnRlc3QobmFtZSkgJiYgIS9cXGJNb2JpbGUgU2FmYXJpXFxiL2kudGVzdCh1YSkpIHx8IC9cXGJWaXRhXFxiLy50ZXN0KHByb2R1Y3QpKSkgfHxcbiAgICAgICAgKC9cXGJBbmRyb2lkXFxiLy50ZXN0KG9zKSAmJiAvXkNocm9tZS8udGVzdChuYW1lKSAmJiAvXFxiVmVyc2lvblxcLy9pLnRlc3QodWEpKSkge1xuICAgICAgbmFtZSA9ICdBbmRyb2lkIEJyb3dzZXInO1xuICAgICAgb3MgPSAvXFxiQW5kcm9pZFxcYi8udGVzdChvcykgPyBvcyA6ICdBbmRyb2lkJztcbiAgICB9XG4gICAgLy8gRGV0ZWN0IFNpbGsgZGVza3RvcC9hY2NlbGVyYXRlZCBtb2Rlcy5cbiAgICBlbHNlIGlmIChuYW1lID09ICdTaWxrJykge1xuICAgICAgaWYgKCEvXFxiTW9iaS9pLnRlc3QodWEpKSB7XG4gICAgICAgIG9zID0gJ0FuZHJvaWQnO1xuICAgICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdkZXNrdG9wIG1vZGUnKTtcbiAgICAgIH1cbiAgICAgIGlmICgvQWNjZWxlcmF0ZWQgKj0gKnRydWUvaS50ZXN0KHVhKSkge1xuICAgICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdhY2NlbGVyYXRlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBEZXRlY3QgVUMgQnJvd3NlciBzcGVlZCBtb2RlLlxuICAgIGVsc2UgaWYgKG5hbWUgPT0gJ1VDIEJyb3dzZXInICYmIC9cXGJVQ1dFQlxcYi8udGVzdCh1YSkpIHtcbiAgICAgIGRlc2NyaXB0aW9uLnB1c2goJ3NwZWVkIG1vZGUnKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IFBhbGVNb29uIGlkZW50aWZ5aW5nIGFzIEZpcmVmb3guXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnUGFsZU1vb24nICYmIChkYXRhID0gL1xcYkZpcmVmb3hcXC8oW1xcZC5dKylcXGIvLmV4ZWModWEpKSkge1xuICAgICAgZGVzY3JpcHRpb24ucHVzaCgnaWRlbnRpZnlpbmcgYXMgRmlyZWZveCAnICsgZGF0YVsxXSk7XG4gICAgfVxuICAgIC8vIERldGVjdCBGaXJlZm94IE9TIGFuZCBwcm9kdWN0cyBydW5uaW5nIEZpcmVmb3guXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnRmlyZWZveCcgJiYgKGRhdGEgPSAvXFxiKE1vYmlsZXxUYWJsZXR8VFYpXFxiL2kuZXhlYyh1YSkpKSB7XG4gICAgICBvcyB8fCAob3MgPSAnRmlyZWZveCBPUycpO1xuICAgICAgcHJvZHVjdCB8fCAocHJvZHVjdCA9IGRhdGFbMV0pO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgZmFsc2UgcG9zaXRpdmVzIGZvciBGaXJlZm94L1NhZmFyaS5cbiAgICBlbHNlIGlmICghbmFtZSB8fCAoZGF0YSA9ICEvXFxiTWluZWZpZWxkXFxiL2kudGVzdCh1YSkgJiYgL1xcYig/OkZpcmVmb3h8U2FmYXJpKVxcYi8uZXhlYyhuYW1lKSkpIHtcbiAgICAgIC8vIEVzY2FwZSB0aGUgYC9gIGZvciBGaXJlZm94IDEuXG4gICAgICBpZiAobmFtZSAmJiAhcHJvZHVjdCAmJiAvW1xcLyxdfF5bXihdKz9cXCkvLnRlc3QodWEuc2xpY2UodWEuaW5kZXhPZihkYXRhICsgJy8nKSArIDgpKSkge1xuICAgICAgICAvLyBDbGVhciBuYW1lIG9mIGZhbHNlIHBvc2l0aXZlcy5cbiAgICAgICAgbmFtZSA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBSZWFzc2lnbiBhIGdlbmVyaWMgbmFtZS5cbiAgICAgIGlmICgoZGF0YSA9IHByb2R1Y3QgfHwgbWFudWZhY3R1cmVyIHx8IG9zKSAmJlxuICAgICAgICAgIChwcm9kdWN0IHx8IG1hbnVmYWN0dXJlciB8fCAvXFxiKD86QW5kcm9pZHxTeW1iaWFuIE9TfFRhYmxldCBPU3x3ZWJPUylcXGIvLnRlc3Qob3MpKSkge1xuICAgICAgICBuYW1lID0gL1thLXpdKyg/OiBIYXQpPy9pLmV4ZWMoL1xcYkFuZHJvaWRcXGIvLnRlc3Qob3MpID8gb3MgOiBkYXRhKSArICcgQnJvd3Nlcic7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCBDaHJvbWUgdmVyc2lvbiB0byBkZXNjcmlwdGlvbiBmb3IgRWxlY3Ryb24uXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnRWxlY3Ryb24nICYmIChkYXRhID0gKC9cXGJDaHJvbWVcXC8oW1xcZC5dKylcXGIvLmV4ZWModWEpIHx8IDApWzFdKSkge1xuICAgICAgZGVzY3JpcHRpb24ucHVzaCgnQ2hyb21pdW0gJyArIGRhdGEpO1xuICAgIH1cbiAgICAvLyBEZXRlY3Qgbm9uLU9wZXJhIChQcmVzdG8tYmFzZWQpIHZlcnNpb25zIChvcmRlciBpcyBpbXBvcnRhbnQpLlxuICAgIGlmICghdmVyc2lvbikge1xuICAgICAgdmVyc2lvbiA9IGdldFZlcnNpb24oW1xuICAgICAgICAnKD86Q2xvdWQ5fENyaU9TfENyTW98RWRnZXxFZGd8RWRnQXxFZGdpT1N8RnhpT1N8SGVhZGxlc3NDaHJvbWV8SUVNb2JpbGV8SXJvbnxPcGVyYSA/TWluaXxPUGlPU3xPUFJ8UmF2ZW58U2Ftc3VuZ0Jyb3dzZXJ8U2lsayg/IS9bXFxcXGQuXSskKXxVQ0Jyb3dzZXJ8WWFCcm93c2VyKScsXG4gICAgICAgICdWZXJzaW9uJyxcbiAgICAgICAgcXVhbGlmeShuYW1lKSxcbiAgICAgICAgJyg/OkZpcmVmb3h8TWluZWZpZWxkfE5ldEZyb250KSdcbiAgICAgIF0pO1xuICAgIH1cbiAgICAvLyBEZXRlY3Qgc3R1YmJvcm4gbGF5b3V0IGVuZ2luZXMuXG4gICAgaWYgKChkYXRhID1cbiAgICAgICAgICBsYXlvdXQgPT0gJ2lDYWInICYmIHBhcnNlRmxvYXQodmVyc2lvbikgPiAzICYmICdXZWJLaXQnIHx8XG4gICAgICAgICAgL1xcYk9wZXJhXFxiLy50ZXN0KG5hbWUpICYmICgvXFxiT1BSXFxiLy50ZXN0KHVhKSA/ICdCbGluaycgOiAnUHJlc3RvJykgfHxcbiAgICAgICAgICAvXFxiKD86TWlkb3JpfE5vb2t8U2FmYXJpKVxcYi9pLnRlc3QodWEpICYmICEvXig/OlRyaWRlbnR8RWRnZUhUTUwpJC8udGVzdChsYXlvdXQpICYmICdXZWJLaXQnIHx8XG4gICAgICAgICAgIWxheW91dCAmJiAvXFxiTVNJRVxcYi9pLnRlc3QodWEpICYmIChvcyA9PSAnTWFjIE9TJyA/ICdUYXNtYW4nIDogJ1RyaWRlbnQnKSB8fFxuICAgICAgICAgIGxheW91dCA9PSAnV2ViS2l0JyAmJiAvXFxiUGxheVN0YXRpb25cXGIoPyEgVml0YVxcYikvaS50ZXN0KG5hbWUpICYmICdOZXRGcm9udCdcbiAgICAgICAgKSkge1xuICAgICAgbGF5b3V0ID0gW2RhdGFdO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgV2luZG93cyBQaG9uZSA3IGRlc2t0b3AgbW9kZS5cbiAgICBpZiAobmFtZSA9PSAnSUUnICYmIChkYXRhID0gKC87ICooPzpYQkxXUHxadW5lV1ApKFxcZCspL2kuZXhlYyh1YSkgfHwgMClbMV0pKSB7XG4gICAgICBuYW1lICs9ICcgTW9iaWxlJztcbiAgICAgIG9zID0gJ1dpbmRvd3MgUGhvbmUgJyArICgvXFwrJC8udGVzdChkYXRhKSA/IGRhdGEgOiBkYXRhICsgJy54Jyk7XG4gICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdkZXNrdG9wIG1vZGUnKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IFdpbmRvd3MgUGhvbmUgOC54IGRlc2t0b3AgbW9kZS5cbiAgICBlbHNlIGlmICgvXFxiV1BEZXNrdG9wXFxiL2kudGVzdCh1YSkpIHtcbiAgICAgIG5hbWUgPSAnSUUgTW9iaWxlJztcbiAgICAgIG9zID0gJ1dpbmRvd3MgUGhvbmUgOC54JztcbiAgICAgIGRlc2NyaXB0aW9uLnVuc2hpZnQoJ2Rlc2t0b3AgbW9kZScpO1xuICAgICAgdmVyc2lvbiB8fCAodmVyc2lvbiA9ICgvXFxicnY6KFtcXGQuXSspLy5leGVjKHVhKSB8fCAwKVsxXSk7XG4gICAgfVxuICAgIC8vIERldGVjdCBJRSAxMSBpZGVudGlmeWluZyBhcyBvdGhlciBicm93c2Vycy5cbiAgICBlbHNlIGlmIChuYW1lICE9ICdJRScgJiYgbGF5b3V0ID09ICdUcmlkZW50JyAmJiAoZGF0YSA9IC9cXGJydjooW1xcZC5dKykvLmV4ZWModWEpKSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgZGVzY3JpcHRpb24ucHVzaCgnaWRlbnRpZnlpbmcgYXMgJyArIG5hbWUgKyAodmVyc2lvbiA/ICcgJyArIHZlcnNpb24gOiAnJykpO1xuICAgICAgfVxuICAgICAgbmFtZSA9ICdJRSc7XG4gICAgICB2ZXJzaW9uID0gZGF0YVsxXTtcbiAgICB9XG4gICAgLy8gTGV2ZXJhZ2UgZW52aXJvbm1lbnQgZmVhdHVyZXMuXG4gICAgaWYgKHVzZUZlYXR1cmVzKSB7XG4gICAgICAvLyBEZXRlY3Qgc2VydmVyLXNpZGUgZW52aXJvbm1lbnRzLlxuICAgICAgLy8gUmhpbm8gaGFzIGEgZ2xvYmFsIGZ1bmN0aW9uIHdoaWxlIG90aGVycyBoYXZlIGEgZ2xvYmFsIG9iamVjdC5cbiAgICAgIGlmIChpc0hvc3RUeXBlKGNvbnRleHQsICdnbG9iYWwnKSkge1xuICAgICAgICBpZiAoamF2YSkge1xuICAgICAgICAgIGRhdGEgPSBqYXZhLmxhbmcuU3lzdGVtO1xuICAgICAgICAgIGFyY2ggPSBkYXRhLmdldFByb3BlcnR5KCdvcy5hcmNoJyk7XG4gICAgICAgICAgb3MgPSBvcyB8fCBkYXRhLmdldFByb3BlcnR5KCdvcy5uYW1lJykgKyAnICcgKyBkYXRhLmdldFByb3BlcnR5KCdvcy52ZXJzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJoaW5vKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBjb250ZXh0LnJlcXVpcmUoJ3JpbmdvL2VuZ2luZScpLnZlcnNpb24uam9pbignLicpO1xuICAgICAgICAgICAgbmFtZSA9ICdSaW5nb0pTJztcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGlmICgoZGF0YSA9IGNvbnRleHQuc3lzdGVtKSAmJiBkYXRhLmdsb2JhbC5zeXN0ZW0gPT0gY29udGV4dC5zeXN0ZW0pIHtcbiAgICAgICAgICAgICAgbmFtZSA9ICdOYXJ3aGFsJztcbiAgICAgICAgICAgICAgb3MgfHwgKG9zID0gZGF0YVswXS5vcyB8fCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICBuYW1lID0gJ1JoaW5vJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgdHlwZW9mIGNvbnRleHQucHJvY2VzcyA9PSAnb2JqZWN0JyAmJiAhY29udGV4dC5wcm9jZXNzLmJyb3dzZXIgJiZcbiAgICAgICAgICAoZGF0YSA9IGNvbnRleHQucHJvY2VzcylcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLnZlcnNpb25zID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEudmVyc2lvbnMuZWxlY3Ryb24gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb24ucHVzaCgnTm9kZSAnICsgZGF0YS52ZXJzaW9ucy5ub2RlKTtcbiAgICAgICAgICAgICAgbmFtZSA9ICdFbGVjdHJvbic7XG4gICAgICAgICAgICAgIHZlcnNpb24gPSBkYXRhLnZlcnNpb25zLmVsZWN0cm9uO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS52ZXJzaW9ucy5udyA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCdDaHJvbWl1bSAnICsgdmVyc2lvbiwgJ05vZGUgJyArIGRhdGEudmVyc2lvbnMubm9kZSk7XG4gICAgICAgICAgICAgIG5hbWUgPSAnTlcuanMnO1xuICAgICAgICAgICAgICB2ZXJzaW9uID0gZGF0YS52ZXJzaW9ucy5udztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICBuYW1lID0gJ05vZGUuanMnO1xuICAgICAgICAgICAgYXJjaCA9IGRhdGEuYXJjaDtcbiAgICAgICAgICAgIG9zID0gZGF0YS5wbGF0Zm9ybTtcbiAgICAgICAgICAgIHZlcnNpb24gPSAvW1xcZC5dKy8uZXhlYyhkYXRhLnZlcnNpb24pO1xuICAgICAgICAgICAgdmVyc2lvbiA9IHZlcnNpb24gPyB2ZXJzaW9uWzBdIDogbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIERldGVjdCBBZG9iZSBBSVIuXG4gICAgICBlbHNlIGlmIChnZXRDbGFzc09mKChkYXRhID0gY29udGV4dC5ydW50aW1lKSkgPT0gYWlyUnVudGltZUNsYXNzKSB7XG4gICAgICAgIG5hbWUgPSAnQWRvYmUgQUlSJztcbiAgICAgICAgb3MgPSBkYXRhLmZsYXNoLnN5c3RlbS5DYXBhYmlsaXRpZXMub3M7XG4gICAgICB9XG4gICAgICAvLyBEZXRlY3QgUGhhbnRvbUpTLlxuICAgICAgZWxzZSBpZiAoZ2V0Q2xhc3NPZigoZGF0YSA9IGNvbnRleHQucGhhbnRvbSkpID09IHBoYW50b21DbGFzcykge1xuICAgICAgICBuYW1lID0gJ1BoYW50b21KUyc7XG4gICAgICAgIHZlcnNpb24gPSAoZGF0YSA9IGRhdGEudmVyc2lvbiB8fCBudWxsKSAmJiAoZGF0YS5tYWpvciArICcuJyArIGRhdGEubWlub3IgKyAnLicgKyBkYXRhLnBhdGNoKTtcbiAgICAgIH1cbiAgICAgIC8vIERldGVjdCBJRSBjb21wYXRpYmlsaXR5IG1vZGVzLlxuICAgICAgZWxzZSBpZiAodHlwZW9mIGRvYy5kb2N1bWVudE1vZGUgPT0gJ251bWJlcicgJiYgKGRhdGEgPSAvXFxiVHJpZGVudFxcLyhcXGQrKS9pLmV4ZWModWEpKSkge1xuICAgICAgICAvLyBXZSdyZSBpbiBjb21wYXRpYmlsaXR5IG1vZGUgd2hlbiB0aGUgVHJpZGVudCB2ZXJzaW9uICsgNCBkb2Vzbid0XG4gICAgICAgIC8vIGVxdWFsIHRoZSBkb2N1bWVudCBtb2RlLlxuICAgICAgICB2ZXJzaW9uID0gW3ZlcnNpb24sIGRvYy5kb2N1bWVudE1vZGVdO1xuICAgICAgICBpZiAoKGRhdGEgPSArZGF0YVsxXSArIDQpICE9IHZlcnNpb25bMV0pIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCdJRSAnICsgdmVyc2lvblsxXSArICcgbW9kZScpO1xuICAgICAgICAgIGxheW91dCAmJiAobGF5b3V0WzFdID0gJycpO1xuICAgICAgICAgIHZlcnNpb25bMV0gPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHZlcnNpb24gPSBuYW1lID09ICdJRScgPyBTdHJpbmcodmVyc2lvblsxXS50b0ZpeGVkKDEpKSA6IHZlcnNpb25bMF07XG4gICAgICB9XG4gICAgICAvLyBEZXRlY3QgSUUgMTEgbWFza2luZyBhcyBvdGhlciBicm93c2Vycy5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBkb2MuZG9jdW1lbnRNb2RlID09ICdudW1iZXInICYmIC9eKD86Q2hyb21lfEZpcmVmb3gpXFxiLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2goJ21hc2tpbmcgYXMgJyArIG5hbWUgKyAnICcgKyB2ZXJzaW9uKTtcbiAgICAgICAgbmFtZSA9ICdJRSc7XG4gICAgICAgIHZlcnNpb24gPSAnMTEuMCc7XG4gICAgICAgIGxheW91dCA9IFsnVHJpZGVudCddO1xuICAgICAgICBvcyA9ICdXaW5kb3dzJztcbiAgICAgIH1cbiAgICAgIG9zID0gb3MgJiYgZm9ybWF0KG9zKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IHByZXJlbGVhc2UgcGhhc2VzLlxuICAgIGlmICh2ZXJzaW9uICYmIChkYXRhID1cbiAgICAgICAgICAvKD86W2FiXXxkcHxwcmV8W2FiXVxcZCtwcmUpKD86XFxkK1xcKz8pPyQvaS5leGVjKHZlcnNpb24pIHx8XG4gICAgICAgICAgLyg/OmFscGhhfGJldGEpKD86ID9cXGQpPy9pLmV4ZWModWEgKyAnOycgKyAodXNlRmVhdHVyZXMgJiYgbmF2LmFwcE1pbm9yVmVyc2lvbikpIHx8XG4gICAgICAgICAgL1xcYk1pbmVmaWVsZFxcYi9pLnRlc3QodWEpICYmICdhJ1xuICAgICAgICApKSB7XG4gICAgICBwcmVyZWxlYXNlID0gL2IvaS50ZXN0KGRhdGEpID8gJ2JldGEnIDogJ2FscGhhJztcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnJlcGxhY2UoUmVnRXhwKGRhdGEgKyAnXFxcXCs/JCcpLCAnJykgK1xuICAgICAgICAocHJlcmVsZWFzZSA9PSAnYmV0YScgPyBiZXRhIDogYWxwaGEpICsgKC9cXGQrXFwrPy8uZXhlYyhkYXRhKSB8fCAnJyk7XG4gICAgfVxuICAgIC8vIERldGVjdCBGaXJlZm94IE1vYmlsZS5cbiAgICBpZiAobmFtZSA9PSAnRmVubmVjJyB8fCBuYW1lID09ICdGaXJlZm94JyAmJiAvXFxiKD86QW5kcm9pZHxGaXJlZm94IE9TfEthaU9TKVxcYi8udGVzdChvcykpIHtcbiAgICAgIG5hbWUgPSAnRmlyZWZveCBNb2JpbGUnO1xuICAgIH1cbiAgICAvLyBPYnNjdXJlIE1heHRob24ncyB1bnJlbGlhYmxlIHZlcnNpb24uXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnTWF4dGhvbicgJiYgdmVyc2lvbikge1xuICAgICAgdmVyc2lvbiA9IHZlcnNpb24ucmVwbGFjZSgvXFwuW1xcZC5dKy8sICcueCcpO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgWGJveCAzNjAgYW5kIFhib3ggT25lLlxuICAgIGVsc2UgaWYgKC9cXGJYYm94XFxiL2kudGVzdChwcm9kdWN0KSkge1xuICAgICAgaWYgKHByb2R1Y3QgPT0gJ1hib3ggMzYwJykge1xuICAgICAgICBvcyA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAocHJvZHVjdCA9PSAnWGJveCAzNjAnICYmIC9cXGJJRU1vYmlsZVxcYi8udGVzdCh1YSkpIHtcbiAgICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnbW9iaWxlIG1vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQWRkIG1vYmlsZSBwb3N0Zml4LlxuICAgIGVsc2UgaWYgKCgvXig/OkNocm9tZXxJRXxPcGVyYSkkLy50ZXN0KG5hbWUpIHx8IG5hbWUgJiYgIXByb2R1Y3QgJiYgIS9Ccm93c2VyfE1vYmkvLnRlc3QobmFtZSkpICYmXG4gICAgICAgIChvcyA9PSAnV2luZG93cyBDRScgfHwgL01vYmkvaS50ZXN0KHVhKSkpIHtcbiAgICAgIG5hbWUgKz0gJyBNb2JpbGUnO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgSUUgcGxhdGZvcm0gcHJldmlldy5cbiAgICBlbHNlIGlmIChuYW1lID09ICdJRScgJiYgdXNlRmVhdHVyZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChjb250ZXh0LmV4dGVybmFsID09PSBudWxsKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgncGxhdGZvcm0gcHJldmlldycpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnZW1iZWRkZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRGV0ZWN0IEJsYWNrQmVycnkgT1MgdmVyc2lvbi5cbiAgICAvLyBodHRwOi8vZG9jcy5ibGFja2JlcnJ5LmNvbS9lbi9kZXZlbG9wZXJzL2RlbGl2ZXJhYmxlcy8xODE2OS9IVFRQX2hlYWRlcnNfc2VudF9ieV9CQl9Ccm93c2VyXzEyMzQ5MTFfMTEuanNwXG4gICAgZWxzZSBpZiAoKC9cXGJCbGFja0JlcnJ5XFxiLy50ZXN0KHByb2R1Y3QpIHx8IC9cXGJCQjEwXFxiLy50ZXN0KHVhKSkgJiYgKGRhdGEgPVxuICAgICAgICAgIChSZWdFeHAocHJvZHVjdC5yZXBsYWNlKC8gKy9nLCAnIConKSArICcvKFsuXFxcXGRdKyknLCAnaScpLmV4ZWModWEpIHx8IDApWzFdIHx8XG4gICAgICAgICAgdmVyc2lvblxuICAgICAgICApKSB7XG4gICAgICBkYXRhID0gW2RhdGEsIC9CQjEwLy50ZXN0KHVhKV07XG4gICAgICBvcyA9IChkYXRhWzFdID8gKHByb2R1Y3QgPSBudWxsLCBtYW51ZmFjdHVyZXIgPSAnQmxhY2tCZXJyeScpIDogJ0RldmljZSBTb2Z0d2FyZScpICsgJyAnICsgZGF0YVswXTtcbiAgICAgIHZlcnNpb24gPSBudWxsO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgT3BlcmEgaWRlbnRpZnlpbmcvbWFza2luZyBpdHNlbGYgYXMgYW5vdGhlciBicm93c2VyLlxuICAgIC8vIGh0dHA6Ly93d3cub3BlcmEuY29tL3N1cHBvcnQva2Ivdmlldy84NDMvXG4gICAgZWxzZSBpZiAodGhpcyAhPSBmb3JPd24gJiYgcHJvZHVjdCAhPSAnV2lpJyAmJiAoXG4gICAgICAgICAgKHVzZUZlYXR1cmVzICYmIG9wZXJhKSB8fFxuICAgICAgICAgICgvT3BlcmEvLnRlc3QobmFtZSkgJiYgL1xcYig/Ok1TSUV8RmlyZWZveClcXGIvaS50ZXN0KHVhKSkgfHxcbiAgICAgICAgICAobmFtZSA9PSAnRmlyZWZveCcgJiYgL1xcYk9TIFggKD86XFxkK1xcLil7Mix9Ly50ZXN0KG9zKSkgfHxcbiAgICAgICAgICAobmFtZSA9PSAnSUUnICYmIChcbiAgICAgICAgICAgIChvcyAmJiAhL15XaW4vLnRlc3Qob3MpICYmIHZlcnNpb24gPiA1LjUpIHx8XG4gICAgICAgICAgICAvXFxiV2luZG93cyBYUFxcYi8udGVzdChvcykgJiYgdmVyc2lvbiA+IDggfHxcbiAgICAgICAgICAgIHZlcnNpb24gPT0gOCAmJiAhL1xcYlRyaWRlbnRcXGIvLnRlc3QodWEpXG4gICAgICAgICAgKSlcbiAgICAgICAgKSAmJiAhcmVPcGVyYS50ZXN0KChkYXRhID0gcGFyc2UuY2FsbChmb3JPd24sIHVhLnJlcGxhY2UocmVPcGVyYSwgJycpICsgJzsnKSkpICYmIGRhdGEubmFtZSkge1xuICAgICAgLy8gV2hlbiBcImlkZW50aWZ5aW5nXCIsIHRoZSBVQSBjb250YWlucyBib3RoIE9wZXJhIGFuZCB0aGUgb3RoZXIgYnJvd3NlcidzIG5hbWUuXG4gICAgICBkYXRhID0gJ2luZyBhcyAnICsgZGF0YS5uYW1lICsgKChkYXRhID0gZGF0YS52ZXJzaW9uKSA/ICcgJyArIGRhdGEgOiAnJyk7XG4gICAgICBpZiAocmVPcGVyYS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIGlmICgvXFxiSUVcXGIvLnRlc3QoZGF0YSkgJiYgb3MgPT0gJ01hYyBPUycpIHtcbiAgICAgICAgICBvcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9ICdpZGVudGlmeScgKyBkYXRhO1xuICAgICAgfVxuICAgICAgLy8gV2hlbiBcIm1hc2tpbmdcIiwgdGhlIFVBIGNvbnRhaW5zIG9ubHkgdGhlIG90aGVyIGJyb3dzZXIncyBuYW1lLlxuICAgICAgZWxzZSB7XG4gICAgICAgIGRhdGEgPSAnbWFzaycgKyBkYXRhO1xuICAgICAgICBpZiAob3BlcmFDbGFzcykge1xuICAgICAgICAgIG5hbWUgPSBmb3JtYXQob3BlcmFDbGFzcy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEgJDInKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZSA9ICdPcGVyYSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9cXGJJRVxcYi8udGVzdChkYXRhKSkge1xuICAgICAgICAgIG9zID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXVzZUZlYXR1cmVzKSB7XG4gICAgICAgICAgdmVyc2lvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxheW91dCA9IFsnUHJlc3RvJ107XG4gICAgICBkZXNjcmlwdGlvbi5wdXNoKGRhdGEpO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgV2ViS2l0IE5pZ2h0bHkgYW5kIGFwcHJveGltYXRlIENocm9tZS9TYWZhcmkgdmVyc2lvbnMuXG4gICAgaWYgKChkYXRhID0gKC9cXGJBcHBsZVdlYktpdFxcLyhbXFxkLl0rXFwrPykvaS5leGVjKHVhKSB8fCAwKVsxXSkpIHtcbiAgICAgIC8vIENvcnJlY3QgYnVpbGQgbnVtYmVyIGZvciBudW1lcmljIGNvbXBhcmlzb24uXG4gICAgICAvLyAoZS5nLiBcIjUzMi41XCIgYmVjb21lcyBcIjUzMi4wNVwiKVxuICAgICAgZGF0YSA9IFtwYXJzZUZsb2F0KGRhdGEucmVwbGFjZSgvXFwuKFxcZCkkLywgJy4wJDEnKSksIGRhdGFdO1xuICAgICAgLy8gTmlnaHRseSBidWlsZHMgYXJlIHBvc3RmaXhlZCB3aXRoIGEgXCIrXCIuXG4gICAgICBpZiAobmFtZSA9PSAnU2FmYXJpJyAmJiBkYXRhWzFdLnNsaWNlKC0xKSA9PSAnKycpIHtcbiAgICAgICAgbmFtZSA9ICdXZWJLaXQgTmlnaHRseSc7XG4gICAgICAgIHByZXJlbGVhc2UgPSAnYWxwaGEnO1xuICAgICAgICB2ZXJzaW9uID0gZGF0YVsxXS5zbGljZSgwLCAtMSk7XG4gICAgICB9XG4gICAgICAvLyBDbGVhciBpbmNvcnJlY3QgYnJvd3NlciB2ZXJzaW9ucy5cbiAgICAgIGVsc2UgaWYgKHZlcnNpb24gPT0gZGF0YVsxXSB8fFxuICAgICAgICAgIHZlcnNpb24gPT0gKGRhdGFbMl0gPSAoL1xcYlNhZmFyaVxcLyhbXFxkLl0rXFwrPykvaS5leGVjKHVhKSB8fCAwKVsxXSkpIHtcbiAgICAgICAgdmVyc2lvbiA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBVc2UgdGhlIGZ1bGwgQ2hyb21lIHZlcnNpb24gd2hlbiBhdmFpbGFibGUuXG4gICAgICBkYXRhWzFdID0gKC9cXGIoPzpIZWFkbGVzcyk/Q2hyb21lXFwvKFtcXGQuXSspL2kuZXhlYyh1YSkgfHwgMClbMV07XG4gICAgICAvLyBEZXRlY3QgQmxpbmsgbGF5b3V0IGVuZ2luZS5cbiAgICAgIGlmIChkYXRhWzBdID09IDUzNy4zNiAmJiBkYXRhWzJdID09IDUzNy4zNiAmJiBwYXJzZUZsb2F0KGRhdGFbMV0pID49IDI4ICYmIGxheW91dCA9PSAnV2ViS2l0Jykge1xuICAgICAgICBsYXlvdXQgPSBbJ0JsaW5rJ107XG4gICAgICB9XG4gICAgICAvLyBEZXRlY3QgSmF2YVNjcmlwdENvcmUuXG4gICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzY3Njg0NzQvaG93LWNhbi1pLWRldGVjdC13aGljaC1qYXZhc2NyaXB0LWVuZ2luZS12OC1vci1qc2MtaXMtdXNlZC1hdC1ydW50aW1lLWluLWFuZHJvaVxuICAgICAgaWYgKCF1c2VGZWF0dXJlcyB8fCAoIWxpa2VDaHJvbWUgJiYgIWRhdGFbMV0pKSB7XG4gICAgICAgIGxheW91dCAmJiAobGF5b3V0WzFdID0gJ2xpa2UgU2FmYXJpJyk7XG4gICAgICAgIGRhdGEgPSAoZGF0YSA9IGRhdGFbMF0sIGRhdGEgPCA0MDAgPyAxIDogZGF0YSA8IDUwMCA/IDIgOiBkYXRhIDwgNTI2ID8gMyA6IGRhdGEgPCA1MzMgPyA0IDogZGF0YSA8IDUzNCA/ICc0KycgOiBkYXRhIDwgNTM1ID8gNSA6IGRhdGEgPCA1MzcgPyA2IDogZGF0YSA8IDUzOCA/IDcgOiBkYXRhIDwgNjAxID8gOCA6IGRhdGEgPCA2MDIgPyA5IDogZGF0YSA8IDYwNCA/IDEwIDogZGF0YSA8IDYwNiA/IDExIDogZGF0YSA8IDYwOCA/IDEyIDogJzEyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXlvdXQgJiYgKGxheW91dFsxXSA9ICdsaWtlIENocm9tZScpO1xuICAgICAgICBkYXRhID0gZGF0YVsxXSB8fCAoZGF0YSA9IGRhdGFbMF0sIGRhdGEgPCA1MzAgPyAxIDogZGF0YSA8IDUzMiA/IDIgOiBkYXRhIDwgNTMyLjA1ID8gMyA6IGRhdGEgPCA1MzMgPyA0IDogZGF0YSA8IDUzNC4wMyA/IDUgOiBkYXRhIDwgNTM0LjA3ID8gNiA6IGRhdGEgPCA1MzQuMTAgPyA3IDogZGF0YSA8IDUzNC4xMyA/IDggOiBkYXRhIDwgNTM0LjE2ID8gOSA6IGRhdGEgPCA1MzQuMjQgPyAxMCA6IGRhdGEgPCA1MzQuMzAgPyAxMSA6IGRhdGEgPCA1MzUuMDEgPyAxMiA6IGRhdGEgPCA1MzUuMDIgPyAnMTMrJyA6IGRhdGEgPCA1MzUuMDcgPyAxNSA6IGRhdGEgPCA1MzUuMTEgPyAxNiA6IGRhdGEgPCA1MzUuMTkgPyAxNyA6IGRhdGEgPCA1MzYuMDUgPyAxOCA6IGRhdGEgPCA1MzYuMTAgPyAxOSA6IGRhdGEgPCA1MzcuMDEgPyAyMCA6IGRhdGEgPCA1MzcuMTEgPyAnMjErJyA6IGRhdGEgPCA1MzcuMTMgPyAyMyA6IGRhdGEgPCA1MzcuMTggPyAyNCA6IGRhdGEgPCA1MzcuMjQgPyAyNSA6IGRhdGEgPCA1MzcuMzYgPyAyNiA6IGxheW91dCAhPSAnQmxpbmsnID8gJzI3JyA6ICcyOCcpO1xuICAgICAgfVxuICAgICAgLy8gQWRkIHRoZSBwb3N0Zml4IG9mIFwiLnhcIiBvciBcIitcIiBmb3IgYXBwcm94aW1hdGUgdmVyc2lvbnMuXG4gICAgICBsYXlvdXQgJiYgKGxheW91dFsxXSArPSAnICcgKyAoZGF0YSArPSB0eXBlb2YgZGF0YSA9PSAnbnVtYmVyJyA/ICcueCcgOiAvWy4rXS8udGVzdChkYXRhKSA/ICcnIDogJysnKSk7XG4gICAgICAvLyBPYnNjdXJlIHZlcnNpb24gZm9yIHNvbWUgU2FmYXJpIDEtMiByZWxlYXNlcy5cbiAgICAgIGlmIChuYW1lID09ICdTYWZhcmknICYmICghdmVyc2lvbiB8fCBwYXJzZUludCh2ZXJzaW9uKSA+IDQ1KSkge1xuICAgICAgICB2ZXJzaW9uID0gZGF0YTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PSAnQ2hyb21lJyAmJiAvXFxiSGVhZGxlc3NDaHJvbWUvaS50ZXN0KHVhKSkge1xuICAgICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdoZWFkbGVzcycpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBEZXRlY3QgT3BlcmEgZGVza3RvcCBtb2Rlcy5cbiAgICBpZiAobmFtZSA9PSAnT3BlcmEnICYmICAoZGF0YSA9IC9cXGJ6Ym92fHp2YXYkLy5leGVjKG9zKSkpIHtcbiAgICAgIG5hbWUgKz0gJyAnO1xuICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnZGVza3RvcCBtb2RlJyk7XG4gICAgICBpZiAoZGF0YSA9PSAnenZhdicpIHtcbiAgICAgICAgbmFtZSArPSAnTWluaSc7XG4gICAgICAgIHZlcnNpb24gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmFtZSArPSAnTW9iaWxlJztcbiAgICAgIH1cbiAgICAgIG9zID0gb3MucmVwbGFjZShSZWdFeHAoJyAqJyArIGRhdGEgKyAnJCcpLCAnJyk7XG4gICAgfVxuICAgIC8vIERldGVjdCBDaHJvbWUgZGVza3RvcCBtb2RlLlxuICAgIGVsc2UgaWYgKG5hbWUgPT0gJ1NhZmFyaScgJiYgL1xcYkNocm9tZVxcYi8uZXhlYyhsYXlvdXQgJiYgbGF5b3V0WzFdKSkge1xuICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnZGVza3RvcCBtb2RlJyk7XG4gICAgICBuYW1lID0gJ0Nocm9tZSBNb2JpbGUnO1xuICAgICAgdmVyc2lvbiA9IG51bGw7XG5cbiAgICAgIGlmICgvXFxiT1MgWFxcYi8udGVzdChvcykpIHtcbiAgICAgICAgbWFudWZhY3R1cmVyID0gJ0FwcGxlJztcbiAgICAgICAgb3MgPSAnaU9TIDQuMysnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3MgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBTUldhcmUgSXJvbiB1c2VzIHRoZSBDaHJvbWUgdGFnIHRvIGluZGljYXRlIGl0cyB2ZXJzaW9uIG51bWJlci5cbiAgICBlbHNlIGlmICgvXFxiU1JXYXJlIElyb25cXGIvLnRlc3QobmFtZSkgJiYgIXZlcnNpb24pIHtcbiAgICAgIHZlcnNpb24gPSBnZXRWZXJzaW9uKCdDaHJvbWUnKTtcbiAgICB9XG4gICAgLy8gU3RyaXAgaW5jb3JyZWN0IE9TIHZlcnNpb25zLlxuICAgIGlmICh2ZXJzaW9uICYmIHZlcnNpb24uaW5kZXhPZigoZGF0YSA9IC9bXFxkLl0rJC8uZXhlYyhvcykpKSA9PSAwICYmXG4gICAgICAgIHVhLmluZGV4T2YoJy8nICsgZGF0YSArICctJykgPiAtMSkge1xuICAgICAgb3MgPSB0cmltKG9zLnJlcGxhY2UoZGF0YSwgJycpKTtcbiAgICB9XG4gICAgLy8gRW5zdXJlIE9TIGRvZXMgbm90IGluY2x1ZGUgdGhlIGJyb3dzZXIgbmFtZS5cbiAgICBpZiAob3MgJiYgb3MuaW5kZXhPZihuYW1lKSAhPSAtMSAmJiAhUmVnRXhwKG5hbWUgKyAnIE9TJykudGVzdChvcykpIHtcbiAgICAgIG9zID0gb3MucmVwbGFjZShSZWdFeHAoJyAqJyArIHF1YWxpZnkobmFtZSkgKyAnIConKSwgJycpO1xuICAgIH1cbiAgICAvLyBBZGQgbGF5b3V0IGVuZ2luZS5cbiAgICBpZiAobGF5b3V0ICYmICEvXFxiKD86QXZhbnR8Tm9vaylcXGIvLnRlc3QobmFtZSkgJiYgKFxuICAgICAgICAvQnJvd3NlcnxMdW5hc2NhcGV8TWF4dGhvbi8udGVzdChuYW1lKSB8fFxuICAgICAgICBuYW1lICE9ICdTYWZhcmknICYmIC9eaU9TLy50ZXN0KG9zKSAmJiAvXFxiU2FmYXJpXFxiLy50ZXN0KGxheW91dFsxXSkgfHxcbiAgICAgICAgL14oPzpBZG9iZXxBcm9yYXxCcmVhY2h8TWlkb3JpfE9wZXJhfFBoYW50b218UmVrb25xfFJvY2t8U2Ftc3VuZyBJbnRlcm5ldHxTbGVpcG5pcnxTUldhcmUgSXJvbnxWaXZhbGRpfFdlYikvLnRlc3QobmFtZSkgJiYgbGF5b3V0WzFdKSkge1xuICAgICAgLy8gRG9uJ3QgYWRkIGxheW91dCBkZXRhaWxzIHRvIGRlc2NyaXB0aW9uIGlmIHRoZXkgYXJlIGZhbHNleS5cbiAgICAgIChkYXRhID0gbGF5b3V0W2xheW91dC5sZW5ndGggLSAxXSkgJiYgZGVzY3JpcHRpb24ucHVzaChkYXRhKTtcbiAgICB9XG4gICAgLy8gQ29tYmluZSBjb250ZXh0dWFsIGluZm9ybWF0aW9uLlxuICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGgpIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gWycoJyArIGRlc2NyaXB0aW9uLmpvaW4oJzsgJykgKyAnKSddO1xuICAgIH1cbiAgICAvLyBBcHBlbmQgbWFudWZhY3R1cmVyIHRvIGRlc2NyaXB0aW9uLlxuICAgIGlmIChtYW51ZmFjdHVyZXIgJiYgcHJvZHVjdCAmJiBwcm9kdWN0LmluZGV4T2YobWFudWZhY3R1cmVyKSA8IDApIHtcbiAgICAgIGRlc2NyaXB0aW9uLnB1c2goJ29uICcgKyBtYW51ZmFjdHVyZXIpO1xuICAgIH1cbiAgICAvLyBBcHBlbmQgcHJvZHVjdCB0byBkZXNjcmlwdGlvbi5cbiAgICBpZiAocHJvZHVjdCkge1xuICAgICAgZGVzY3JpcHRpb24ucHVzaCgoL15vbiAvLnRlc3QoZGVzY3JpcHRpb25bZGVzY3JpcHRpb24ubGVuZ3RoIC0gMV0pID8gJycgOiAnb24gJykgKyBwcm9kdWN0KTtcbiAgICB9XG4gICAgLy8gUGFyc2UgdGhlIE9TIGludG8gYW4gb2JqZWN0LlxuICAgIGlmIChvcykge1xuICAgICAgZGF0YSA9IC8gKFtcXGQuK10rKSQvLmV4ZWMob3MpO1xuICAgICAgaXNTcGVjaWFsQ2FzZWRPUyA9IGRhdGEgJiYgb3MuY2hhckF0KG9zLmxlbmd0aCAtIGRhdGFbMF0ubGVuZ3RoIC0gMSkgPT0gJy8nO1xuICAgICAgb3MgPSB7XG4gICAgICAgICdhcmNoaXRlY3R1cmUnOiAzMixcbiAgICAgICAgJ2ZhbWlseSc6IChkYXRhICYmICFpc1NwZWNpYWxDYXNlZE9TKSA/IG9zLnJlcGxhY2UoZGF0YVswXSwgJycpIDogb3MsXG4gICAgICAgICd2ZXJzaW9uJzogZGF0YSA/IGRhdGFbMV0gOiBudWxsLFxuICAgICAgICAndG9TdHJpbmcnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdmVyc2lvbiA9IHRoaXMudmVyc2lvbjtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mYW1pbHkgKyAoKHZlcnNpb24gJiYgIWlzU3BlY2lhbENhc2VkT1MpID8gJyAnICsgdmVyc2lvbiA6ICcnKSArICh0aGlzLmFyY2hpdGVjdHVyZSA9PSA2NCA/ICcgNjQtYml0JyA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gQWRkIGJyb3dzZXIvT1MgYXJjaGl0ZWN0dXJlLlxuICAgIGlmICgoZGF0YSA9IC9cXGIoPzpBTUR8SUF8V2lufFdPV3x4ODZffHgpNjRcXGIvaS5leGVjKGFyY2gpKSAmJiAhL1xcYmk2ODZcXGIvaS50ZXN0KGFyY2gpKSB7XG4gICAgICBpZiAob3MpIHtcbiAgICAgICAgb3MuYXJjaGl0ZWN0dXJlID0gNjQ7XG4gICAgICAgIG9zLmZhbWlseSA9IG9zLmZhbWlseS5yZXBsYWNlKFJlZ0V4cCgnIConICsgZGF0YSksICcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgICBuYW1lICYmICgvXFxiV09XNjRcXGIvaS50ZXN0KHVhKSB8fFxuICAgICAgICAgICh1c2VGZWF0dXJlcyAmJiAvXFx3KD86ODZ8MzIpJC8udGVzdChuYXYuY3B1Q2xhc3MgfHwgbmF2LnBsYXRmb3JtKSAmJiAhL1xcYldpbjY0OyB4NjRcXGIvaS50ZXN0KHVhKSkpXG4gICAgICApIHtcbiAgICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnMzItYml0Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIENocm9tZSAzOSBhbmQgYWJvdmUgb24gT1MgWCBpcyBhbHdheXMgNjQtYml0LlxuICAgIGVsc2UgaWYgKFxuICAgICAgICBvcyAmJiAvXk9TIFgvLnRlc3Qob3MuZmFtaWx5KSAmJlxuICAgICAgICBuYW1lID09ICdDaHJvbWUnICYmIHBhcnNlRmxvYXQodmVyc2lvbikgPj0gMzlcbiAgICApIHtcbiAgICAgIG9zLmFyY2hpdGVjdHVyZSA9IDY0O1xuICAgIH1cblxuICAgIHVhIHx8ICh1YSA9IG51bGwpO1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYXRmb3JtIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBuYW1lIHBsYXRmb3JtXG4gICAgICogQHR5cGUgT2JqZWN0XG4gICAgICovXG4gICAgdmFyIHBsYXRmb3JtID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGxhdGZvcm0gZGVzY3JpcHRpb24uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAdHlwZSBzdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHBsYXRmb3JtLmRlc2NyaXB0aW9uID0gdWE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgYnJvd3NlcidzIGxheW91dCBlbmdpbmUuXG4gICAgICpcbiAgICAgKiBUaGUgbGlzdCBvZiBjb21tb24gbGF5b3V0IGVuZ2luZXMgaW5jbHVkZTpcbiAgICAgKiBcIkJsaW5rXCIsIFwiRWRnZUhUTUxcIiwgXCJHZWNrb1wiLCBcIlRyaWRlbnRcIiBhbmQgXCJXZWJLaXRcIlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS5sYXlvdXQgPSBsYXlvdXQgJiYgbGF5b3V0WzBdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHByb2R1Y3QncyBtYW51ZmFjdHVyZXIuXG4gICAgICpcbiAgICAgKiBUaGUgbGlzdCBvZiBtYW51ZmFjdHVyZXJzIGluY2x1ZGU6XG4gICAgICogXCJBcHBsZVwiLCBcIkFyY2hvc1wiLCBcIkFtYXpvblwiLCBcIkFzdXNcIiwgXCJCYXJuZXMgJiBOb2JsZVwiLCBcIkJsYWNrQmVycnlcIixcbiAgICAgKiBcIkdvb2dsZVwiLCBcIkhQXCIsIFwiSFRDXCIsIFwiTEdcIiwgXCJNaWNyb3NvZnRcIiwgXCJNb3Rvcm9sYVwiLCBcIk5pbnRlbmRvXCIsXG4gICAgICogXCJOb2tpYVwiLCBcIlNhbXN1bmdcIiBhbmQgXCJTb255XCJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBwbGF0Zm9ybVxuICAgICAqIEB0eXBlIHN0cmluZ3xudWxsXG4gICAgICovXG4gICAgcGxhdGZvcm0ubWFudWZhY3R1cmVyID0gbWFudWZhY3R1cmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGJyb3dzZXIvZW52aXJvbm1lbnQuXG4gICAgICpcbiAgICAgKiBUaGUgbGlzdCBvZiBjb21tb24gYnJvd3NlciBuYW1lcyBpbmNsdWRlOlxuICAgICAqIFwiQ2hyb21lXCIsIFwiRWxlY3Ryb25cIiwgXCJGaXJlZm94XCIsIFwiRmlyZWZveCBmb3IgaU9TXCIsIFwiSUVcIixcbiAgICAgKiBcIk1pY3Jvc29mdCBFZGdlXCIsIFwiUGhhbnRvbUpTXCIsIFwiU2FmYXJpXCIsIFwiU2VhTW9ua2V5XCIsIFwiU2lsa1wiLFxuICAgICAqIFwiT3BlcmEgTWluaVwiIGFuZCBcIk9wZXJhXCJcbiAgICAgKlxuICAgICAqIE1vYmlsZSB2ZXJzaW9ucyBvZiBzb21lIGJyb3dzZXJzIGhhdmUgXCJNb2JpbGVcIiBhcHBlbmRlZCB0byB0aGVpciBuYW1lOlxuICAgICAqIGVnLiBcIkNocm9tZSBNb2JpbGVcIiwgXCJGaXJlZm94IE1vYmlsZVwiLCBcIklFIE1vYmlsZVwiIGFuZCBcIk9wZXJhIE1vYmlsZVwiXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAdHlwZSBzdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHBsYXRmb3JtLm5hbWUgPSBuYW1lO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFscGhhL2JldGEgcmVsZWFzZSBpbmRpY2F0b3IuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAdHlwZSBzdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHBsYXRmb3JtLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHByb2R1Y3QgaG9zdGluZyB0aGUgYnJvd3Nlci5cbiAgICAgKlxuICAgICAqIFRoZSBsaXN0IG9mIGNvbW1vbiBwcm9kdWN0cyBpbmNsdWRlOlxuICAgICAqXG4gICAgICogXCJCbGFja0JlcnJ5XCIsIFwiR2FsYXh5IFM0XCIsIFwiTHVtaWFcIiwgXCJpUGFkXCIsIFwiaVBvZFwiLCBcImlQaG9uZVwiLCBcIktpbmRsZVwiLFxuICAgICAqIFwiS2luZGxlIEZpcmVcIiwgXCJOZXh1c1wiLCBcIk5vb2tcIiwgXCJQbGF5Qm9va1wiLCBcIlRvdWNoUGFkXCIgYW5kIFwiVHJhbnNmb3JtZXJcIlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS5wcm9kdWN0ID0gcHJvZHVjdDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBicm93c2VyJ3MgdXNlciBhZ2VudCBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAdHlwZSBzdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHBsYXRmb3JtLnVhID0gdWE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYnJvd3Nlci9lbnZpcm9ubWVudCB2ZXJzaW9uLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS52ZXJzaW9uID0gbmFtZSAmJiB2ZXJzaW9uO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIG9wZXJhdGluZyBzeXN0ZW0uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS5vcyA9IG9zIHx8IHtcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgQ1BVIGFyY2hpdGVjdHVyZSB0aGUgT1MgaXMgYnVpbHQgZm9yLlxuICAgICAgICpcbiAgICAgICAqIEBtZW1iZXJPZiBwbGF0Zm9ybS5vc1xuICAgICAgICogQHR5cGUgbnVtYmVyfG51bGxcbiAgICAgICAqL1xuICAgICAgJ2FyY2hpdGVjdHVyZSc6IG51bGwsXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGZhbWlseSBvZiB0aGUgT1MuXG4gICAgICAgKlxuICAgICAgICogQ29tbW9uIHZhbHVlcyBpbmNsdWRlOlxuICAgICAgICogXCJXaW5kb3dzXCIsIFwiV2luZG93cyBTZXJ2ZXIgMjAwOCBSMiAvIDdcIiwgXCJXaW5kb3dzIFNlcnZlciAyMDA4IC8gVmlzdGFcIixcbiAgICAgICAqIFwiV2luZG93cyBYUFwiLCBcIk9TIFhcIiwgXCJMaW51eFwiLCBcIlVidW50dVwiLCBcIkRlYmlhblwiLCBcIkZlZG9yYVwiLCBcIlJlZCBIYXRcIixcbiAgICAgICAqIFwiU3VTRVwiLCBcIkFuZHJvaWRcIiwgXCJpT1NcIiBhbmQgXCJXaW5kb3dzIFBob25lXCJcbiAgICAgICAqXG4gICAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm0ub3NcbiAgICAgICAqIEB0eXBlIHN0cmluZ3xudWxsXG4gICAgICAgKi9cbiAgICAgICdmYW1pbHknOiBudWxsLFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPUy5cbiAgICAgICAqXG4gICAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm0ub3NcbiAgICAgICAqIEB0eXBlIHN0cmluZ3xudWxsXG4gICAgICAgKi9cbiAgICAgICd2ZXJzaW9uJzogbnVsbCxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBPUyBzdHJpbmcuXG4gICAgICAgKlxuICAgICAgICogQG1lbWJlck9mIHBsYXRmb3JtLm9zXG4gICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgT1Mgc3RyaW5nLlxuICAgICAgICovXG4gICAgICAndG9TdHJpbmcnOiBmdW5jdGlvbigpIHsgcmV0dXJuICdudWxsJzsgfVxuICAgIH07XG5cbiAgICBwbGF0Zm9ybS5wYXJzZSA9IHBhcnNlO1xuICAgIHBsYXRmb3JtLnRvU3RyaW5nID0gdG9TdHJpbmdQbGF0Zm9ybTtcblxuICAgIGlmIChwbGF0Zm9ybS52ZXJzaW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KHZlcnNpb24pO1xuICAgIH1cbiAgICBpZiAocGxhdGZvcm0ubmFtZSkge1xuICAgICAgZGVzY3JpcHRpb24udW5zaGlmdChuYW1lKTtcbiAgICB9XG4gICAgaWYgKG9zICYmIG5hbWUgJiYgIShvcyA9PSBTdHJpbmcob3MpLnNwbGl0KCcgJylbMF0gJiYgKG9zID09IG5hbWUuc3BsaXQoJyAnKVswXSB8fCBwcm9kdWN0KSkpIHtcbiAgICAgIGRlc2NyaXB0aW9uLnB1c2gocHJvZHVjdCA/ICcoJyArIG9zICsgJyknIDogJ29uICcgKyBvcyk7XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGgpIHtcbiAgICAgIHBsYXRmb3JtLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24uam9pbignICcpO1xuICAgIH1cbiAgICByZXR1cm4gcGxhdGZvcm07XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvLyBFeHBvcnQgcGxhdGZvcm0uXG4gIHZhciBwbGF0Zm9ybSA9IHBhcnNlKCk7XG5cbiAgLy8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3IgY29uZGl0aW9uIHBhdHRlcm5zIGxpa2UgdGhlIGZvbGxvd2luZzpcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gRXhwb3NlIHBsYXRmb3JtIG9uIHRoZSBnbG9iYWwgb2JqZWN0IHRvIHByZXZlbnQgZXJyb3JzIHdoZW4gcGxhdGZvcm0gaXNcbiAgICAvLyBsb2FkZWQgYnkgYSBzY3JpcHQgdGFnIGluIHRoZSBwcmVzZW5jZSBvZiBhbiBBTUQgbG9hZGVyLlxuICAgIC8vIFNlZSBodHRwOi8vcmVxdWlyZWpzLm9yZy9kb2NzL2Vycm9ycy5odG1sI21pc21hdGNoIGZvciBtb3JlIGRldGFpbHMuXG4gICAgcm9vdC5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xuXG4gICAgLy8gRGVmaW5lIGFzIGFuIGFub255bW91cyBtb2R1bGUgc28gcGxhdGZvcm0gY2FuIGJlIGFsaWFzZWQgdGhyb3VnaCBwYXRoIG1hcHBpbmcuXG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBsYXRmb3JtO1xuICAgIH0pO1xuICB9XG4gIC8vIENoZWNrIGZvciBgZXhwb3J0c2AgYWZ0ZXIgYGRlZmluZWAgaW4gY2FzZSBhIGJ1aWxkIG9wdGltaXplciBhZGRzIGFuIGBleHBvcnRzYCBvYmplY3QuXG4gIGVsc2UgaWYgKGZyZWVFeHBvcnRzICYmIGZyZWVNb2R1bGUpIHtcbiAgICAvLyBFeHBvcnQgZm9yIENvbW1vbkpTIHN1cHBvcnQuXG4gICAgZm9yT3duKHBsYXRmb3JtLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICBmcmVlRXhwb3J0c1trZXldID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gRXhwb3J0IHRvIHRoZSBnbG9iYWwgb2JqZWN0LlxuICAgIHJvb3QucGxhdGZvcm0gPSBwbGF0Zm9ybTtcbiAgfVxufS5jYWxsKHRoaXMpKTtcbiIsImltcG9ydCB7IEdhdGV3YXlJZGVudGlmeURhdGEsIEdhdGV3YXlSZWNlaXZlUGF5bG9hZCwgR2F0ZXdheU9wY29kZXMgfSBmcm9tIFwiZGlzY29yZC1hcGktdHlwZXMvdjEwXCJcbmltcG9ydCBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIlxuaW1wb3J0IHsgZGVmYXVsdElkZW50aWZ5T3B0aW9uLCBkZWZhdWx0U29ja2V0VVJMT3B0aW9uIH0gZnJvbSBcIi4uL3V0aWwvT3B0aW9uc1wiXG5pbXBvcnQgZGlzcGF0Y2hSZWNlaXZlIGZyb20gXCIuL2dhdGV3YXkvcmVjZWl2ZS9kaXNwYXRjaFwiXG5pbXBvcnQgaGVhcnRiZWF0UmVjZWl2ZSBmcm9tIFwiLi9nYXRld2F5L3JlY2VpdmUvaGVhcnRiZWF0XCJcbmltcG9ydCBoZWFydGJlYXRBY2tSZWNlaXZlIGZyb20gXCIuL2dhdGV3YXkvcmVjZWl2ZS9oZWFydGJlYXRBY2tcIlxuaW1wb3J0IGhlbGxvUmVjZWl2ZSBmcm9tIFwiLi9nYXRld2F5L3JlY2VpdmUvaGVsbG9cIlxuaW1wb3J0IGludmFsaWRTZXNzaW9uUmVjZWl2ZSBmcm9tIFwiLi9nYXRld2F5L3JlY2VpdmUvaW52YWxpZFNlc3Npb25cIlxuaW1wb3J0IHJlY29ubmVjdFJlY2VpdmUgZnJvbSBcIi4vZ2F0ZXdheS9yZWNlaXZlL3JlY29ubmVjdFwiXG5cbmludGVyZmFjZSBTb2NrZXRVUkxPcHRpb25zIHtcbiAgdjogbnVtYmVyIHwgc3RyaW5nLFxuICBlbmNvZGluZzogc3RyaW5nLFxuICBjb21wcmVzcz86IHN0cmluZ1xufVxuXG5jbGFzcyBDbGllbnQgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb25zIHRvIGJlIHNlbnQgd2hlbiBpZGVudGlmeWluZ1xuICAgKiBAcHJvcGVydHkge0dhdGV3YXlJZGVudGlmeURhdGF9XG4gICAqL1xuICBpZGVudGlmeU9wdGlvbnM6IEdhdGV3YXlJZGVudGlmeURhdGFcblxuICAvKipcbiAgICogV2Vic29ja2V0IFVSTCBzZWFyY2ggcGFyYW1ldGVyc1xuICAgKiBAcHJvcGVydHkge1NvY2tldFVSTE9wdGlvbnN9XG4gICAqL1xuICBzb2NrZXRVUkxPcHRpb25zOiBTb2NrZXRVUkxPcHRpb25zXG5cbiAgLyoqXG4gICAqIFRoZSB3ZWJzb2NrZXQgVVJMIHRoYXQgdGhlIGNsaWVudCB3aWxsIGNvbm5lY3QgdG9cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYmFzZVVybDogc3RyaW5nID0gJ3dzczovL2dhdGV3YXkuZGlzY29yZC5nZydcblxuICAvKipcbiAgICogV2Vic29ja2V0IG9mIHRoZSBjbGllbnRcbiAgICogQHByb3BlcnR5IHtXZWJTb2NrZXR9XG4gICAqL1xuICBkZWNsYXJlIHdzOiBXZWJTb2NrZXRcblxuICAvKipcbiAgICogSGVhcnRiZWF0IHRpbWVvdXQgaWRcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWNsYXJlIF9oZWFydGJlYXRUaW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PlxuXG4gIC8qKlxuICAgKiBIZWFydGJlYXQgSW50ZXJ2YWwgcmVjZWl2ZWQgYnkgSGVsbG9cbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWNsYXJlIF9oZWFydGJlYXRJbnRlcnZhbDogbnVtYmVyXG5cbiAgX3NlcXVlbmNlTnVtYmVyOiBudW1iZXIgfCBudWxsID0gbnVsbFxuXG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0b3Igb2YgdGhpcyBjbGllbnRcbiAgICogQHBhcmFtIHtHYXRld2F5SWRlbnRpZnlEYXRhfSBpZGVudGlmeU9wdGlvbnNcbiAgICogQHBhcmFtIHtTb2NrZXRVUkxPcHRpb25zfSBzb2NrZXRVUkxPcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBpZGVudGlmeU9wdGlvbnM6IEdhdGV3YXlJZGVudGlmeURhdGEgPSBkZWZhdWx0SWRlbnRpZnlPcHRpb24sXG4gICAgc29ja2V0VVJMT3B0aW9ucyA6IFNvY2tldFVSTE9wdGlvbnMgPSBkZWZhdWx0U29ja2V0VVJMT3B0aW9uXG4gICkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmlkZW50aWZ5T3B0aW9ucyA9IHsuLi5kZWZhdWx0SWRlbnRpZnlPcHRpb24sIC4uLmlkZW50aWZ5T3B0aW9uc31cbiAgICB0aGlzLnNvY2tldFVSTE9wdGlvbnMgPSB7Li4uZGVmYXVsdFNvY2tldFVSTE9wdGlvbiwgLi4uc29ja2V0VVJMT3B0aW9uc31cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dpbiB3aXRoIHRoZSBnaXZlbiBjcmVkZW50aWFsc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rva2VuID0gdGhpcy5vcHRpb25zLnRva2VuXSBUb2tlbiB0byBsb2dpblxuICAgKiBAcmV0dXJucyB7Q2xpZW50fSBUaGUgY2xpZW50XG4gICAqL1xuICAvLyBUT0RPOiBPcmdhbml6ZSBFcnJvcnNcbiAgYXN5bmMgbG9naW4odG9rZW4gOiBzdHJpbmcgPSB0aGlzLmlkZW50aWZ5T3B0aW9ucy50b2tlbik6IFByb21pc2U8Q2xpZW50PiB7XG4gICAgaWYgKCF0b2tlbiB8fCB0b2tlbiA9PSAnJykgdGhyb3cgJ0ludmFsaWQgdG9rZW4nXG4gICAgdGhpcy5pZGVudGlmeU9wdGlvbnMudG9rZW4gPSB0b2tlblxuICAgIFxuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLnNvY2tldFVSTE9wdGlvbnMpLmZvckVhY2goKFtrZXksIHZhbHVlXSA6IEFycmF5PHN0cmluZz4pID0+IHtcbiAgICAgIHBhcmFtZXRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgfSlcbiAgICBcbiAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldCh0aGlzLl9iYXNlVXJsKycvPycrcGFyYW1ldGVycy50b1N0cmluZygpKVxuXG4gICAgdGhpcy53cy5vbm1lc3NhZ2UgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBwYXlsb2FkIDogR2F0ZXdheVJlY2VpdmVQYXlsb2FkID0gdGhpcy5fdW5wYWNrKGUuZGF0YSlcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JhdycsIHsgZGV0YWlsOiBwYXlsb2FkIH0pKVxuICAgICAgc3dpdGNoIChwYXlsb2FkLm9wKSB7XG4gICAgICAgIGNhc2UgR2F0ZXdheU9wY29kZXMuRGlzcGF0Y2g6XG4gICAgICAgICAgZGlzcGF0Y2hSZWNlaXZlLmNhbGwodGhpcywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHYXRld2F5T3Bjb2Rlcy5IZWFydGJlYXQ6XG4gICAgICAgICAgaGVhcnRiZWF0UmVjZWl2ZS5jYWxsKHRoaXMsIHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgR2F0ZXdheU9wY29kZXMuUmVjb25uZWN0OlxuICAgICAgICAgIHJlY29ubmVjdFJlY2VpdmUuY2FsbCh0aGlzLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdhdGV3YXlPcGNvZGVzLkludmFsaWRTZXNzaW9uOlxuICAgICAgICAgIGludmFsaWRTZXNzaW9uUmVjZWl2ZS5jYWxsKHRoaXMsIHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgR2F0ZXdheU9wY29kZXMuSGVsbG86XG4gICAgICAgICAgaGVsbG9SZWNlaXZlLmNhbGwodGhpcywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHYXRld2F5T3Bjb2Rlcy5IZWFydGJlYXRBY2s6XG4gICAgICAgICAgaGVhcnRiZWF0QWNrUmVjZWl2ZS5jYWxsKHRoaXMpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBfcGFjayA9IEpTT04uc3RyaW5naWZ5XG5cbiAgX3VucGFjayA9IEpTT04ucGFyc2Vcbn1cblxuLy9UT0RPOiBJIGRvbid0IGtub3cgc2hhcmRzXG4vL1RPRE86IHZhbGlkYXRlIHVzZXIgaW5wdXRzXG4vL1RPRE86IGFkZCBzdXBwb3J0IGZvciBldGYgZW5jb2RpbmcgYW5kIG90aGVyIHN1cHByZXNzaW9uc1xuZXhwb3J0IHsgQ2xpZW50LCBTb2NrZXRVUkxPcHRpb25zIH0iLCJpbXBvcnQgeyBHYXRld2F5RGlzcGF0Y2hQYXlsb2FkIH0gZnJvbSBcImRpc2NvcmQtYXBpLXR5cGVzL3YxMFwiO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIi4uLy4uL0NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaFJlY2VpdmUgKHRoaXM6IENsaWVudCwgcGF5bG9hZDogR2F0ZXdheURpc3BhdGNoUGF5bG9hZCkge1xuICBcbn0iLCJpbXBvcnQgeyBHYXRld2F5SGVhcnRiZWF0UmVxdWVzdCB9IGZyb20gXCJkaXNjb3JkLWFwaS10eXBlcy92MTBcIjtcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCIuLi8uLi9DbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhcnRiZWF0UmVjZWl2ZSh0aGlzOiBDbGllbnQsIHBheWxvYWQ6IEdhdGV3YXlIZWFydGJlYXRSZXF1ZXN0KSB7XG4gIHRoaXMud3Ncbn0iLCJpbXBvcnQgeyBHYXRld2F5SGVhcnRiZWF0QWNrIH0gZnJvbSBcImRpc2NvcmQtYXBpLXR5cGVzL3YxMFwiO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIi4uLy4uL0NsaWVudFwiO1xuaW1wb3J0IGhlYXJ0YmVhdFNlbmQgZnJvbSBcIi4uL3NlbmQvaGVhcnRiZWF0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYXJ0YmVhdEFja1JlY2VpdmUgKHRoaXM6IENsaWVudCkge1xuICB0aGlzLl9oZWFydGJlYXRUaW1lb3V0ID0gc2V0VGltZW91dChoZWFydGJlYXRTZW5kLmNhbGwsIHRoaXMuX2hlYXJ0YmVhdEludGVydmFsLCB0aGlzKVxufSIsImltcG9ydCB7IEdhdGV3YXlIZWxsbyB9IGZyb20gXCJkaXNjb3JkLWFwaS10eXBlcy92MTBcIjtcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCIuLi8uLi9DbGllbnRcIjtcbmltcG9ydCBoZWFydGJlYXRTZW5kIGZyb20gXCIuLi9zZW5kL2hlYXJ0YmVhdFwiO1xuaW1wb3J0IGlkZW50aWZ5U2VuZCBmcm9tIFwiLi4vc2VuZC9pZGVudGlmeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWxsb1JlY2VpdmUgKHRoaXM6IENsaWVudCwgcGF5bG9hZDogR2F0ZXdheUhlbGxvKSB7XG4gIHRoaXMuX2hlYXJ0YmVhdEludGVydmFsID0gcGF5bG9hZC5kLmhlYXJ0YmVhdF9pbnRlcnZhbFxuICBoZWFydGJlYXRTZW5kLmNhbGwodGhpcylcbiAgaWRlbnRpZnlTZW5kLmNhbGwodGhpcylcbn0iLCJpbXBvcnQgeyBHYXRld2F5SW52YWxpZFNlc3Npb24gfSBmcm9tIFwiZGlzY29yZC1hcGktdHlwZXMvdjEwXCI7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiLi4vLi4vQ2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludmFsaWRTZXNzaW9uUmVjZWl2ZSAodGhpczogQ2xpZW50LCBwYXlsb2FkOiBHYXRld2F5SW52YWxpZFNlc3Npb24pIHtcblxufSIsImltcG9ydCB7IEdhdGV3YXlSZWNvbm5lY3QgfSBmcm9tIFwiZGlzY29yZC1hcGktdHlwZXMvdjEwXCI7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiLi4vLi4vQ2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY29ubmVjdFJlY2VpdmUgKHRoaXM6IENsaWVudCwgcGF5bG9hZDogR2F0ZXdheVJlY29ubmVjdCkge1xuICBcbn0iLCJpbXBvcnQgeyBHYXRld2F5SGVhcnRiZWF0LCBHYXRld2F5T3Bjb2RlcyB9IGZyb20gXCJkaXNjb3JkLWFwaS10eXBlcy92MTBcIjtcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCIuLi8uLi9DbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhcnRiZWF0U2VuZCAodGhpczogQ2xpZW50KSB7XG4gIGNvbnN0IHBheWxvYWQgOiBHYXRld2F5SGVhcnRiZWF0ID0ge1xuICAgIG9wOiBHYXRld2F5T3Bjb2Rlcy5IZWFydGJlYXQsXG4gICAgZDogdGhpcy5fc2VxdWVuY2VOdW1iZXJcbiAgfVxuICB0aGlzLndzLnNlbmQodGhpcy5fcGFjayhwYXlsb2FkKSlcbn0iLCJpbXBvcnQgeyBHYXRld2F5SWRlbnRpZnksIEdhdGV3YXlPcGNvZGVzIH0gZnJvbSBcImRpc2NvcmQtYXBpLXR5cGVzL3YxMFwiO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIi4uLy4uL0NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZGVudGlmeVNlbmQgKHRoaXM6IENsaWVudCkge1xuICBjb25zdCBwYXlsb2FkIDogR2F0ZXdheUlkZW50aWZ5ID0ge1xuICAgIG9wOiBHYXRld2F5T3Bjb2Rlcy5JZGVudGlmeSxcbiAgICBkOiB0aGlzLmlkZW50aWZ5T3B0aW9uc1xuICB9XG4gIHRoaXMud3Muc2VuZCh0aGlzLl9wYWNrKHBheWxvYWQpKVxufSIsImltcG9ydCB7IEdhdGV3YXlJZGVudGlmeURhdGEgfSBmcm9tIFwiZGlzY29yZC1hcGktdHlwZXMvdjEwXCI7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBTb2NrZXRVUkxPcHRpb25zIH0gZnJvbSBcIi4uL2NsaWVudC9DbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJZGVudGlmeU9wdGlvbiA6IEdhdGV3YXlJZGVudGlmeURhdGEgPSB7XG4gIHRva2VuIDogJycsXG4gIHByb3BlcnRpZXMgOiB7XG4gICAgb3M6IHBsYXRmb3JtLm9zPy50b1N0cmluZygpIHx8ICdsaW51eCcsXG4gICAgYnJvd3NlcjogJ2Jyb3dzY29yZC5qcycsXG4gICAgZGV2aWNlOiAnYnJvd3Njb3JkLmpzJ1xuICB9LFxuICBpbnRlbnRzOiAwXG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U29ja2V0VVJMT3B0aW9uIDogU29ja2V0VVJMT3B0aW9ucyA9IHtcbiAgdjogMTAsXG4gIGVuY29kaW5nOiAnanNvbidcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCIuL3YxMC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBtb2Q7XG5leHBvcnQgY29uc3QgQVBJQXBwbGljYXRpb25Db21tYW5kUGVybWlzc2lvbnNDb25zdGFudCA9IG1vZC5BUElBcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uc0NvbnN0YW50O1xuZXhwb3J0IGNvbnN0IEFQSVZlcnNpb24gPSBtb2QuQVBJVmVyc2lvbjtcbmV4cG9ydCBjb25zdCBBY3Rpdml0eUZsYWdzID0gbW9kLkFjdGl2aXR5RmxhZ3M7XG5leHBvcnQgY29uc3QgQWN0aXZpdHlQbGF0Zm9ybSA9IG1vZC5BY3Rpdml0eVBsYXRmb3JtO1xuZXhwb3J0IGNvbnN0IEFjdGl2aXR5VHlwZSA9IG1vZC5BY3Rpdml0eVR5cGU7XG5leHBvcnQgY29uc3QgQWxsb3dlZE1lbnRpb25zVHlwZXMgPSBtb2QuQWxsb3dlZE1lbnRpb25zVHlwZXM7XG5leHBvcnQgY29uc3QgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZSA9IG1vZC5BcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlO1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb25UeXBlID0gbW9kLkFwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb25UeXBlO1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aW9uQ29tbWFuZFR5cGUgPSBtb2QuQXBwbGljYXRpb25Db21tYW5kVHlwZTtcbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvbkZsYWdzID0gbW9kLkFwcGxpY2F0aW9uRmxhZ3M7XG5leHBvcnQgY29uc3QgQXVkaXRMb2dFdmVudCA9IG1vZC5BdWRpdExvZ0V2ZW50O1xuZXhwb3J0IGNvbnN0IEF1ZGl0TG9nT3B0aW9uc1R5cGUgPSBtb2QuQXVkaXRMb2dPcHRpb25zVHlwZTtcbmV4cG9ydCBjb25zdCBCdXR0b25TdHlsZSA9IG1vZC5CdXR0b25TdHlsZTtcbmV4cG9ydCBjb25zdCBDRE5Sb3V0ZXMgPSBtb2QuQ0ROUm91dGVzO1xuZXhwb3J0IGNvbnN0IENoYW5uZWxGbGFncyA9IG1vZC5DaGFubmVsRmxhZ3M7XG5leHBvcnQgY29uc3QgQ2hhbm5lbFR5cGUgPSBtb2QuQ2hhbm5lbFR5cGU7XG5leHBvcnQgY29uc3QgQ29tcG9uZW50VHlwZSA9IG1vZC5Db21wb25lbnRUeXBlO1xuZXhwb3J0IGNvbnN0IENvbm5lY3Rpb25TZXJ2aWNlID0gbW9kLkNvbm5lY3Rpb25TZXJ2aWNlO1xuZXhwb3J0IGNvbnN0IENvbm5lY3Rpb25WaXNpYmlsaXR5ID0gbW9kLkNvbm5lY3Rpb25WaXNpYmlsaXR5O1xuZXhwb3J0IGNvbnN0IEVtYmVkVHlwZSA9IG1vZC5FbWJlZFR5cGU7XG5leHBvcnQgY29uc3QgRm9ybWF0dGluZ1BhdHRlcm5zID0gbW9kLkZvcm1hdHRpbmdQYXR0ZXJucztcbmV4cG9ydCBjb25zdCBHYXRld2F5Q2xvc2VDb2RlcyA9IG1vZC5HYXRld2F5Q2xvc2VDb2RlcztcbmV4cG9ydCBjb25zdCBHYXRld2F5RGlzcGF0Y2hFdmVudHMgPSBtb2QuR2F0ZXdheURpc3BhdGNoRXZlbnRzO1xuZXhwb3J0IGNvbnN0IEdhdGV3YXlJbnRlbnRCaXRzID0gbW9kLkdhdGV3YXlJbnRlbnRCaXRzO1xuZXhwb3J0IGNvbnN0IEdhdGV3YXlPcGNvZGVzID0gbW9kLkdhdGV3YXlPcGNvZGVzO1xuZXhwb3J0IGNvbnN0IEdhdGV3YXlWZXJzaW9uID0gbW9kLkdhdGV3YXlWZXJzaW9uO1xuZXhwb3J0IGNvbnN0IEd1aWxkRGVmYXVsdE1lc3NhZ2VOb3RpZmljYXRpb25zID0gbW9kLkd1aWxkRGVmYXVsdE1lc3NhZ2VOb3RpZmljYXRpb25zO1xuZXhwb3J0IGNvbnN0IEd1aWxkRXhwbGljaXRDb250ZW50RmlsdGVyID0gbW9kLkd1aWxkRXhwbGljaXRDb250ZW50RmlsdGVyO1xuZXhwb3J0IGNvbnN0IEd1aWxkRmVhdHVyZSA9IG1vZC5HdWlsZEZlYXR1cmU7XG5leHBvcnQgY29uc3QgR3VpbGRIdWJUeXBlID0gbW9kLkd1aWxkSHViVHlwZTtcbmV4cG9ydCBjb25zdCBHdWlsZE1GQUxldmVsID0gbW9kLkd1aWxkTUZBTGV2ZWw7XG5leHBvcnQgY29uc3QgR3VpbGROU0ZXTGV2ZWwgPSBtb2QuR3VpbGROU0ZXTGV2ZWw7XG5leHBvcnQgY29uc3QgR3VpbGRQcmVtaXVtVGllciA9IG1vZC5HdWlsZFByZW1pdW1UaWVyO1xuZXhwb3J0IGNvbnN0IEd1aWxkU2NoZWR1bGVkRXZlbnRFbnRpdHlUeXBlID0gbW9kLkd1aWxkU2NoZWR1bGVkRXZlbnRFbnRpdHlUeXBlO1xuZXhwb3J0IGNvbnN0IEd1aWxkU2NoZWR1bGVkRXZlbnRQcml2YWN5TGV2ZWwgPSBtb2QuR3VpbGRTY2hlZHVsZWRFdmVudFByaXZhY3lMZXZlbDtcbmV4cG9ydCBjb25zdCBHdWlsZFNjaGVkdWxlZEV2ZW50U3RhdHVzID0gbW9kLkd1aWxkU2NoZWR1bGVkRXZlbnRTdGF0dXM7XG5leHBvcnQgY29uc3QgR3VpbGRTeXN0ZW1DaGFubmVsRmxhZ3MgPSBtb2QuR3VpbGRTeXN0ZW1DaGFubmVsRmxhZ3M7XG5leHBvcnQgY29uc3QgR3VpbGRWZXJpZmljYXRpb25MZXZlbCA9IG1vZC5HdWlsZFZlcmlmaWNhdGlvbkxldmVsO1xuZXhwb3J0IGNvbnN0IEd1aWxkV2lkZ2V0U3R5bGUgPSBtb2QuR3VpbGRXaWRnZXRTdHlsZTtcbmV4cG9ydCBjb25zdCBJbWFnZUZvcm1hdCA9IG1vZC5JbWFnZUZvcm1hdDtcbmV4cG9ydCBjb25zdCBJbnRlZ3JhdGlvbkV4cGlyZUJlaGF2aW9yID0gbW9kLkludGVncmF0aW9uRXhwaXJlQmVoYXZpb3I7XG5leHBvcnQgY29uc3QgSW50ZXJhY3Rpb25SZXNwb25zZVR5cGUgPSBtb2QuSW50ZXJhY3Rpb25SZXNwb25zZVR5cGU7XG5leHBvcnQgY29uc3QgSW50ZXJhY3Rpb25UeXBlID0gbW9kLkludGVyYWN0aW9uVHlwZTtcbmV4cG9ydCBjb25zdCBJbnZpdGVUYXJnZXRUeXBlID0gbW9kLkludml0ZVRhcmdldFR5cGU7XG5leHBvcnQgY29uc3QgTG9jYWxlID0gbW9kLkxvY2FsZTtcbmV4cG9ydCBjb25zdCBNZW1iZXJzaGlwU2NyZWVuaW5nRmllbGRUeXBlID0gbW9kLk1lbWJlcnNoaXBTY3JlZW5pbmdGaWVsZFR5cGU7XG5leHBvcnQgY29uc3QgTWVzc2FnZUFjdGl2aXR5VHlwZSA9IG1vZC5NZXNzYWdlQWN0aXZpdHlUeXBlO1xuZXhwb3J0IGNvbnN0IE1lc3NhZ2VGbGFncyA9IG1vZC5NZXNzYWdlRmxhZ3M7XG5leHBvcnQgY29uc3QgTWVzc2FnZVR5cGUgPSBtb2QuTWVzc2FnZVR5cGU7XG5leHBvcnQgY29uc3QgT0F1dGgyUm91dGVzID0gbW9kLk9BdXRoMlJvdXRlcztcbmV4cG9ydCBjb25zdCBPQXV0aDJTY29wZXMgPSBtb2QuT0F1dGgyU2NvcGVzO1xuZXhwb3J0IGNvbnN0IE92ZXJ3cml0ZVR5cGUgPSBtb2QuT3ZlcndyaXRlVHlwZTtcbmV4cG9ydCBjb25zdCBQZXJtaXNzaW9uRmxhZ3NCaXRzID0gbW9kLlBlcm1pc3Npb25GbGFnc0JpdHM7XG5leHBvcnQgY29uc3QgUHJlc2VuY2VVcGRhdGVTdGF0dXMgPSBtb2QuUHJlc2VuY2VVcGRhdGVTdGF0dXM7XG5leHBvcnQgY29uc3QgUkVTVEpTT05FcnJvckNvZGVzID0gbW9kLlJFU1RKU09ORXJyb3JDb2RlcztcbmV4cG9ydCBjb25zdCBSUENDbG9zZUV2ZW50Q29kZXMgPSBtb2QuUlBDQ2xvc2VFdmVudENvZGVzO1xuZXhwb3J0IGNvbnN0IFJQQ0Vycm9yQ29kZXMgPSBtb2QuUlBDRXJyb3JDb2RlcztcbmV4cG9ydCBjb25zdCBSb3V0ZUJhc2VzID0gbW9kLlJvdXRlQmFzZXM7XG5leHBvcnQgY29uc3QgUm91dGVzID0gbW9kLlJvdXRlcztcbmV4cG9ydCBjb25zdCBTb3J0T3JkZXJUeXBlID0gbW9kLlNvcnRPcmRlclR5cGU7XG5leHBvcnQgY29uc3QgU3RhZ2VJbnN0YW5jZVByaXZhY3lMZXZlbCA9IG1vZC5TdGFnZUluc3RhbmNlUHJpdmFjeUxldmVsO1xuZXhwb3J0IGNvbnN0IFN0aWNrZXJGb3JtYXRUeXBlID0gbW9kLlN0aWNrZXJGb3JtYXRUeXBlO1xuZXhwb3J0IGNvbnN0IFN0aWNrZXJQYWNrQXBwbGljYXRpb25JZCA9IG1vZC5TdGlja2VyUGFja0FwcGxpY2F0aW9uSWQ7XG5leHBvcnQgY29uc3QgU3RpY2tlclR5cGUgPSBtb2QuU3RpY2tlclR5cGU7XG5leHBvcnQgY29uc3QgVGVhbU1lbWJlck1lbWJlcnNoaXBTdGF0ZSA9IG1vZC5UZWFtTWVtYmVyTWVtYmVyc2hpcFN0YXRlO1xuZXhwb3J0IGNvbnN0IFRleHRJbnB1dFN0eWxlID0gbW9kLlRleHRJbnB1dFN0eWxlO1xuZXhwb3J0IGNvbnN0IFRocmVhZEF1dG9BcmNoaXZlRHVyYXRpb24gPSBtb2QuVGhyZWFkQXV0b0FyY2hpdmVEdXJhdGlvbjtcbmV4cG9ydCBjb25zdCBUaHJlYWRNZW1iZXJGbGFncyA9IG1vZC5UaHJlYWRNZW1iZXJGbGFncztcbmV4cG9ydCBjb25zdCBVc2VyRmxhZ3MgPSBtb2QuVXNlckZsYWdzO1xuZXhwb3J0IGNvbnN0IFVzZXJQcmVtaXVtVHlwZSA9IG1vZC5Vc2VyUHJlbWl1bVR5cGU7XG5leHBvcnQgY29uc3QgVXRpbHMgPSBtb2QuVXRpbHM7XG5leHBvcnQgY29uc3QgVmlkZW9RdWFsaXR5TW9kZSA9IG1vZC5WaWRlb1F1YWxpdHlNb2RlO1xuZXhwb3J0IGNvbnN0IFdlYmhvb2tUeXBlID0gbW9kLldlYmhvb2tUeXBlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiZXhwb3J0ICogZnJvbSBcIi4vY2xpZW50L0NsaWVudFwiXG5cbmV4cG9ydCAqIGZyb20gXCJkaXNjb3JkLWFwaS10eXBlcy92MTBcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==