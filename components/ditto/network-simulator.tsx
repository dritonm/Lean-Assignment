'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

const DEVICES = [
  {
    id: 'pos',
    name: 'POS Terminal',
    role: 'Counter Register',
    protocol: 'LAN / BLE',
    latency: '< 2ms',
  },
  {
    id: 'handheld',
    name: 'Handheld Tablet',
    role: 'Floor Order Taker',
    protocol: 'P2P Wi-Fi',
    latency: '< 3ms',
  },
  {
    id: 'kds',
    name: 'Kitchen Display',
    role: 'Order Prep Screen',
    protocol: 'LAN Mesh',
    latency: '< 2ms',
  },
  {
    id: 'printer',
    name: 'Receipt Printer',
    role: 'Counter / Kitchen',
    protocol: 'BLE 5.2',
    latency: '< 4ms',
  },
]

function SyncDots({ offline }: { offline: boolean }) {
  return (
    <div className="flex items-center gap-1">
      {[0, 0.15, 0.3].map((delay) => (
        <motion.span
          key={delay}
          className={cn('h-1 w-1 rounded-full', offline ? 'bg-signal' : 'bg-emerald-500')}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.4, repeat: Infinity, delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export function NetworkSimulator() {
  const [offline, setOffline] = useState(true)
  const [txCount, setTxCount] = useState(1488)

  useEffect(() => {
    const interval = setInterval(() => {
      setTxCount((prev) => prev + 1)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden rounded-3xl border border-hairline bg-panel">
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="flex flex-col justify-between gap-4 border-b border-hairline px-6 py-5 sm:flex-row sm:items-center">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                'h-2 w-2 shrink-0 rounded-full',
                offline ? 'bg-signal' : 'bg-emerald-500',
              )}
            />
            <span className="font-mono text-xs font-medium tracking-wider text-ink">
              Live store network topology
            </span>
          </div>
          <p className="mt-0.5 text-xs text-muted-ink">
            {offline
              ? 'Central cloud disconnected — peer-to-peer mesh actively synchronizing orders.'
              : 'Central server online — devices connected via cloud relay.'}
          </p>
        </div>

        {/* Mode toggle */}
        <div className="flex shrink-0 items-center rounded-full border border-hairline bg-paper-2 p-1">
          <button
            type="button"
            onClick={() => setOffline(false)}
            className={cn(
              'rounded-full px-4 py-1.5 font-mono text-[11px] transition-colors duration-200',
              !offline ? 'bg-panel text-ink shadow-sm' : 'text-muted-ink hover:text-ink',
            )}
          >
            Cloud online
          </button>
          <button
            type="button"
            onClick={() => setOffline(true)}
            className={cn(
              'flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-[11px] transition-colors duration-200',
              offline ? 'bg-ink text-paper shadow-sm' : 'text-muted-ink hover:text-ink',
            )}
          >
            <span
              className={cn(
                'h-1.5 w-1.5 rounded-full',
                offline ? 'bg-signal' : 'bg-muted-ink',
              )}
            />
            Offline mesh
          </button>
        </div>
      </div>

      {/* ── Canvas ─────────────────────────────────────────────── */}
      <div className="bg-paper-2 p-6">
        {/* Cloud status pill */}
        <div className="mb-6 flex justify-center">
          <motion.div
            animate={{
              borderColor: offline ? 'rgba(201,87,63,0.4)' : 'rgba(213,213,205,1)',
              backgroundColor: offline ? 'rgba(201,87,63,0.06)' : 'rgba(255,255,255,1)',
            }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 rounded-2xl border px-4 py-2"
          >
            {/* Cloud icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className={offline ? 'text-danger' : 'text-ash'}
            >
              <path
                d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-mono text-[11px] font-medium text-ink">Central Cloud</span>
            <span
              className={cn(
                'font-mono text-[10px]',
                offline ? 'text-danger' : 'text-emerald-600',
              )}
            >
              {offline ? '(Outage)' : '(Active)'}
            </span>
          </motion.div>
        </div>

        {/* Mesh connection line (visual only) */}
        <div className="relative mb-4 flex justify-center">
          <div
            className={cn(
              'h-5 w-px transition-opacity duration-400',
              offline ? 'opacity-20' : 'opacity-60',
            )}
            style={{
              backgroundImage: offline
                ? 'repeating-linear-gradient(to bottom, #0a0a0a 0px, #0a0a0a 4px, transparent 4px, transparent 8px)'
                : 'linear-gradient(to bottom, #d5d5cd, #d5d5cd)',
            }}
          />
        </div>

        {/* Device grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {DEVICES.map((device, i) => (
            <motion.div
              key={device.id}
              animate={{
                borderColor: offline ? '#0a0a0a' : '#e4e4de',
              }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex flex-col rounded-2xl border bg-panel p-3"
            >
              {/* Top row: role label + status */}
              <div className="flex items-start justify-between gap-1">
                <span className="min-w-0 font-mono text-[9px] leading-tight text-muted-ink">
                  {device.role}
                </span>
                <span
                  className={cn(
                    'mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full',
                    offline ? 'bg-signal' : 'bg-emerald-500',
                  )}
                />
              </div>

              {/* Device name */}
              <p className="mt-2 text-[12px] font-semibold leading-tight text-ink">
                {device.name}
              </p>

              {/* Protocol badge */}
              <div className="mt-2 flex items-center gap-1">
                <span
                  className={cn(
                    'inline-block h-1 w-3 rounded-sm',
                    offline ? 'bg-ink' : 'bg-ash',
                  )}
                />
                <span className="font-mono text-[9px] text-muted-ink">
                  {offline ? device.protocol : 'Cloud sync'}
                </span>
              </div>

              {/* Footer */}
              <div className="mt-2 flex items-center justify-between border-t border-hairline pt-1.5">
                <span className="font-mono text-[8px] text-ash">0 conflicts</span>
                <span className="font-mono text-[9px] font-semibold text-ink">
                  {device.latency}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mesh connection arrows between devices (visual) */}
        <AnimatePresence>
          {offline && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 flex items-center justify-center gap-2"
            >
              {['BLE', 'Wi-Fi', 'LAN'].map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-1 rounded-xl border border-hairline bg-panel px-2 py-1"
                >
                  <span className="inline-block h-px w-3 border-t border-dashed border-ink opacity-60" />
                  <span className="font-mono text-[9px] text-muted-ink">{label}</span>
                </span>
              ))}
              <SyncDots offline={offline} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Footer strip ───────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline px-6 py-4 font-mono text-[10px] text-muted-ink">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-px w-5 border-t-2 border-dashed border-ink opacity-50" />
            Direct device-to-device sync
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
            CRDT state verified
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-ash">Processed today:</span>
          <span className="font-semibold tabular-nums text-ink">
            {txCount.toLocaleString()} orders
          </span>
        </div>
      </div>
    </div>
  )
}
