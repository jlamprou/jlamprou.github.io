---
title: "BotArtist: Advanced Twitter Bot Detection"
summary: "Machine Learning model for Twitter bot detection achieving 11% improvement over Botometer using suspension-based training on 9M user dataset."
date: "Jun 10 2023"
draft: false
tags:
- Bot Detection
- Machine Learning
- XGBoost
- Social Media Analysis
- Misinformation
- NLP
repoUrl: "https://arxiv.org/abs/2306.00037"
---

Using a multilingual dataset of **9 million users** discussing the Russo-Ukrainian war, this study develops an advanced Twitter bot detection system that significantly outperforms existing solutions.

## Dataset & Scale

- **9M Total Users**: Comprehensive analysis of user behavior patterns
- **343K Bot Accounts**: Identified through suspension patterns
- **8M Normal Accounts**: Baseline for authentic user behavior
- **Multilingual Coverage**: Analysis across multiple languages and regions

## Technical Innovation

### XGBoost Enhancement

- **11% Improvement**: Superior ROC-AUC score compared to Botometer
- **Suspension-based Training**: Novel approach using platform suspension data
- **Feature Engineering**: Advanced behavioral and linguistic features

### Key Advantages

- **Real-world Validation**: Trained on actual platform enforcement data
- **Multilingual Capability**: Effective across language barriers
- **Crisis Context**: Specialized for high-stakes information environments

## Methodology

1. **Data Collection**: Large-scale user behavior analysis during crisis period
2. **Feature Extraction**: Comprehensive behavioral and content features
3. **Model Training**: XGBoost optimization with suspension labels
4. **Comparative Analysis**: Benchmarking against established solutions

## Impact

This research advances the state-of-the-art in automated bot detection, providing tools crucial for maintaining information integrity during crisis situations and combating coordinated inauthentic behavior on social media platforms.
