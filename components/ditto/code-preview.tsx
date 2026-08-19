'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

const SNIPPETS = {
  swift: {
    name: 'Swift',
    ext: '.swift',
    frameworks: 'iOS · iPadOS · macOS · SwiftUI',
    code: `// Initialize Ditto with your offline-first credentials
let ditto = Ditto(identity: .onlinePlayground(appId: "YOUR_APP_ID", token: "TOKEN"))
try ditto.startSync()

// 1. Write order locally with zero latency
try await ditto.store.execute(
  query: "INSERT INTO orders DOCUMENTS (:order)",
  arguments: ["order": ["id": "ord_982", "table": 4, "items": ["Burger", "Fries"], "paid": true]]
)

// 2. Real-time live observer updates POS & KDS instantly
try ditto.store.registerObserver(
  query: "SELECT * FROM orders WHERE status = 'pending'"
) { result in
  self.activeTickets = result.items
}

// 3. Sync only relevant store subscriptions across peer mesh
try ditto.sync.registerSubscription(query: "SELECT * FROM orders WHERE storeId = 'store_44'")`,
  },
  kotlin: {
    name: 'Kotlin',
    ext: '.kt',
    frameworks: 'Android · Handhelds · POS Kiosks',
    code: `// Initialize Ditto edge database instance
val ditto = Ditto(DittoIdentity.OnlinePlayground(context, "YOUR_APP_ID", "TOKEN"))
ditto.startSync()

// 1. Insert order to local CRDT document store
ditto.store.execute(
  "INSERT INTO orders DOCUMENTS (:order)",
  mapOf("order" to mapOf("id" to "ord_982", "table" to 4, "total" to 28.50))
)

// 2. Observe changes deterministically merged from mesh
ditto.store.registerObserver("SELECT * FROM orders WHERE status = 'cooking'") { result ->
  updateKitchenDisplay(result.items)
}

// 3. Register mesh peer sync filter
ditto.sync.registerSubscription("SELECT * FROM orders WHERE storeId = 'store_44'")`,
  },
  javascript: {
    name: 'TypeScript',
    ext: '.ts',
    frameworks: 'React · Node · Electron · Web',
    code: `// Initialize Ditto in React POS or Node server
import { init, Ditto } from '@dittolive/ditto'
await init()

const ditto = new Ditto({ type: 'onlinePlayground', appID: 'YOUR_APP_ID', token: 'TOKEN' })
ditto.startSync()

// 1. Execute instant local mutation
await ditto.store.execute(
  \`INSERT INTO orders DOCUMENTS (:order)\`,
  { order: { id: 'ord_982', terminal: 'POS_01', total: 42.00 } }
)

// 2. Reactive real-time state synchronization
ditto.store.registerObserver(
  \`SELECT * FROM orders WHERE status = 'active'\`,
  (result) => {
    setOrders(result.items)
  }
)`,
  },
  csharp: {
    name: 'C#',
    ext: '.cs',
    frameworks: '.NET · Windows POS · Xamarin',
    code: `// Initialize Ditto .NET runtime for legacy & modern POS
var ditto = new Ditto(DittoIdentity.OnlinePlayground("YOUR_APP_ID", "TOKEN"));
ditto.StartSync();

// 1. Insert order into local resilient database
await ditto.Store.ExecuteAsync(
  "INSERT INTO orders DOCUMENTS (@order)",
  new Dictionary<string, object> { { "order", new { id = "ord_982", amount = 19.99 } } }
);

// 2. Stream synchronized transactions
ditto.Store.RegisterObserver("SELECT * FROM orders", (result) => {
  PosTerminalGrid.ItemsSource = result.Items;
});`,
  },
  rust: {
    name: 'Rust',
    ext: '.rs',
    frameworks: 'Embedded IoT · Printers · Edge Linux',
    code: `// Embedded Ditto runtime for receipt printers & IoT gateways
let ditto = Ditto::builder()
    .with_identity(|_| Identity::OnlinePlayground { app_id: "YOUR_APP_ID", token: "TOKEN" })?
    .build()?;

ditto.start_sync()?;

// 1. Process and append local order CRDT
ditto.store().execute(
    "INSERT INTO print_jobs DOCUMENTS (:job)",
    Some(json!({ "job": { "ticket_id": 982, "kds_ready": true } }).into()),
)?;`,
  },
}

type LangKey = keyof typeof SNIPPETS

export function CodePreview() {
  const [activeLang, setActiveLang] = useState<LangKey>('swift')
  const [copied, setCopied] = useState(false)

  const activeSnippet = SNIPPETS[activeLang]

  const copyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-hairline bg-ink text-paper shadow-2xl">
      {/* Top Bar with Language Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/15 bg-ink/90 px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          </span>
          <span className="ml-3 font-mono text-[11px] text-paper/60 tracking-wider">
            Ditto SDK 5.0 · Multi-Platform
          </span>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap items-center gap-1 rounded-full bg-paper/10 p-1">
          {(Object.keys(SNIPPETS) as LangKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveLang(key)}
              className={cn(
                'rounded-full px-3.5 py-1.5 font-mono text-[11px] tracking-wider transition-all',
                activeLang === key
                  ? 'bg-signal text-ink font-bold shadow'
                  : 'text-paper/70 hover:text-paper',
              )}
            >
              {SNIPPETS[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* Code viewport */}
      <div className="relative p-6 sm:p-8">
        <div className="mb-4 flex items-center justify-between border-b border-paper/10 pb-3">
          <div className="flex items-center gap-2 font-mono text-xs text-paper/50">
            <span className="text-signal">●</span>
            <span>index{activeSnippet.ext}</span>
            <span className="text-paper/30">|</span>
            <span className="text-paper/60">{activeSnippet.frameworks}</span>
          </div>
          <button
            type="button"
            onClick={copyCode}
            className="rounded border border-paper/20 bg-paper/5 px-2.5 py-1 font-mono text-[10px] tracking-wider text-paper/80 transition-colors hover:bg-paper/10"
          >
            {copied ? 'Copied ✓' : 'Copy SDK Code'}
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.pre
            key={activeLang}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="overflow-x-auto font-mono text-[13px] leading-relaxed text-paper/90 selection:bg-signal selection:text-ink"
          >
            <code>{activeSnippet.code}</code>
          </motion.pre>
        </AnimatePresence>
      </div>

      {/* Code bottom footer bar */}
      <div className="flex flex-wrap items-center justify-between border-t border-paper/10 bg-paper/[0.03] px-6 py-3 font-mono text-[11px] text-paper/60">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-signal" />
          <span>Zero Server Roundtrips Required</span>
        </div>
        <span className="text-paper/40">Automatic CRDT Deterministic Convergence</span>
      </div>
    </div>
  )
}
