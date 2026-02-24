import './style.css';
import Navbar from './components/Navbar.js';

document.body.insertAdjacentHTML('afterbegin', Navbar());

// Data - Official Branches with Map Links
const RAW_BRANCHES = [
  { region: "المنطقة الغربية", city: "الطائف", name: "الحوية", map: "https://maps.app.goo.gl/7ySoh77TGVDbxbJr9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "البديعة", map: "https://maps.app.goo.gl/vUxSGMw8XcEhHkfJ7" },
  { region: "المنطقة الجنوبية", city: "أبها", name: "القرعاء", map: "https://maps.app.goo.gl/JWjaEqtAw3HeAa1J6" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الدرعية", map: "https://maps.app.goo.gl/DPkzfdq88dGFdzk47" },
  { region: "المنطقة الوسطى", city: "بريدة", name: "الصفاء", map: "https://maps.app.goo.gl/LdYKLATULYVWoxat9" },
  { region: "المنطقة الغربية", city: "مكة المكرمة", name: "الزايدي", map: "https://maps.app.goo.gl/htfyFKnnqZPyjqLM9" },
  { region: "المنطقة الشرقية", city: "القطيف", name: "المشتل", map: "https://maps.app.goo.gl/MgTwNM5kgyJL2ahn9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الدائري الغربي", map: "https://maps.app.goo.gl/kjzBmaZeUZkTwY8M7" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الهدا", map: "https://maps.app.goo.gl/ipGnhXyvP9PrBB838" },
  { region: "المنطقة الجنوبية", city: "جازان", name: "بيش", map: "https://maps.app.goo.gl/5wqofaHmat1j7mEc9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "السعادة", map: "https://maps.app.goo.gl/D35r8fWPmSb9W2wU8" },
  { region: "المنطقة الغربية", city: "الطائف", name: "الحلقة", map: "https://maps.app.goo.gl/wibcQEdUwo3195wh8" },
  { region: "المنطقة الغربية", city: "مكة", name: "الشرائع", map: "https://maps.app.goo.gl/8dsKiDuLFQm9hCuH8" },
  { region: "المنطقة الغربية", city: "مكة المكرمة", name: "الجموم", map: "https://maps.app.goo.gl/kWk3Yy96Y8Gq689k6" },
  { region: "المنطقة الوسطى", city: "حريملاء", name: "طريق الملك عبدالله", map: "https://maps.app.goo.gl/FjZnacnP3eXT2Wc57" },
  { region: "المنطقة الغربية", city: "مكة", name: "الشوقية", map: "https://maps.app.goo.gl/du7Hx4KBJXf4oXnW6" },
  { region: "المنطقة الجنوبية", city: "جازان", name: "الدرب", map: "https://maps.app.goo.gl/KQgd6aBW9mBW4Y6k9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الربوة", map: "https://maps.app.goo.gl/THtFDWZc2vrn4SKk9" },
  { region: "المنطقة الغربية", city: "جدة", name: "الزهراء", map: "https://maps.app.goo.gl/TYPpE8RMqxwDFKk58" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الفيحاء", map: "https://maps.app.goo.gl/6UAmY1qvVWTFC5RQA" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "قرطبة", map: "https://maps.app.goo.gl/NeknBSK6t1gHv8eU9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "العوالي", map: "https://maps.app.goo.gl/sTgu8pxwQYGMSoNEA" },
  { region: "المنطقة الوسطى", city: "بريدة", name: "الريان", map: "https://maps.app.goo.gl/GbPi7uG4diM5hDGb8" },
  { region: "المنطقة الجنوبية", city: "جازان", name: "الشاطئ", map: "https://maps.app.goo.gl/vBkvsoG8orex8aye9" },
  { region: "المنطقة الغربية", city: "جدة", name: "النسيم", map: "https://maps.app.goo.gl/sVcKuR8WVzNxc5JK6" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "النخيل", map: "https://maps.app.goo.gl/RyQdPxzMPPyiDjQh8" },
  { region: "المنطقة الجنوبية", city: "خميس مشيط", name: "الحسام", map: "https://maps.app.goo.gl/z2LUMiaknf2HPRYf6" },
  { region: "المنطقة الشرقية", city: "حفر الباطن", name: "المحمدية", map: "https://maps.app.goo.gl/upiZcRAuksvC9jhJ9" },
  { region: "المنطقة الجنوبية", city: "بيشة", name: "الخزامى", map: "https://maps.app.goo.gl/oCKYwjH8YBtRfD2g7" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "طويق", map: "https://maps.app.goo.gl/RpPrUtJEM9vejJaa6" },
  { region: "المنطقة الجنوبية", city: "احد رفيدة", name: "السلامة", map: "https://maps.app.goo.gl/SPrhukPpQ7vPkyHG8" },
  { region: "المنطقة الجنوبية", city: "نجران", name: "الأمير مشعل", map: "https://maps.app.goo.gl/C2z4hDHY6C9kyfxw8" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الأحمدية", map: "https://maps.app.goo.gl/bxtrkeLEnZzvgNRi9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "عرقة", map: "https://maps.app.goo.gl/BhjFRk4JR7xro5a5A" },
  { region: "المنطقة الشرقية", city: "الدمام", name: "الفيصلية", map: "https://maps.app.goo.gl/6pXw285CWUW4vkZS7" },
  { region: "المنطقة الشرقية", city: "الأحساء", name: "الهفوف الضلع الشرقي", map: "https://maps.app.goo.gl/HsC8EhbZnNn9o1i7A" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الشهداء", map: "https://maps.app.goo.gl/1MeWw7WN3YNU4M1J8" },
  { region: "المنطقة الجنوبية", city: "صبيا", name: "طريق الملك فهد", map: "https://maps.app.goo.gl/s7racVvw6uEmQa7r8" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "النرجس عثمان بن عفان", map: "https://maps.app.goo.gl/SAQiCrzgQpP9y5C78" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "النزهة", map: "https://maps.app.goo.gl/umBmMkrXuwV1w4XN7" },
  { region: "المنطقة الشرقية", city: "الخبر", name: "العقربية", map: "https://maps.app.goo.gl/FWc9ffTcSkJKKmxx5" },
  { region: "المنطقة الوسطى", city: "الخرج", name: "الملقا", map: "https://maps.app.goo.gl/o72taJCnAg32xZcE7" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الحزم", map: "https://maps.app.goo.gl/GkHdgYJRapvqwfkP9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الياسمين", map: "https://maps.app.goo.gl/JoCW4fvDDSYC1abx8" },
  { region: "المنطقة الشمالية", city: "تبوك", name: "العليا", map: "https://maps.app.goo.gl/Lmd7zVU2RLehbZ5C9" },
  { region: "المنطقة الغربية", city: "مكة المكرمة", name: "بطحاء قريش", map: "https://maps.app.goo.gl/U77Zmvjvjo3rNDEf9" },
  { region: "المنطقة الغربية", city: "القنفذة", name: "طريق الملك عبدالعزيز", map: "https://maps.app.goo.gl/EnrZfR648SC171Y56" },
  { region: "المنطقة الوسطى", city: "شقراء", name: "القارة", map: "https://maps.app.goo.gl/GxMUSHbGrLQLAdbd7" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "العارض سعود بن جلوي", map: "https://maps.app.goo.gl/uUy6wwP4GLEgWFP1A" },
  { region: "المنطقة الغربية", city: "مكة المكرمة", name: "المعيصم", map: "https://maps.app.goo.gl/6z5SPN1k9VQ41nXG8" },
  { region: "المنطقة الغربية", city: "جدة", name: "الحمدانية", map: "https://maps.app.goo.gl/AESt6uHeibUREhCa9" },
  { region: "المنطقة الوسطى", city: "الخرج", name: "الفيصلية", map: "https://maps.app.goo.gl/FoEd6XYVPcdp4RJc8" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الريان", map: "https://maps.app.goo.gl/RFmjFw9ApVeKUH4j8" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "القادسية", map: "https://maps.app.goo.gl/1iQS9tKjVw1ZLHF3A" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الثمامة", map: "https://maps.app.goo.gl/3fUwS9SHS3ZstQzj8" },
  { region: "المنطقة الوسطى", city: "حوطة بني تميم", name: "طريق الملك فهد", map: "https://maps.app.goo.gl/rwhrCy7oLoFeV1Tc9" },
  { region: "المنطقة الوسطى", city: "المجمعة", name: "المستقبل", map: "https://maps.app.goo.gl/MoCNYDwojd6KfQ8H8" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "السويدي", map: "https://maps.app.goo.gl/bGcewFKiSuKkRnm59" },
  { region: "المنطقة الوسطى", city: "عنيزة", name: "الفاخرية", map: "https://maps.app.goo.gl/DzComrwRzAk1MkVLA" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "المونسية", map: "https://maps.app.goo.gl/XZ4PF8VC3MMADNcA6" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الشفاء", map: "https://maps.app.goo.gl/RBMcUqqSNs56yMqm9" },
  { region: "المنطقة الجنوبية", city: "شرورة", name: "طريق الملك سلمان", map: "https://maps.app.goo.gl/R4EDPuwmbY4e47xH6" },
  { region: "المنطقة الشمالية", city: "حائل", name: "المنتزة", map: "https://maps.app.goo.gl/i5XqnqW18ZBu8F2t7" },
  { region: "المنطقة الغربية", city: "خميس مشيط", name: "الموسى", map: "https://maps.app.goo.gl/hfPPS35RLfWc4vez8" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "المهدية", map: "https://maps.app.goo.gl/VdV8GznjZhw18NTn9" },
  { region: "المنطقة الشمالية", city: "حايل", name: "النقرة", map: "https://maps.app.goo.gl/SW2vigcnSuzGggE96" },
  { region: "المنطقة الغربية", city: "المدينة المنورة", name: "المحمدية", map: "https://maps.app.goo.gl/TKTdCXEmZAX14yBi6" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "لبن", map: "https://maps.app.goo.gl/FgLkBsMt77WRtCx76" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "القدية", map: "https://maps.app.goo.gl/ryKoWBGv83RSk19W6" },
  { region: "المنطقة الجنوبية", city: "محايل عسير", name: "الحسلة الغربي", map: "https://maps.app.goo.gl/jp9XKNmLVySSRCQo8" },
  { region: "المنطقة الغربية", city: "مكة", name: "العوالي", map: "https://maps.app.goo.gl/cmVEndfgC1tuNXwY7" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "سلمان الفارسي", map: "https://maps.app.goo.gl/BDR15mZ9YzwpCbZv7" },
  { region: "المنطقة الشرقية", city: "الدمام", name: "الشاطئ", map: "https://maps.app.goo.gl/FW97Wq9FrbYvvXpU6" },
  { region: "المنطقة الوسطى", city: "الزلفي", name: "التحلية", map: "https://maps.app.goo.gl/Y91ACRmhsUKM4s2o8" },
  { region: "المنطقة الوسطى", city: "الدوادمي", name: "الريان", map: "https://maps.app.goo.gl/68PLR22zyQ6YFLKq9" },
  { region: "المنطقة الشرقية", city: "سيهات", name: "الكوثر", map: "https://maps.app.goo.gl/eR3NyBFg8jgXiFnUA" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "العزيزية", map: "https://maps.app.goo.gl/zDbBuBdChLJQx4N19" },
  { region: "المنطقة الوسطى", city: "سدير الجديد", name: "محطة لودر", map: "https://maps.app.goo.gl/MuRaknSP3JEphQum9" },
  { region: "المنطقة الشرقية", city: "الأحساء السلطانية", name: "العيون", map: "https://maps.app.goo.gl/VHHQXYE5d1aYajLn6" },
  { region: "المنطقة الوسطى", city: "الرس", name: "الحزم", map: "https://maps.app.goo.gl/NSBH8CGwXmEG8DAV9" },
  { region: "المنطقة الوسطى", city: "البكيرية", name: "طريق الملك عبدالله", map: "https://maps.app.goo.gl/9hffLMFcsNTjJ5799" },
  { region: "المنطقة الغربية", city: "مكة", name: "النورية", map: "https://maps.app.goo.gl/HUoih3YWhqYNqxGo7" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "القيروان", map: "https://maps.app.goo.gl/ZugjPd4VhaEGekZ86" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الجنادرية", map: "https://maps.app.goo.gl/2YeB4YY3vitLEpsn7" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "تلال الرمال", map: "https://maps.app.goo.gl/2HAPKv3TNtKwKdQV6" },
  { region: "المنطقة الشمالية", city: "سكاكا", name: "السليمانية", map: "https://maps.app.goo.gl/GwMbURZJ6aKfyqYE9" },
  { region: "المنطقة الغربية", city: "الطائف", name: "تيرا مول", map: "https://maps.app.goo.gl/JcpHX8ReCn1Cncar6" },
  { region: "المنطقة الغربية", city: "رابغ", name: "الصبوح", map: "https://maps.app.goo.gl/Cu7zzURzpZF285Ba8" },
  { region: "المنطقة الجنوبية", city: "نجران", name: "حبونا", map: "https://maps.app.goo.gl/yEWrtihyBoedE2NQ9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "طريق حمزة", map: "https://maps.app.goo.gl/o6PfGAbQQtnbsy6F7" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "عكاظ", map: "https://maps.app.goo.gl/8XKsdzg1q7tUrvFe6" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "طريق الدمام", map: "https://maps.app.goo.gl/qwTTp7moqNMgRLaX9" },
  { region: "خارج المملكة العربية السعودية", city: "الأردن", name: "غوشة", map: "https://maps.app.goo.gl/zABBGMMtYW8FWHpS8" },
  { region: "خارج المملكة العربية السعودية", city: "قطر", name: "الدوحة", map: "https://maps.app.goo.gl/52Nj5TtLCQGMg7VA8" },
  { region: "خارج المملكة العربية السعودية", city: "الكويت", name: "مبارك الكبير", map: "https://maps.app.goo.gl/XLcdW4MAfXk17nDF9" },
  { region: "المنطقة الغربية", city: "جدة", name: "المروة", map: "https://maps.app.goo.gl/F6hLyWe3Qe2AckFHA" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "بدر", map: "https://maps.app.goo.gl/7RL6mfKmrx2uV4Wh6" },
  { region: "المنطقة الغربية", city: "المدينة المنورة", name: "الدفاع طريق الإمام البخاري", map: "https://maps.app.goo.gl/wDtXr49t6cbZxW3eA" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "المعيقلية", map: "https://maps.app.goo.gl/en96MArVkak8t5Kt7" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الصناعية الثانية", map: "https://maps.app.goo.gl/9S3Tnb6RfvRG4TfM9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الدائري الشرقي", map: "https://maps.app.goo.gl/Zp3mHpLRDVv5vAbX9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الشميسي", map: "https://maps.app.goo.gl/czXv7mWEEDJydDJZ9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "ظهرة لبن", map: "https://maps.app.goo.gl/i51KX2UrWYp6pEtK9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "طريق الخرج", map: "https://maps.app.goo.gl/5UAB41qXXTxUuLap8" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "النسيم", map: "https://maps.app.goo.gl/GUHcaLC73UPVsagZA" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "طريق ديراب", map: "https://maps.app.goo.gl/5UBq6Po2J1Z2fotTA" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "المحمدية", map: "https://maps.app.goo.gl/zBk535eXd6beyELv7" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "العريجاء", map: "https://maps.app.goo.gl/zA9VNDCuCKm8sKy29" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "المناخ", map: "https://maps.app.goo.gl/LL2hg4jFVxGxQbCz5" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الموسى", map: "https://maps.app.goo.gl/GVPmrhSKeLQQHtqY6" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "البيان", map: "https://maps.app.goo.gl/BVNnvSdDUeWsMjXb6" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "الأندلس", map: "https://maps.app.goo.gl/gCvv2PGsPPeLoKH36" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "طريق المطار", map: "https://maps.app.goo.gl/b5k6hpbXPhhNbmNGA" },
  { region: "المنطقة الوسطى", city: "الخرج", name: "القاعدة الجوية", map: "https://maps.app.goo.gl/vY681rWbCRquUKC17" },
  { region: "المنطقة الوسطى", city: "المزاحمية", name: "الجزالا", map: "https://maps.app.goo.gl/E9bZbJRFX4Wb2KtT6" },
  { region: "المنطقة الوسطى", city: "عفيف", name: "طريق الملك سلمان", map: "https://maps.app.goo.gl/W4pGWLDkSoG4jYf56" },
  { region: "المنطقة الوسطى", city: "الجبيلة", name: "طريق الأمير سلطان", map: "https://maps.app.goo.gl/FCTtP9TKeZuzFC3Y9" },
  { region: "المنطقة الوسطى", city: "الرياض", name: "العارض - طريق أبو بكر", map: "https://maps.app.goo.gl/cCucXRB6Ab5kjZP38" },
  { region: "المنطقة الجنوبية", city: "أبها", name: "الجوحان - المنسك", map: "https://maps.app.goo.gl/12NpTMxmRnbPWj5d9" },
  { region: "المنطقة الشرقية", city: "الجبيل", name: "طيبة", map: "https://maps.app.goo.gl/et8pKqYhsJYDvC8z5" },
  { region: "المنطقة الشرقية", city: "الأحساء", name: "النايفية", map: "https://maps.app.goo.gl/QhuEhRSFzhV9aLys8" },
  { region: "المنطقة الشرقية", city: "الجبيل", name: "الفناتير", map: "https://maps.app.goo.gl/ru2bngEFM5HGFRDT9" },
  { region: "المنطقة الوسطى", city: "بريدة", name: "البساتين", map: "https://maps.app.goo.gl/eXkmcqEJhNqxxoGT7" },
  { region: "المنطقة الجنوبية", city: "نجران", name: "الجامعة", map: "https://maps.app.goo.gl/wcFshSc6iE7EUV7F7" },
  { region: "المنطقة الجنوبية", city: "سراة عبيدة", name: "طريق الملك خالد", map: "https://maps.app.goo.gl/JczBr3tU3eqDDo8u5" },
  { region: "المنطقة الجنوبية", city: "أبو عريش", name: "طريق الأمير سلطان", map: "https://maps.app.goo.gl/F96xTKEXJUgRAp738" },
  { region: "المنطقة الغربية", city: "جدة", name: "أبحر", map: "https://maps.app.goo.gl/FnZ36XjyvvFJU59T7" },
  { region: "المنطقة الغربية", city: "جدة", name: "السامر", map: "https://maps.app.goo.gl/JaTdAjaHVomAnGNJ8" },
  { region: "المنطقة الغربية", city: "مكة", name: "برج الساعة", map: "https://maps.app.goo.gl/8oJdZJUyvNxyu2qw5" },
  { region: "المنطقة الغربية", city: "مكة", name: "ولي العهد", map: "https://maps.app.goo.gl/qrhswpxQd9ELmL2h7" },
  { region: "المنطقة الغربية", city: "مكة", name: "الفيحاء", map: "https://maps.app.goo.gl/qRUiByokCMwRM3KF7" },
  { region: "المنطقة الغربية", city: "المدينة المنورة", name: "العريض", map: "https://maps.app.goo.gl/2yUXFBiLFWoYD6mY9" },
  { region: "المنطقة الوسطى", city: "القويعية", name: "الربوة", map: "https://maps.app.goo.gl/9CMz3GcCoiCCXdCM9" },
  { region: "المنطقة الغربية", city: "الطائف", name: "جبره", map: "https://maps.app.goo.gl/FLwWrqGEMUC5GsFv7" },
  { region: "المنطقة الوسطى", city: "المليداء", name: "المليداء", map: "https://maps.app.goo.gl/UfU1PAXoxXBCMa8L6" },
  { region: "المنطقة الجنوبية", city: "تثليث", name: "الزهور", map: "https://maps.app.goo.gl/y35P2vS4h1BNg3rp7" },
  { region: "المنطقة الجنوبية", city: "صامطة", name: "حطين", map: "https://maps.app.goo.gl/n47758KcFhQX1Ke88" },
  { region: "المنطقة الجنوبية", city: "ظهران الجنوب", name: "الورود", map: "https://maps.app.goo.gl/xDTatvjMgnY7oJuCA" },
  { region: "المنطقة الجنوبية", city: "سبت العلايا", name: "العزيزية", map: "https://maps.app.goo.gl/g7zhCKGqyjYTcjs56" }
];

// Default Content Data
const DEFAULT_CONTENT = {
  images: {
    products: [
      { id: "main", url: "/assets/khaliya.webp", alt: "بوكس الخلية" },
      { id: "secondary", url: "/assets/mini (1).webp", alt: "بوكس الميني ساندوتش" }
    ]
  }
};

// Load Content
const loadContent = () => {
  const stored = localStorage.getItem('dawar_landing_content');
  return stored ? JSON.parse(stored) : DEFAULT_CONTENT;
};

const content = loadContent();

// Render Products Dynamically
const renderProducts = () => {
  const mainImg = content.images.products.find(img => img.id === 'main');
  const secondaryImg = content.images.products.find(img => img.id === 'secondary');

  const mainPlaceholder = document.getElementById('img-placeholder-main');
  const secondaryPlaceholder = document.getElementById('img-placeholder-secondary');

  const setPlaceholderContent = (element, imgObj) => {
    if (!element) return;

    if (imgObj && imgObj.url) {
      element.style.backgroundImage = `url('${imgObj.url}')`;
      element.innerHTML = '';
      element.classList.remove('placeholder-active');
    } else {
      element.style.backgroundImage = 'none';
      element.innerHTML = '<span style="color:#888;font-size:0.9rem;text-align:center;">الصورة سيتم رفعها من لوحة التحكم</span>';
      element.style.display = 'flex';
      element.style.alignItems = 'center';
      element.style.justifyContent = 'center';
      element.style.backgroundColor = '#f0f0f0';
      element.classList.add('placeholder-active');
    }
  };

  setPlaceholderContent(mainPlaceholder, mainImg);
  setPlaceholderContent(secondaryPlaceholder, secondaryImg);
};

// State
let activeRegionIndex = 0;

// Group Data dynamically
const BRANCHES = [];
const regions = [...new Set(RAW_BRANCHES.map(b => b.region))];

// Define preferred order efficiently
const regionOrder = [
  "المنطقة الوسطى",
  "المنطقة الغربية",
  "المنطقة الشرقية",
  "المنطقة الجنوبية",
  "المنطقة الشمالية",
  "خارج المملكة العربية السعودية"
];

// Sort regions based on preferred order
regions.sort((a, b) => {
  const indexA = regionOrder.indexOf(a);
  const indexB = regionOrder.indexOf(b);
  // If both are found in the list, sort by index
  if (indexA !== -1 && indexB !== -1) return indexA - indexB;
  // If only A is found, it comes first
  if (indexA !== -1) return -1;
  // If only B is found, it comes first
  if (indexB !== -1) return 1;
  // If neither is found, sort alphabetically or keep original order
  return 0;
});

regions.forEach(region => {
  BRANCHES.push({
    region: region,
    branches: RAW_BRANCHES
      .filter(b => b.region === region)
      .map(b => ({
        name: `${b.city} - ${b.name}`,
        mapsUrl: b.map
      }))
  });
});

// Dropdown rendering and Grid rendering functions stay the same
// because 'BRANCHES' now has the expected structure.
const renderDropdownOptions = () => {
  const menuContainer = document.getElementById('branches-dropdown-menu');
  if (!menuContainer) return;

  menuContainer.innerHTML = BRANCHES.map((item, index) => {
    const isSelected = index === activeRegionIndex ? 'selected' : '';
    return `<button class="dropdown-item ${isSelected}" onclick="window.selectRegion(${index})">${item.region}</button>`;
  }).join('');
};

// Update Dropdown Header UI
const updateDropdownHeader = () => {
  const headerText = document.querySelector('.selected-region');
  if (headerText && BRANCHES[activeRegionIndex]) {
    headerText.textContent = BRANCHES[activeRegionIndex].region;
  }
};

const renderGrid = () => {
  const gridContainer = document.getElementById('branches-grid');
  if (!gridContainer) return;

  const currentRegion = BRANCHES[activeRegionIndex];

  if (!currentRegion || !currentRegion.branches || currentRegion.branches.length === 0) {
    gridContainer.innerHTML = '<div class="no-data" style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #888;">عفواً، لا توجد فروع متاحة في هذه المنطقة حالياً.</div>';
    return;
  }

  const currentBranches = currentRegion.branches;

  // Simple fade transition
  gridContainer.style.transition = 'opacity 0.2sease';
  gridContainer.style.opacity = '0';

  setTimeout(() => {
    gridContainer.innerHTML = currentBranches.map((branch, index) => `
      <div class="branch-card" style="animation: fadeInUp 0.5s ease backwards ${index * 0.05}s">
        <div class="branch-name">
          <svg viewBox="0 0 24 24" fill="#FF6B00" style="width:24px;height:24px;flex-shrink:0;">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          ${branch.name}
        </div>
        <a href="${branch.mapsUrl}" target="_blank" rel="noopener noreferrer" class="branch-btn">
          <span>افتح على خرائط Google</span>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
        </a>
      </div>
    `).join('');

    gridContainer.style.opacity = '1';
  }, 200);
};

// Toggle Dropdown
const toggleDropdown = () => {
  const menu = document.getElementById('branches-dropdown-menu');
  const header = document.getElementById('branches-dropdown-header');
  menu.classList.toggle('open');
  header.classList.toggle('active');
};

// Select Region
window.selectRegion = (index) => {
  activeRegionIndex = index;
  updateDropdownHeader();

  // Update selected class manually to avoid full re-render if not needed, 
  // or re-render if that's the preferred approach. 
  // Re-rendering options ensures 'selected' class is accurate.
  renderDropdownOptions();

  renderGrid();
  toggleDropdown(); // Close after selection
};

// Setup Dropdown Listeners
const setupDropdown = () => {
  const header = document.getElementById('branches-dropdown-header');
  if (header) {
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.custom-dropdown');
    const menu = document.getElementById('branches-dropdown-menu');
    const header = document.getElementById('branches-dropdown-header');

    if (dropdown && !dropdown.contains(e.target)) {
      menu.classList.remove('open');
      header.classList.remove('active');
    }
  });
};

// Reveal on Scroll
const setupObserver = () => {
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers without IntersectionObserver support
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    return;
  }

  const isMobile = window.innerWidth <= 768;
  const threshold = isMobile ? 0.05 : 0.1; // Use lower threshold for mobile
  const rootMargin = isMobile ? "0px 0px -20px 0px" : "0px 0px -50px 0px";

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: threshold, rootMargin: rootMargin });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Emergency fallback in case observer doesn't fire (e.g. very fast scroll or height calc issues)
  if (isMobile) {
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.reveal:not(.active)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add('active');
        }
      });
    }, { passive: true });
  }
};

// Smooth Anchor Scroll
const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
};

// Initialize Application
const initApp = () => {
  try {
    // Render Components
    renderProducts();

    if (document.getElementById('branches-dropdown-menu')) {
      renderDropdownOptions();
      renderGrid();
      setupDropdown();
    }

    // Setup Interactions
    setupObserver();
    setupSmoothScroll();

    console.log("App initialized successfully");
  } catch (error) {
    console.error("Initialization error:", error);
    // Emergency Fallback: Reveal content if JS crashes
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
  }
};

// Start App
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
