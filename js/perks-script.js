var SurvivorPerkTitles = ["Ace In The Hole", 
				  "Adrenaline", 
				  "Alert", 
				  "Balanced Landing", 
				  "Bond", 
				  "Borrowed Time", 
				  "Botany Knowledge", 
				  "Calm Spirit", 
				  "Dark Sense", 
				  "Dead Hard", 
				  "Decisive Strike", 
				  "Deja Vu", 
				  "Empathy", 
				  "Hope", 
				  "Iron Will", 
				  "Kindred", 
				  "Leader", 
				  "Left Behind", 
				  "Lightweight", 
				  "Lithe", 
				  "No Mither", 
				  "No One Left Behind", 
				  "Object Of Obsession", 
				  "Open Handed", 
				  "Plunderer's Instinct", 
				  "Premonition", 
				  "Prove Thyself", 
				  "Quick & Quiet", 
				  "Resilience", 
				  "Saboteur Self", 
				  "Self Care", 
				  "Slippery Meat", 
				  "Small Game", 
				  "Sole Survivor", 
				  "Spine Chill", 
				  "Sprint Burst", 
				  "Street Wise", 
				  "This Is Not Happening", 
				  "Technician", 
				  "Up The Ante", 
				  "Unbreakable", 
				  "Urban Evasion", 
				  "We'll Make It", 
				  "We're Gonna Live Forever"]

