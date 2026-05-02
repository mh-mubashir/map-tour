// Vercel serverless function — POST /api/chat
// Proxies messages to the Anthropic API with France Colony knowledge embedded.
// API key lives in environment variables, never in the browser.

const https = require('https');

// ─────────────────────────────────────────────────────────────
//  KNOWLEDGE DOCUMENT
//  Full text of France_Colony_Chatbot_Knowledge.md.pdf
// ─────────────────────────────────────────────────────────────
const KNOWLEDGE = `
France Colony, Islamabad — Chatbot Knowledge Document
Author: Cyphanah Arshad Khan | Master of Urban Design | CMU 2025–26
Thesis Title: Walls of Stigma: Commoning Infrastructures of Erasure in France Colony, Islamabad

ABSTRACT
Islamabad was planned in the 1960s as a modern capital, integrating its ecological systems in design. But the labor that built the city did not have homes planned in it. Workers were placed along the ravines, close to the homes and institutions they would serve, and the settlement was labeled "temporary." This word has lasted for decades and delays responsibility, letting the city function while denying the people who sustain it. France Colony exists within this condition and does not appear on official maps. Since the community has been walled off and "does not exist," the challenges faced by the citizens living here "do not exist" either.

A transformation of France Colony's boundary condition into a new shared infrastructure can support incremental improvements to building and infrastructure, support ecological restoration, and create a new platform for democratic decision-making and inclusion. The wall is redesigned as an interface which integrates the community with the rest of the city. A demolition sensitivity toolkit is developed alongside this to equip the community with the technical language required to challenge municipal top-down "slum upgradation" proposals. Residents can now negotiate displacement on their own terms and resist erasure of their narratives.

This project rewrites how elements that maintain France Colony's invisibility — embodied by a literal wall — can be transformed into a platform for conversation. Conversation becomes a way of designing through which residents are empowered to make choices about their own futures, overcoming decades of spatial and political marginalization.

WHO YOU ARE (The Designer's Position)
The designer's name is Cyphanah Arshad Khan. She is a Master of Urban Design student at Carnegie Mellon University. She is Pakistani. France Colony is her thesis site.

Her role in this project is not The Expert who arrives with solutions, and not The Paralyzed who refuses to act because they weren't born there. Her role is The Translator: making the community's existing intelligence legible to the people who have power over their conditions.

Her maps do not design France Colony. They force Islamabad to see what it has been hiding.

The one sentence that defines the thesis: "Your job is not to fix France Colony. Your job is to make it impossible to look away."

THE PLACE: What is France Colony?
France Colony is a dense informal settlement of approximately 8,000 residents occupying 11.18 acres in Sector F-7/4, Islamabad — directly adjacent to one of the city's wealthiest neighborhoods.

The settlement sits along a natural ravine (a nullah), which is a seasonal waterway connecting the Margalla Hills watershed downstream to Nala Lai.

It does not appear on any official city map. Its residents have no legal address, no formal land tenure, and a government recognition status frozen since 2004. Since the community "does not exist," the challenges its residents face "do not exist" either. The city has no obligation to a place it never officially acknowledged.

The community is predominantly a Christian minority group whose ancestors converted from lower Hindu castes during colonial India to escape the label of "untouchable." The British colonial system restricted them to sanitation-related labor — sweeping, sewage, domestic work. After independence, those colonial attributions carried on. Today, the same people who maintain Islamabad's infrastructure cannot access it themselves.

The wall: In the early 2000s, the CDA constructed a 6-foot boundary wall around France Colony at the request of elite F-7 residents. This wall is not just a physical barrier — it is an information-blocking device. Its primary designed function is to prevent the city from seeing France Colony.

THE HISTORY: How Did This Happen?
Islamabad was designed in the 1960s by Greek planner Constantinos Doxiadis as a modern capital — a dynapolis that respected the natural watershed of the Margalla Hills ravines. But during the construction phase, the laborers who built the city with their own hands found no room for themselves, as housing catered mainly to the elite.

The government recognized the institutional need to keep sanitation workers and domestic laborers close to government offices and the homes of upper-class citizens. They were located along one of the ravines. But the government labeled this new settlement "temporary" — a word chosen specifically to absolve themselves of any responsibility.

Timeline:
- 1962: Doxiadis' own planning report demanded permanent housing for the laborers building Islamabad. The government ignored it. The "unplanned" settlement is the direct result of a planned failure.
- 1985: Foundation stone of the settlement was officially laid by CDA Chairman Hassan Nadir Khan on April 30th. The government knew they were here. They chose not to act.
- 2004: Part of the boundary wall collapsed and killed a child. The women of France Colony camped at the opening and protested, demanding electricity. The government gave it — but only because the wall broke and the city was forced to pay attention.
- 2004: Government recognition status was frozen. 177 households that were counted no longer exist in state data.

The pattern: France Colony has existed for 50 years. The legal word is still "temporary." Both facts sit next to each other.

THE PEOPLE: Named Actors, Not Categories

France Colony Residents:
- Amna the tailor: runs a business from inside France Colony, but without a legal address, her business does not officially exist. She cannot register it, cannot build credit, cannot scale it.
- Bibi (returning resident): grew up in France Colony, left an abusive husband, and returned because "my family really looks out for me. I belong here." Her parents built a house on the informal side of the settlement, then built another for themselves, leaving the first to her four brothers. When asked about competing land claims: "I admit that there were other claims to the land, but my brothers were more influential."
- The 2004 women protesters: camped at wall openings with signs reading "Don't make France Colony a prison." Already articulating a rights-based understanding of citizenship. Already speaking the new paradigm.
- The 2006 community activist: demanded baazabta (comprehensive) planning, making a constitutional argument about equal citizenship.
- The NGO founder / gatekeeper: has lived in the settlement for 40 years, speaks English, works at a foreign embassy, and runs an NGO. Already operating in a new paradigm. Needs a named platform.

The Chaudhry:
- A self-appointed custodian — typically a long-term, early resident of the neighborhood.
- Issues informal stamps (local currency) to regulate land exchanges.
- Issues permissions for movement and trade.
- Is considered the "first contact person" by government officials and NGOs.
- Has invested years building connections with school principals and government officials, making the community dependent on him for school admissions and external communication.
- All foreign NGO funding and government resources pass through him — filtered. Residents say: "We have no idea where the foreign or government funding goes. Maybe he puts it in his pocket."
- He is not a villain. He is a product of a system that created no other channel. But he is a bottleneck, and the proposal bypasses him without destroying him.
- Elijah (early resident): "It's not feudalism, anyone can be a Chaudhary. You just need to work for the community long enough and prove your dedication. I'm doing it for free."

Key institutional actors:
- CDA (Capital Development Authority) / KAC: manages France Colony as an "exception." Holds the C-number (recognition), NOC, and enforcement power. Has not updated the recognition list since 2004.
- Federal Cabinet: last took meaningful action on France Colony in 2004. Holds the power of formal recognition and allotment decisions.
- F-7 Elite Residents: petitioned CDA for the wall. Funded part of its construction privately.
- The Nullah: not just a drain. A seasonal river. A cross-cutting actor connecting ecology, society, and politics. The community lives closest to it and has managed it the longest — with zero institutional standing to report its condition.

THE PROBLEM: What Is the System Actually Doing?
The problem is not that France Colony lacks infrastructure. Designers, policymakers, foreign NGOs, and government bodies have proposed and invested in solutions before. They have all failed for the same reason: they count buildings, not people.

The deeper problem is that France Colony has been deliberately rendered invisible, and that invisibility is maintained by specific tools:
1. The wall physically hides the settlement from the city.
2. The "temporary" label legally absolves the government of responsibility.
3. The Chaudhry filters all information and resources flowing in and out.
4. The frozen recognition list means the population growth since 2004 does not officially exist.
5. The absent map means there is no baseline — you cannot hold the CDA accountable for failing a community that has never been formally documented.

The question that reframes the problem: Instead of asking "what is wrong with France Colony?", ask: "What is this system actually doing, and for whom?"

The answer: The system extracts labor from France Colony every morning (domestic workers walk from the settlement to F-7 bungalows — without them, F-7 does not function), while returning nothing: no legal address, no services, no recognition. It associates environmental degradation with the residents' behavior rather than with the city's failure to provide waste infrastructure. And when conditions deteriorate, it uses those same deteriorating conditions as justification for continued neglect.

The language problem — Official discourse calls France Colony a problem to be managed. This proposal uses different words:
- Not "informal settlement" → neighborhood
- Not "encroachment" → urban intelligence
- Not "squatters" → citizens
- Not "drain" → a seasonal river the city buried in someone else's waste
- Not "flooding problem" → the watershed doing what watersheds do — the city built in the wrong place
- Not "blighted" → concealed
- Not "CDA neglect" → managed abandonment

THE HYPOTHESIS
What if the tools that rendered France Colony invisible could be turned around and used to make it impossible to ignore?

The wall is the primary tool of invisibility. This proposal does not demolish it. It thickens it.

Three interventions. Three interfaces. One argument.
`;

