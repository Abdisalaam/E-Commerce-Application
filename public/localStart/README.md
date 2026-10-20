## localStart说明
localStart目录，是为方便不同ka本地运行时才添加的，根据process.env.VUE_APP_RUNMODE为`start`试，才会从localStart里面获取不同的Ka全局配置
线上部署时，获取配置还是统一取/public/config.json

如：npm run start:pre:yb 或npm run dev:yb才会从localStart里面获取yb.config
