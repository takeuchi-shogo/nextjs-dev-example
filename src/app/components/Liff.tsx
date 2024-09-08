"use client";

import liff from "@line/liff";
import { useEffect } from "react";

export function Liff({ liffId }: { liffId: string }) {
	useEffect(() => {
		// liff.init({
		// 	liffId: '2006269683-4G1x1pAr',
		// 	withLoginOnExternalBrowser: true
		// }).then(() => {
		// 	console.log('SUCCESS')
		// 	console.log(liff.isLoggedIn())
		// 	console.log(liff.getIDToken())
		// }).catch((err) => {
		// 	console.log(err);
		// })
		// console.log("process.env.LIFF_ID", process.env.LIFF_ID);
		liff.init(
			{
				liffId: liffId,
				withLoginOnExternalBrowser: true,
			},
			() => {
				console.log("SUCCESS");
				console.log(liff.isLoggedIn());
				console.log(liff.getIDToken());
				console.log(liff.getDecodedIDToken());
				console.log(liff.getAppLanguage());

				console.log(liff.getVersion());
				console.log(liff.isInClient());
				console.log(liff.isLoggedIn());
				console.log(liff.getOS());
				console.log(liff.getLineVersion());
				if (!liff.isLoggedIn()) {
					console.log("NOT LOGGED IN");
					liff.login({
						redirectUri: "https://atocos-liff-test.web.app/neko",
					});
				} else {
					console.log("ALREADY LOGGED IN");
					// liff.logout()
					liff.getFriendship().then((result) => {
						console.log("FIENDSHIP");
						console.log(result.friendFlag);
					});
					liff.sendMessages([
						{
							type: "text",
							text: "Hello, World!",
						},
					]);
					liff.getProfile().then((profile) => {
						console.log("PROFILE");
						console.log(profile.userId);
						console.log(profile.displayName);
						console.log(profile.pictureUrl);
						liff.sendMessages([
							{
								type: "text",
								text: `P: ${profile.userId} ${profile.displayName} ${profile.pictureUrl}`,
							},
						]);
					});
				}
			},
		);
	}, [liffId]);

	return <div>サンプル</div>;
}
