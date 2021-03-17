/* ifak.js
 * license: The Unlicense
 * copyright: jbs4bmx
 * website: https://www.guilded.gg/senkospub
 * name: SuperIFAK
 * description: SuperIFAK mod by xKyle now ported to SPT-AKI
 * version: 1.0.1
 * author(s):
 * - jbs4bmx
 * - CREDIT: xKyle (original author)
 */

"use strict";

class ifak
{
	constructor()
	{
        this.mod = "jbs4bmx-SuperIFAK";
        common_f.logger.logInfo(`Loading: ${this.mod}`);
        core_f.packager.onLoad[this.mod] = this.load.bind(this);
    }

	load()
	{
		const templates   = database_f.server.tables.templates;
        let products = templates.items;
		common_f.logger.logInfo("Caching: SuperIFAK");

		for (let item in products)
		{
        	let itemData = products[item];

			//IFAK
			if (itemData._id === "590c678286f77426c9660122")
			{
				itemData._props.MaxHpResource = 3000;
				itemData._props.medUseTime = 1;
				itemData._props.hpResourceRate = 100;
				itemData._props.effects_damage.LightBleeding = {
					"delay": 0,
					"duration": 0,
					"fadeOut": 0,
					"cost": 30,
					"healthPenaltyMin": 0,
					"healthPenaltyMax": 0
				};
				itemData._props.effects_damage.HeavyBleeding = {
					"delay": 0,
					"duration": 0,
					"fadeOut": 0,
					"cost": 50,
					"healthPenaltyMin": 0,
					"healthPenaltyMax": 0
				};
				itemData._props.effects_damage.Fracture =
				{
					"delay": 0,
					"duration": 0,
					"fadeOut": 0,
					"healthPenaltyMin": 0,
					"healthPenaltyMax": 0
				};
				itemData._props.effects_damage.DestroyedPart = {
					"delay": 0,
					"duration": 0,
					"fadeOut": 0,
					"healthPenaltyMin": 0,
					"healthPenaltyMax": 0
				};
				itemData._props.effects_damage.RadExposure = {
					"delay": 0,
					"duration": 0,
					"fadeOut": 0,
					"cost": 75,
					"healthPenaltyMin": 0,
					"healthPenaltyMax": 0
				};
				itemData._props.effects_damage.Contusion = {
					"delay": 0,
					"duration": 0,
					"fadeOut": 0,
					"cost": 0,
					"healthPenaltyMin": 0,
					"healthPenaltyMax": 0
				};
			}
		}
	}
}

module.exports.ifak = ifak;