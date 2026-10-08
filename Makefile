ZOLA ?= zola
SSH_PORT ?= 22
DEPLOY_HOST ?=
DEPLOY_PATH ?=

.PHONY: theme check build deploy-preview deploy

theme:
	git submodule update --init --recursive

check: theme
	$(ZOLA) check

build: check
	$(ZOLA) build

dev: check
	$(ZOLA) serve

deploy-preview: build
	@test -n "$(DEPLOY_HOST)" || (echo "Set DEPLOY_HOST"; exit 1)
	@test -n "$(DEPLOY_PATH)" || (echo "Set DEPLOY_PATH"; exit 1)
	rsync -avzn --delete -e "ssh -p $(SSH_PORT)" public/ "$(DEPLOY_HOST):$(DEPLOY_PATH)/"

deploy: build
	@test -n "$(DEPLOY_HOST)" || (echo "Set DEPLOY_HOST"; exit 1)
	@test -n "$(DEPLOY_PATH)" || (echo "Set DEPLOY_PATH"; exit 1)
	rsync -avz --delete -e "ssh -p $(SSH_PORT)" public/ "$(DEPLOY_HOST):$(DEPLOY_PATH)/"
