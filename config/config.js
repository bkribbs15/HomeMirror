/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Daily-Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://p52-calendars.icloud.com/published/2/AAAAAAAAAAAAAAAAAAAAAIdzE6FNxhZLOfjAuetLmlXcsXOmqBPfVCOCJOAhGeSow6Th67wuArl5jWRs8pE3DbQDdrTCs1rLbhgocoAJP_g",
						maximumNumberOfDays: "14"
					}
				]
			}
		},
		{
			module: "currentweather",
			position: "top_left",
			config: {
				location: "Austin",
				locationID: "4671654",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "c33667f91bc545ade47e4f96d90bdaa2",
				rountTemp: "true"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Austin",
				locationID: "4671654",  //ID from https://openweathermap.org/city
				appid: "c33667f91bc545ade47e4f96d90bdaa2",
				maxNumberOfDays: "5"
				}
		},
		{
			module: "MMM-Spotify",
			position: "bottom_left",
			config: {
				style: "mini",
				control: "hidden"
			}
		},
		{
			module: "mmm-hue-lights",
			position: "bottom_right",
			config: {
				bridgeIp: "192.168.50.86",
				user: "hbyDFohdWmlb9w4CM0vOKZS03DmYvNzV3KOgKcrO",
				displayType: "grid",
				minimalGrid: "true",
				displayMode: "groups",
				alignment: "right"
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
