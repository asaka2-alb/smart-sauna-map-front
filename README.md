# smart-sauna-map

## 開発環境の構築方法

1. 本リポジトリをクローンします。

    ```console
    git clone git@github.com:asaka2-alb/smart-sauna-map-front.git
    ```

2. terminal window 上で smart-sauna-map-front ディレクトリに移動します。

    ```console
    cd smart-sauna-map-front
    ```

3. [nvm](https://github.com/nvm-sh/nvm) をインストールします。

    [node](https://nodejs.org/ja/) の仮想環境を構築するために nvm をインストールします。[公式ページの手順](https://github.com/nvm-sh/nvm#installing-and-updating)に従って nvm をインストールしてください。
    インストールが終わったら以下のコマンドを実行して仮想環境を立ち上げて下さい。

    ```console
    nvm use --lts
    ```

4. [yarn](https://classic.yarnpkg.com/en/) をインストールします。

    [公式ページの手順](https://classic.yarnpkg.com/lang/en/docs/install/)に従って yarn をインストールしてください。

5. 以下のコマンドを実行してフロントエンド用のパッケージをインストールします。

    ```console
    yarn install --immutable --immutable-cache --check-cache
    ```

## Frontend 開発用 server の立て方

以下のコマンドを実行してフロントエンド用のサーバーを立ち上げます。

```console
yarn start
```

## テストの実行方法

本リポジトリでは [React](https://ja.reactjs.org/) コンポーネントのテストに [Cypress](https://www.cypress.io/) を採用しております。コンポーネントテストを実行する際には以下のコマンドを実行してください。

```console
yarn run cy:run-ct
```

また仮想ブラウザの中でアプリケーション様子を確認しながらコンポーネントテストをしたい場合には以下のコマンドを実行してください。仮想ブラウザが立ち上がりますので、その中の指示に従ってテストを実行してください。

```console
yarn run cy:open-ct
```

その他のコマンドを確認したい場合には以下のコマンドを実行してください。実行可能なコマンドのリストが表示されます。例えば対話に続いて `cy:run-ct` を入力して Enter キーを押すとコンポーネントテストが実行されます。

```console
yarn run
```

## デプロイの方法

SmartSaunaMap は [Render](https://render.com/) を使ってデプロイしております。
デプロイ手順の設定などの詳細は[公式ドキュメント](https://render.com/docs)を参照ください。
