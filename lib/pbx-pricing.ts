export type PbxAddOn =
  | "CALL_RECORDING"
  | "CALL_STATS_REPORTING"
  | "CRM_INTEGRATION"
  | "ADVANCED_CALL_CENTER"
  | "SALES_TOOLS_CALLBACKS"
  | "AUTO_DIALING"
  | "BRANCHES"
  | "SPEECH_ANALYTICS"
  | "EXTERNAL_PBX_CONNECTOR"
  | "FORWARD_TO_PSTN";

export const PBX_TIERS = {
  VALUE_EDGE: "ValueEdge",
  PREMIUM: "Premium",
  ONE_USER: "One User",
} as const;

// Source: IntarvAS_ValueEdge / Premium / One-User pricing decks (2026 revision) 

export const STANDARD_TIER_CONFIG = {
  VALUE_EDGE: {
    baseRateBasic: 5000, // NGN / user / mo — no add-ons
    baseRateBundled: 4800, // NGN / user / mo — with >=1 add-on
    minUsers: 4,
    teamsSyncRatePerMonth: 7500, // NGN / user / mo
    extraNumberRatePerYear: 25000,
    addOnRates: {
      CALL_RECORDING: 24000,
      CALL_STATS_REPORTING: 16000,
      CRM_INTEGRATION: 16000,
      ADVANCED_CALL_CENTER: 16000,
      SALES_TOOLS_CALLBACKS: 16000,
      AUTO_DIALING: 16000,
      BRANCHES: 0,
      SPEECH_ANALYTICS: 0,
      EXTERNAL_PBX_CONNECTOR: 40000,
      FORWARD_TO_PSTN: 0,
    } satisfies Record<PbxAddOn, number>,
  },
  PREMIUM: {
    baseRateBasic: 12000,
    baseRateBundled: 11200,
    minUsers: 4,
    teamsSyncRatePerMonth: 12500,
    extraNumberRatePerYear: 20000,
    addOnRates: {
      CALL_RECORDING: 50000,
      CALL_STATS_REPORTING: 35000,
      CRM_INTEGRATION: 35000,
      ADVANCED_CALL_CENTER: 35000,
      SALES_TOOLS_CALLBACKS: 35000,
      AUTO_DIALING: 30000,
      BRANCHES: 0,
      SPEECH_ANALYTICS: 0,
      EXTERNAL_PBX_CONNECTOR: 40000,
      FORWARD_TO_PSTN: 0,
    } satisfies Record<PbxAddOn, number>,
  },
  PLUS_AIO: {
    baseRateBasic: 12000,
    baseRateBundled: 11200,
    minUsers: 1,
    teamsSyncRatePerMonth: 12500,
    extraNumberRatePerYear: 20000,
    addOnRates: {
      CALL_RECORDING: 50000,
      CALL_STATS_REPORTING: 35000,
      CRM_INTEGRATION: 35000,
      ADVANCED_CALL_CENTER: 35000,
      SALES_TOOLS_CALLBACKS: 35000,
      AUTO_DIALING: 30000,
      BRANCHES: 0,
      SPEECH_ANALYTICS: 0,
      EXTERNAL_PBX_CONNECTOR: 40000,
      FORWARD_TO_PSTN: 0,
    } satisfies Record<PbxAddOn, number>,
  },
} as const;

// ONE_USER is a distinct product: single seat, flat annual license,
// no add-ons, no Teams Sync — only extra virtual numbers apply.
export const ONE_USER_CONFIG = {
  flatAnnualLicense: 60000, // NGN / year, 1 user
  extraNumberRatePerYear: 30000,
} as const;
