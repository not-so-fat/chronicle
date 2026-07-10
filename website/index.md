---
layout: home

hero:
  name: Chronicle
  text: A time machine for AI coding sessions
  tagline: Import the logs your AI coding assistants already write, then click any message to travel back to the exact code at that moment — reconstructed from your Git history. Local-first, no cloud, no LLM calls.
  actions:
    - theme: brand
      text: Get Started
      link: /docs/guide/quickstart
    - theme: alt
      text: Read the Docs
      link: /docs/
    - theme: alt
      text: View on GitHub
      link: https://github.com/chizhangucb/chronicle

features:
  - icon: ⏱️
    title: Replay
    details: Click any message to see your code exactly as it was, rebuilt from Git history. Plus a deterministic sandbox replay, session refinement, and heuristic read → change causality.
    link: /docs/guide/time-travel
    linkText: Time travel
  - icon: 🎛️
    title: Control
    details: A unified control plane for MCP services and Skills across every tool — take over existing configs, centralize them, and distribute them everywhere.
    link: /docs/guide/mcp-hub
    linkText: MCP & Skills Hubs
  - icon: 🛡️
    title: Secure
    details: One-click secret redaction, real-time pre-tool-use interception, and locally served, redacted share links. Your originals never leave the machine.
    link: /docs/guide/security-and-sharing
    linkText: Security & sharing
  - icon: 🔌
    title: Six tools, one view
    details: Claude Code, Codex, Cursor, OpenCode, Gemini CLI, and Copilot Chat — unified into path-based logical projects, whichever tool wrote the session.
    link: /docs/reference/compatibility
    linkText: Compatibility
  - icon: 🔒
    title: Local-first by design
    details: All parsing, storage, and viewing happen on-device. No cloud backend, no account, and no LLM calls anywhere — see exactly what leaves the machine.
    link: /docs/reference/privacy-and-data
    linkText: Privacy & data
  - icon: 🕰️
    title: Git is the source of truth
    details: Code snapshots are reconstructed from your commit history matched to conversation timestamps — never from a separate store, never from your working tree.
    link: /docs/architecture/git-snapshot-engine
    linkText: How it works
---
