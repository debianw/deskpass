# Automotive Assembly DB

![Alt text](assembly-db.png?raw=true)

## Notes:
1. I've been considering whether or not to add a `user_id` FK in `parts` table in order to assign parts to a user due to this description took it from the Case Study ("Assembly line workers who need to update part availability on a rapid basis, but for only a single or handful of parts"). Still that requirement is not clear.

2. I would add 2 FK more in `parts` table for a user that sends a `part` to the `queue`. This FK fields could be named `checkOutBy` | `checkInBy` which save the id of the user.

3. Roles `table` will contain the roles for the access policy at the application level. `user_roles` table assign different roles to a User