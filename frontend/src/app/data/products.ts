export interface Feature {
    name: string
    description: string
}

export interface Product {
    title: string
    description: string
    features: Feature[]
    status: 'active' | 'coming_soon'
    link?: string
}

export const products: Product[] = [
    {
        title: 'Inevents WebSocket',
        description: 'WebSocket API for backend and frontend',
        features: [
            {
                name: 'Server-side JSON filtering',
                description: 'Filter your WebSocket messages on the server side using JSON path expressions to reduce bandwidth and processing on the client.'
            },
            {
                name: '20+ pre-built events',
                description: 'Common events like contract logs, transfers, transactions, and more are populated by Intear and ready to use. Check docs.intear.tech for the full list.'
            },
            {
                name: 'Rust and TypeScript SDKs',
                description: 'Official SDKs for both backend and frontend.'
            }
        ],
        status: 'coming_soon',
        link: 'https://intear.io/signup'
    },
    {
        title: 'Hosted Indexer',
        description: 'Host your own NEAR indexer',
        features: [
            {
                name: 'Write in Rust and JavaScript',
                description: 'Build your indexer using either Rust, JavaScript, or in theory, any language that can be compiled to WebAssembly (but official SDKs exist for Rust and JavaScript).'
            },
            {
                name: 'Guaranteed atomicity',
                description: 'If your indexer crashes mid-block, you won\'t receive partial data, it either processes the entire block or nothing. Receive data from your application as an array of events that happened during that block, so you can\'t process partial data.'
            },
            {
                name: 'Minimal latency',
                description: 'We offer a direct connection to Intear Validator node, hosted in the same datacenter, with ultra-fast RPC requests and low block time latency. Index either finalized or optimistic (doomslug) blocks.'
            },
            {
                name: 'Use in Rainy or directly',
                description: 'Seamlessly integrate your indexed data with Inevents WebSocket, Inevents Database, or consume it from our Redis Stream. Redis Streams allow you to read from a stream with guaranteed sequential and atomic access. Rust and TypeScript SDKs included.'
            }
        ],
        status: 'coming_soon'
    },
    {
        title: 'Inevents Database',
        description: 'PostgreSQL for your events and aggregations.',
        features: [
            {
                name: 'TimescaleDB',
                description: 'If you want to query by time, or want to compress old data, you can use TimescaleDB extension.'
            },
            {
                name: 'Custom schemas',
                description: 'Define your own CREATE TABLE, batch-INSERT, CREATE INDEX, and other statements, or have direct access to the database.'
            },
            {
                name: 'SQL as REST API',
                description: 'Write custom SQL queries that automatically become REST API endpoints with proper caching and security.'
            }
        ],
        status: 'coming_soon'
    },
    {
        title: 'Eliza',
        description: 'AI agent framework by ai16z, hosted on Rainy',
        features: [
            {
                name: 'Full control',
                description: 'Rumors say that you can even SSH into the machine.'
            },
            {
                name: 'No-code configuration',
                description: 'Configure your agent through a user-friendly interface without writing any code (unless you want unique behavior).'
            },
            {
                name: 'Rainy integration',
                description: 'Trigger your agent by events from Hosted Indexer or Inevents WebSocket, give it access to Inevents Database APIs, RPC view calls.'
            }
        ],
        status: 'coming_soon'
    },
    {
        title: 'Tear',
        description: 'Telegram bot like t.me/BettearBot',
        features: [
            {
                name: '15+ different modules',
                description: 'Alerts, wallet tracking, trading, AI moderation, and more.'
            },
            {
                name: 'Disable limits',
                description: 'Remove all limits that are set by Bettear (Telegram bot limits still apply).'
            },
            {
                name: 'Custom profile',
                description: 'Set your own @handle, name, and profile picture.'
            }
        ],
        status: 'coming_soon'
    },
    {
        title: 'Intear Oracle',
        description: 'Respond to requests from smart contracts',
        features: [
            {
                name: 'Write in Rust and JavaScript',
                description: 'Create oracle services using either Rust or JavaScript.'
            },
            {
                name: 'Store secrets',
                description: 'Securely store and manage API keys and other secrets needed for your oracle operations.'
            },
            {
                name: 'Minimal latency',
                description: 'We offer a direct connection to Intear Validator node, hosted in the same datacenter, with ultra-fast RPC requests and low block time latency. Optionally, you can start preparing your response while the block has not been finalized yet.'
            }
        ],
        status: 'coming_soon'
    },
    {
        title: 'NEAR Node',
        description: 'Shared (billed per-request) or dedicated (billed monthly) RPC nodes',
        features: [
            {
                name: 'Custom RPC Limits',
                description: 'Set your own request rate limit per IP, whitelist Referer\'s and IPs that can access your node.'
            },
            {
                name: 'Archival Node',
                description: 'We also offer access to the archive of the blockchain, including all blocks and transactions. Normal nodes only have access to the last few epochs.'
            },
            {
                name: 'Validator Node',
                description: 'Become a validator without having to worry about the technical details. Updates and maintenance is handled by us.'
            }
        ],
        status: 'coming_soon'
    }
] 