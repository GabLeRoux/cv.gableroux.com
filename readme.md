# GabLeRoux resume

Note to myself, password in vault is wrong :'(
See https://github.com/jsonresume/registry-server/issues/77

## Getting started

```bash
npm install -g resume-cli
```

## export

```bash
resume export public/index.html --theme kendall
```

pdf (but see https://github.com/jsonresume/resume-cli/issues/201)

```bash
resume export resume.pdf --theme kendall
```

Better to open and save as pdf :(

## publish

### gh-pages

```bash
gulp deploy
```

:rocket:

### Older way

```bash
resume publish --theme kendall
```

## [themes](https://jsonresume.org/themes/)

## License

[MIT](LICENSE.md) © [Gabriel Le Breton](https://gableroux.com)
