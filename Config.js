{
	"email": "",
	"password": "",
	"adminOnly": false,
	"adminBot": [],
	"nickNameBot": "",
	"prefix": "#",
	"database": {
		"type": "local",
		"uriMongodb": "",
		"notes": "type chọn *local* hoặc *mongodb*, nếu chọn mongodb thì điền uri connect mongodb vào phần uriMongodb, còn local sẽ tự lưu file json tại thư mục database"
	},
	"SERVER_UPTIME": true,
	"autoRefreshFbstate": true,
	"restartListenMqtt": {
		"allow": true,
		"timeRestart": 3600000,
		"logNoti": true
	},
	"logEvents": {
		"eventAndMessage": true,
		"read_receipt": false,
		"typ": false,
		"presence": false
	},
	"logsbot": true,
	"OptionsApi": {
		"forceLogin": true,
		"listenEvents": true,
		"updatePresence": true,
		"listenTyping": true,
		"logLevel": "error",
		"selfListen": false
	}
  }