var SurvivorPerkDescriptions = [/*Ace In The Hole*/"Lady Luck always seems to be throwing something good your way. When retrieving an Item from a Chest, there is a <span style='color:yellow'>50%</span> chance that an of <span style='color:green'>Uncommon</span>/<span style='color:purple'>Rare</span>/<span style='color:purple'>Very Rare</span> rarity or lower will be attached to it.", 
						/*Adrenaline*/"You are fuelled by unexpected energy when on the verge of escape. Instantly heal from <span style='color:green'>Injury</span>/<span style='color:purple'>Injury</span>/<span style='color:purple'>Injury or dying state</span> and sprint at <span style='color: orange'> 150% </span> your normal running speed for <span style='color:green'>3</span>/<span style='color:purple'>5</span>/<span style='color:purple'>5</span> seconds when the Exit Gates are powered. <br><br>Adrenaline is on hold if you are disabled at the moment it should take effect and will activate when freed. Adrenaline ignores Exhaustion. Causes Exhaustion for <span style='color:green'>60</span>/<span style='color:purple'>50</span>/<span style='color:purple'>40</span> seconds.",
						/*Alert*/"Your acute senses are on high alert. When the Killer performs the break action within a <span style='color:yellow'>12</span>/<span style='color:green'>24</span>/<span style='color:purple'>36</span> meter range, the Killer's Aura is revealed to you for <span style='color:yellow'>6 seconds</span>. This effect can only be triggered once every <span style='color:yellow'>60</span>/<span style='color:green'>45</span>/<span style='color:purple'>30</span> seconds.",
						/*Balanced Landing*/"When Balanced Landing is active, stagger effects from long falls are reduced by <span style='color:yellow'>50</span>/<span style='color:yellow'>75</span>/<span style='color:green'>75</span> %. <br><br><em>Tier III only:</em> Upon landing, start sprinting at <span style='color:orange'>150%</span> your normal running speed for a maximum of <span style='color:red'>3 seconds</span> if not exhausted. Causes Exhaustion for <span style='color:purple'>40 seconds</span>.",
						/*Bond*/"Unlocks potential in one's aura reading ability. Allies' Auras are revealed to you when they are within a <span style='color:yellow'>12</span>/<span style='color:yellow'>24</span>/<span style='color:green'>36</span> meters.",
						/*Borrowed Time*/"You are fuelled with an unexpected energy when saving an ally from a hook within the Killer's Terror Radius. Once per match, for <span style='color:yellow'>15 seconds</span> after unhooking a Survivor within the Killer's Terror Radius, any damage taken that would put you or the unhooked Survivor into the dying state will instead trigger a <span style='color:yellow'>15</span>/<span style='color:green'>20</span>/<span style='color:purple'>25</span> seconds bleed-out timer. Taking any damage during or reaching the end of the bleed-out timer will put you into the Dying State.",
						/*Botany Knowledge*/"You transform plants found around The Campfire into tinctures that slow down bleeding. Healing speed is increased by <span style='color:yellow'>10</span>/<span style='color:green'>15</span>/<span style='color:purple'>20</span> % and the efficiency of Med-Kits is increased by <span style='color:yellow'>10</span>/<span style='color:green'>15</span>/<span style='color:purple'>20</span> %.",
						/*Calm Spirit*/"Animals seem to trust you as they often stay calm in your presence. Reduces chances of alerting Crows by <span style='color:yellow'>80</span>/<span style='color:green'>90</span>/<span style='color:purple'>100</span> %.",
						/*Dark Sense*/"Unlocks potential in one's Aura reading ability. When the Exit Gates unlock, the Killer's Aura is revealed to you for <span style='color:green'>3</span>/<span style='color:purple'>5</span>/<span style='color:purple'>7</span> seconds.",
						/*Dead Hard*/"You can take a beating. When injured, tap into your adrenaline bank and dash forward quickly to avoid damage. Press the activate ability button while running to dash forward. During the dash, you avoid damage. Causes Exhaustion for <span style='color:yellow'>60</span>/<span style='color:green'>50</span>/<span style='color:purple'>40</span> seconds.",
						/*Decisive Strike*/"Once per match, when the Killer's Obsession, succeed a Skill Check to automatically escape the Killer's grasp and stun them for <span style='color:green'>3</span>/<span style='color:purple'>3.5</span>/<span style='color:purple'>4</span> seconds. When not the Killer's Obsession, when the wiggle meter is at <span style='color:green'>45</span>/<span style='color:purple'>40</span>/<span style='color:purple'>35</span> % succeed in a Skill Check to escape the grasp.",
						/*Deja Vu*/"Unlocks potential in one's Aura reading ability. <span style='color:yellow'>1</span>/<span style='color:green'>1</span>/<span style='color:purple'>2</span> objectives' Auras are revealed to you for <span style='color:yellow'>4</span>/<span style='color:green'>8</span>/<span style='color:purple'>8</span> seconds seconds when starting a trial. If you are holding a Map that can track Objectives, Objectives revealed by Deja Vu are added to the Map.",
						/*Empathy*/"Unlocks potential in one's Aura reading ability. Dying or injured allies' Auras are revealed to you when within <span style='color:yellow'>32</span>/<span style='color:yellow'>64</span>/<span style='color:green'>unlimited</span> meters. Empathy does not reveal Auras of allies when they are in the Killer's direct contact.",
						/*Hope*/"The growing odds of a successful escape fill you with hope and give you wings. Your movement speed is increased by <span style='color:yellow'>5</span>/<span style='color:green'>6</span>/<span style='color:purple'>7</span> % as soon as the Exit Gates are powered. This Perk is only active for 120 seconds after the Exit Gates have been powered.",
						/*Iron Will*/"You're able to concentrate and enter a meditative-like state to numb some pain. Grunts of pain caused by injuries are reduced by <span style='color:yellow'>50</span>/<span style='color:green'>100</span>/<span style='color:green'>100</span> % <span style='color:yellow'>while staying still</span>/<span style='color:yellow'>while staying still</span>/<span style='color:green'>at any time</span>.",
						/*Kindred*/"Unlocks potential in one's Aura reading ability. While you're on the hook, <span style='color:yellow'>1 random Survivor's</span>/<span style='color:green'>All Survivors'</span>/<span style='color:purple'>All Survivors' and the Killer's (in an 8m radius around the Hook)</span> Auras are revealed to all other Survivors.",
						/*Leader*/"You're able to organize a team to cooperate more efficiently. Increases the other Survivors' repair, healing and sabotage speed by <span style='color:green'>3</span>/<span style='color:purple'>6</span>/<span style='color:purple'>9</span> % when they are within an 8 meter range from you.",
						/*Left Behind*/"You'll get the job done... No matter the cost. If you are the last person remaining in the trial, for each Generator that needs to be repaired, gain a <span style='color:yellow'>19</span>/<span style='color:yellow'>22</span>/<span style='color:green'>25</span> % bonus to repair speed.",
						/*Lightweight*/"Your running is light and soft, making your tracks harder to follow. Footstep marks stay visible <span style='color:yellow'>1</span>/<span style='color:yellow'>2</span>/<span style='color:green'>3</span> seconds less than normal.",
						/*Lithe*/"After performing a vault, break into a sprint at 150% of your normal running speed for a maximum of 3 seconds. Activates in chases only. Causes Exhaustion for <span style='color:yellow'>60</span>/<span style='color:green'>50</span>/<span style='color:purple'>40</span> seconds.",
						/*No Mither*/"Go on kid, it's just a scratch. You start the trial injured and won't let anyone heal you beyond this state. Your thick blood coagulates practically instantly. you cannot be healed to healthy. You don't leave pools of blood. Grunts of pain caused by injuries are reduced by <span style='color:yellow'>0</span>/<span style='color:green'>25</span>/<span style='color:purple'>50</span> % at any time. Grants the ability to fully recover from the dying state.",
						/*No One Left Behind*/"It is inconceivable to leave someone behind. Once the Exit Gates are powered, gain <span style='color: yellow;'>50</span>/<span style='color: green;'>75</span>/<span style='color: purple;'>100</span> % more Bloodpoints for actions in the Altruism category and perform them <span style='color: yellow;'>4</span>/<span style='color: green;'>8</span>/<span style='color: purple;'>12</span> % quicker.",
						/*Object Of Obsession*/"If you are the Killer's Obsession and look in the Killer's direction, your link will reveal your Auras to each other. This effect applies only if you are outside the Killer's Terror Radius, to a maximum range of <span style='color:yellow'>56</span>/<span style='color:green'>64</span>/<span style='color:purple'>72</span> meters. Otherwise, it applies to a maximum range of <span style='color:yellow'>44</span>/<span style='color:green'>56</span>/<span style='color:purple'>64</span> meters.",
						/*Open Handed*/"Strengthens the potential of you and your team's Aura reading abilities. Increases Aura reading ranges by <span style='color:yellow'>4</span>/<span style='color:green'>6</span>/<span style='color:purple'>8</span> meters.",
						/*Plunderer's Instinct*/"Unlocks potential in one's Aura reading ability. Chests Auras are revealed to you when standing within <span style='color:yellow'>16</span>/<span style='color:yellow'>24</span>/<span style='color:green'>32</span> meters. Grants a <span style='color:yellow'>slightly</span>/<span style='color:yellow'>moderately</span>/<span style='color:green'>considerably</span> better chance at finding an Item of higher rarity from Chests.",
						/*Premonition*/"You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of the Killer in a 45 degree cone within a range of <span style='color:green'>12</span>/<span style='color:purple'>24</span>/<span style='color:purple'>36</span> meters. Premonition has a cooldown of <span style='color:green'>60</span>/<span style='color:purple'>45</span>/<span style='color:purple'>30</span> seconds seconds each time it activates. Premonition trumps any of the Killer's stealth abilities.",
						/*Prove Thyself*/"Receive an incremental speed bonus to repair, healing and sabotage actions when other Survivors are within an 8 meter range.</p><ul><li>1 nearby survivor grants <span style='color:yellow'>1</span>/<span style='color:green'>2</span>/<span style='color:purple'>3</span> % increased speed.</li><li>2 nearby survivor grants <span style='color:yellow'>2</span>/<span style='color:green'>4</span>/<span style='color:purple'>6</span> % increased speed.</li><li>3 nearby survivor grants <span style='color:yellow'>3</span>/<span style='color:green'>6</span>/<span style='color:purple'>9</span> % increased speed.</li>",
						/*Quick & Quiet*/"You do not make as much noise as others when quickly vaulting over obstacles or hiding in Lockers. The vault and hide actions' noise detection range is reduced by <span style='color:yellow'>100</span>/<span style='color:yellow'>100</span>/<span style='color:green'>100</span> %. This effect can only be triggered every <span style='color:yellow'>30</span>/<span style='color:yellow'>25</span>/<span style='color:green'>20</span> seconds.",
						/*Resilience*/"You are motivated in dire situations. Grants <span style='color:yellow'>3</span>/<span style='color:green'>6</span>/<span style='color:purple'>9</span> % additional speed when repairing, sabotaging, healing and searching while you are Injured.",
						/*Saboteur*/"Unlocks the ability to sabotage without a Toolbox at <span style='color:green'>30</span>/<span style='color:purple'>40</span>/<span style='color:purple'>50</span> % the normal sabotage speed. Skill Checks triggered in this situation have success zones reduced by <span style='color:green'>20</span>/<span style='color:purple'>10</span>/<span style='color:purple'>0</span> %. Increases efficiency of Toolbox sabotage by <span style='color:green'>50</span>/<span style='color:purple'>75</span>/<span style='color:purple'>100</span> %.",
						/*Self Care*/"Unlocks the ability to heal yourself without a Med-Kit at <span style='color:yellow'>50%</span> the normal healing speed. Increases the efficiency of Med-Kit self-heal by <span style='color:green'>10</span>/<span style='color:purple'>15</span>/<span style='color:purple'>20</span> %.",
						/*Slippery Meat*/"You have developed an efficient way to get out of Bear Traps and Hooks. Grants up to <span style='color:yellow'>1</span>/<span style='color:yellow'>2</span>/<span style='color:green'>3</span> extra escape attempts on the hook. The odds of freeing yourself from Bear Traps are increased by <span style='color:yellow'>15</span>/<span style='color:yellow'>20</span>/<span style='color:green'>25</span> %.",
						/*Small Game*/"You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of Killer Traps and Totems in a 45 degree cone within a range of <span style='color:yellow'>8</span>/<span style='color:yellow'>10</span>/<span style='color:green'>12</span> meters. Small Game has a cooldown of <span style='color:yellow'>15</span>/<span style='color:yellow'>12</span>/<span style='color:green'>10</span> seconds each time it activates.",
						/*Sole Survivor"*/"Each Survivor killed or sacrificed disrupts the Killer's&nbsp;Aura&nbsp;reading ability.<ul><li>1 killed or sacrificed: Reduces the Killer's Aura reading range by&nbsp;<span style='color:yellow'>40</span>/<span style='color:green'>45</span>/<span style='color:purple'>50</span>&nbsp;%</li><li>2 killed or sacrificed: Reduces the Killer's Aura reading range by&nbsp;<span style='color:yellow'>40</span>/<span style='color:green'>60</span>/<span style='color:purple'>75</span>&nbsp;%</li><li>3 killed or sacrificed: Reduces the Killer's Aura reading range by&nbsp;<span style='color:yellow'>40</span>/<span style='color:green'>75</span>/<span style='color:purple'>100</span>&nbsp;%</li></ul>",
						/*Spine Chill*/"An unnatural tingle warns you of impending doom. Get notified when the Killer is looking directly in your direction and standing within a <span style='color:green'>12</span>/<span style='color:purple'>24</span>/<span style='color:purple'>36</span> meters. While Spine Chill is active, Skill Checks trigger odds are increased by 10% with success zones reduced by 10%. While Spine Chill is active, your repair, heal and sabotage speeds are increased by <span style='color:green'>2</span>/<span style='color:purple'>4</span>/<span style='color:purple'>6</span> %.",
						/*Sprint Burst*/"When starting to run, break into a sprint at <span style='color:yellow'>150%</span> your normal running speed for a maximum of <span style='color:orange'>3 seconds</span>. Causes Exhaustion  for <span style='color:green'>60</span>/<span style='color:purple'>50</span>/<span style='color:purple'>40</span> seconds.",
						/*Streetwise*/"Long nights out taught you to do a lot with what you've got. Reduce consumption rate of Item charge by <span style='color:green'>10</span>/<span style='color:purple'>12</span>/<span style='color:purple'>15</span> % for you and allies within a 8 meter range.",
						/*This Is Not Happening*/"You perform at your best when you are under extreme stress. Great Skill Check success zones when repairing, healing and sabotaging get <span style='color:yellow'>10</span>/<span style='color:green'>20</span>/<span style='color:purple'>30</span> % bigger when you are injured.",
						/*Technician*/"The noises caused by your repairs and their hearing distance are reduced by <span style='color:yellow'>0</span>/<span style='color:green'>4</span>/<span style='color:purple'>8</span> meters. On a failed repair Skill Checks , there is a <span style='color:yellow'>30</span>/<span style='color:green'>40</span>/<span style='color:purple'>50</span> % chance the Generator explosion will be prevented.",
						/*Up The Ante*/"For each other Survivor still alive, grant a <span style='color:green'>1</span>/<span style='color:purple'>2</span>/<span style='color:purple'>3</span> % bonus to Luck to all remaining Survivors.",
						/*Unbreakable*/"Past battles have taught you a thing or two about survival. Grants the ability to fully recover from the dying state once per trial. Increases dying recovery by <span style='color:green'>15</span>/<span style='color:purple'>20</span>/<span style='color:purple'>25</span> %",
						/*Urban Evasion*/"Your movement speed while crouching is increased by <span style='color:yellow'>90</span>/<span style='color:green'>95</span>/<span style='color:purple'>100</span> %.",
						/*We'll Make It*/"Helping others heightens your morale. For each Survivor you rescue from a hook, gain an additional <span style='color:yellow'>25</span>/<span style='color:green'>50</span>/<span style='color:purple'>100</span> % speed increase to healing up to a maximum of 100% for <span style='color:yellow'>30</span>/<span style='color:green'>60</span>/<span style='color:purple'>90</span> seconds.",
						/*We're Gonna Live Forever*/"Your few friends deserve the best protection. Each time you rescue or take a hit to protect a survivor, gain <span style='color:yellow'>25%</span> stackable bonus to all Bloodpoint gains up to a maximum of <span style='color:yellow'>50</span>/<span style='color:yellow'>75</span>/<span style='color:green'>100</span> %. The Bonus Bloodpoints are only awarded post-trial."]; 

