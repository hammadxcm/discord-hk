# Discord Bot Integration Guide

This comprehensive guide covers setting up the best Discord bots for your server, including step-by-step configuration for each bot.

## 🏆 Tier 1 Essential Bots

### 1. MEE6 - Core Leveling & Moderation

#### ⚡ Quick Setup
1. **Invite**: Visit https://mee6.xyz/ → Add to Server
2. **Permissions**: Ensure admin permissions for full functionality
3. **Dashboard**: Access at https://mee6.xyz/dashboard

#### 📊 Leveling System Configuration
```yaml
XP Settings:
  XP per message: 15-25 (recommended: 20)
  XP cooldown: 60 seconds
  Level up channel: #level-ups or #general
  Level up message: "GG {user}, you just advanced to level {level}!"

Role Rewards:
  Level 5: @Active Member
  Level 10: @Regular
  Level 15: @Veteran + Image Permissions
  Level 20: @Elite + Voice Priority
  Level 25: @Legend + VIP Channel Access
  Level 30: @Champion + Custom Color Role
```

#### 🛡️ Moderation Setup
```yaml
Auto-Moderation:
  - Bad words filter: ON
  - Repeated text (3+ times): 5 second timeout
  - Too many caps (70%+): Delete message
  - Too many mentions (5+): Delete message
  - Spam detection: ON
  - Raid protection: ON