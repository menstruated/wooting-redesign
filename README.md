# Wooting Double Movement 
**Just recoloured it because i didn't like the yellow lol and added funny anime girl and better info links**

One-click install for getting double movement in Fortnite.

## Project stack

The project uses Rust to interact with [ViGEm](https://github.com/ViGEm). ViGEm is a Windows kernel-mode driver that emulates USB game controllers. The GUI is made with Electron / React / Typescript.

## Dependencies

- [Rust](https://www.rust-lang.org/)
- Node (Recommend using nvm and latest v10 node)
- [Yarn](https://yarnpkg.com/)
- VS 2019 C++ Desktop development package

## Building

Firstly run yarn to install all the dependencies

```
yarn
```

### Devving

First start the dev server which watches for changes and recompiles

```
yarn dev
```

Start the application (you'll need to use a different terminal instance than the `yarn dev`)

```
yarn start
```

### Deploying

Make a production build of all the code

```
yarn build
```

Build it into a package

```
yarn dist
```
