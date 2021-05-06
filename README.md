# geckos.io_bug_report

This repository replicates the bug reported in https://github.com/geckosio/geckos.io/issues/99

## Using with Microsoft "Remote - Containers" VS-Code plugin

Open the client/server folder in two separate VS-Code windows and start the devcontainer with the Microsoft "Remote - Containers" plugin.

## Using with Docker Compose

Use `docker-compose up` in the root directory to start both containers.

Log into the containers with one of the two below commands to open a bash session within either the client or server:

    docker exec -it bug-report-client bash
    docker exec -it bug-report-server bash  
