var RandFunc = [function(){randomateSurvPerks()},
				function(){randomateKillPerks()}];
				
var RandTitles = ["Random Survivor Perks",
				  "Random Killer Perks"];
				  
var RandDesc = ["These are random survivor perks",
				"These are random killer perks"];

var SurvImgSrc = ["css/image/roulette/survivor/AceInTheHole.gif",
			  "css/image/roulette/survivor/Adrenaline.gif",
			  "css/image/roulette/survivor/Alert.gif",
			  "css/image/roulette/survivor/BalancedLanding.gif",
			  "css/image/roulette/survivor/Bond.gif",
			  "css/image/roulette/survivor/BorrowedTime.gif",
			  "css/image/roulette/survivor/BotanyKnowledge.gif",
			  "css/image/roulette/survivor/CalmSpirit.gif",
			  "css/image/roulette/survivor/DarkSense.gif",
			  "css/image/roulette/survivor/DeadHard.gif",
			  "css/image/roulette/survivor/DecisiveStrike.gif",
			  "css/image/roulette/survivor/DejaVu.gif",
			  "css/image/roulette/survivor/Empathy.gif",
			  "css/image/roulette/survivor/Hope.gif",
			  "css/image/roulette/survivor/IronWill.gif",
			  "css/image/roulette/survivor/Kindred.gif",
			  "css/image/roulette/survivor/Leader.gif",
			  "css/image/roulette/survivor/LeftBehind.gif",
			  "css/image/roulette/survivor/Lightweight.gif",
			  "css/image/roulette/survivor/Lithe.gif",
			  "css/image/roulette/survivor/NoMither.gif",
			  "css/image/roulette/survivor/NoOneLeftBehind.gif",
			  "css/image/roulette/survivor/ObjectOfObsession.gif",
			  "css/image/roulette/survivor/OpenHanded.gif",
			  "css/image/roulette/survivor/PlunderersInstinct.gif",
			  "css/image/roulette/survivor/Premonition.gif",
			  "css/image/roulette/survivor/ProveThyself.gif",
			  "css/image/roulette/survivor/QuickAndQuiet.gif",
			  "css/image/roulette/survivor/Resilience.gif",
			  "css/image/roulette/survivor/Saboteur.gif",
			  "css/image/roulette/survivor/SelfCare.gif",
			  "css/image/roulette/survivor/SlipperyMeat.gif",
			  "css/image/roulette/survivor/SmallGame.gif",
			  "css/image/roulette/survivor/SoleSurvivor.gif",
			  "css/image/roulette/survivor/SpineChill.gif",
			  "css/image/roulette/survivor/SprintBurst.gif",
			  "css/image/roulette/survivor/StreetWise.gif",
			  "css/image/roulette/survivor/TINH.gif",
			  "css/image/roulette/survivor/Technician.gif",
			  "css/image/roulette/survivor/UpTheAnte.gif",
			  "css/image/roulette/survivor/Unbreakable.gif",
			  "css/image/roulette/survivor/UrbanEvasion.gif",
			  "css/image/roulette/survivor/WellMakeIt.gif",
			  "css/image/roulette/survivor/WereGonnaLiveForever.gif"];

var KillImgSrc = ["css/image/roulette/killer/ANursesCalling.gif",
				  "css/image/roulette/killer/Agitation.gif",
				  "css/image/roulette/killer/BarbequeAndChili.gif",
				  "css/image/roulette/killer/BeastOfPrey.gif",
				  "css/image/roulette/killer/BitterMurmur.gif",
				  "css/image/roulette/killer/Bloodhound.gif",
				  "css/image/roulette/killer/BrutalStrength.gif",
				  "css/image/roulette/killer/Deerstalker.gif",
				  "css/image/roulette/killer/Distressing.gif",
				  "css/image/roulette/killer/DyingLight.gif",
				  "css/image/roulette/killer/Enduring.gif",
				  "css/image/roulette/killer/FranklinsDemise.gif",
				  "css/image/roulette/killer/Insidious.gif",
				  "css/image/roulette/killer/IronGrasp.gif",
				  "css/image/roulette/killer/HexDevourHope.gif",
				  "css/image/roulette/killer/HexNoOneEscapesDeath.gif",
				  "css/image/roulette/killer/HexRuin.gif",
				  "css/image/roulette/killer/HexTheThirdSeal.gif",
				  "css/image/roulette/killer/HexThrillOfTheHunt.gif",
				  "css/image/roulette/killer/HexHuntressLullaby.gif",
				  "css/image/roulette/killer/Knockout.gif",
				  "css/image/roulette/killer/Lightborn.gif",
				  "css/image/roulette/killer/MonitorAndAbuse.gif",
				  "css/image/roulette/killer/MonstrousShrine.gif",
				  "css/image/roulette/killer/Overcharge.gif",
				  "css/image/roulette/killer/OverwhelmingPresence.gif",
				  "css/image/roulette/killer/PlayWithYourFood.gif",
				  "css/image/roulette/killer/Predator.gif",
				  "css/image/roulette/killer/SaveTheBestForLast.gif",
				  "css/image/roulette/killer/Shadowborn.gif",
				  "css/image/roulette/killer/SloppyButcher.gif",
				  "css/image/roulette/killer/SpiesFromTheShadows.gif",
				  "css/image/roulette/killer/Stridor.gif",
				  "css/image/roulette/killer/TerritorialImperative.gif",
				  "css/image/roulette/killer/Tinkerer.gif",
				  "css/image/roulette/killer/Thanatophobia.gif",
				  "css/image/roulette/killer/UnnervingPresence.gif",
				  "css/image/roulette/killer/Unrelenting.gif",
				  "css/image/roulette/killer/Whisper.gif"];

var RandButton = ["none",
				  "block"];
				  
				  
function showFunc(x, y) {
    document.getElementById("rand_title").innerHTML = RandTitles[x];
    document.getElementById("rand_desc").innerHTML = RandDesc[x];
	document.getElementById("random").onclick = RandFunc[x];
	
	document.getElementById("perkslotone").src = "css/image/roulette/survivor/perkslot.gif";
	document.getElementById("perkslottwo").src = "css/image/roulette/survivor/perkslot.gif";
	document.getElementById("perkslotthree").src = "css/image/roulette/survivor/perkslot.gif";
	document.getElementById("perkslotfour").src = "css/image/roulette/survivor/perkslot.gif";
	
	document.getElementById("perkslotone").style.display = RandButton[y];
	document.getElementById("perkslottwo").style.display = RandButton[y];
	document.getElementById("perkslotthree").style.display = RandButton[y];
	document.getElementById("perkslotfour").style.display = RandButton[y];
	
	document.getElementById('random').style.display = RandButton[y];
};

function randomateSurvPerks() {
	
	var Survshuffled = SurvImgSrc.sort(function(){return .5 - Math.random()});
	var Survselected = Survshuffled.slice(0,4);
	
	document.getElementById("perkslotone").src = Survselected[0];
	document.getElementById("perkslottwo").src = Survselected[1];
	document.getElementById("perkslotthree").src = Survselected[2];
	document.getElementById("perkslotfour").src = Survselected[3];
	
};

function randomateKillPerks() {
	var Killshuffled = KillImgSrc.sort(function(){return .5 - Math.random()});
	var Killselected = Killshuffled.slice(0,4);
	
	document.getElementById("perkslotone").src = Killselected[0];
	document.getElementById("perkslottwo").src = Killselected[1];
	document.getElementById("perkslotthree").src = Killselected[2];
	document.getElementById("perkslotfour").src = Killselected[3];
};

