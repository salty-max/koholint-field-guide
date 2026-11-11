(() => {
  const groups = [];
  function add(chapter, title, location, category, entries, placement = "after") {
    groups.push({chapter, title, location, placement, steps: entries.map(([id, name, note, tags]) => [id, tags ?? [category], name, note])});
  }

  add(1,"Village errands","Mabe Village","heart",[
    ["heart-well","Piece of Heart · Mabe well","At the west edge of Mabe Village, cut the bushes on the raised bank and step off into the well. Pick up the heart piece and leave through the cave exit."],
    ["heart-shop","Piece of Heart · Town Tool Shop","Buy the heart piece displayed in Mabe Village’s shop for 200 rupees. It can wait if you need the rupees for the Shovel."],
    ["shovel","Deluxe Shovel","Buy the Shovel for 200 rupees from the Town Tool Shop. Look for it after getting the Sword. It opens the digging stops on this route.",["gear"]],
    ["shell-mabe","Secret Seashell · Mabe bush patch","Cut the small bushes in the square field just north of the Trendy Game. The shell is near the middle.",["shell"]],
    ["shell-kennel","Secret Seashell · CiaoCiao’s kennel","Use the little door at the right of Madam MeowMeow’s house. Dig near the bottom-right corner of the kennel.",["shell"]]
  ],"village");

  add(1,"Trendy Game and the first trades","Southeast Mabe Village · Toronbo Shores","trade",[
    ["trade-yoshi","Yoshi Doll","Pay 10 rupees at the crane game. Move the claw forward, then right, using the on-screen prompts. Each direction gets one move. Line up with the center of the prize and watch it all the way to the collection chute.",["trade","mini"]],
    ["heart-crane-1","Piece of Heart · First crane prize","Win the stationary Piece of Heart at the Trendy Game. Take it from the collection area after the claw drops it.",["heart","mini"]],
    ["trade-ribbon","Ribbon","Take the Yoshi Doll to Mamasha in the long family house at the north end of Mabe Village. She is holding a baby."],
    ["fig-ciao","CiaoCiao figure","After delivering Yoshi to Mamasha, check the machine for CiaoCiao. Win it and put it on the kitchen-table stand inside Madam MeowMeow’s main house.",["figure","mini"]],
    ["shell-crane-1","Secret Seashell · First crane prize","Win the Yoshi Doll and first heart piece, then leave and re-enter to refresh the prizes. If the shell has not appeared, win and place CiaoCiao too.",["shell","mini"]],
    ["trade-food","Dog Food","Give the Ribbon to CiaoCiao in the kennel beside Madam MeowMeow’s house."],
    ["trade-bananas","Bananas","Give the Dog Food to Sale, the crocodile in the beachside house on Toronbo Shores."]
  ],"village");
  add(1,"Fishing Pond","Northwest Mabe Village","mini",[
    ["lure-light","Lightweight Lure","Pay 10 rupees to fish at the pond. The Lightweight Lure is available from your first visit. Hold A to cast, then tap A to reel when the fish faces you. Ease off when it turns and pulls away.",["lure","mini"]],
    ["heart-fish-1","Piece of Heart · First fish","Land your first fish. A small orange Runt close to the surface is an easy target.",["heart","mini"]],
    ["lure-middle","Middleweight Lure","Land your first green Lunker. This lure sinks more quickly and makes the bottle easier to reach.",["lure","mini"]],
    ["heart-fish-2","Piece of Heart · Large fish","Reel in a fish longer than 20 inches. Look for a large green Lunker in the lower half of the pond.",["heart","mini"]],
    ["bottle-fishing","Fairy Bottle · Pond floor","Cast beyond the bottle in the lower-left weeds and let the lure sink. Reel it into the bottle and bring it up slowly. Catch nearby fish first if they keep knocking the bottle loose.",["bottle","mini"]]
  ],"village");

  add(1,"Forest and shore detours","Mysterious Forest · Toronbo Shores","shell",[
    ["shell-flowers","Secret Seashell · Blue flower ring","In the central Mysterious Forest, dig in the center of the ring of blue flowers. You can do this as soon as you own the Shovel."],
    ["shell-beach","Secret Seashell · Beach alcove","Follow Toronbo Shores toward its east end. In the enclosed sandy nook by the log, dig in the lower-left corner against the wall."],
    ["fairy-forest","Great Fairy · Mysterious Forest","Visit the open cave on the east edge of the forest. Use the fountain to recover before the dungeon. Bottle the smaller fairy if you have an empty bottle.",["fairy"]]
  ],"before-dungeon");

  add(2,"Jumping detours","Koholint Prairie · Tabahl Wasteland · Forest","heart",[
    ["heart-prairie","Piece of Heart · Pit ring","Just north of the Witch’s Hut, use Roc’s Feather to jump into the center of the ring of holes and jump out the same way."],
    ["heart-tabahl","Piece of Heart · Tabahl Wasteland","Jump the pits east of the Witch’s Hut to reach the graveyard and continue north into the wasteland. Jump the narrow crossing to the heart piece on the far side of the pits."]
  ],"before-dungeon");
  add(2,"Forest and wasteland shells","Mysterious Forest · Goponga Swamp · Tabahl Wasteland","shell",[
    ["shell-northforest","Secret Seashell · North forest exit","Leave the forest by the path north of the Toadstool clearing. Dig beside the tree on the west side of the path, just below the exit."],
    ["shell-write","Secret Seashell · Mr. Write’s telephone booth","Follow the path east from Mr. Write’s house to the telephone booth. Go north of it, slash the southernmost bush in that patch, and dig the tile underneath."],
    ["shell-tabahl","Secret Seashell · Tabahl Wasteland","Dig the bare dirt among the grass and dead trees in the northeast corner of the wasteland."]
  ],"before-dungeon");
  add(2,"Return to the crane","Mabe Village","figure",[
    ["fig-goomba","Goomba figure","After Tail Cave, win Goomba at the crane game once CiaoCiao is on its stand. Place Goomba on the back table in Marin and Tarin’s house.",["figure","mini"]]
  ],"before-dungeon");

  add(3,"Power Bracelet detours","Forest · Ukuku Prairie · Tal Tal Mountains","heart",[
    ["heart-forest-log","Piece of Heart · Toadstool tunnel","Re-enter the forest log cave from the Toadstool clearing. From the bottom exit, push the two highest available blocks left, push the two in line with the first skull upward, then lift both skulls to reach the piece."],
    ["heart-prairie-blocks","Piece of Heart · Prairie block cave","Enter the cave in northwest Ukuku Prairie. Push the top-left block north and the next block right. Lift the skull. At the two blocks on the right, push the top one right and the lower one down, then lift the final skull."],
    ["heart-mansion","Piece of Heart · 5 shells","Enter the Seashell Mansion south of Kanalet Castle and step onto its meter with at least five Secret Seashells."],
    ["heart-pothole","Piece of Heart · Pothole Field","After giving Richard the leaves, reach the northeast of his field. Cut the bushes before attempting the jump. Return with the Pegasus Boots if you want an easier dash-jump across the gap."],
    ["heart-tal-blocks","Piece of Heart · First mountain cave","North of Dampé’s Shack, lift the boulders outside the first cave. In the block room, break the upper crystal, push the block down and go down and back up the stairs to reset. Push the middle block of the three below the stairs down, then the left block left. Break the crystal and collect the piece."]
  ],"before-dungeon");
  add(3,"Shovel and bomb detours","Koholint Prairie · Ukuku Prairie · Tal Tal Heights","shell",[
    ["shell-witch","Secret Seashell · Below the Witch’s Hut","From the Witch’s Hut go west, lift the boulder and descend. Cut the lone bush in the clearing and dig on the tile it occupied."],
    ["shell-forest-chest","Secret Seashell · Forest boulder chest","In the southwest of the Mysterious Forest, lift the boulder that blocks the short path to the chest."],
    ["shell-moblin-sign","Secret Seashell · Tal Tal signpost","Head north and east from the Moblin hideout. At the sign ringed by stones, lift the one on the east side."],
    ["shell-prairie-skull","Secret Seashell · Buried by the giant skull","East of the Ukuku Prairie warp, bomb the giant stone skull blocking the path. Dig in the spot between the exposed small rocks."],
    ["shell-rock-maze","Secret Seashell · Stone enclosure","Southwest of Seashell Mansion, enter the enclosure made of round-topped stones and lift the loose boulder inside."],
    ["shell-prairie-owl","Secret Seashell · Prairie owl statue","Enter the cave west of the stone enclosure, bomb the west wall, jump the gap and take the stairs. Work around the blocks and use the upper exit. Outside, dig immediately southwest of the owl statue."],
    ["shell-bay-phone","Secret Seashell · Bush by the bay","Follow the path south from the prairie cave toward Martha’s Bay. Cut the bush east of the telephone booth on the south shore."],
    ["shell-mansion-bush","Secret Seashell · East of the Mansion","Cut the bushes immediately east of Seashell Mansion. Check the faint warp marking nearby as well."],
    ["shell-richard","Secret Seashell · Richard’s tunnel","When Richard moves after receiving five Golden Leaves, go under his villa. Follow the left fork and jump to the chest."],
    ["shell-keyroof","Secret Seashell · Key Cavern roof","Climb onto the hill above Key Cavern and dig in the center of the four patches of grass."],
    ["shell-tal-bomb","Secret Seashell · Tal Tal Heights bomb toss","East of Dampé’s Shack, find the large hole beside the Tal Tal Heights warp. Throw a lit bomb into it and pick up the shell it ejects."]
  ],"before-dungeon");
  add(3,"Shop, fairy and upgrades","Mabe Village · Mysterious Forest · Ukuku Prairie","gear",[
    ["bombs","Bombs","After Bottle Grotto, buy a pack of 10 from the Town Tool Shop for 10 rupees. Bring them on your Tail Cave return and into bombable caves."],
    ["bow","Bow & Arrow Set","The Town Tool Shop sells the set for 980 rupees after you purchase the Shovel. Save up or return later. The purchase is safe for a deathless file."],
    ["medicine-tracy","Secret Medicine · Crazy Tracy","Lift the rocks on the approach to Crazy Tracy’s spa in Koholint Prairie. Talk to her and buy a dose. It automatically restores health when you would otherwise fall."],
    ["upgrade-powder","Magic Powder capacity · 40","In the center of the Mysterious Forest, west of the Great Fairy cave, lift the lone rock to find stairs. Sprinkle Powder on the altar and accept the Powder offer. Each of the three altars gives one upgrade, and you may decline offers to cycle them."],
    ["sensor","Seashell Sensor · 15 shells","Collect at least 15 shells, then stand on the meter in Seashell Mansion. The sensor chimes near hidden shells and can be toggled in the inventory."],
    ["fairy-prairie","Great Fairy · Ukuku Prairie","Bomb the cracked wall on the north edge of the prairie, east of the village warp area, to enter the fountain cave.",["fairy"]]
  ],"before-dungeon");
  add(3,"The castle trade","Kanalet Castle","trade",[
    ["trade-stick","Stick","Give Kiki the Bananas on the east side of Kanalet Castle. The monkeys build a bridge and leave a Stick. Pick it up before crossing."]
  ],"early");
  add(3,"Return to the crane","Mabe Village","figure",[
    ["fig-spiny","Spiny figure","After Bottle Grotto, win Spiny once Goomba is on its stand. Place it on the table by the left-hand door of the large family house in northern Mabe Village.",["figure","mini"]]
  ],"before-dungeon");

  add(4,"From the prairie to Animal Village","Ukuku Prairie · Animal Village · Tal Tal Mountains","trade",[
    ["trade-honey","Honeycomb","After Key Cavern, find Tarin by the tree in Ukuku Prairie and hand him the Stick. Pick up the Honeycomb when he runs off."],
    ["trade-pineapple","Pineapple","Give the Honeycomb to Chef Bear in Animal Village."],
    ["trade-hibiscus","Hibiscus","On the mountain route above Angler’s Tunnel, find the hungry Papahl on the ledge beyond the first cave and give him the Pineapple."],
    ["trade-letter","Goat’s Letter","Give the Hibiscus to Christine, the goat in Animal Village."],
    ["trade-broom","Broom","Take Christine’s letter to Mr. Write in the house northwest of the forest."],
    ["trade-hook","Fishing Hook","Give the Broom to Grandma Yahoo. Look outside the house with a broom in Mabe Village. If she has moved, look for her in Animal Village."]
  ],"before-dungeon");
  add(4,"Desert and dash-jump detours","Animal Village · Yarna Desert · Ukuku Prairie · Cemetery","heart",[
    ["heart-animal","Piece of Heart · Behind Animal Village","From the desert approach, turn north before the walrus clearing. Follow the path behind the houses to the visible heart piece."],
    ["heart-lanmola","Piece of Heart · Below the sand pit","After the Lanmola fight, descend through the sand pit or use the stairs to the east. Bomb the cracked north wall in the cave below."],
    ["heart-ukuku-boots","Piece of Heart · Behind the black barriers","Enter the prairie cave north of the path east of its warp. Dash through the black obstacles with the Pegasus Boots. Bomb the cracked wall in the upper-right of the cave."],
    ["heart-cemetery","Piece of Heart · Cemetery tunnel","Push the lower-right grave in the southwest group of four north. In the cave, bomb the cracked block below the stairs and dash-jump to the right, then jump north. The Hookshot offers another crossing later."]
  ],"before-dungeon");
  add(4,"Boots, beach and desert shells","Toronbo Shores · Martha’s Bay · Yarna Desert","shell",[
    ["shell-palm","Secret Seashell · Beach palm","Dash into the lower palm above the western approach to Toronbo Shores, south of the village library."],
    ["shell-tail-tree","Secret Seashell · Tail Cave tree","Dash into the lone tree just west of the Tail Cave entrance."],
    ["shell-ukuku-tree","Secret Seashell · Prairie telephone tree","Dash into the tree beside the telephone booth south of the western entrance to Ukuku Prairie."],
    ["shell-bay-owl","Secret Seashell · Bay owl islet","From the path west of Animal Village, go south, cross the bridge and dig just west of the owl statue."],
    ["shell-desert-dig","Secret Seashell · Desert cactus clearing","Find the owl statue in northeast Yarna Desert. Go south into the dead end ringed by cacti and dig."],
    ["shell-desert-rock","Secret Seashell · Desert cliff boulder","Climb onto the raised path along the east edge of Yarna Desert and follow it south. Lift the loose rock at the end."],
    ["shell-walrus","Secret Seashell · Walrus encore","After Marin wakes the walrus, face the water from the south edge of the clearing and play the Ballad of the Wind Fish on the Ocarina."]
  ],"before-dungeon");
  add(4,"Return to the crane","Mabe Village","figure",[
    ["fig-boo","Boo figure","After Key Cavern, win Boo and place it on the round table by the right-hand door of the large family house at the north of the village.",["figure","mini"]]
  ],"before-dungeon");

  add(5,"The last water trades","Martha’s Bay","trade",[
    ["trade-necklace","Mermaid’s Necklace","Swim under the bridge in southeast Martha’s Bay to find a fisherman in a boat. Climb aboard, give him the Fishing Hook and take his catch."],
    ["trade-scale","Mermaid’s Scale","Swim to the mermaid northwest of Catfish’s Maw and return her Necklace. She gives you a Scale."]
  ],"before-dungeon");
  add(5,"Dive for heart pieces","Tal Tal Heights · Kanalet Castle · Martha’s Bay","heart",[
    ["heart-flooded-tal","Piece of Heart · Flooded mountain cave","Swim east from the Angler’s Tunnel entrance into the neighboring cave. Dive with B where you see the piece under the surface."],
    ["heart-moat","Piece of Heart · Castle moat","Swim around the moat toward the corner immediately west of Kanalet’s main bridge. Dive on the visible heart piece."],
    ["heart-village-tunnel","Piece of Heart · Animal Village shortcut","Go back through the underground tunnel between Ukuku Prairie and Animal Village. Dive in the patch of deep water near the black barriers."],
    ["heart-bay-tunnel","Piece of Heart · Flooded bay tunnel","At southwest Martha’s Bay, cut the bushes beyond the pits with a ranged attack or a jump-slash. Dash-jump across, descend, and dive in the side-view tunnel."],
    ["heart-bay-water","Piece of Heart · Southern bay","Dive in the shallow-looking inlet south of the Mermaid Statue. This one is in the open water, separate from the tunnel piece."]
  ],"before-dungeon");
  add(5,"Swim and revisit for shells","Kanalet Castle · Martha’s Bay · Animal Village · Mabe Village","shell",[
    ["shell-ghost","Secret Seashell · House by the Bay","On the ghost’s visit to the abandoned house on the shore, lift the pots in its lower-right corner. You can return after the escort if you missed it."],
    ["shell-moat","Secret Seashell · Moat waterfall","From Tal Tal Heights descend into the north side of the castle moat. Swim west to the waterfall and dive where it hits the water."],
    ["shell-key-island","Secret Seashell · Key Cavern lake islet","Swim to the islet with a single bush in the lake east of Key Cavern. Cut the bush."],
    ["shell-south-island","Secret Seashell · South shore islet","From the bay’s telephone booth, swim south to the tiny island and cut its single bush."],
    ["shell-tal-water","Secret Seashell · Upper mountain waterfall","Cross the first mountain cave north of Dampé’s Shack and follow the upper path east. In the deeper pool above Angler’s Tunnel, dive at the base of the small waterfall."],
    ["shell-christine","Secret Seashell · Christine’s thanks","Once Mr. Write has accepted the letter, go back to Christine in Animal Village and talk to her again."],
    ["shell-cheep","Secret Seashell · First Cheep Cheep","After Angler’s Tunnel, look for the glow on the Mabe fishing pond. Reel in a red Cheep Cheep near the upper or middle part of the water. Leave and re-enter a building to refresh the spawn.",["shell","mini"]]
  ],"before-dungeon");
  add(5,"Ghost and village returns","Koholint Prairie · Mabe Village","bottle",[
    ["bottle-ghost","Fairy Bottle · Ghost escort","Take the ghost to the House by the Bay, then to its solitary grave west of the main cemetery, near the Witch’s Hut. The ghost leaves you a bottle."]
  ],"before-dungeon");
  add(5,"Carry more bombs","Martha’s Bay","gear",[
    ["upgrade-bombs","Bomb capacity · 60","Go through the flooded side-view tunnel under the southwest bay and emerge in the isolated clearing. Descend the second stairs to the west and use Powder on the altar. Decline offers until you get the bomb upgrade if you still need it."]
  ],"before-dungeon");
  add(5,"Return to the crane","Mabe Village","figure",[
    ["fig-cheep","Cheep Cheep figure","After Angler’s Tunnel, win Cheep Cheep and place it on the table stand in Ulrira’s house near the telephone booth.",["figure","mini"]]
  ],"before-dungeon");

  add(6,"Finish the trading quest","Martha’s Bay · Animal Village · Toronbo Shores","trade",[
    ["trade-lens","Magnifying Lens","Approach the Mermaid Statue from the south, using the Hookshot on the stone across the gap. Place the Scale in the statue, descend and collect the Lens."],
    ["boomerang","Boomerang","With the Lens, bomb the cracked cliff along Toronbo Shores below the coconut-throwing monkey. Offer Goriya a tradeable item such as the equipped Shovel.",["gear"]],
    ["buyback","Recover the traded item","Talk to Goriya again and buy back the item for 300 rupees. You can keep it and the Boomerang on the Switch remake.",["gear"]]
  ],"before-dungeon");
  add(6,"Hookshot detours","Mysterious Forest · Animal Village · Kanalet Castle","heart",[
    ["heart-forest-hook","Piece of Heart · Forest Hookshot cave","Lift the three boulders at the northeast forest log entrance. Hookshot to the solid block at the upper-left, then push the other block down to reach the piece."],
    ["heart-animal-hook","Piece of Heart · Animal Village bomb cave","Bomb the cliff behind Animal Village. Inside, bomb the northeast wall first. Follow the ledge and throw a bomb over the low wall to destroy the cracked block. Loop back to the entrance, go left and up, and Hookshot to the remaining block."]
  ],"before-dungeon");
  add(6,"Ruins, village and castle shells","Ancient Ruins · Animal Village · Kanalet Castle · Mabe Village","shell",[
    ["shell-ruins-rock","Secret Seashell · Northeast of the shrine","On the overland approach from Animal Village, take the trail around the east of the shrine area. Lift the loose rock in the far northeast corner."],
    ["shell-armos","Secret Seashell · Ancient Ruins stairs","In the north-central part of the Armos maze, wake the statue covering a staircase. Move aside as it hops or defeat it with the Bow or Boomerang, then go down for the chest."],
    ["shell-zora","Secret Seashell · Friendly Zora","With the Magnifying Lens, visit the house in northeast Animal Village and speak to the Zora in the pool."],
    ["shell-kanalet-hook","Secret Seashell · West of the castle bridge","At the south end of the castle bridge, walk west to the line of holes. Hookshot to the stump across it and go downstairs for the chest."],
    ["shell-large-fish","Secret Seashell · 40-inch catch","After Catfish’s Maw, reel in a fish over 40 inches at the Mabe pond. A big Blooper can qualify, as can a later Ol’ Baron.",["shell","mini"]]
  ],"before-dungeon");
  add(6,"Fishing and Trendy Game returns","Mabe Village","mini",[
    ["lure-heavy","Heavyweight Lure","Catch a Blooper after Catfish’s Maw. Aim into the middle of the pond when it glows. Ease up when the squid jets away, then reel when it turns.",["lure","mini"]],
    ["stone-crane","Chamber Stone · Crane prize","Check the crane game after Catfish’s Maw. Clear the early unique prizes and refresh the room until the stone appears. If it has not appeared, collect other unique prizes and revisit after your next dungeon clear.",["stone","mini"]],
    ["heart-crane-2","Piece of Heart · Moving crane prize","After the early unique prizes have cycled, watch for the second heart piece on a moving tray. Line up with its rail, then time the sideways movement so the tray reaches the claw as it drops.",["heart","mini"]],
    ["shell-crane-2","Secret Seashell · Moving crane prize","After Angler’s Tunnel, return as the prize pool refreshes. Win the first shell and the second heart piece to clear the way for the shell on the moving tray.",["shell","mini"]],
    ["fig-blooper","Blooper figure","After Catfish’s Maw, win Blooper and place it on the stand near the beds in Ulrira’s house.",["figure","mini"]]
  ],"before-dungeon");
  add(6,"Rapids Ride and Rapids Race","Tal Tal Heights · Raft Shop","mini",[
    ["heart-rapids-ride","Piece of Heart · Rapids Ride island","Hookshot over the water east of Tal Tal Heights to the Raft Shop and pay 100 rupees for Rapids Ride. Keep west, avoid the early drops, then head south at the west end and pull up to the heart-piece island.",["heart","mini"]],
    ["shell-rapids-ride","Secret Seashell · Rapids Ride island","From the west route, follow the lower current east and Hookshot onto the small bare island. Dig in its upper-right corner.",["shell","mini"]],
    ["heart-rapids-return","Piece of Heart · Raft return cave","At the end, decline another run and enter the raft operator’s return cave to the west. Hookshot across its two stones to the heart piece before jumping off the ledge.",["heart","mini"]],
    ["heart-rapids-race","Piece of Heart · Rapids Race","Choose Rapids Race. Finish under 40 seconds. Use the Hookshot on rocks and posts to pull ahead of the current and avoid the eastern loop.",["heart","mini"]],
    ["shell-rapids-race","Secret Seashell · Rapids Race","Finish Rapids Race under 35 seconds. Use the first drop and Hookshot shortcuts, and check the prize dialogue after the run.",["shell","mini"]],
    ["stone-rapids","Chamber Stone · Rapids Race","Finish Rapids Race under 30 seconds. Use the Hookshot as soon as a post comes into range to cut across slower current.",["stone","mini"]]
  ],"before-dungeon");
  add(6,"Seashell rewards and recovery","Seashell Mansion · Face Shrine","gear",[
    ["stone-mansion30","Chamber Stone · 30 shells","Stand on the meter at Seashell Mansion with at least 30 shells. Bring the reward to Dampé.",["stone"]],
    ["sword-koholint","Koholint Sword · 40 shells","Stand on the Mansion meter with 40 shells. The upgraded sword can fire a beam at full health."],
    ["fairy-face","Great Fairy · Face Shrine","Look for the cracked wall east of the shrine entrance. Bomb it to enter the fountain cave.",["fairy"]]
  ],"after");

  add(7,"Old Baron and the crane","Mabe Village","mini",[
    ["stone-baron","Chamber Stone · First Ol’ Baron","After Face Shrine, look for the glowing pond and fish deep with the Heavyweight Lure. Land the huge blue Ol’ Baron once.",["stone"]],
    ["stone-baron-large","Chamber Stone · Large Ol’ Baron","Catch an Ol’ Baron over 60 inches. If the first catch was large enough, check whether both rewards were awarded.",["stone"]],
    ["fig-shyguy","Shy Guy figure","After Face Shrine, win Shy Guy and put it on the stand just inside the right-hand door of the north family house.",["figure","mini"]]
  ],"before-dungeon");
  add(7,"Eastern mountain shells","Tal Tal Mountains","shell",[
    ["shell-hen-toss","Secret Seashell · Below the Hen House bridge","Near the Hen House, stand on the bridge above the hole in the pile of stones and throw a lit bomb into the opening."],
    ["shell-hen-rock","Secret Seashell · East of the Hen House","Cross the bridge east of the Hen House. Lift the rock at the far end to find the shell."],
    ["shell-tal-ledge","Secret Seashell · Eastern mountain ledge","Bomb the cracked wall in the flooded cave east of Angler’s Tunnel. Take the stairs to the block puzzle, push the top block left and the one right of the leftmost chest down. Exit to the ledge and open its chest."],
    ["fairy-east","Great Fairy · Eastern Tal Tal Mountains","Bomb the cracked cliff in the far eastern mountains near the Eagle’s Tower approach to reach the fountain.",["fairy"]]
  ],"before-dungeon");

  add(8,"Western mountain detours","Tal Tal Mountains · Turtle Rock","heart",[
    ["heart-west-cave","Piece of Heart · Mountain bomb wall","Hookshot west across the broken Hen House bridge. In the first cave, bomb the cracked wall in the lower recess and take the right-hand route inside."],
    ["heart-west-path","Piece of Heart · Mountain side path","On the stone field before the cave with the fire jet, take the southwest path to the heart piece. Use care near the drop to the swamp."],
  ],"before-dungeon");
  add(8,"Turtle Rock’s roof","Turtle Rock · exterior","heart",[
    ["heart-turtle-roof","Piece of Heart · Turtle Rock roof","Take the stairs in the northwestern part of Turtle Rock to the surface and pick up the heart piece on the grass. Register the warp while you’re there."]
  ],"roof");
  add(8,"Mountain shells and the final Mansion reward","Western Tal Tal Mountains · Seashell Mansion","shell",[
    ["shell-rockslide","Secret Seashell · Above the rockslide","Climb past the rolling boulders and lift the loose rock on the plateau at the top."],
    ["shell-west-cross","Secret Seashell · Western mountain stone cross","After using the Mirror Shield to pass the fire jet, walk west of the Western Tal Tal Mountains warp. Dig in the center of the cross-shaped pebble pattern at the south edge."],
    ["stone-mansion50","Chamber Stone · 50 shells","With all 50 shells, collect the final reward at Seashell Mansion and bring it to Dampé for the +Rupees Effect.",["stone","effect"]]
  ],"after");
  add(8,"Carry more arrows","Western Tal Tal Mountains","gear",[
    ["upgrade-arrows","Arrow capacity · 60","At the top of the rockfall trail, lift the lone boulder just south of the upper treasure chest. Descend and sprinkle Powder on the altar. Decline other offers until you get the arrow upgrade if you still need it."]
  ],"before-dungeon");
  add(8,"Return to the crane","Mabe Village","figure",[
    ["fig-plant","Piranha Plant figure","After Eagle’s Tower, win the Piranha Plant. If it tips, try gripping the base. Place it on the floor stand by the bed and pots in Marin and Tarin’s house.",["figure","mini"]]
  ],"before-dungeon");

  add(9,"The final figures","Mabe Village","figure",[
    ["fig-pokey","Pokey figure","After Turtle Rock, win Pokey and place it on the floor stand by the dining table in the northwest corner of the large family house.",["figure","mini"]],
    ["fig-bowwow","BowWow figure","After the ending, accept the clear save and reload it. Win BowWow at the Trendy Game, then put it on the floor stand just left of the door inside Madam MeowMeow’s main house.",["figure","mini"]],
    ["stone-figures","Chamber Stone · Figure collection","After winning and placing all ten figures, speak to the Trendy Game owner. Collect the stone and the permanent discount, then hand the stone to Dampé to obtain +Monsters.",["stone","effect","mini"]]
  ],"after");

  window.KOHOLINT_SIDE = groups;
  window.KOHOLINT_TAGS = {
    "shell-tail-cave":["shell"], "face-rapids-shell":["shell"], "eagle-shell":["shell"],
    "angler-ocarina":["gear"], "angler-ballad":["song"], "maw-manbo":["song","warp"],
    "eagle-mirror-shield":["gear"], "turtle-magic-rod":["gear"]
  };

  window.KOHOLINT_SOURCES = [
    ["Heart Piece locations and maps","https://www.nintendolife.com/guides/zelda-links-awakening-all-heart-pieces-map-and-locations"],
    ["Secret Seashell maps","https://www.nintendolife.com/guides/zelda-links-awakening-all-secret-seashells-map-and-locations"],
    ["Secret Seashell route cross-check","https://www.thonky.com/zelda-links-awakening/nintendo-switch-secret-seashells"],
    ["Fishing rewards and lure techniques","https://nintendowire.com/guides/the-legend-of-zelda-links-awakening/fishing/"],
    ["Trade sequence directions","https://www.thonky.com/zelda-links-awakening/trading-sequence"],
    ["Trendy Game figures and pedestals","https://gamefaqs.gamespot.com/switch/258622-the-legend-of-zelda-links-awakening/faqs/77938/nintendo-figurine-quest"],
    ["All ten warp points","https://www.linkshideaway.com/links-awakening-switch/warp-points/"],
    ["Li’l Devil altars","https://zeldauniverse.net/guides/links-awakening/sidequests/equipment-upgrades/"],
    ["Dampé’s starter layouts","https://gamefaqs.gamespot.com/switch/258622-the-legend-of-zelda-links-awakening/faqs/77938/dampes-dungeon-adventure"],
    ["Chamber challenges and unlock criteria","https://zeldawiki.wiki/wiki/Chamber_Dungeon"],
    ["Chamber Stones and effects","https://zeldacentral.com/games/links-awakening-remake/collectibles/dampes-shack-and-chamber-dungeon/"],
    ["Nintendo’s Switch remake gameplay guide","https://zelda.nintendo.com/links-awakening/ca/gameplay/"],
    ["Switch deathless and mini-game unlockables","https://gamefaqs.gamespot.com/switch/258622-the-legend-of-zelda-links-awakening/cheats"]
  ];
})();

