---
title: "Moonbirds Contract Listener Infra"
description: "Re-architected the core contract listener micro-service at PROOF/Moonbirds — 96.88% memory reduction, scaled from ~10 to hundreds of contracts with stable event processing."
tags: ["Web3", "NestJS", "TypeScript", "Micro-services", "Ethereum", "NFT"]
featured: false
---

At PROOF (the studio behind Moonbirds, later acquired by Yuga Labs), I led backend engineering focused on the blockchain infrastructure that powers token-gated experiences and trading features for the Moonbirds ecosystem.

## Contract Listener Optimization

The most impactful piece of work was a complete optimization of the core contract listener micro-service — the system responsible for ingesting on-chain events from Ethereum contracts in real time.

**Before:** The service monitored approximately 10 contracts and struggled with memory growth under load, making it impractical to scale.

**After:** A full rewrite of the event processing architecture reduced memory usage by **96.88%** and allowed the service to stably monitor **hundreds of contracts simultaneously** — opening the door to expanding Moonbirds' on-chain engagement features without infrastructure constraints.

The optimization involved rethinking how event subscriptions were managed, how decoded event data was buffered and processed, and how the service handled reconnections and block reorg scenarios without leaking state.

## NestJS Migration

I also led the migration of the broader micro-service architecture from legacy patterns to NestJS, improving consistency, modularity, and long-term maintainability across the backend. Each service was refactored to use NestJS modules, dependency injection, and a shared set of infrastructure primitives (logging, health checks, config management).

## Stack

NestJS, TypeScript, Ethereum JSON-RPC, Ethers.js — running against Ethereum mainnet with event-driven processing pipelines.
