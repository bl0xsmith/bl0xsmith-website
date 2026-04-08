---
title: "BitPay Banking API Suite"
description: "An automated merchant fiat payout system with idempotent settlement flows, robust retry/error handling, and monitoring around reconciliation drift — built while Finance Engineering Team Lead at BitPay."
tags: ["Fintech", "Banking API", "Node.js", "TypeScript", "Idempotency", "Settlement"]
featured: false
---

While serving as Finance Engineering Team Lead at BitPay, I designed and delivered the Banking API Suite — an automated system that handles merchant fiat payouts from crypto payment processing.

## The Problem

BitPay processes crypto payments for merchants who want to receive fiat currency. The payout flow touches multiple banking partners, each with their own API quirks, failure modes, and reconciliation requirements. The existing system had reliability issues that caused reconciliation drift — merchants were sometimes paid incorrectly or with delays.

## What I Built

**Idempotent Settlement Flows** — Every payout operation is idempotent by design. Duplicate requests, retries, and network failures cannot cause double-payments or missed payouts. Each settlement is assigned a stable identifier that the banking APIs use to deduplicate across systems.

**Retry & Error Handling** — A robust retry engine handles transient banking API failures with exponential backoff, dead-letter queuing for unresolvable errors, and alerting for operations requiring manual intervention.

**Reconciliation Monitoring** — Continuous reconciliation between BitPay's internal ledger and actual bank settlement data. Drift detection alerts fire when expected and actual states diverge beyond a configurable threshold, allowing ops teams to investigate before issues compound.

**Operational Tooling** — Internal tooling for the finance and ops teams to inspect payout status, trigger manual retries, and audit settlement history for any merchant.

## Stack

Node.js, TypeScript — integrated with multiple banking partner APIs and BitPay's internal ledger and payment processing systems.

## Also at BitPay

I also launched payment protocol integrations for Litecoin, Dogecoin, and XRP during this period — refactoring the protocol integration architecture to use adapter patterns that made future currency additions significantly faster. The Ripple (XRP) integration was delivered on schedule and contributed to a multi-million-dollar partnership reward.
