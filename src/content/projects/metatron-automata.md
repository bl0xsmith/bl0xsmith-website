---
title: "Metatron Automata"
description: "An AI-first agentic automated trading platform running across crypto, forex, equities, and perpetuals — with modular signal processing, strategy execution, and real-time P&L."
tags:
  [
    "AI Agents",
    "Trading Automation",
    "TypeScript",
    "Event-Driven",
    "Crypto",
    "Forex",
  ]
featured: true
---

Metatron Automata is my primary personal project — an automated trading platform I've been designing, building, re-building and refining since 2021. It runs across crypto, forex, equities, and perpetual contracts with a fully modular architecture designed for autonomous, agent-capable strategy execution.

## Architecture

The core is an event-driven system that streams multiple signal types — price feeds, volume data, and sentiment signals — from different sources into various strategies that may or may not be coupled with agents. Each agent runs analysis on incoming data and makes execution decisions based on configured rules and AI-assisted logic.

**Signal Layer** — Modular data ingestion from multiple market sources. Each signal type (price, volume, sentiment) flows through a normalized pipeline before reaching strategies and/or agents.

**Strategy Engine** — Agent-capable strategy runners that can consume signals, apply technical indicator analysis, and generate order instructions amongst other things. Strategies are composable and independently deployable.

**Execution Layer** — Order management across multiple exchanges and asset classes. Handles market and limit orders, position tracking, and reconciliation.

**Risk Controls** — Guardrails baked into every order: leverage/margin limits, take-profit and stop-loss enforcement, position sizing rules, and drawdown protection.

## Real-Time P&L

The platform tracks open and closed P&L in real time across all active positions, with full reconciliation against exchange data. Every trade is logged for audit and analysis.

## Why I Built It

I wanted a system I owned completely — from signal to execution to reconciliation — that I could run continuously and improve over time. Most commercial tools are black boxes. Metatron Automata is the opposite: every component is instrumented, observable, and replaceable.

It's also where I apply what I've learned building production trading infrastructure professionally to a system running my own capital across my own strategies.
