# BizOn Digital Asset Links release

## Purpose

The root user-site repository publishes:

`https://thuyhuongctu.github.io/.well-known/assetlinks.json`

This host-root location associates the Android package `vn.bizon.simulation` with the BizOn web origin.

## Current state

The file contains the certificate used by a previously distributed debug APK. That fingerprint remains in place until the debug build is retired deliberately.

A Google Play release requires adding the SHA-256 fingerprint shown under:

**Play Console → Setup → App integrity → App signing key certificate**

Do not substitute the upload-key certificate unless it is also the actual app-signing certificate.

## Protected publication

1. Create the GitHub environment `google-play-release` in this repository.
2. Add environment secret `PLAY_APP_SIGNING_SHA256`.
3. Add required reviewers to the environment where appropriate.
4. Run workflow `Publish BizOn Play Asset Links`.
5. Enter `PUBLISH` when prompted.
6. Review the job that validates, commits, deploys, and checks the live root endpoint.

The workflow:

- rejects missing or malformed fingerprints;
- preserves existing valid certificates;
- removes duplicates;
- refuses to publish when no change is produced;
- validates package `vn.bizon.simulation`;
- waits for GitHub Pages and verifies the deployed fingerprint set;
- never writes a placeholder fingerprint.

## Retirement

Remove an old certificate only after all builds signed with that certificate are no longer expected to open as a verified TWA. Certificate removal should use a reviewed pull request rather than the publication workflow.
