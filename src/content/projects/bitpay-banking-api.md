---
title: "BitPay Banking API Suite"
description: "A merchant fiat payout cli with idempotent settlement flows, robust retry/error handling, and monitoring around reconciliation drift — built while Finance Engineering Team Lead at BitPay."
tags:
  [
    "Fintech",
    "Banking API",
    "Node.js",
    "TypeScript",
    "Idempotency",
    "Settlement",
    "Bitcoin",
    "Litcoin",
    "Dogecoin",
    "XRP",
  ]
featured: true
---

While serving as Finance Engineering Team Lead at BitPay, I designed and delivered the Banking API Suite — a cli that handles merchant fiat payouts from crypto payment processing.

## The Problem

BitPay processes crypto payments for merchants who want to receive fiat currency. The payout flow touches multiple banking partners, each with their own API quirks, failure modes, and reconciliation requirements. The existing system required a human to do manual work, which was inefficient, cumbersome and prone to error that could cause reconciliation drift — merchants were sometimes paid incorrectly or with delays.

## What I Built

**Idempotent Settlement Flows** — Every payout operation is idempotent by design. Duplicate requests, retries, and network failures cannot cause double-payments or missed payouts. Each settlement is assigned a stable identifier that the banking APIs use to deduplicate across systems.

**Reconciliation Monitoring** — Continuous reconciliation between BitPay's internal ledger and actual bank settlement data. Drift detection for divergence allowed the finance ops team to investigate before issues could compound.

**Operational Tooling** — Internal tooling for the finance ops team to inspect payout status, trigger manual retries, and audit settlement history for any merchant.

## Stack

Node.js, TypeScript — integrated with multiple banking partner APIs and BitPay's internal ledger and payment processing systems.

## Also at BitPay

I also launched payment protocol integrations for Litecoin, Dogecoin, and XRP during this period — refactoring the protocol integration architecture to use adapter patterns that made future currency additions significantly faster. The Ripple (XRP) integration was delivered on schedule and contributed to a multi-million-dollar partnership reward.
