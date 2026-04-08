---
title: "MetaMask Earn & ETH Staking"
description: "DeFi yield and ETH staking products built into MetaMask — $175M+ TVL in the first month and 146K+ ETH staked since launch."
tags: ["DeFi", "Ethereum", "Staking", "TypeScript", "React Native", "ConsenSys"]
featured: false
---

MetaMask Earn and ETH Staking are two DeFi products I shipped as part of the Advanced Trading team at ConsenSys / MetaMask, running alongside the Perps work.

## MetaMask Earn

Earn allows MetaMask users to deposit assets into DeFi yield protocols directly from their wallet. I drove the product to **$175M+ TVL**, hitting 73% of the annual target in a single month from launch.

The engineering work involved:

- Integrating with multiple DeFi protocols for yield aggregation and position management
- Building deposit/withdrawal flows across mobile and extension with shared business logic
- Tracking live yield, position value, and earnings in real time across user portfolios
- Handling protocol-specific quirks around fee structures, lockups, and APY calculations

## ETH Staking

The ETH staking product lets MetaMask users stake ETH directly through the app, with full visibility into validator status, staking rewards, and withdrawal queues. Since launch, it has seen **146K+ ETH staked**.

The integration covers the full staking lifecycle — deposit submission, beacon chain confirmation, rewards tracking, and unstaking/withdrawal flows — built to work cleanly across both mobile and extension clients.

## Stack

TypeScript, React Native, React — integrated with Ethereum staking contracts, beacon chain APIs, DeFi protocol ABIs, and price oracle feeds.
