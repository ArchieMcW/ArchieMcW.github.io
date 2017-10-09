var RandFunc = [function(){randomateSurvPerks()},
				function(){randomateKillPerks()}];
				
var RandTitles = ["Random Survivor Perks",
				  "Random Killer Perks"];
				  
var RandDesc = ["These are random survivor perks",
				"These are random killer perks"];

var SurvImgSrc = ["css/image/roulette/survivor/AceInTheHole.png",
			  "css/image/roulette/survivor/Adrenaline.png",
			  "css/image/roulette/survivor/Alert.png",
			  "css/image/roulette/survivor/BalancedLanding.png",
			  "css/image/roulette/survivor/Bond.png",
			  "css/image/roulette/survivor/BorrowedTime.png",
			  "css/image/roulette/survivor/BotanyKnowledge.png",
			  "css/image/roulette/survivor/CalmSpirit.png",
			  "css/image/roulette/survivor/DarkSense.png",
			  "css/image/roulette/survivor/DeadHard.png",
			  "css/image/roulette/survivor/DecisiveStrike.png",
			  "css/image/roulette/survivor/DejaVu.png",
			  "css/image/roulette/survivor/Empathy.png",
			  "css/image/roulette/survivor/Hope.png",
			  "css/image/roulette/survivor/IronWill.png",
			  "css/image/roulette/survivor/Kindred.png",
			  "css/image/roulette/survivor/Leader.png",
			  "css/image/roulette/survivor/LeftBehind.png",
			  "css/image/roulette/survivor/Lightweight.png",
			  "css/image/roulette/survivor/Lithe.png",
			  "css/image/roulette/survivor/NoMither.png",
			  "css/image/roulette/survivor/NoOneLeftBehind.png",
			  "css/image/roulette/survivor/ObjectOfObsession.png",
			  "css/image/roulette/survivor/OpenHanded.png",
			  "css/image/roulette/survivor/PlunderersInstinct.png",
			  "css/image/roulette/survivor/Premonition.png",
			  "css/image/roulette/survivor/ProveThyself.png",
			  "css/image/roulette/survivor/QuickAndQuiet.png",
			  "css/image/roulette/survivor/Resilience.png",
			  "css/image/roulette/survivor/Saboteur.png",
			  "css/image/roulette/survivor/SelfCare.png",
			  "css/image/roulette/survivor/SlipperyMeat.png",
			  "css/image/roulette/survivor/SmallGame.png",
			  "css/image/roulette/survivor/SoleSurvivor.png",
			  "css/image/roulette/survivor/SpineChill.png",
			  "css/image/roulette/survivor/SprintBurst.png",
			  "css/image/roulette/survivor/StreetWise.png",
			  "css/image/roulette/survivor/TINH.png",
			  "css/image/roulette/survivor/Technician.png",
			  "css/image/roulette/survivor/UpTheAnte.png",
			  "css/image/roulette/survivor/Unbreakable.png",
			  "css/image/roulette/survivor/UrbanEvasion.png",
			  "css/image/roulette/survivor/WellMakeIt.png",
			  "css/image/roulette/survivor/WereGonnaLiveForever.png"];

var KillImgSrc = ["css/image/roulette/killer/ANursesCalling.png",
				  "css/image/roulette/killer/Agitation.png",
				  "css/image/roulette/killer/BarbequeAndChili.png",
				  "css/image/roulette/killer/BeastOfPrey.png",
				  "css/image/roulette/killer/BitterMurmur.png",
				  "css/image/roulette/killer/BloodHound.png",
				  "css/image/roulette/killer/BrutalStrength.png",
				  "css/image/roulette/killer/Deerstalker.png",
				  "css/image/roulette/killer/Distressing.png",
				  "css/image/roulette/killer/DyingLight.png",
				  "css/image/roulette/killer/Enduring.png",
				  "css/image/roulette/killer/FranklinsDemise.png",
				  "css/image/roulette/killer/Insidious.png",
				  "css/image/roulette/killer/IronGrasp.png",
				  "css/image/roulette/killer/HexDevourHope.png",
				  "css/image/roulette/killer/HexNoOneEscapesDeath.png",
				  "css/image/roulette/killer/HexRuin.png",
				  "css/image/roulette/killer/HexTheThirdSeal.png",
				  "css/image/roulette/killer/HexThrillOfTheHunt.png",
				  "css/image/roulette/killer/HexHuntressLullaby.png",
				  "css/image/roulette/killer/KnockOut.png",
				  "css/image/roulette/killer/Lightborn.png",
				  "css/image/roulette/killer/MonitorAndAbuse.png",
				  "css/image/roulette/killer/MonstrousShrine.png",
				  "css/image/roulette/killer/Overcharge.png",
				  "css/image/roulette/killer/OverwhelmingPresence.png",
				  "css/image/roulette/killer/PlayWithYourFood.png",
				  "css/image/roulette/killer/Predator.png",
				  "css/image/roulette/killer/SaveTheBestForLast.png",
				  "css/image/roulette/killer/ShadowBorn.png",
				  "css/image/roulette/killer/SloppyButcher.png",
				  "css/image/roulette/killer/SpiesFromTheShadows.png",
				  "css/image/roulette/killer/Stridor.png",
				  "css/image/roulette/killer/TerritorialImperative.png",
				  "css/image/roulette/killer/Tinkerer.png",
				  "css/image/roulette/killer/Thanatophobia.png",
				  "css/image/roulette/killer/UnnervingPresence.png",
				  "css/image/roulette/killer/Unrelenting.png",
				  "css/image/roulette/killer/Whisper.png"];

var RandButton = ["none",
				  "block"];
				  
				  
function showFunc(x, y) {
    document.getElementById("rand_title").innerHTML = RandTitles[x];
    document.getElementById("rand_desc").innerHTML = RandDesc[x];
	document.getElementById("random").onclick = RandFunc[x];
	
	document.getElementById("perkslotone").src = "css/image/roulette/survivor/perkslot.png";
	document.getElementById("perkslottwo").src = "css/image/roulette/survivor/perkslot.png";
	document.getElementById("perkslotthree").src = "css/image/roulette/survivor/perkslot.png";
	document.getElementById("perkslotfour").src = "css/image/roulette/survivor/perkslot.png";
	
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

