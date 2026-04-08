---
title: "MetaMask Perps"
description: "Perpetuals trading built into MetaMask — market/limit orders, TP/SL, margin/leverage, real-time P&L and liquidation. Became the #1 company-wide revenue driver at ConsenSys within 4 months of launch."
tags: ["Perps", "DeFi", "TypeScript", "React Native", "React", "Trading", "ConsenSys"]
featured: true
---

MetaMask Perps is the perpetuals trading product I built as primary engineer on the Advanced Trading team at ConsenSys. It launched inside the MetaMask mobile app and browser extension and became the #1 revenue driver across the entire company within approximately four months of release.

## What I Built

**Core Trading Flow** — The complete order execution pipeline: market orders, limit orders, take-profit and stop-loss triggers, margin and leverage management, and liquidation/risk logic. Everything that happens between a user tapping "Buy" and a position opening on-chain.

**Real-Time P&L** — Live unrealized and realized profit/loss tracking across all open positions. Price feeds integrated from multiple sources, reconciled against on-chain execution data across both mobile and extension clients.

**Execution & Reconciliation** — Order management system that handles the full lifecycle: submission, confirmation, partial fills, cancellations, and settlement. Reconciliation runs continuously to ensure client state matches chain state.

**Cross-Client Architecture** — The same trading infrastructure powers both the MetaMask mobile app (React Native) and browser extension (React). Shared business logic, client-specific rendering.

## Impact

- #1 company-wide revenue driver at ConsenSys within ~4 months of launch
- Built and shipped the complete perps trading flow from zero
- Real-time P&L, price feeds, and reconciliation running across mobile and extension

## Stack

TypeScript, React Native, React, NestJS — integrated with DeFi protocol contracts on EVM chains, with price oracle integrations and on-chain position management.
