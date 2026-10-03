# 🌙 VibeCodingMachine – Requirements File

This is a Markdown (.md) file.

You should not need to modify this file, as VibeCodingMachine will modify it for you, but you can add requirements and move them around either here directly, or via AI.

This file contains the requirements to complete the project. Each item in a list is a self-contained requirement that should be able to stand on its own, and not require reference to other requirements. Each requirement starts in the section of requirements to complete, then it is moved to the section with the current requirement being worked on. VibeCodingMachine will then, after implementing the requirement, move it to the completed requirements list in the CHANGELOG.md file, or to the section in this file for requirements that need attention.

## RESPONSE FROM LAST CHAT

### ONE LINE STATUS:
DONE: the project now launches on the port VCM checks (3000), so launches stop timing out

### ONE LINE SUMMARY:
VCM waited for the site on one address while the site started on another. Both now use the same address, and the startup scripts read it from VCM's settings so they can't drift apart again.

### MULTILINE DETAILS: (1-20 lines max)
What changed: VCM checked port 8000 for the website, but the site always starts on port 3000, so every launch "timed out" even though the site was running fine. VCM's setting now says 3000. Both startup scripts (Mac/Linux and Windows) now read the port from that one setting and hand it to the dev server, and they no longer pop open a browser window during automated launches.
Root cause and class of mistake: config drift. The port was set in two places that disagreed: VCM's setting said 8000, while the launch script's 8000 default was never passed to the dev server (the variable wasn't exported), which then used its own default of 3000.
Same mistake elsewhere, fixed: the Windows launch script had the same 8000 default that never reached the dev server. It now reads the port from the setting and passes it through.
Checked and clean: the editor debug setting (3000), the project guide CLAUDE.md (3000), README (3000), and the screenshot example in VCM's tool notes (3000) all already agree. The deploy scripts (FTP, port 21) and the VCM deploy script don't involve the dev-server port. No other instances.
Proof (real launch, re-run this pass): the fixed launch script, with the setting temporarily pointed at a free port (3123), started the dev server there in 3 seconds; its log shows "Local: http://localhost:3123". The page and the resume data both returned HTTP 200. The setting was then put back to 3000. Port 3000 itself was already taken by a dev server for this project that I didn't start, so I left it running.
Proof (tests): the launch test passes 5 of 5: "polls the port the React dev server listens on (3000)", "launch.sh starts the dev server on the port VCM polls", "launch.sh ignores a stray PORT env var that would disagree with launch.url", "launch.sh does not open a browser window", "launch.ps1 derives and exports PORT from launch.url too". On the code from before this fix, 4 of 5 fail. The stray-PORT check only matters once the setting says 3000.
Full suite: 5 passed, 1 failed. The failure is the old app smoke test (App.test.js, "Cannot read properties of undefined (reading 'parentNode')"). It already failed before this item.
Parity: this is developer tooling for starting the site, not a feature. The website and its phone-width layout are unchanged, so no screenshots are needed. Both launch scripts are fixed (Mac/Linux and Windows).
Running one test file: .vibecodingmachine/INSTRUCTIONS.md has "Proof test command: CI=true npx react-scripts test --env=jsdom --watchAll=false {files}"
PROOF TESTS:
- src/__tests__/launchConfig.test.js

## 🔨 Current In Progress Requirement

(none — waiting for first task)

## 🚦 Current Status

STATUS: DONE

## ✅ Requirements To Complete

(add your requirements here)

## 🏁 Completed Requirements

(completed requirements will appear here)


## ⏳ Requirements not yet completed

### VCM-connectivity-test
Output EXACTLY the following two lines and nothing else — do not explain, do not reason, do not change the path or contents:

CREATE: .vibecodingmachine/temp/TEMP_agent_check.txt
CONTENT: ```text
VCM_CHECK_OK
```
