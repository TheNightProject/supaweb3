Start a new development session by creating a session file in `.claude/sessions/` with the format `YYYY-MM-DD-HHMM-$ARGUMENTS.md` (or just `YYYY-MM-DD-HHMM.md` if no name provided).

The session file should begin with:

1. Session name and timestamp as the title
2. Session overview section with start time
3. Goals section (ask user for goals if not clear)
4. Empty progress section ready for updates
5. Remind yourself that we are using NuxtUIPro and that things like UModal and USlideover need to be inline.
6. Remind yourself that we are using Supabase for the backend.
7. Remind yourself that we are using Nuxt Content for managing content.
8. Read up in the `.windsurf/` directory about the project.

After creating the file, create or update `.claude/sessions/.current-session` to track the active session filename.

Confirm the session has started and remind the user they can:

- Update it with `/project:session-update`
- End it with `/project:session-end`
