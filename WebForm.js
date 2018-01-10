<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	
	<style>
		.page {
			/* background: #FFF; */
			margin: 50px;
			font-family: 'Roboto', sans-serif;
		}

		/* Layout ----------------------- */

		.layout {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;

			-webkit-box-orient: horizontal;
			-webkit-box-direction: normal;
			-ms-flex-direction: row;
			flex-direction: row;

			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
		}

		.layout.wrap {
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
		}

		.flex {
			-webkit-box-flex: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
		}

		/* Form ------------------------- */

		.input-container {
			position: relative;
			margin-bottom: 45px;
		}

		.input-container input {
			padding: 5px 5px 10px 5px;
			display: block;
			width: 100%;
			border: none;
			border-bottom: 1px solid #757575;
			background: transparent;
		}

		.input-container input:focus {
			outline: none;
		}

		.input-container label {
			color: #999;
			font-weight: normal;
			position: absolute;
			pointer-events: none;
			left: 5px;
			top: 10px;
			transition: 0.2s ease all;
			-moz-transition: 0.2s ease all;
			-webkit-transition: 0.2s ease all;
		}

		.input-container input:focus~label,
		.input-container input:valid~label,
		.input-container input:disabled~label {
			top: -20px;
			color: #3f51b5;
		}

		.input-container .bar {
			position: relative;
			display: block;
			width: 100%;
		}

		.input-container .bar:before,
		.input-container .bar:after {
			content: '';
			height: 2px;
			width: 0;
			bottom: 1px;
			position: absolute;
			background: #3f51b5;
			transition: 0.2s ease all;
			-moz-transition: 0.2s ease all;
			-webkit-transition: 0.2s ease all;
		}

		.input-container .bar:before {
			left: 50%;
		}

		.input-container .bar:after {
			right: 50%;
		}

		.input-container input:focus~.bar:before,
		.input-container input:focus~.bar:after {
			width: 50%;
		}

		button {
			display: block;
			padding: 12px 24px;
			overflow: hidden;
			border-width: 0;
			outline: none;
			border-radius: 2px;

			background-color: #3f51b5;
			color: #ecf0f1;

			-webkit-transition: all .3s;

			transition: all .3s;
			margin: 5px;
		}

		button:hover {
			box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
		}

		button.cancel {
			/* background: #9e9e9e; */
		}

		.icon {
			display: inline-block;
			vertical-align: middle;
			width: 24px;
			height: 24px;
			margin-top: -3px;
		}
	</style>
</head>

<body>
	<div class="page">
		<div id='eventTransporterDiv' onClick='bbj_post_event(event);' style="background-color:red;"></div>

		<div class="layout horizontal">
			<div class="flex">
				<div class="input-container">
					<input id="IPN_CDNUMBER" type="number" onfocusout="onLostFocus(this)">
					<span class="bar"></span>
					<label>CD Number</label>
				</div>
			</div>
		</div>

		<div class="layout wrap">
			<div class="flex">
				<div class="input-container">
					<input id="IPE_TITLE" oninput="onEditModify(this)" onfocusout="onLostFocus(this)">
					<span class="bar"></span>
					<label>CD Title</label>
				</div>
			</div>

			<div class="flex">
				<div class="input-container">
					<input id="IPE_ARTIST" oninput="onEditModify(this)" onfocusout="onLostFocus(this)">
					<span class="bar"></span>
					<label>Artist</label>
				</div>
			</div>
		</div>

		<div class="layout wrap">
			<button id="BTN_SAVE" onclick="onButtonPush(this)" class="save">
				<img src="http://svgshare.com/i/4su.svg" class="icon" /> Save
			</button>
			<button id="BTN_CLEAR" onclick="onButtonPush(this)" class="cancel">
				<img src="http://svgshare.com/i/4si.svg" class="icon" /> Cancel
			</button>
		</div>
	</div>

	<!--

<hr>
testing the interface:<br>
<button onclick="setText('IPE_ARTIST','artist')">test artist setText</button>
<br>
<button onclick="setBackColor('IPN_CDNUMBER','yellow')">test set color of number to yellow</button>
<br>

<button onclick="setFocus('IPE_TITLE')">test set focus to title</button>
<br>

<button onclick="setEnabled('BTN_SAVE',false);">test disable SAVE Button</button>
<br>

-->

</body>

</html>
