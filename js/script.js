var PerkTitles = ["Ace In The Hole", 
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

var PerkDescriptions = [/*Ace In The Hole*/"Lady Luck always seems to be throwing something good your way. When retrieving an Item from a Chest, there is a <span style='color:yellow'>50%</span> chance that an of <span style='color:green'>Uncommon</span>/<span style='color:purple'>Rare</span>/<span style='color:purple'>Very Rare</span> rarity or lower will be attached to it.", 
						/*Adrenaline*/"You are fuelled by unexpected energy when on the verge of escape. Instantly heal from <span style='color:green'>Injury</span>/<span style='color:purple'>Injury</span>/<span style='color:purple'>Injury or dying state</span> and sprint at <span style='color: orange'> 150% </span> your normal running speed for <span style='color:green'>3</span>/<span style='color:purple'>5</span>/<span style='color:purple'>5</span> seconds when the Exit Gates are powered. <br><br>Adrenaline is on hold if you are disabled at the moment it should take effect and will activate when freed. Adrenaline ignores Exhaustion. Causes Exhaustion for <span style='color:green'>60</span>/<span style='color:purple'>50</span>/<span style='color:purple'>40</span> seconds.",
						/*Alert*/"Your acute senses are on high alert. When the Killer performs the break action within a <span style='color:yellow'>12</span>/<span style='color:green'>24</span>/<span style='color:purple'>36</span> meter range, the Killer's Aura is revealed to you for <span style='color:yellow'>6 seconds</span>. This effect can only be triggered once every <span style='color:yellow'>60</span>/<span style='color:green'>45</span>/<span style='color:purple'>30</span> seconds.",
						/*Balanced Landing*/"When Balanced Landing is active, stagger effects from long falls are reduced by <span style='color:yellow'>50</span>/<span style='color:yellow'>75</span>/<span style='color:green'>75</span> %. <br><br>Tier III only: Upon landing, start sprinting at <span style='color:orange'>150%</span> your normal running speed for a maximum of <span style='color:red'>3 seconds</span> if not exhausted. Causes Exhaustion for <span style='color:purple'>40 seconds</span>.",
						/*Bond*/"Unlocks potential in one's aura reading ability. Allies' Auras are revealed to you when they are within a <span style='color:yellow'>12</span>/<span style='color:yellow'>24</span>/<span style='color:purple'>36</span> meters.",
						/*Borrowed Time*/"You are fuelled with an unexpected energy when saving an ally from a hook within the Killer's Terror Radius. Once per match, for <span style='color:yellow'>15 seconds</span> after unhooking a Survivor within the Killer's Terror Radius, any damage taken that would put you or the unhooked Survivor into the dying state will instead trigger a <span style='color:yellow'>15</span>/<span style='color:green'>20</span>/<span style='color:purple'>25</span> seconds bleed-out timer. Taking any damage during or reaching the end of the bleed-out timer will put you into the Dying State.",
						/*Botany Knowledge*/"You transform plants found around The Campfire into tinctures that slow down bleeding. Healing speed is increased by <span style='color:yellow'>10</span>/<span style='color:green'>15</span>/<span style='color:purple'>20</span> % and the efficiency of Med-Kits is increased by <span style='color:yellow'>10</span>/<span style='color:green'>15</span>/<span style='color:purple'>20</span> %.",
						/*Calm Spirit*/"Animals seem to trust you as they often stay calm in your presence. Reduces chances of alerting Crows by <span style='color:yellow'>80</span>/<span style='color:green'>90</span>/<span style='color:purple'>100</span> %.",
						/*Dark Sense*/"Unlocks potential in one's Aura reading ability. When the Exit Gates unlock, the Killer's Aura is revealed to you for <span style='color:green'>3</span>/<span style='color:purple'>5</span>/<span style='color:purple'>7</span> seconds.",
						/*Dead Hard*/"You can take a beating. When injured, tap into your adrenaline bank and dash forward quickly to avoid damage. Press the activate ability button while running to dash forward. During the dash, you avoid damage. Causes Exhaustion for <span style='color:yellow'>60</span>/<span style='color:green'>50</span>/<span style='color:purple'>40</span> seconds.",
						/*Decisive Strike*/"Once per match, when the Killer's Obsession, succeed a Skill Check to automatically escape the Killer's grasp and stun them for <span style='color:green'>3</span>/<span style='color:purple'>3.5</span>/<span style='color:purple'>4</span> seconds. When not the Killer's Obsession, when the wiggle meter is at 45/40/35 % succeed in a Skill Check to escape the grasp.",
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
						/*Slippery Meat*/"You have developed an efficient way to get out of Bear Traps and Hooks. Grants up to <span style='color:yellow'>1</span>/<span style='color:yellow'>2</span>/<span style='color:green'>3</span> extra escape attempts on the hook. The odds of freeing yourself from Bear Traps are increased by <span style='color:yellow'>15</span>/<span style='color:yellow'>12</span>/<span style='color:green'>10</span> %.",
						/*Small Game*/"You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of Killer Traps and Totems in a 45 degree cone within a range of <span style='color:yellow'>8</span>/<span style='color:yellow'>10</span>/<span style='color:green'>12</span> meters. Small Game has a cooldown of <span style='color:yellow'>15</span>/<span style='color:yellow'>12</span>/<span style='color:green'>10</span> seconds each time it activates.",
						/*Sole Survivor"*/"Each Survivor killed or sacrificed disrupts the Killer's&nbsp;Aura&nbsp;reading ability.<ul><li>1 killed or sacrificed: Reduces the Killer's Aura reading range by&nbsp;<span style='color:yellow'>40</span>/<span style='color:green'>45</span>/<span style='color:purple'>50</span>&nbsp;%</li><li>2 killed or sacrificed: Reduces the Killer's Aura reading range by&nbsp;<span style='color:yellow'>40</span>/<span style='color:green'>60</span>/<span style='color:purple'>75</span>&nbsp;%</li><li>3 killed or sacrificed: Reduces the Killer's Aura reading range by&nbsp;<span style='color:yellow'>40</span>/<span style='color:green'>75</span>/<span style='color:purple'>100</span>&nbsp;%</li></ul>",
						/*Spine Chill*/"An unnatural tingle warns you of impending doom. Get notified when the Killer is looking directly in your direction and standing within a <span style='color:green'>12</span>/<span style='color:purple'>24</span>/<span style='color:purple'>36</span> meters. While Spine Chill is active, Skill Checks trigger odds are increased by 10% with success zones reduced by 10%. While Spine Chill is active, your repair, heal and sabotage speeds are increased by <span style='color:green'>2</span>/<span style='color:purple'>4</span>/<span style='color:purple'>6</span> %.",
						/*Sprint Burst*/"When starting to run, break into a sprint at <span style='color:yellow'>150%</span> your normal running speed for a maximum of <span style='color:orange'>3 seconds</span>. Causes Exhaustion IconStatusEffects exhausted.png for <span style='color:green'>60</span>/<span style='color:purple'>50</span>/<span style='color:purple'>40</span> seconds.",
						/*Streetwise*/"Long nights out taught you to do a lot with what you've got. Reduce consumption rate of Item charge by <span style='color:green'>10</span>/<span style='color:purple'>12</span>/<span style='color:purple'>15</span> % for you and allies within a 8 meter range.",
						/*This Is Not Happening*/"You perform at your best when you are under extreme stress. Great Skill Check success zones when repairing, healing and sabotaging get <span style='color:yellow'>10</span>/<span style='color:green'>20</span>/<span style='color:purple'>30</span> % bigger when you are injured.",
						/*Technician*/"The noises caused by your repairs and their hearing distance are reduced by <span style='color:yellow'>0</span>/<span style='color:green'>4</span>/<span style='color:purple'>8</span> meters. On a failed repair Skill Checks , there is a <span style='color:yellow'>30</span>/<span style='color:green'>40</span>/<span style='color:purple'>50</span> % chance the Generator explosion will be prevented.",
						/*Up The Ante*/"For each other Survivor still alive, grant a <span style='color:green'>1</span>/<span style='color:purple'>2</span>/<span style='color:purple'>3</span> % bonus to Luck to all remaining Survivors.",
						/*Unbreakable*/"Past battles have taught you a thing or two about survival. Grants the ability to fully recover from the dying state once per trial. Increases dying recovery by <span style='color:green'>15</span>/<span style='color:purple'>20</span>/<span style='color:purple'>25</span> %",
						/*Urban Evasion*/"Your movement speed while crouching is increased by <span style='color:yellow'>90</span>/<span style='color:green'>95</span>/<span style='color:purple'>100</span> %.",
						/*We'll Make It*/"Helping others heightens your morale. For each Survivor you rescue from a hook, gain an additional <span style='color:yellow'>25</span>/<span style='color:green'>50</span>/<span style='color:purple'>100</span> % speed increase to healing up to a maximum of 100% for <span style='color:yellow'>30</span>/<span style='color:green'>60</span>/<span style='color:purple'>90</span> seconds.",
						/*We're Gonna Live Forever*/"Your few friends deserve the best protection. Each time you rescue or take a hit to protect a survivor, gain <span style='color:yellow'>25%</span> stackable bonus to all Bloodpoint gains up to a maximum of <span style='color:yellow'>50</span>/<span style='color:yellow'>75</span>/<span style='color:green'>100</span> %. The Bonus Bloodpoints are only awarded post-trial."]; 

function showAITH(x){
    document.getElementById("PerkTitle").innerHTML = PerkTitles[x];
    document.getElementById("PerkDesc").innerHTML = PerkDescriptions[x];
}

function searchBar() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