var SurvivorTeachable = ["<em>Standard Perk</em>",
				 "<em>Teachable from Dwight Fairfield</em>",
				 "<em>Teachable from Meg Thomas</em>",
				 "<em>Teachable from Claudette Morel</em>",
				 "<em>Teachable from Jake Park</em>",
				 "<em>Teachable from Nea Karlsson</em>",
				 "<em>Teachable from Laurie Strode</em>",
				 "<em>Teachable from Ace Visconti</em>",
				 "<em>Teachable from William 'Bill' Overbeck</em>",
				 "<em>Teachable from Feng Min</em>",
				 "<em>Teachable from David King</em>"];
				
var SurvivorTeachableImg = ["css/image/survivor/survivorportrait/dbd.png",
							"css/image/survivor/survivorportrait/dwight.png",
							"css/image/survivor/survivorportrait/meg.png",
							"css/image/survivor/survivorportrait/claudette.png",
							"css/image/survivor/survivorportrait/jake.png",
							"css/image/survivor/survivorportrait/nea.png",
							"css/image/survivor/survivorportrait/laurie.png",
							"css/image/survivor/survivorportrait/ace.png",
							"css/image/survivor/survivorportrait/bill.png",
							"css/image/survivor/survivorportrait/feng.png",
							"css/image/survivor/survivorportrait/david.png"];

				
