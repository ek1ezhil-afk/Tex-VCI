import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Shield, Package, Leaf, CheckCircle, Recycle, AlertCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1>VCI Packaging Solutions</h1>
            <nav className="flex gap-6">
              <a href="#" className="text-slate-600 hover:text-slate-900">Products</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">Resources</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl mb-6">VCI Films</h1>
              <p className="text-xl text-blue-100">
                Advanced Volatile Corrosion Inhibitor technology providing superior protection for metal parts and components during storage and transportation.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1585313736187-2d481f3c3969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGFja2FnaW5nJTIwZmlsbXxlbnwxfHx8fDE3NjE0Njc2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="VCI Film Product"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8 overflow-x-auto -mx-4 px-4">
            <TabsList className="inline-flex w-auto min-w-full lg:w-full gap-2 p-2 bg-slate-100">
              <TabsTrigger value="overview" className="whitespace-nowrap">Overview</TabsTrigger>
              <TabsTrigger value="benefits" className="whitespace-nowrap">Benefits</TabsTrigger>
              <TabsTrigger value="compliance" className="whitespace-nowrap">Compliance</TabsTrigger>
              <TabsTrigger value="properties" className="whitespace-nowrap">Properties</TabsTrigger>
              <TabsTrigger value="formats" className="whitespace-nowrap">Formats</TabsTrigger>
              <TabsTrigger value="sustainability" className="whitespace-nowrap">Sustainability</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <Package className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle>2D Flat Bags</CardTitle>
                  <CardDescription>Perfect for flat components</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Ideal for protecting sheet metal, flat parts, and components that don't require 3D containment. Available in various sizes and thicknesses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Package className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle>3D Gusseted Bags</CardTitle>
                  <CardDescription>For complex shapes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Designed with gussets to accommodate bulky, irregularly shaped parts. Provides complete protection for complex geometries.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle>VCI Technology</CardTitle>
                  <CardDescription>Molecular protection</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    VCI molecules vaporize and form a protective layer on metal surfaces, preventing oxidation and corrosion without direct contact.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What is VCI Film?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  VCI (Volatile Corrosion Inhibitor) films are specialized polyethylene films embedded with corrosion-inhibiting molecules. These molecules vaporize and create an invisible, protective atmosphere around metal parts, preventing rust and corrosion during storage and transit.
                </p>
                <p className="text-slate-700">
                  Our VCI films are available in both 2D flat bag and 3D gusseted bag configurations, providing flexible solutions for various packaging needs. The films require no additional treatments or oils, making them clean, dry, and ready to use.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-blue-900">
                    <strong>Protection Duration:</strong> Up to 24 months of corrosion protection in controlled environments.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Benefits and Features Tab */}
          <TabsContent value="benefits">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>No Surface Preparation Required</strong>
                        <p className="text-slate-600">Clean and dry protection without oils or coatings</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Multi-Metal Protection</strong>
                        <p className="text-slate-600">Protects ferrous and non-ferrous metals simultaneously</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Self-Replenishing</strong>
                        <p className="text-slate-600">VCI molecules continuously protect until the bag is opened</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Cost-Effective</strong>
                        <p className="text-slate-600">Reduces labor costs and eliminates need for rust preventive oils</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Transparent Material</strong>
                        <p className="text-slate-600">Easy identification and inspection without opening</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Heat Sealable</strong>
                        <p className="text-slate-600">Create custom sized bags or ensure hermetic sealing</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Advanced VCI Formula</AccordionTrigger>
                      <AccordionContent>
                        Our proprietary VCI formulation provides superior protection against corrosion. The inhibitor molecules vaporize at room temperature and form a monomolecular layer on metal surfaces, preventing moisture and oxygen from causing oxidation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>UV Stabilization</AccordionTrigger>
                      <AccordionContent>
                        Films include UV stabilizers for extended outdoor storage capability, protecting both the film integrity and maintaining VCI effectiveness in sunlight exposure.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Anti-Static Properties</AccordionTrigger>
                      <AccordionContent>
                        Available with anti-static additives (pink-tinted) for electronic components and sensitive equipment that require both corrosion and static protection.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Puncture Resistance</AccordionTrigger>
                      <AccordionContent>
                        High-quality polyethylene construction provides excellent puncture and tear resistance, ensuring the protective atmosphere remains intact during handling and shipping.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Compliance and Safety Tab */}
          <TabsContent value="compliance">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="w-10 h-10 text-green-600 mb-2" />
                  <CardTitle>Regulatory Compliance</CardTitle>
                  <CardDescription>Meeting international standards and regulations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <Badge className="mb-2 bg-green-600">Certified</Badge>
                      <h3 className="mb-2">MIL-PRF-22019E</h3>
                      <p className="text-sm text-slate-600">Military specification for VCI materials</p>
                    </div>
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <Badge className="mb-2 bg-green-600">Certified</Badge>
                      <h3 className="mb-2">NACE TM0208</h3>
                      <p className="text-sm text-slate-600">Standard test method for VCI performance</p>
                    </div>
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <Badge className="mb-2 bg-green-600">Certified</Badge>
                      <h3 className="mb-2">RoHS Compliant</h3>
                      <p className="text-sm text-slate-600">Restriction of Hazardous Substances</p>
                    </div>
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <Badge className="mb-2 bg-green-600">Certified</Badge>
                      <h3 className="mb-2">REACH Compliant</h3>
                      <p className="text-sm text-slate-600">European chemicals regulation</p>
                    </div>
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <Badge className="mb-2 bg-green-600">Certified</Badge>
                      <h3 className="mb-2">FDA Approved</h3>
                      <p className="text-sm text-slate-600">Food contact safe (certain grades)</p>
                    </div>
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <Badge className="mb-2 bg-green-600">Certified</Badge>
                      <h3 className="mb-2">ISO 9001</h3>
                      <p className="text-sm text-slate-600">Quality management systems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Safety Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong className="text-green-900">Non-Toxic and Safe</strong>
                        <p className="text-green-800 mt-1">VCI films are non-toxic, non-allergenic, and safe for worker handling. No special protective equipment required.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-600" />
                        Handling Guidelines
                      </h3>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Store in cool, dry place away from direct sunlight</li>
                        <li>• Keep bags sealed until ready to use</li>
                        <li>• Handle with clean, dry hands or gloves</li>
                        <li>• Avoid contamination with oils or chemicals</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-600" />
                        Storage Conditions
                      </h3>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Temperature: 40°F to 120°F (4°C to 49°C)</li>
                        <li>• Humidity: Below 80% RH</li>
                        <li>• Shelf life: 2 years when properly stored</li>
                        <li>• Keep away from heat sources and flames</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <strong className="text-blue-900">Environmental Safety:</strong>
                    <p className="text-blue-800 mt-1">VCI films do not contain nitrites, amines, phosphates, or heavy metals. They are safe for disposal and recyclable through standard polyethylene recycling streams.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Properties Tab */}
          <TabsContent value="properties">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Physical Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-slate-200">
                        <tr>
                          <th className="text-left py-3 px-2">Property</th>
                          <th className="text-left py-3 px-2">Value</th>
                          <th className="text-left py-3 px-2">Test Method</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="py-3 px-2">Film Thickness</td>
                          <td className="py-3 px-2">2-6 mil (50-150 μm)</td>
                          <td className="py-3 px-2">ASTM D6988</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Tensile Strength (MD)</td>
                          <td className="py-3 px-2">3,500 psi min</td>
                          <td className="py-3 px-2">ASTM D882</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Tensile Strength (TD)</td>
                          <td className="py-3 px-2">4,500 psi min</td>
                          <td className="py-3 px-2">ASTM D882</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Elongation (MD)</td>
                          <td className="py-3 px-2">500% min</td>
                          <td className="py-3 px-2">ASTM D882</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Elongation (TD)</td>
                          <td className="py-3 px-2">700% min</td>
                          <td className="py-3 px-2">ASTM D882</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Dart Impact</td>
                          <td className="py-3 px-2">300g min</td>
                          <td className="py-3 px-2">ASTM D1709</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Density</td>
                          <td className="py-3 px-2">0.92 g/cm³</td>
                          <td className="py-3 px-2">ASTM D792</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>VCI Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-slate-200">
                        <tr>
                          <th className="text-left py-3 px-2">Metal Type</th>
                          <th className="text-left py-3 px-2">Protection Rating</th>
                          <th className="text-left py-3 px-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="py-3 px-2">Carbon Steel</td>
                          <td className="py-3 px-2">
                            <Badge className="bg-green-600">Excellent</Badge>
                          </td>
                          <td className="py-3 px-2">24 months</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Stainless Steel</td>
                          <td className="py-3 px-2">
                            <Badge className="bg-green-600">Excellent</Badge>
                          </td>
                          <td className="py-3 px-2">24 months</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Aluminum</td>
                          <td className="py-3 px-2">
                            <Badge className="bg-green-600">Excellent</Badge>
                          </td>
                          <td className="py-3 px-2">24 months</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Copper/Brass</td>
                          <td className="py-3 px-2">
                            <Badge className="bg-blue-600">Good</Badge>
                          </td>
                          <td className="py-3 px-2">18 months</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Zinc/Galvanized</td>
                          <td className="py-3 px-2">
                            <Badge className="bg-green-600">Excellent</Badge>
                          </td>
                          <td className="py-3 px-2">24 months</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Silver</td>
                          <td className="py-3 px-2">
                            <Badge className="bg-blue-600">Good</Badge>
                          </td>
                          <td className="py-3 px-2">12 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                    <p className="text-sm text-slate-600">
                      <strong>Note:</strong> Protection duration based on controlled environment (40-100°F, &lt;80% RH). Multi-metal protection allows ferrous and non-ferrous metals in same bag.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Temperature & Chemical Resistance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3">Temperature Resistance</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex justify-between">
                          <span>Operating Range:</span>
                          <strong>-40°F to 180°F (-40°C to 82°C)</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Heat Seal Temperature:</span>
                          <strong>250°F to 350°F (121°C to 177°C)</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>VCI Activation:</span>
                          <strong>Room temperature (no heating required)</strong>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3">Chemical Resistance</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Excellent resistance to acids (dilute)</li>
                        <li>• Excellent resistance to alkalis</li>
                        <li>• Good resistance to solvents (short-term)</li>
                        <li>• Compatible with most industrial chemicals</li>
                        <li>• Not affected by salt spray or humidity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Available Formats Tab */}
          <TabsContent value="formats">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>2D Flat Bags</CardTitle>
                  <CardDescription>Standard flat configuration for sheet and plate materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <h4 className="mb-2">Standard Sizes</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• 4" x 6"</li>
                        <li>• 6" x 9"</li>
                        <li>• 8" x 12"</li>
                        <li>• 12" x 18"</li>
                        <li>• 18" x 24"</li>
                        <li>• 24" x 36"</li>
                        <li>• 36" x 48"</li>
                      </ul>
                    </div>
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <h4 className="mb-2">Thickness Options</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• 2 mil (light duty)</li>
                        <li>• 3 mil (standard)</li>
                        <li>• 4 mil (medium duty)</li>
                        <li>• 6 mil (heavy duty)</li>
                      </ul>
                    </div>
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <h4 className="mb-2">Closure Types</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Open end</li>
                        <li>• Zip-lock seal</li>
                        <li>• Heat sealable</li>
                        <li>• Adhesive strip</li>
                      </ul>
                    </div>
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <h4 className="mb-2">Special Features</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Standard (clear)</li>
                        <li>• Anti-static (pink)</li>
                        <li>• UV stabilized</li>
                        <li>• Custom printed</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <strong className="text-blue-900">Custom Sizes Available:</strong>
                    <p className="text-blue-800 mt-1">We can manufacture custom sizes from 2" to 120" in width and any length. Minimum order quantities apply for custom sizes.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3D Gusseted Bags</CardTitle>
                  <CardDescription>Expandable design for bulky and irregular shaped items</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <h4 className="mb-2">Standard Sizes</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• 6" x 4" x 12"</li>
                        <li>• 10" x 6" x 18"</li>
                        <li>• 12" x 8" x 24"</li>
                        <li>• 18" x 12" x 36"</li>
                        <li>• 24" x 18" x 48"</li>
                        <li>• 36" x 24" x 60"</li>
                      </ul>
                      <p className="text-xs text-slate-500 mt-2">W x G x H format</p>
                    </div>
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <h4 className="mb-2">Gusset Types</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Side gusset</li>
                        <li>• Bottom gusset</li>
                        <li>• Side & bottom</li>
                        <li>• Round bottom</li>
                      </ul>
                    </div>
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <h4 className="mb-2">Thickness Options</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• 3 mil (standard)</li>
                        <li>• 4 mil (medium duty)</li>
                        <li>• 6 mil (heavy duty)</li>
                        <li>��� 8 mil (extra heavy)</li>
                      </ul>
                    </div>
                    <div className="border border-slate-200 p-4 rounded-lg">
                      <h4 className="mb-2">Applications</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Automotive parts</li>
                        <li>• Machinery components</li>
                        <li>• Tools & equipment</li>
                        <li>• Complex assemblies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Film Rolls & Sheeting</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="mb-2">Roll Specifications</h4>
                      <ul className="space-y-1 text-slate-700">
                        <li>• Width: 12" to 120"</li>
                        <li>• Length: 500 ft to 10,000 ft per roll</li>
                        <li>• Core size: 3" standard (6" available)</li>
                        <li>• Thickness: 2 mil to 6 mil</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2">Pre-Cut Sheets</h4>
                      <ul className="space-y-1 text-slate-700">
                        <li>• Custom cut to any size</li>
                        <li>• Ideal for layering and interleaving</li>
                        <li>• Available in bulk packs</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ordering Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="mb-2">Minimum Order Quantities</h4>
                      <ul className="space-y-1 text-slate-700">
                        <li>• Stock sizes: 100 bags</li>
                        <li>• Custom sizes: 1,000 bags</li>
                        <li>• Film rolls: 1 roll</li>
                        <li>• Custom printing: 5,000 bags</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2">Lead Times</h4>
                      <ul className="space-y-1 text-slate-700">
                        <li>• Stock items: 3-5 business days</li>
                        <li>• Custom sizes: 2-3 weeks</li>
                        <li>• Custom printing: 3-4 weeks</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Sustainability Tab */}
          <TabsContent value="sustainability">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <Leaf className="w-10 h-10 text-green-600 mb-2" />
                  <CardTitle>Environmental Commitment</CardTitle>
                  <CardDescription>Protecting metals and the planet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                      <Recycle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h3 className="mb-2">100% Recyclable</h3>
                      <p className="text-sm text-slate-600">Fully recyclable polyethylene material</p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                      <Leaf className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h3 className="mb-2">No Harmful Chemicals</h3>
                      <p className="text-sm text-slate-600">Free from heavy metals and toxins</p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                      <Package className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h3 className="mb-2">Waste Reduction</h3>
                      <p className="text-sm text-slate-600">Eliminates need for oils and coatings</p>
                    </div>
                  </div>

                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBwbGFzdGljfGVufDF8fHx8MTc2MTQ2NzY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Recycling plastic"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recycling & Disposal</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <Recycle className="w-5 h-5 text-green-600" />
                        How to Recycle
                      </h4>
                      <ol className="space-y-2 text-slate-700 list-decimal list-inside">
                        <li>Remove any metal parts or components from bags</li>
                        <li>Consolidate clean VCI film with other PE films</li>
                        <li>Take to local recycling center accepting #4 LDPE</li>
                        <li>Or return to us for recycling program participation</li>
                      </ol>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <strong className="text-green-900">Recycling Symbol:</strong>
                      <p className="text-green-800 mt-1">LDPE - #4 (Low-Density Polyethylene)</p>
                    </div>

                    <div>
                      <h4 className="mb-2">Take-Back Program</h4>
                      <p className="text-slate-700">
                        We offer a take-back program for large volume users. Contact us to arrange collection and recycling of used VCI films.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sustainable Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Eliminates Hazardous Waste</strong>
                          <p className="text-slate-600">No oily rags, solvent containers, or chemical waste</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Reduces Carbon Footprint</strong>
                          <p className="text-slate-600">Lightweight packaging reduces shipping emissions</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Long Shelf Life</strong>
                          <p className="text-slate-600">2-year shelf life reduces replacement frequency</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Resource Efficient</strong>
                          <p className="text-slate-600">Thin film uses less material than rigid containers</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Water Conservation</strong>
                          <p className="text-slate-600">No cleaning or rinsing required before use</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Life Cycle Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-700">
                      Our VCI films have been evaluated for environmental impact throughout their entire lifecycle, from raw material extraction through end-of-life disposal.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="mb-1">Raw Materials</h4>
                        <p className="text-sm text-slate-600">Sourced from certified suppliers with environmental management systems</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="mb-1">Manufacturing</h4>
                        <p className="text-sm text-slate-600">Energy-efficient extrusion process with minimal waste generation</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="mb-1">Use Phase</h4>
                        <p className="text-sm text-slate-600">Prevents corrosion damage, extending product life and reducing replacement needs</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="mb-1">End of Life</h4>
                        <p className="text-sm text-slate-600">Fully recyclable through standard LDPE recycling streams</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg">
                      <strong className="text-slate-900">Carbon Offset Program:</strong>
                      <p className="text-slate-700 mt-1">
                        We participate in carbon offset programs to neutralize emissions from manufacturing and shipping. For every ton of VCI film produced, we invest in renewable energy projects.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Protect Your Products?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our technical team to discuss your specific corrosion protection needs and get a customized solution.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
              Request a Quote
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition">
              Contact Technical Support
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition">
              Request Free Sample
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">VCI Films</a></li>
                <li><a href="#" className="hover:text-white">VCI Papers</a></li>
                <li><a href="#" className="hover:text-white">VCI Emitters</a></li>
                <li><a href="#" className="hover:text-white">Desiccants</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Technical Data Sheets</a></li>
                <li><a href="#" className="hover:text-white">Safety Data Sheets</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">Testing Reports</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Certifications</a></li>
                <li><a href="#" className="hover:text-white">Quality Policy</a></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Technical Support</li>
                <li>sales@vcipackaging.com</li>
                <li>1-800-VCI-FILM</li>
                <li>Mon-Fri 8am-5pm EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2025 VCI Packaging Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
