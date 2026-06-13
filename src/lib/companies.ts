// Plainly — Known Companies Database
// Used to show verified issuer badge + logo on result screen
// Logo powered by Clearbit Logo API (free, no key needed)
// Usage: https://logo.clearbit.com/{domain}

export type KnownCompany = {
  name: string;
  aliases: string[];
  domain: string;
  country: string;
  type: "utility" | "bank" | "insurance" | "telecom" | "medical" | "government" | "other";
};

export const KNOWN_COMPANIES: KnownCompany[] = [
  // ── Pakistan — Electricity ─────────────────────────────────
  { name: "K-Electric", aliases: ["KE", "KESC", "K Electric", "Karachi Electric", "K-Electric Limited", "KE Electric"], domain: "k-electric.com", country: "Pakistan", type: "utility" },
  { name: "LESCO", aliases: ["Lahore Electric Supply Company", "Lesco"], domain: "lesco.gov.pk", country: "Pakistan", type: "utility" },
  { name: "MEPCO", aliases: ["Multan Electric Power Company", "Mepco"], domain: "mepco.com.pk", country: "Pakistan", type: "utility" },
  { name: "PESCO", aliases: ["Peshawar Electric Supply Company", "Pesco"], domain: "pesco.com.pk", country: "Pakistan", type: "utility" },
  { name: "HESCO", aliases: ["Hyderabad Electric Supply Company", "Hesco"], domain: "hesco.com.pk", country: "Pakistan", type: "utility" },
  { name: "SEPCO", aliases: ["Sukkur Electric Power Company", "Sepco"], domain: "sepco.com.pk", country: "Pakistan", type: "utility" },
  { name: "QESCO", aliases: ["Quetta Electric Supply Company", "Qesco"], domain: "qesco.com.pk", country: "Pakistan", type: "utility" },
  { name: "IESCO", aliases: ["Islamabad Electric Supply Company", "Iesco"], domain: "iesco.com.pk", country: "Pakistan", type: "utility" },
  { name: "FESCO", aliases: ["Faisalabad Electric Supply Company", "Fesco"], domain: "fesco.com.pk", country: "Pakistan", type: "utility" },
  { name: "TESCO", aliases: ["Tribal Electric Supply Company", "Tesco"], domain: "tesco.com.pk", country: "Pakistan", type: "utility" },

  // ── Pakistan — Gas ────────────────────────────────────────
  { name: "SNGPL", aliases: ["Sui Northern Gas", "Sui Gas", "Sui Northern Gas Pipelines"], domain: "sngpl.com.pk", country: "Pakistan", type: "utility" },
  { name: "SSGC", aliases: ["Sui Southern Gas", "Sui Southern Gas Company", "Sui Gas Sindh"], domain: "ssgc.com.pk", country: "Pakistan", type: "utility" },

  // ── Pakistan — Banks ──────────────────────────────────────
  { name: "HBL", aliases: ["Habib Bank", "Habib Bank Limited", "HBL Bank"], domain: "hbl.com", country: "Pakistan", type: "bank" },
  { name: "UBL", aliases: ["United Bank", "United Bank Limited", "UBL Bank"], domain: "ubldigital.com", country: "Pakistan", type: "bank" },
  { name: "Meezan Bank", aliases: ["Meezan", "Al Meezan", "Meezan Islamic Bank"], domain: "meezanbank.com", country: "Pakistan", type: "bank" },
  { name: "MCB Bank", aliases: ["MCB", "Muslim Commercial Bank", "MCB Islamic"], domain: "mcb.com.pk", country: "Pakistan", type: "bank" },
  { name: "Allied Bank", aliases: ["ABL", "Allied Bank Limited"], domain: "abl.com", country: "Pakistan", type: "bank" },
  { name: "Bank Alfalah", aliases: ["Alfalah", "Alfalah Bank", "Bank Al Falah"], domain: "bankalfalah.com", country: "Pakistan", type: "bank" },
  { name: "Standard Chartered Pakistan", aliases: ["Standard Chartered", "SCB Pakistan"], domain: "sc.com", country: "Pakistan", type: "bank" },
  { name: "Faysal Bank", aliases: ["Faysal", "Faysal Islamic"], domain: "faysalbank.com", country: "Pakistan", type: "bank" },
  { name: "Askari Bank", aliases: ["Askari", "ACBL"], domain: "askaribank.com.pk", country: "Pakistan", type: "bank" },
  { name: "Silk Bank", aliases: ["Silkbank"], domain: "silkbank.com.pk", country: "Pakistan", type: "bank" },
  { name: "Bank of Punjab", aliases: ["BOP", "The Bank of Punjab"], domain: "bop.com.pk", country: "Pakistan", type: "bank" },
  { name: "National Bank of Pakistan", aliases: ["NBP", "National Bank"], domain: "nbp.com.pk", country: "Pakistan", type: "bank" },
  { name: "Sindh Bank", aliases: ["The Sindh Bank"], domain: "sindhbank.com.pk", country: "Pakistan", type: "bank" },

  // ── Pakistan — Digital Banks & Fintech ────────────────────
  { name: "SadaPay", aliases: ["Sada Pay", "Sadapay Digital Bank", "SadaPay Digital Bank", "Sada"], domain: "sadapay.pk", country: "Pakistan", type: "bank" },
  { name: "NayaPay", aliases: ["Naya Pay", "NayaPay Digital"], domain: "nayapay.com", country: "Pakistan", type: "bank" },
  { name: "EasyPaisa", aliases: ["Easypaisa", "Easy Paisa", "Telenor Microfinance"], domain: "easypaisa.com.pk", country: "Pakistan", type: "bank" },
  { name: "JazzCash", aliases: ["Jazz Cash", "Mobilink Microfinance"], domain: "jazzcash.com.pk", country: "Pakistan", type: "bank" },
  { name: "UPaisa", aliases: ["U Paisa", "Ufone Paisa"], domain: "upaisa.com", country: "Pakistan", type: "bank" },

  // ── Pakistan — Telecom ────────────────────────────────────
  { name: "Jazz", aliases: ["Mobilink", "Jazz Cash", "Jazz Pakistan"], domain: "jazz.com.pk", country: "Pakistan", type: "telecom" },
  { name: "Zong", aliases: ["China Mobile Pakistan", "Zong 4G"], domain: "zong.com.pk", country: "Pakistan", type: "telecom" },
  { name: "Telenor Pakistan", aliases: ["Telenor", "Telenor PK"], domain: "telenor.com.pk", country: "Pakistan", type: "telecom" },
  { name: "Ufone", aliases: ["PTCL Ufone", "Ufone 4G"], domain: "ufone.com", country: "Pakistan", type: "telecom" },
  { name: "PTCL", aliases: ["Pakistan Telecommunication Company", "PTCL Broadband"], domain: "ptcl.com.pk", country: "Pakistan", type: "telecom" },
  { name: "StormFiber", aliases: ["Storm Fiber", "Cybernet StormFiber"], domain: "stormfiber.com", country: "Pakistan", type: "telecom" },
  { name: "Nayatel", aliases: ["Naya Tel"], domain: "nayatel.com", country: "Pakistan", type: "telecom" },

  // ── Pakistan — Medical ────────────────────────────────────
  { name: "Aga Khan Hospital", aliases: ["AKUH", "Aga Khan University Hospital", "Aga Khan Health"], domain: "aku.edu", country: "Pakistan", type: "medical" },
  { name: "Shaukat Khanum", aliases: ["Shaukat Khanum Memorial", "SKMCH", "Shaukat Khanum Cancer Hospital"], domain: "shaukatkhanum.org.pk", country: "Pakistan", type: "medical" },
  { name: "Liaquat National Hospital", aliases: ["LNH", "Liaquat National"], domain: "lnh.edu.pk", country: "Pakistan", type: "medical" },
  { name: "Indus Hospital", aliases: ["The Indus Hospital", "Indus Health Network"], domain: "indushospital.org.pk", country: "Pakistan", type: "medical" },
  { name: "Dow University Hospital", aliases: ["DUHS", "Dow Hospital"], domain: "duhs.edu.pk", country: "Pakistan", type: "medical" },
  { name: "South City Hospital", aliases: ["South City"], domain: "southcityhospital.com", country: "Pakistan", type: "medical" },
  { name: "Chughtai Lab", aliases: ["Chughtai Lahore Lab", "Chughtai"], domain: "chughtailab.com", country: "Pakistan", type: "medical" },
  { name: "Dr Essa Laboratory", aliases: ["Essa Lab", "Essa Laboratory"], domain: "essalab.com", country: "Pakistan", type: "medical" },

  // ── Pakistan — Insurance ──────────────────────────────────
  { name: "State Life", aliases: ["State Life Insurance", "SLIC"], domain: "statelife.com.pk", country: "Pakistan", type: "insurance" },
  { name: "Jubilee Life", aliases: ["Jubilee Insurance", "Jubilee Life Insurance"], domain: "jubileelife.com", country: "Pakistan", type: "insurance" },
  { name: "EFU Life", aliases: ["EFU", "EFU Life Assurance"], domain: "efu.com.pk", country: "Pakistan", type: "insurance" },
  { name: "Adamjee Insurance", aliases: ["Adamjee"], domain: "adamjeeinsurance.com", country: "Pakistan", type: "insurance" },

  // ── Pakistan — Government ─────────────────────────────────
  { name: "FBR", aliases: ["Federal Board of Revenue", "Pakistan Tax"], domain: "fbr.gov.pk", country: "Pakistan", type: "government" },
  { name: "NADRA", aliases: ["National Database and Registration Authority"], domain: "nadra.gov.pk", country: "Pakistan", type: "government" },
  { name: "EOBI", aliases: ["Employees Old-Age Benefits Institution"], domain: "eobi.gov.pk", country: "Pakistan", type: "government" },

  // ── United Kingdom ─────────────────────────────────────────
  { name: "NHS", aliases: ["National Health Service", "NHS England", "NHS Scotland", "NHS Wales"], domain: "nhs.uk", country: "United Kingdom", type: "medical" },
  { name: "Barclays", aliases: ["Barclays Bank", "Barclays PLC"], domain: "barclays.com", country: "United Kingdom", type: "bank" },
  { name: "HSBC", aliases: ["HSBC UK", "HSBC Bank", "HSBC Holdings"], domain: "hsbc.com", country: "United Kingdom", type: "bank" },
  { name: "Lloyds Bank", aliases: ["Lloyds", "Lloyds Banking Group", "Lloyds TSB"], domain: "lloydsbank.com", country: "United Kingdom", type: "bank" },
  { name: "NatWest", aliases: ["National Westminster Bank", "NatWest Group"], domain: "natwest.com", country: "United Kingdom", type: "bank" },
  { name: "Santander UK", aliases: ["Santander"], domain: "santander.co.uk", country: "United Kingdom", type: "bank" },
  { name: "Halifax", aliases: ["Halifax Bank"], domain: "halifax.co.uk", country: "United Kingdom", type: "bank" },
  { name: "Monzo", aliases: ["Monzo Bank"], domain: "monzo.com", country: "United Kingdom", type: "bank" },
  { name: "Starling Bank", aliases: ["Starling"], domain: "starlingbank.com", country: "United Kingdom", type: "bank" },
  { name: "British Gas", aliases: ["BG Group", "Centrica"], domain: "britishgas.co.uk", country: "United Kingdom", type: "utility" },
  { name: "BT", aliases: ["British Telecom", "BT Group", "BT Broadband"], domain: "bt.com", country: "United Kingdom", type: "telecom" },
  { name: "Virgin Media", aliases: ["Virgin", "Virgin Media O2"], domain: "virginmedia.com", country: "United Kingdom", type: "telecom" },
  { name: "EDF Energy", aliases: ["EDF"], domain: "edfenergy.com", country: "United Kingdom", type: "utility" },
  { name: "Octopus Energy", aliases: ["Octopus"], domain: "octopus.energy", country: "United Kingdom", type: "utility" },
  { name: "E.ON", aliases: ["EON", "E.ON UK"], domain: "eon.com", country: "United Kingdom", type: "utility" },
  { name: "Sky", aliases: ["Sky UK", "Sky Broadband", "Sky TV"], domain: "sky.com", country: "United Kingdom", type: "telecom" },
  { name: "Vodafone UK", aliases: ["Vodafone"], domain: "vodafone.co.uk", country: "United Kingdom", type: "telecom" },
  { name: "O2 UK", aliases: ["O2", "Telefonica UK"], domain: "o2.co.uk", country: "United Kingdom", type: "telecom" },
  { name: "AXA UK", aliases: ["AXA Insurance", "AXA"], domain: "axa.co.uk", country: "United Kingdom", type: "insurance" },
  { name: "Aviva", aliases: ["Aviva Insurance", "Aviva PLC"], domain: "aviva.com", country: "United Kingdom", type: "insurance" },
  { name: "Admiral", aliases: ["Admiral Insurance"], domain: "admiral.com", country: "United Kingdom", type: "insurance" },
  { name: "Direct Line", aliases: ["Direct Line Insurance"], domain: "directline.com", country: "United Kingdom", type: "insurance" },
  { name: "HMRC", aliases: ["Her Majesty Revenue and Customs", "His Majesty Revenue and Customs", "UK Tax"], domain: "hmrc.gov.uk", country: "United Kingdom", type: "government" },

  // ── United States ──────────────────────────────────────────
  { name: "Chase", aliases: ["JPMorgan Chase", "Chase Bank", "JP Morgan"], domain: "chase.com", country: "United States", type: "bank" },
  { name: "Bank of America", aliases: ["BofA", "Bank of America Corp"], domain: "bankofamerica.com", country: "United States", type: "bank" },
  { name: "Wells Fargo", aliases: ["Wells Fargo Bank", "WF"], domain: "wellsfargo.com", country: "United States", type: "bank" },
  { name: "Citibank", aliases: ["Citi", "Citigroup", "Citi Bank"], domain: "citibank.com", country: "United States", type: "bank" },
  { name: "Capital One", aliases: ["Capital One Bank"], domain: "capitalone.com", country: "United States", type: "bank" },
  { name: "American Express", aliases: ["Amex", "AMEX"], domain: "americanexpress.com", country: "United States", type: "bank" },
  { name: "Cigna", aliases: ["Cigna Healthcare", "Cigna Health"], domain: "cigna.com", country: "United States", type: "insurance" },
  { name: "Aetna", aliases: ["Aetna Insurance", "Aetna Health"], domain: "aetna.com", country: "United States", type: "insurance" },
  { name: "UnitedHealth", aliases: ["United Healthcare", "UHC", "United Health Group"], domain: "uhc.com", country: "United States", type: "insurance" },
  { name: "Blue Cross Blue Shield", aliases: ["BCBS", "BlueCross", "Blue Cross"], domain: "bcbs.com", country: "United States", type: "insurance" },
  { name: "Humana", aliases: ["Humana Insurance"], domain: "humana.com", country: "United States", type: "insurance" },
  { name: "AT&T", aliases: ["ATT", "AT and T"], domain: "att.com", country: "United States", type: "telecom" },
  { name: "Verizon", aliases: ["Verizon Wireless", "VZW"], domain: "verizon.com", country: "United States", type: "telecom" },
  { name: "T-Mobile", aliases: ["TMobile", "T Mobile"], domain: "t-mobile.com", country: "United States", type: "telecom" },
  { name: "Comcast", aliases: ["Xfinity", "Comcast Xfinity"], domain: "comcast.com", country: "United States", type: "telecom" },
  { name: "Medicare", aliases: ["US Medicare", "Centers for Medicare", "CMS"], domain: "medicare.gov", country: "United States", type: "government" },
  { name: "IRS", aliases: ["Internal Revenue Service", "US Tax"], domain: "irs.gov", country: "United States", type: "government" },

  // ── UAE ───────────────────────────────────────────────────
  { name: "DEWA", aliases: ["Dubai Electricity and Water Authority", "Dubai Electric"], domain: "dewa.gov.ae", country: "UAE", type: "utility" },
  { name: "SEWA", aliases: ["Sharjah Electricity and Water Authority"], domain: "sewa.gov.ae", country: "UAE", type: "utility" },
  { name: "ADDC", aliases: ["Abu Dhabi Distribution Company"], domain: "addc.ae", country: "UAE", type: "utility" },
  { name: "Emirates NBD", aliases: ["ENBD", "Emirates NBD Bank"], domain: "emiratesnbd.com", country: "UAE", type: "bank" },
  { name: "FAB", aliases: ["First Abu Dhabi Bank", "National Bank of Abu Dhabi"], domain: "bankfab.com", country: "UAE", type: "bank" },
  { name: "ADCB", aliases: ["Abu Dhabi Commercial Bank"], domain: "adcb.com", country: "UAE", type: "bank" },
  { name: "Mashreq Bank", aliases: ["Mashreq", "Mashreqbank"], domain: "mashreq.com", country: "UAE", type: "bank" },
  { name: "Etisalat", aliases: ["e&", "Emirates Telecom", "e& UAE"], domain: "etisalat.ae", country: "UAE", type: "telecom" },
  { name: "du", aliases: ["Du Telecom", "Emirates Integrated Telecommunications", "du UAE"], domain: "du.ae", country: "UAE", type: "telecom" },

  // ── India ─────────────────────────────────────────────────
  { name: "SBI", aliases: ["State Bank of India", "State Bank"], domain: "sbi.co.in", country: "India", type: "bank" },
  { name: "HDFC Bank", aliases: ["HDFC", "HDFC Ltd"], domain: "hdfcbank.com", country: "India", type: "bank" },
  { name: "ICICI Bank", aliases: ["ICICI"], domain: "icicibank.com", country: "India", type: "bank" },
  { name: "Axis Bank", aliases: ["Axis"], domain: "axisbank.com", country: "India", type: "bank" },
  { name: "Kotak Mahindra Bank", aliases: ["Kotak", "Kotak Bank"], domain: "kotak.com", country: "India", type: "bank" },
  { name: "Airtel", aliases: ["Bharti Airtel", "Airtel India"], domain: "airtel.in", country: "India", type: "telecom" },
  { name: "Jio", aliases: ["Reliance Jio", "Jio India"], domain: "jio.com", country: "India", type: "telecom" },
  { name: "BSNL", aliases: ["Bharat Sanchar Nigam"], domain: "bsnl.in", country: "India", type: "telecom" },
  { name: "Apollo Hospitals", aliases: ["Apollo", "Apollo Health"], domain: "apollohospitals.com", country: "India", type: "medical" },
  { name: "Fortis Healthcare", aliases: ["Fortis"], domain: "fortishealthcare.com", country: "India", type: "medical" },

  // ── Canada ────────────────────────────────────────────────
  { name: "RBC", aliases: ["Royal Bank of Canada", "Royal Bank"], domain: "rbc.com", country: "Canada", type: "bank" },
  { name: "TD Bank", aliases: ["Toronto-Dominion Bank", "TD Canada Trust"], domain: "td.com", country: "Canada", type: "bank" },
  { name: "Scotiabank", aliases: ["Bank of Nova Scotia", "Scotia"], domain: "scotiabank.com", country: "Canada", type: "bank" },
  { name: "BMO", aliases: ["Bank of Montreal", "BMO Financial"], domain: "bmo.com", country: "Canada", type: "bank" },
  { name: "Bell Canada", aliases: ["Bell", "BCE"], domain: "bell.ca", country: "Canada", type: "telecom" },
  { name: "Rogers", aliases: ["Rogers Communications", "Rogers Canada"], domain: "rogers.com", country: "Canada", type: "telecom" },
  { name: "Telus", aliases: ["Telus Communications"], domain: "telus.com", country: "Canada", type: "telecom" },

  // ── Australia ─────────────────────────────────────────────
  { name: "Commonwealth Bank", aliases: ["CBA", "CommBank", "Commonwealth Bank of Australia"], domain: "commbank.com.au", country: "Australia", type: "bank" },
  { name: "ANZ", aliases: ["Australia and New Zealand Banking Group", "ANZ Bank"], domain: "anz.com.au", country: "Australia", type: "bank" },
  { name: "Westpac", aliases: ["Westpac Bank", "Westpac Banking Corporation"], domain: "westpac.com.au", country: "Australia", type: "bank" },
  { name: "NAB", aliases: ["National Australia Bank"], domain: "nab.com.au", country: "Australia", type: "bank" },
  { name: "Telstra", aliases: ["Telstra Corporation", "Telstra Australia"], domain: "telstra.com.au", country: "Australia", type: "telecom" },
  { name: "Optus", aliases: ["Singtel Optus"], domain: "optus.com.au", country: "Australia", type: "telecom" },
  { name: "AGL Energy", aliases: ["AGL", "AGL Australia"], domain: "agl.com.au", country: "Australia", type: "utility" },
  { name: "Origin Energy", aliases: ["Origin"], domain: "originenergy.com.au", country: "Australia", type: "utility" },

  // ── Saudi Arabia ──────────────────────────────────────────
  { name: "SEC", aliases: ["Saudi Electricity Company", "Saudi Electric"], domain: "se.com.sa", country: "Saudi Arabia", type: "utility" },
  { name: "Al Rajhi Bank", aliases: ["Al Rajhi", "Rajhi Bank"], domain: "alrajhibank.com.sa", country: "Saudi Arabia", type: "bank" },
  { name: "Saudi National Bank", aliases: ["SNB", "NCB", "National Commercial Bank"], domain: "alahli.com", country: "Saudi Arabia", type: "bank" },
  { name: "STC", aliases: ["Saudi Telecom Company", "STC Pay"], domain: "stc.com.sa", country: "Saudi Arabia", type: "telecom" },
  { name: "Mobily", aliases: ["Etihad Etisalat", "Mobily Saudi"], domain: "mobily.com.sa", country: "Saudi Arabia", type: "telecom" },
];

// Returns matched company or null
export function findCompany(companyName: string): KnownCompany | null {
  if (!companyName || companyName === "Unknown") return null;
  const lower = companyName.toLowerCase().trim();
  return (
    KNOWN_COMPANIES.find((c) => {
      if (c.name.toLowerCase() === lower) return true;
      return c.aliases.some(
        (a) =>
          a.toLowerCase() === lower ||
          lower.includes(a.toLowerCase()) ||
          a.toLowerCase().includes(lower),
      );
    }) ?? null
  );
}

// Returns Clearbit logo URL for a known company
export function getLogoUrl(domain: string): string {
  return `https://logo.clearbit.com/${domain}`;
}