var KillerPerkTitles = ["A Nurse's Calling",
						"Agitation",
						"Barbeque & Chili",
						"Beast Of Prey",
						"Bitter Murur",
						"Bloodhound",
						"Brutal Strength",
						"Deerstalker",
						"Distressing",
						"Dying Light",
						"Enduring",
						"Franklin's Demise",
						"Insidious",
						"Iron Grasp",
						"<span style='color:red'>Hex:</span> Devour Hope",
						"<span style='color:red'>Hex:</span> No One Escapes Death",
						"<span style='color:red'>Hex:</span> Ruin",
						"<span style='color:red'>Hex:</span> The Third Seal",
						"<span style='color:red'>Hex:</span> Thrill Of The Hunt",
						"<span style='color:red'>Hex:</span> Huntress' Lullaby",
						"Knock Out",
						"Lightborn",
						"Monitor & Abuse",
						"Monstrous Shrine",
						"Overcharge",
						"Overwhelming Presence",
						"Play With Your Food",
						"Predator",
						"Save The Best For Last",
						"Shadowborn",
						"Sloppy Butcher",
						"Spies From The Shadows",
						"Stridor",
						"Territorial Imperative",
						"Tinkerer",
						"Thanatophobia",
						"Unnerving Presence",
						"Unrelenting",
						"Whispers"];
	