(() => {
  const groups = window.KOHOLINT_SIDE;
  const tags = window.KOHOLINT_TAGS;
  function add(chapter, title, location, steps, placement = "after") {
    groups.push({chapter, title, location, steps, placement});
  }
  function chamber(chapter, title, rows) {
    add(chapter, title, "Dampé’s Shack", rows.map(([id, name, text, category]) => ["chamber-" + id, ["challenge", ...(category ?? [])], name, text]), "after");
  }

  chamber(2,"Dampé’s first arrangements",[
    ["arranging","Dungeon Arranging 101","After Bottle Grotto, enter Dampé’s Shack north of Tabahl Wasteland. Connect the entrance to the preset chest and the boss. Every doorway needs a matching doorway. Use Y in the editor to find mismatches. Start the adventure from the entrance tile, open the chest and beat the boss."],
    ["basics","Placing the Basics","Fit chest and locked-door tiles where marked. Put an easy chest before the lock so you can get a Small Key. The final chest always has the Nightmare Key. Give yourself a route back to the boss door from the last chest."]
  ]);
  chamber(3,"Dampé’s first heart and shell",[
    ["passage","A Passage Across","After Key Cavern and Placing the Basics, add a matching pair of stair chambers to connect the separated cells. Check the stair link with Y. Put a single easy chest on the remote side so it gives the Nightmare Key."],
    ["hearts","Fill Up Your Hearts","After A Passage Across, fill the heart outline. Connect the entrance to an easy chest and a familiar boss with a short central route. Fill the wings with side branches you can skip while playing. Completing tier one awards a Piece of Heart and a Secret Seashell.",["heart","shell"]],
    ["key-hunter","Key Hunter","After A Passage Across, place chests on the marked tiles and use more chest rooms if needed. Start with a chest on an unlocked route so you can reach the first locked door with a key in hand."]
  ]);
  chamber(5,"Dampé’s bomb challenge",[
    ["bombs","Bomb’s Away!","After Angler’s Tunnel and Fill Up Your Hearts, fill the bomb shape. Keep the required chest and boss near the entrance on the route you’ll play. Connect the rest as side branches. Clearing it awards +Bombs.",["effect"]]
  ]);
  chamber(6,"Dampé’s second heart piece",[
    ["vault","Treasure Vault","After Catfish’s Maw, place chest rooms on the marked tiles and bridge the separated areas with stairs. Open every chest before trying the Nightmare door. Simple Color Dungeon puzzles make good chest rooms."],
    ["central","Passageway Central","After Treasure Vault, finish the arrangement with a route between the islands of tiles. Use stair chambers in pairs and confirm the links with Y. Keep required chests on a loop so you can collect them on one pass. Finish all four tier-two challenges for the second Piece of Heart.",["heart"]]
  ]);
  chamber(7,"Dampé’s third Fairy Bottle",[
    ["stairs","Stair Decisions","After Face Shrine and Treasure Vault, build around the preset stair rooms. Keep each intended pair close, then inspect the links with Y. Move the extra stairs away from the critical pair if they link incorrectly."],
    ["shortage","Heart Shortage","Fill the bottle shape after Stair Decisions. You start with three hearts. Put one easy chest and the boss near the entrance and connect the remaining cells as dead-end branches. Clear for the third Fairy Bottle.",["bottle"]]
  ]);
  chamber(8,"Dampé’s swordless challenge",[
    ["sheathed","Sheathed Sword","After Eagle’s Tower and Heart Shortage, use the Bow, Boomerang, bombs or pots. Avoid fights that require sword swings. Facade is a good boss choice because it takes damage from bombs. Clearing it awards +Hearts.",["effect"]]
  ]);
  chamber(9,"Dampé’s final starter challenge",[
    ["clock","Ticking Clock","After Turtle Rock and Sheathed Sword, clear the layout in five minutes. Use short, low-combat connections from the entrance to the chests and boss. Check the stairs in Arrange before starting. Finish all 12 starter challenges to earn the last Heart Container and +Wallmasters.",["container","effect"]]
  ]);
  chamber(9,"Gold challenges · 300 rupees each",[
    ["forge","Forging a Sword","Clear all 12 starters to unlock Gold. Fill the sword outline, working from the lower left toward its tip. Put compulsory rooms on one direct route and use the rest as side branches."],
    ["shield","Crafting a Shield","Fill the shield outline. You have five hearts. Use low-risk rooms and choose a boss you can beat reliably. A fairy room on your route is a good place to recover."],
    ["bows","Bows > Swords","The sword is disabled. Use the Bow or Boomerang on enemies, carry bombs for Facade, and leave out rooms that require a sword attack."],
    ["song","Dungeon Song","Fill the Ocarina shape. Use single-exit rooms in the protruding cells and an uninterrupted path for the entrance, chests and Nightmare door."],
    ["hinox","House of the Hinox","Clear within three minutes. Stick to the shortest valid route through the preset Hinox rooms and chest tiles. Use ranged damage where possible and avoid the grab."],
    ["square","Back to Square One","Clear within five minutes. Inspect the stair links before the run, keep chest detours short, and choose a quickly defeated Nightmare."],
    ["hand","Need a Hand?","The sword is disabled. Choose rooms you can clear with ranged gear, pots and bombs. Favor room puzzles whose switches can be hit from range."],
    ["zigzag","Zig-Zaggy","Fill the winding outline with corner and straight passages that face the right way. Place the corner rooms first, then check that no doors face the edge of the grid."],
    ["all-stairs","Nothin’ but Stairs","Fill the stair-heavy shape and use Y to check each paired connection. Adjust the distance between pairs if the editor links the wrong two rooms."],
    ["hoard","Treasure Hoard","Use chest chambers on the marked spaces. Plan a continuous route to open them all and reach the Nightmare door last."],
    ["skull","Skull Arrangement","Fill the large skull outline. Reserve your rare door configurations for the narrow spots, then connect the necessary chests and boss on a shorter route inside the outline."],
    ["supreme","The Supreme Shape","Fill the last outline. Start with the entrance, boss and required tiles, then fit your straight, corner and dead-end rooms around that route."]
  ]);

  function warp(chapter, id, name, directions, placement = "before-dungeon") {
    add(chapter,"Island warp points","Koholint Island",[["warp-"+id,"warp",name,directions]],placement);
  }
  warp(3,"ukuku","Ukuku Prairie warp","Step onto the visible warp pad immediately east of Mabe Village.");
  warp(3,"dampe","Dampé’s Shack warp","Lift the boulder immediately north of the shack to reveal the warp.");
  warp(3,"mansion","Seashell Mansion warp","Dig at the faint mark in the small dirt circle east of Seashell Mansion.");
  warp(4,"animal","Animal Village warp","Step on the pad just south of the village houses.");
  warp(4,"tal","Tal Tal Heights warp","Step on the visible pad south of the waterfall and dungeon entrance, beside the bomb-toss hole.");
  warp(5,"bay","Martha’s Bay warp","Dig on the faint ground marking just west of the Martha’s Bay telephone booth.");
  warp(7,"east","Eastern Tal Tal Mountains warp","On the mountain route southeast of Eagle’s Tower, dig on the faint circular mark near the ledge path.");
  warp(8,"west","Western Tal Tal Mountains warp","After passing the flame jet, lift the rock near the cave exit to reveal the pad.");
  warp(8,"turtle","Turtle Rock warp","Use the stairs in the dungeon’s northwestern part. Step on the outdoor pad near the roof heart piece.","roof");

  add(4,"Shop Chamber Stones","Mabe Village",[
    ["stone-shop-1","stone","Shop Chamber Stone · 1 of 7","After completing the Color Dungeon, check the Town Tool Shop for Chamber Stones. Buy the first for 1,280 rupees."],
    ["stone-shop-2","stone","Shop Chamber Stone · 2 of 7","Leave and return to restock after the first purchase. Buy another for 1,280 rupees."]
  ]);
  add(7,"Shop Chamber Stone","Mabe Village",[
    ["stone-shop-3","stone","Shop Chamber Stone · 3 of 7","After Face Shrine, check the Town Tool Shop again. Buy the newly available stone for 1,280 rupees."]
  ],"before-dungeon");
  add(9,"Last shop Chamber Stones","Mabe Village",Array.from({length:4},(_,index) => [
    "stone-shop-"+(index+4),"stone","Shop Chamber Stone · "+(index+4)+" of 7","After Turtle Rock, the shop adds four more stones. Pay 1,280 rupees for this one, then leave and return to refresh stock."
  ]),"before-dungeon");

  add(9,"Island completion sweep","Koholint Island",[
    ["apple-red","explore","Eat a red Apple","Dash into an apple-bearing tree with the Pegasus Boots. Pick up a red Apple that drops."],
    ["apple-green","explore","Eat a Green Apple","Dash into apple-bearing trees and pick up a Green Apple when one drops. Check the trees in Mabe Village and around the prairie."],
    ["map-buildings","explore","Reveal the buildings on the map","Open the island map and sweep each region for unrevealed houses and telephone booths. Visit each one so it appears on the map."],
    ["owl-overworld","explore","Read the overworld Owl Statues","Use the owl markers on the island map. Interact with each overworld statue during your region sweep."],
    ["chambers-review","explore","Review new chamber panels","Hand in all Chamber Stones, then scroll through the panels in Dampé’s Arrange editor and clear the new-item indicators."]
  ]);

  add(9,"Optional amiibo panels","Dampé’s Shack",[
    ["amiibo-fairy","amiibo","Great Fairy’s Chamber","Scan compatible, distinct Zelda series amiibo at Dampé’s shack until this bonus chamber is unlocked."],
    ["amiibo-moblin","amiibo","Moblin Chief’s Chamber","Scan another compatible, distinct Zelda series amiibo at the shack."],
    ["amiibo-trooper","amiibo","Ball and Chain Trooper’s Chamber","Scan another compatible, distinct Zelda series amiibo at the shack."],
    ["amiibo-winged","amiibo","Winged Item Chamber","Scan another compatible, distinct Zelda series amiibo at the shack."],
    ["amiibo-armos","amiibo","Armos Knight’s Chamber","Scan another compatible, distinct Zelda series amiibo at the shack."],
    ["amiibo-shadow","amiibo","Shadow Link Effect","Scan the Link’s Awakening Link amiibo at Dampé’s shack to unlock +Shadow Link."]
  ]);

  for (const id of ["tail-cello","bottle-horn","key-bell","angler-harp","maw-marimba","face-triangle","eagle-organ","turtle-drum"]) tags[id] = ["instrument"];
  for (const id of ["tail-feather","bottle-bracelet","key-boots","angler-flippers","face-bracelet"]) tags[id] = ["gear"];
  tags["eagle-signpost-maze"] = ["song"];
  tags["color-mail"] = ["gear"];
})();
