---
title: "Internify LMS"
description: "Extending an existing internship platform with structured project, task, and learning workflows."
technologies:
  - TypeScript
  - Express.js
  - Prisma ORM
  - PostgreSQL
  - Swagger
coverImage: "/projects/internify-lms-portal.webp"
order: 1
draft: false
---

## Overview

Internify LMS is an extension of HUMIC's existing internship management platform, designed to support interns after they are accepted into an internship program.

The LMS introduces project management, task distribution, and submission workflows into the existing Internify ecosystem. I worked primarily on the backend, contributing to the design and implementation of these workflows while adapting them to an existing codebase and business process.

## The problem

Internify already supported the recruitment side of internships, but the workflow did not stop after an applicant was accepted.

Interns still needed to be assigned to projects, receive tasks, submit their work, and interact with mentors. These features were closely related to one another, meaning a decision made in one area could affect several others.

The main challenge was therefore not simply building additional CRUD APIs, but introducing new functionality without breaking the assumptions and workflows already present in the platform.

## My approach

The LMS was implemented as part of the existing Internify backend rather than as a completely separate system.

This allowed the new modules to reuse existing authentication, users, and internship data while keeping the overall workflow connected.

My work focused on projects, tasks, submissions, and the business rules connecting them. The project domain became an important foundation because project membership determines which interns participate in a project and which tasks belong to their working context.

Several rules were enforced at the backend level, such as limiting an intern to one active project at a time and separating the capabilities available to interns, mentors, and administrators.

## Technical decisions

One decision was to avoid storing state that could be reliably derived.

For example, whether a task is pending, completed, or overdue can be determined from its deadline and submission state. Calculating this when needed avoids maintaining another database value that could become outdated.

Project and task identifiers also needed to work well beyond internal database relations. Human-readable slugs were introduced for cleaner resource identification, with uniqueness rules adjusted to match the domain: projects are globally identifiable, while tasks exist within the context of a project.

Authorization was another important consideration. As mentor responsibilities expanded, some operations previously limited to administrators also needed to be available to mentors. Rather than duplicating workflows, role checks were adjusted so shared capabilities could remain consistent while intern permissions stayed separate.

## Challenges

Working with an existing codebase required more consideration than starting from an empty project.

New features had to follow existing authentication flows, middleware, database relationships, naming conventions, and API behavior. A cleaner design in isolation was not always the best choice if it introduced unnecessary changes to an already functioning system.

Several edge cases also appeared only when different features interacted—for example, project membership affecting task access, submission state affecting task status, or role changes affecting who could manage project activities.

These cases made understanding the business workflow just as important as implementing the API itself.

## Outcome

The LMS expanded Internify from an internship application platform into a system that can also support day-to-day internship activities.

My backend contributions connected project assignment, task management, and submission workflows, allowing the internship process to continue beyond recruitment and into actual project participation.

## What I learned

Internify LMS reinforced that backend development is not only about creating endpoints and database models.

Many important technical decisions came directly from business rules: deciding which state should be stored, which should be calculated, how relationships should be constrained, and how authorization should evolve as new roles gain responsibilities.

It also gave me experience working within an existing codebase, where maintainability, compatibility, and understanding previous design decisions can be just as important as introducing new architecture.

> This case study focuses on the engineering process and lessons learned. Source code, internal API details, database schemas, and other proprietary implementation details are intentionally excluded because Internify was developed as part of my internship at HUMIC.