var KillerPerkDescriptions = [/* A Nurse's Calling */"Unlocks potential in one's Aura reading ability. The Auras of Survivors who are healing or being healed are revealed to you when they are within <span style='color:green'>20</span>/<span style='color:purple'>24</span>/<span style='color:purple'>28</span> meters range.",
							/* Agitation */"You get excited in anticipation of hooking your prey. Increases your speed while transporting bodies by <span style='color:green'>6</span>/<span style='color:purple'>12</span>/<span style='color:purple'>18</span> %. While transporting a body, your Terror Radius is increased by <span style='color:green'>6</span>/<span style='color:purple'>8</span>/<span style='color:purple'>12</span> meters.",
							/* Barbeque & Chili */"A deep bond with The Entity unlocks potential in one's Aura reading ability. After hooking a Survivor, all other Survivors' Auras are revealed to you for <span style='color:yellow'>4 seconds</span> when they are further than <span style='color:yellow'>52</span>/<span style='color:green'>46</span>/<span style='color:purple'>40</span> meters from the Hook.<br><br>Each time a Survivor is hooked for the first time, gain a <span style='color:yellow'>15</span>/<span style='color:green'>20</span>/<span style='color:purple'>25</span> % stackable Bonus to all Bloodpoint gains. The Bonus Bloodpoints are only awarded post-trial.",
							/* Beast Of Prey */"Your lust for a kill is so intense that your connection with the Entity is momentarily lost, making you totally unpredictable. The Red Stain disappears for <span style='color:yellow'>15</span>/<span style='color:yellow'>20</span>/<span style='color:green'>25</span> seconds when Bloodlust activates.<br> Beast of Prey has a cooldown of <span style='color:orange'>120 seconds</span>.",
							/* Bitter Murmur */"Unlocks potential in one's Aura reading ability. Survivors' Auras are revealed to you for a duration of <span style='color:green'>5</span>/<span style='color:purple'>7</span>/<span style='color:purple'>9</span> seconds when the Exit Gates are powered.",
							/* Bloodhound */"Like a hunting scent hound, you smell traces of blood at a great distance. Fresh blood marks are <span style='color:yellow'>slightly</span>/<span style='color:green'>moderately</span>/<span style='color:purple'>considerably</span> more discernible than normal and can be tracked for 2/3/4 seconds seconds longer than normal.",
							/*Brutal Strength */"Your great strength allows you to shred through your prey's defences. Destroy dropped Pallets <span style='color:yellow'>10</span>/<span style='color:green'>15</span>/<span style='color:purple'>20</span> % faster.",
							/* Deerstalker */"Unlocks potential in one's Aura reading ability. Reveals dying Survivors' Auras when standing within <span style='color:yellow'>12</span>/<span style='color:yellow'>24</span>/<span style='color:green'>36</span> meters.",
							/* Distressing */"Your horrifying emanation strikes at a supernaturally long distance. Your Terror Radius is increased by <span style='color:yellow'>22</span>/<span style='color:green'>24</span>/<span style='color:purple'>26</span> %. Gain <span style='color:yellow'>50</span>/<span style='color:green'>75</span>/<span style='color:purple'>100</span> % more Bloodpoints for actions in the Deviousness category. The bonus bloodpoints are only awarded post-trial.",
							/* Dying Light */"You become obsessed with one Survivor. Your Obsession's altruistic action speed is increased by <span style='color:green'>38</span>/<span style='color:purple'>44</span>/<span style='color:purple'>50</span> %. Once the Obsession is killed or sacrificed, every other Survivor gets a penalty of <span style='color:green'>19</span>/<span style='color:purple'>22</span>/<span style='color:purple'>25</span> % to repair, healing and sabotage speed. Only one Obsession per match.",
							/* Enduring */"You are resilient to pain. Your rate of recovery from stuns is increased by <span style='color:yellow'>50</span>/<span style='color:yellow'>60</span>/<span style='color:green'>75</span> %.",
							/* Franklin's Demise */"Your vicious attacks make the Survivors drop their Item on impact. The lost item is damaged in the fall, losing <span style='color:yellow'>0</span>/<span style='color:green'>5</span>/<span style='color:purple'>10</span> % of its base amount of Charges.",
							/* Insioious */"Unlocks the stealth ability. By standing still for <span style='color:green'>4</span>/<span style='color:purple'>3</span>/<span style='color:purple'>2</span> seconds, you reduce your Terror Radius to <span style='color:orange'>0</span> and become stealthy until you move or act again.",
							/* Iron Grasp */"Your powerful hold onto the Survivors causes escapes to be nearly impossible. Effects of Survivor struggling are reduced by <span style='color:yellow'>25</span>/<span style='color:yellow'>50</span>/<span style='color:green'>75</span> %. Time to struggle out of your grasp is increased by <span style='color:yellow'>4</span>/<span style='color:yellow'>8</span>/<span style='color:green'>12</span> %.",
							/* Hex: Devour Hope */"A Hex rooting its power on hope. The false hope of Survivors ignites your hunger. When a Survivor is rescued from a hook at least 24 meters away, Devour Hope receives a Token.<ul><li><span style='color:red'>2 Tokens</span>: <span style='color:green'> none</span>/<span style='color:purple'>none</span>/<span style='color:purple'>Gain a 5% speed burst for 10 seconds after hooking a Survivor. Speed burst triggers 10 seconds after hooking a Survivor.</span></li><li><span style='color:red'>3 Tokens</span>:<span style='color:green'> none</span>/<span style='color:purple'>Attacks put Survivors into the dying state automatically.</span>/<span style='color:purple'>Attacks put Survivors into the dying state automatically.</span></li><li><span style='color:orange'>5 Tokens</span>:<span style='color:green'> Grants the ability to kill Survivors by your own hand.</span>/<span style='color:purple'>Grants the ability to kill Survivors by your own hand./Grants the ability to kill Survivors by your own hand.</span></li></ul>",
							/* Hex: No One Escapes Death */"A Hex rooting its power on hope. You are animated by the power of your Hex Totem when the Survivors are on the verge of escaping. Once the Exit Gates are powered, if there is a Dull Totem remaining on the map, this Hex is applied to it. While this Hex is active, <span style='color:green'>none</span>/<span style='color:purple'>none</span>/<span style='color:purple'>Successful attacks trigger dying state automatically,</span> cooldowns on successful and missed attacks are decreased by <span style='color:green'>4</span>/<span style='color:purple'>8</span>/<span style='color:purple'>8</span> % and your movement speed is increased by <span style='color:green'>3</span>/<span style='color:purple'>4</span>/<span style='color:purple'>4</span> %.The Hex effects persist as long as the related Hex Totem is standing.",
							/* Hex: Ruin */"A Hex that affects the Survivors' skills at repairing Generators. <span style='color:green'>2</span>/<span style='color:purple'>3</span>/<span style='color:purple'>4</span> survivors are affected by Ruin, which causes good Skill Check to result in 5% regression on the generator and great Skill Checks grant 0% in progression. The Hex effects persist as long as the related Hex Totem is standing.",
							/* Hex: The Third Seal */"A Hex that hinders one's Aura reading ability. Hitting a Survivor while the Hex Totem is active reduces the effectiveness of their Aura reading ability by 100%. This effect applies to the last <span style='color:yellow'>2</span>/<span style='color:green'>3</span>/<span style='color:purple'>4</span> survivors hit. The Hex effects persist as long as the related Hex Totem is standing.",
							/* Hex: Thrill Of The Hunt */"A Hex rooting its power on hope. The false hope of Survivors fills you with excitement and strengthens your totems. For each Dull Totem and Hex Totem remaining on the map gain a Token.<ul><li>Gain 6/8/10 % more Bloodpoints  for actions in the Hunter category for each Token.</li><li>Survivors' cleansing speed is reduced by 4/5/6 % for each Token.</li><li>Gain a notification when someone starts working on a Hex Totem.</li><li>The Hex effects persist as long as the related Hex Totem  is standing.</li></ul>",
							/* Hex: Huntress' Lullaby */"A Hex rooting its power in despair. Your hunt is an irresistible song of dread which muddles your preys attention. Survivors receive a 2/4/6 % regression penalty when missing any Skill Check. Each time a Survivor is hooked, Huntress Lullaby grows in power:<ul><li>1 to 4 Tokens: Time between the Skill Check warning sound and the Skill Check becomes shorter.</li><li>5 Tokens: No Skill Check warning.</li></ul><p><em>The Hex effects persist as long as the related Hex Totem is standing.</em></p>",
							/* Knock Out */"The trauma caused by your brutal attacks makes crying for help painfully difficult. Dying Survivors' Auras are not revealed to other Survivors when they are standing outside of a <span style='color:yellow'>32</span>/<span style='color:yellow'>24</span>/<span style='color:green'>16</span> meter range.",
							/* Lightborn */"Unlike other beasts of the fog, you have adapted to light. Resistance to blindness is increased by <span style='color:yellow'>20</span>/<span style='color:green'>40</span>/<span style='color:purple'>60</span> %. Recovery from blindness is increased by <span style='color:red'>50%</span>.",
							/* Monitor & Abuse */"Meticulous in your approach, terrifying in your application. While in a chase, your Terror Radius is increased by <span style='color:yellow'>6</span>/<span style='color:green'>7</span>/<span style='color:purple'>8</span> meters meter. Otherwise your Terror Radius is decreased by <span style='color:yellow'>6</span>/<span style='color:green'>7</span>/<span style='color:purple'>8</span> meters meter and your field of view is <span style='color:yellow'>slightly</span>/<span style='color:green'>moderately</span>/<span style='color:purple'>considerably</span> increased. Field of view gains do not stack.",
							/* Monstrous Shrine */"Your fervent care of the hooks found in the Basement has aroused the Entity's interest. The Basement Hooks are granted the following bonuses:<ul><li><span style='color:yellow'>3</span>/<span style='color:green'>6</span>/<span style='color:purple'>9</span>% faster Entity progression.</li><li><span style='color:yellow'>5</span>/<span style='color:green'>10</span>/<span style='color:purple'>15</span>% increased difficulty on escape attempts.</li><li><span style='color:yellow'>3</span>/<span style='color:green'>6</span>/<span style='color:purple'>9</span>% increased penalty to escape fails.</li></ul>",
							/* Overcharge */"You are fuelled by your hate for progress. Overcharge a Generator by performing the Damage Generator action. The next Survivor interacting with that Generator is faced with a <span style='color:yellow'>moderately</span>/<span style='color:green'>considerably</span>/<span style='color:purple'>tremendously</span> difficult Skill Check. Failing the Skill Check results in an additional 3/4/5 % Generator regression.",
							/* Overwhelming Presence */"Your presence alone instils great fear. Survivors within your Terror Radius suffer from inefficiency. Affected Survivors' Item consumption rates are increased by <span style='color:yellow'>80</span>/<span style='color:yellow'>90</span>/<span style='color:green'>100</span> %",
							/* Play With Your Food */"You become obsessed with one Survivor. Every time you chase your Obsession and let them escape, you receive a Token up to a maximum of 3 Tokens. Each Token increases your movement speed by <span style='color:green'>3</span>/<span style='color:purple'>4</span>/<span style='color:purple'>5</span> %. Each offensive action spends one Token. Only one Obsession per match.",
							/* Predator */"Your acute tracking ability allows you to follow disturbances left by passing prey over a longer period of time. Footstep marks stay visible <span style='color:yellow'>1</span>/<span style='color:yellow'>2</span>/<span style='color:green'>3</span> seconds longer than normal.",
							/* Save The Best For Last */"You become obsessed with one Survivor. As long as your Obsession is alive, after being in a chase for <span style='color:yellow'>20 seconds</span> the cooldown for your next successful attack is decreased by <span style='color:green'>30</span>/<span style='color:purple'>35</span>/<span style='color:purple'>40</span> %. Your successful attack cooldown remains active for <span style='color:yellow'>5 seconds</span> after a chase. Re-initialising a chase before the <span style='color:yellow'>5 seconds</span> have lapsed will reset the successful attack cooldown timer. Only one Obsession per match.",
							/* Shadowborn */"You have a keen vision in the darkness of the night. Your vision is <span style='color:green'>25</span>/<span style='color:purple'>30</span>/<span style='color:purple'>35</span> % clearer and your field of view is <span style='color:green'>not</span>/<span style='color:purple'>slightly</span>/<span style='color:purple'>considerably </span> wider than normal. Highly sensitive to light, you get blinded <span style='color:green'>25</span>/<span style='color:purple'>30</span>/<span style='color:purple'>35</span> % faster than normal and take <span style='color:purple'>50%</span> more time to recover from this condition.",
							/* Sloppy Butcher */"You know where to hit to make them bleed. Wounds inflicted by successful attacks <span style='color:yellow'>slightly</span>/<span style='color:green'>moderately</span>/<span style='color:green'>considerably</span> increase the Survivor's bleeding frequency. Bleeding returns to normal once the Survivor is healed.",
							/* Spies From the Shadows */"The Crows found in the world can communicate directly with you. <span style='color:green'>50</span>/<span style='color:purple'>50</span>/<span style='color:purple'>75</span> % of the time, cawing Crows give you a visual clue when you are within a <span style='color:green'>16</span>/<span style='color:purple'>24</span>/<span style='color:purple'>36</span> meters.",
							/* Stridor */"Breathing of Survivors in pain is <span style='color:yellow'>25</span>/<span style='color:yellow'>50</span>/<span style='color:green'>50</span> % louder. Regular Survivor breathing is now also <span style='color:yellow'>0</span>/<span style='color:yellow'>0</span>/<span style='color:green'>25</span> % louder.",
							/* Territorial Imperative */"Unlocks potential in one's Aura reading ability. Survivors' Auras are revealed to you for <span style='color:yellow'>3 seconds</span> when they enter the Basement and you are more than <span style='color:orange'>32 metres</span> away from the Basement entrance. Territorial Imperative can only be triggered once every <span style='color:yellow'>60</span>/<span style='color:green'>45</span>/<span style='color:purple'>30</span> seconds.",
							/* Tunkerer */"Add-ons that affect charge time of your power are <span style='color:green'>6</span>/<span style='color:purple'>8</span>/<span style='color:purple'>10</span> % more effective.",
							/* Thanatophobia */"All Survivors receive penalties to repair, healing and sabotage speeds for each injured, dying or hooked Survivor.<ul><li>1 injured, dying or hooked survivor decrease repair, healing and sabotage speed by <span style='color:yellow'>4</span>/<span style='color:green'>5</span>/<span style='color:purple'>6</span>.</li><li>2 injured, dying or hooked survivor decrease repair, healing and sabotage speed by <span style='color:yellow'>7</span>/<span style='color:green'>8</span>/<span style='color:purple'>9</span>.</li><li>3 injured, dying or hooked survivor decrease repair, healing and sabotage speed by <span style='color:yellow'>10</span>/<span style='color:green'>11</span>/<span style='color:purple'>12</span>.</li><li>4 injured, dying or hooked survivor decrease repair, healing and sabotage speed by <span style='color:yellow'>13</span>/<span style='color:green'>14</span>/<span style='color:purple'>15</span>.</li></ul>",
							/*Unnerving Presence */"Your presence alone instils great fear. Survivors within your Terror Radius have a <span style='color:yellow'>6</span>/<span style='color:yellow'>8</span>/<span style='color:green'>10</span> % greater chance of triggering Skill Checks when repairing, healing or sabotaging. Triggered Skill Checks' success zones are reduced by <span style='color:green'>40</span>/<span style='color:green'>50</span>/<span style='color:green'>60</span> %.",
							/* Unrelenting */"You recuperate faster from any attack made with your main weapon. The cooldown of missed attacks is reduced by <span style='color:yellow'>20</span>/<span style='color:green'>25</span>/<span style='color:purple'>30</span> %.",
							/* Whispers */"You have a rudimentary understanding of the Entity's voice. Sporadically hear the Entity's Whisper when standing within a <span style='color:yellow'>48</span>/<span style='color:yellow'>40</span>/<span style='color:purple'>32</span> meters of a Survivor."];
	
