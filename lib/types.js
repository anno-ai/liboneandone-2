/**
 * Created by Ali on 7/28/2016.
 */
module.exports = {
    ServerState: {
        POWERING_ON: "POWERING_ON",
        POWERING_OFF: "POWERING_OFF",
        POWERED_ON: "POWERED_ON",
        POWERED_OFF: "POWERED_OFF",
        DEPLOYING: "DEPLOYING",
        REBOOTING: "REBOOTING",
        REMOVING: "REMOVING",
        CONFIGURING: "CONFIGURING"
    },

    ServerUpdateAction: {
        POWER_ON: "POWER_ON",
        POWER_OFF: "POWER_OFF",
        REBOOT: "REBOOT"
    },

    ServerUpdateMethod: {
        SOFTWARE: "SOFTWARE",
        HARDWARE: "HARDWARE"
    },

    ImageFrequency: {
        ONCE: "ONCE",
        DAILY: "DAILY",
        WEEKLY: "WEEKLY"
    },
    StorageServerRights: {
        R: "R",
        RW: "RW"
    },

    RuleProtocol: {
        TCP: "TCP",
        UDP: "UDP"
    },

    HealthCheckTestTypes: {
        TCP: "TCP", HTTP: "HTTP", NONE: "NONE"
    },

    LoadBalancerMethod: {
        ROUND_ROBIN: "ROUND_ROBIN", LEAST_CONNECTIONS: "LEAST_CONNECTIONS"
    },

    IPType: {
        IPV4: "IPV4", IPV6: "IPV4"
    },

    GenericState: {
        ACTIVE: "ACTIVE", REMOVING: "REMOVING",
        CONFIGURING: "CONFIGURING"
    },

    PeriodType: {
        LAST_HOUR: "LAST_HOUR", LAST_24H: "LAST_24H", LAST_7D: "LAST_7D", LAST_30D: "LAST_30D", LAST_365D: "LAST_365D"
    },

    ProtocolType: {
        TCP: "TCP", UDP: "UDP"
    },

    AlertIfType: {
        RESPONDING: "RESPONDING", NOT_RESPONDING: "NOT_RESPONDING"
    },

    ProcessAlertType: {
        RUNNING: "RUNNING", NOT_RUNNING: "NOT_RUNNING"
    },

};