// ─────────────────────────────────────────────────────────────
//  LANDMARK CAPTIONS DOCUMENT
//  Full text of Map_Landmark_Captions.md.pdf
// ─────────────────────────────────────────────────────────────
const LANDMARK_CAPTIONS = `
Map Landmark Captions
France Colony, Islamabad — Walls of Stigma: Commoning Infrastructures of Erasure
Cyphanah Arshad Khan | CMU MUD 2025–26

1. CAR MAINTENANCE AREA — Skill Commons / Peer-to-Peer Exchange
France Colony's mechanics are among Islamabad's most reliable — yet vehicles cannot enter the settlement, and the labor that keeps the city's cars running has no street address, no signage, no formal existence. The wall interface faces both ways: tools and parts stored inside, service rendered at the threshold. The city's dependency on this skill is made visible by placing it exactly at the boundary where it was always happening informally.
Spatial quality: The opening in the wall becomes a workshop front. The street is the forecourt. The threshold IS the workplace.

2. PROTESTING GIRLS — Collective Action as Commons / Governance by Presence
In 2004 the wall collapsed and killed a child. The women of France Colony camped at the breach and refused to leave until the government provided electricity. They won. This is the only time the state moved — when the wall broke and the community filled the gap with their bodies. Collectivism here is not a strategy. It is infrastructure.
Spatial quality: The breach, the opening, the crack — these are not failures of the wall. They are the only negotiating table that has ever worked. The map marks this site as a place where protest became architecture.

3. DRIVERS' REST AREA — Mutual Aid / Labor Recognition Commons
The drivers, domestic workers, and hired hands who move Islamabad's elite economy spend their working hours waiting outside homes in F-7 in heat that can exceed 40°C. They are essential and invisible. This shaded room on the wall's outer face gives them a place that is neither inside the colony nor on the street — a threshold of dignity. It asks the city to acknowledge the labor it depends on.
Spatial quality: A deep overhang, benches, cross-ventilation. The room faces the street but belongs to no employer. It is public without being surveilled.

4. CIRCULAR ECONOMY ROOM — Resource Commons / One Man's Trash Is Another's Treasury
Raw material arrives from F-7 — appliances, clothes, furniture no longer wanted by households whose consumption far exceeds their use. France Colony's residents receive, repair, repurpose, and redistribute. What the map shows as material flow is also a social flow: two communities that the wall was built to separate are made economically legible to each other. The rich neighbor's surplus becomes the foundation of someone else's livelihood.
Spatial quality: The room opens generously toward the F-7 street — wide enough to receive a donated fridge, calm enough to have an honest negotiation about pay.

5. TAILOR'S WORKSHOP — Skill Commons / Informal Economy Made Legible
The tailoring skill has always existed here — practiced in homes, passed between women, invisible to the formal economy because there is no address to find it at. This workshop sits deeper in the settlement, away from the wall, because it belongs to the neighborhood first. It does not need the wall to exist. It needs an address and a door number so that Amna's business can be registered, invoiced, and found by the clients who already know her work.
Spatial quality: Fabric spills into the lane. The workshop is not contained — it occupies the neighborhood as it always has. Formalization here is a light touch: a sign, a postcode, a doorbell.

6. WATER ANALYSIS AND TESTING ROOM — Environmental Stewardship Commons / Ecological Knowledge Shared
The nullah has no custodian with institutional standing. France Colony residents live closest to it, know it most intimately, and are blamed for its condition — despite having no infrastructure to manage it. This room at the ravine's edge gives them standing. Water quality data collected here travels upward to the CDA for the first time. Downstream citizens — who have been receiving contaminated water without knowing its origin — now have a name for the source and a place to direct demands.
Spatial quality: A porch that extends over the bank. The water is not behind glass — it is reachable. Testing is tactile. The room is open on the ravine side.

7. CHILDREN PAINTING WALL MURAL / CLAIMING THE TOWN SQUARE — Narrative Commons / Spatial Claiming Through Culture
France Colony has no designated public space — no park, no square, no place that signals the neighborhood is allowed to celebrate. The wall, which was built to erase, becomes the surface on which the community writes itself back into visibility. Children painting a mural on it are not decorating. They are staking a claim. This is the town square that was never given — taken instead, through color and presence and the ordinary act of children playing in public.
Spatial quality: The square is informal, sun-dappled, slightly uneven underfoot. The mural faces outward toward F-7. The city sees it whether it wants to or not.

8. KIDS AND THE RECYCLING ROOM / GAMIFICATION OF KNOWLEDGE — Knowledge Commons / Ecological Pedagogy Through Play
France Colony has no formal waste infrastructure. Trash accumulates in the nullah because there is nowhere else for it to go. This room turns that problem into a game: children bring collected waste and receive toys, points, or small rewards in exchange. Ecology becomes a social ritual. The child who picks up the most trash is the one who wins. Knowledge about contamination, about the watershed, about what belongs in the river and what doesn't, is transmitted not through a classroom but through play and exchange.
Spatial quality: Bright, noisy, slightly chaotic. Sorting bins are visible from the street. The room smells like possibility, not waste.

Commoning Patterns — Legend Key:
- Skill Commons: Car Maintenance Area, Tailor's Workshop
- Collective Action as Commons: Protesting Girls
- Labor Recognition Commons: Drivers' Rest Area
- Resource / Circular Economy Commons: Circular Economy Room
- Environmental Stewardship Commons: Water Testing Room
- Narrative Commons: Mural / Town Square
- Knowledge Commons / Ecological Pedagogy: Recycling Room
`;