var KillerTeachable = ["<em>Standard Perk</em>",
				 "<em>Teachable from Trapper</em>",
				 "<em>Teachable from Wraith</em>",
				 "<em>Teachable from Hillbilly</em>",
				 "<em>Teachable from Nurse</em>",
				 "<em>Teachable from Shape</em>",
				 "<em>Teachable from Hag</em>",
				 "<em>Teachable from Doctor</em>",
				 "<em>Teachable from Huntress</em>",
				 "<em>Teachable from Cannibal</em>"];

var KillerTeachableImg = ["css/image/killer/killerportrait/dbd.png",
							"css/image/killer/killerportrait/trapper.png",
							"css/image/killer/killerportrait/wraith.png",
							"css/image/killer/killerportrait/hillbilly.png",
							"css/image/killer/killerportrait/nurse.png",
							"css/image/killer/killerportrait/michael.png",
							"css/image/killer/killerportrait/hag.png",
							"css/image/killer/killerportrait/doctor.png",
							"css/image/killer/killerportrait/huntress.png",
							"css/image/killer/killerportrait/leatherface.png"];
	
function showAITH(x, teach){
    document.getElementById("PerkTitle").innerHTML = SurvivorPerkTitles[x];
    document.getElementById("PerkDesc").innerHTML = SurvivorPerkDescriptions[x];
	document.getElementById("TeachableDesc").innerHTML = SurvivorTeachable[teach];
	document.getElementById("TeachableSrc").src = SurvivorTeachableImg[teach];
	
}

function showKILLER(x, teach){
    document.getElementById("PerkTitle").innerHTML = KillerPerkTitles[x];
    document.getElementById("PerkDesc").innerHTML = KillerPerkDescriptions[x];
	document.getElementById("TeachableDesc").innerHTML = KillerTeachable[teach];
	document.getElementById("TeachableSrc").src = KillerTeachableImg[teach];
}

function searchBar() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myUL');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        if (span.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

