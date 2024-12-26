export interface Limit {
    resources: Resources;
    rate:      Rate;
}

export interface Rate {
    limit:     number;
    remaining: number;
    reset:     number;
    used:      number;
    resource:  string;
}

export interface Resources {
    core:                 Rate;
    graphql:              Rate;
    integration_manifest: Rate;
    search:               Rate;
}
