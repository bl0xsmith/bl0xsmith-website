---
title: "DeFi Earn & ETH Staking"
description: "DeFi yield and ETH staking products — $175M+ TVL and 146K+ ETH staked in the first month."
tags: ["DeFi", "Ethereum", "Staking", "TypeScript", "React Native"]
featured: true
---

Two DeFi products I shipped as part of a staking team.

## DeFi Earn

I led the launch of a yield product integrating with Aave that lets users deposit assets into DeFi protocols directly from their wallet. Drove **$175M+ TVL**, hitting 73% of the annual target in a single month from launch.

The engineering work involved:

- Integrating with multiple DeFi protocols for yield aggregation and position management
- Building deposit/withdrawal flows across mobile and extension with shared business logic
- Tracking live yield, position value, and earnings in real time across user portfolios
- Handling protocol-specific quirks around fee structures, lockups, and APY calculations

## ETH Staking

An ETH staking product that lets users stake directly from their wallet, with full visibility into validator status, staking rewards, and withdrawal queues. Since launch, it has seen **146K+ ETH staked**.

The integration covers the full staking lifecycle — deposit submission, beacon chain confirmation, rewards tracking, and unstaking/withdrawal flows — built to work cleanly across both mobile and extension clients.

## Stack

TypeScript, React Native, React — integrated with Ethereum staking contracts, beacon chain APIs, DeFi protocol ABIs, and price oracle feeds.
