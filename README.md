# smart-sauna-map

## 開発環境の構築方法

### Frontend 開発用 server の立て方

1. 本リポジトリをクローンします。

    ```shell
    git clone git@github.com:asaka2-alb/smart-sauna-map-front.git
    ```

1. terminal window 上で smart-sauna-map-front ディレクトリに移動します。

    ```shell
    cd smart-sauna-map-front
    ```

1. [nvm](https://github.com/nvm-sh/nvm) をインストールします。

    [node](https://nodejs.org/ja/) の仮想環境を構築するために nvm をインストールします。[公式ページの手順](https://github.com/nvm-sh/nvm#installing-and-updating)に従って nvm をインストールしてください。
    インストールが終わったら以下のコマンドを実行して仮想環境を立ち上げて下さい。

    ```shell
    nvm use --lts
    ```

1. [yarn](https://classic.yarnpkg.com/en/) をインストールします。

    [公式ページの手順](https://classic.yarnpkg.com/lang/en/docs/install/)に従って yarn をインストールしてください。

1. 以下のコマンドを実行してフロントエンド用のパッケージをインストールします。

    ```shell
    yarn install --immutable --immutable-cache --check-cache
    ```

1. 以下のコマンドを実行してフロントエンド用のサーバーを立ち上げます。

    ```shell
    yarn start
    ```

### テストの実行方法

本リポジトリでは React コンポーネントのテストに Cypress を採用しております。コンポーネントテストを実行する際には以下のコマンドを実行してください。

  ```shell
  yarn run cy:run-ct
  ```

また仮想ブラウザの中でアプリケーション様子を確認しながらコンポーネントテストをしたい場合には以下のコマンドを実行してください。仮想ブラウザが立ち上がりますので、その中の指示に従ってテストを実行してください。

  ```shell
  yarn run cy:open-ct
  ```

その他のコマンドを確認したい場合には以下のコマンドを実行してください。実行可能なコマンドのリストが表示されます。例えば対話に続いて `cy:run-ct` を入力して Enter キーを押すとコンポーネントテストが実行されます。

  ```shell
  yarn run
  ```
