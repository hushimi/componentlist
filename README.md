# componentlist

## Command

```bash
yarn serve

# github pages作成
yarn build
yarn deploy
```

## ページ構成

```text
App.vue
    Home.vue
        コンポーネントのカテゴリを表示
    Category1.vue
        [ComponentTitle & Github vue file link]
            Block
            |Element
            |
            |
            |
        [ComponentTitle & Github vue file link]
            Block
            |Element
            |
            |
            |
    Category2.vue
        [ComponentTitle & Github vue file link]
            Block
            |Element
            |
            |
            |
        [ComponentTitle & Github vue file link]
            Block
            |Element
            |
            |
            |
```

## CSS 設計

- BEM を基本とする
- Block ごとに Component ファイルを作成し、Category.vue 内に表示する

## 余白設計

- 基本的にブロック・エレメントの下に余白を設ける
- 余白はブロックに対して tailwind のユーティリティクラスをつける

## Category 一覧

- Common
- FormParts
- Tables
- Animation

## normalize.css

- [参考](https://qiita.com/hogesuke_1/items/b12c65e8485289da4146)
  `npm install -D normalize.css`