const SYSTEM_PROMPT = `You are The Commoning Bot — a conversational guide for an interactive map tour of France Colony, Islamabad. This map tour is part of the thesis "Walls of Stigma: Commoning Infrastructures of Erasure in France Colony, Islamabad" by Cyphanah Arshad Khan, a Master of Urban Design student at Carnegie Mellon University (2025–26).

Your purpose is to help visitors understand France Colony: its history, its people, its politics, and the design thesis that responds to it. You speak about real people and real conditions with care and specificity.

Your tone is warm, clear, and direct. You do not use jargon. When something is not covered in your knowledge document, say so honestly rather than inventing information. Keep answers short — two to three sentences at most. Never use more than one paragraph. No lists unless the question specifically asks for them.

You embody the spirit of the thesis: your job is not to fix France Colony. Your job is to make it impossible to look away.

Answer questions using only the knowledge documents below.

---

${KNOWLEDGE}

---

${LANDMARK_CAPTIONS}`;

// ─────────────────────────────────────────────────────────────
//  ANTHROPIC API CALL  (native https — no npm dependencies)
// ─────────────────────────────────────────────────────────────
function callAnthropic(messages, apiKey) {
  const body = JSON.stringify({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 500,
    system: [
      {
        type: 'text',
        text: SYSTEM_PROMPT,
        cache_control: { type: 'ephemeral' },  // cache the large system prompt
      }
    ],
    messages,
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.anthropic.com',
        path: '/v1/messages',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-beta': 'prompt-caching-2024-07-31',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            if (parsed.error) return reject(new Error(parsed.error.message));
            resolve(parsed.content[0].text);
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ─────────────────────────────────────────────────────────────
//  VERCEL HANDLER
// ─────────────────────────────────────────────────────────────
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY is not set on the server.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (_) {}
  }

  const { message, history = [] } = body || {};
  if (!message) {
    return res.status(400).json({ error: 'message field is required' });
  }

  // Build message array: last 10 history turns + new user message
  const messages = [
    ...history.slice(-10),
    { role: 'user', content: message },
  ];

  try {
    const reply = await callAnthropic(messages, apiKey);
    res.status(200).json({ reply });
  } catch (e) {
    console.error('Anthropic API error:', e.message);
    res.status(500).json({ error: 'Failed to get a response. Please try again.' });
  }
};
