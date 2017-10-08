var RandTitles = ["Random Survivor Perks",
				  "Random Killer Perks"];
				  
var RandDesc = ["These are random survivor perks",
				"These are random killer perks"];

var ImgSrc = ["css/image/roulette/AceInTheHole.png",
			  "css/image/roulette/Adrenaline.png",
			  "css/image/roulette/Alert.png",
			  "css/image/roulette/BalancedLanding.png",
			  "css/image/roulette/Bond.png",
			  "css/image/roulette/BorrowedTime.png",
			  "css/image/roulette/BotanyKnowledge.png",
			  "css/image/roulette/CalmSpirit.png",
			  "css/image/roulette/DarkSense.png",
			  "css/image/roulette/DeadHard.png",
			  "css/image/roulette/DecisiveStrike.png",
			  "css/image/roulette/DejaVu.png",
			  "css/image/roulette/Empathy.png",
			  "css/image/roulette/Hope.png",
			  "css/image/roulette/IronWill.png",
			  "css/image/roulette/Kindred.png",
			  "css/image/roulette/Leader.png",
			  "css/image/roulette/LeftBehind.png",
			  "css/image/roulette/Lightweight.png",
			  "css/image/roulette/Lithe.png",
			  "css/image/roulette/NoMither.png",
			  "css/image/roulette/NoOneLeftBehind.png",
			  "css/image/roulette/ObjectOfObsession.png",
			  "css/image/roulette/OpenHanded.png",
			  "css/image/roulette/PlunderersInstinct.png",
			  "css/image/roulette/Premonition.png",
			  "css/image/roulette/ProveThyself.png",
			  "css/image/roulette/QuickAndQuiet.png",
			  "css/image/roulette/Resilience.png",
			  "css/image/roulette/Saboteur.png",
			  "css/image/roulette/SelfCare.png",
			  "css/image/roulette/SlipperyMeat.png",
			  "css/image/roulette/SmallGame.png",
			  "css/image/roulette/SoleSurvivor.png",
			  "css/image/roulette/SpineChill.png",
			  "css/image/roulette/SprintBurst.png",
			  "css/image/roulette/StreetWise.png",
			  "css/image/roulette/TINH.png",
			  "css/image/roulette/Technician.png",
			  "css/image/roulette/UpTheAnte.png",
			  "css/image/roulette/Unbreakable.png",
			  "css/image/roulette/UrbanEvasion.png",
			  "css/image/roulette/WellMakeIt.png",
			  "css/image/roulette/WereGonnaLiveForever.png"];




function showFunc(x) {
    document.getElementById("rand_title").innerHTML = RandTitles[x];
    document.getElementById("rand_desc").innerHTML = RandDesc[x];
}

function randomateSurvPerks() {
	
	var shuffled = ImgSrc.sort(function(){return .5 - Math.random()});
	var selected = shuffled.slice(0,4);
	
	document.getElementById("perkslotone").src = selected[0];
	document.getElementById("perkslottwo").src = selected[1];
	document.getElementById("perkslotthree").src = selected[2];
	document.getElementById("perkslotfour").src = selected[3];

}

