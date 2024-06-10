import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Padding, FontSize, Border, Color } from "../GlobalStyles";

const SampsunSignInResponsive1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.sampsunSignInResponsive}>
      <Image
        style={[styles.image15Icon, styles.navbarPosition]}
        contentFit="cover"
        source={require("../assets/image-151.png")}
      />
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/frame-13470.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/vector-182.png")}
        />
        <View style={styles.frameWrapper}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/frame-13437.png")}
          />
        </View>
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View style={styles.frameContainer}>
          <View>
            <Text style={[styles.welcomeBack, styles.bronzeTypo1]}>
              Welcome Back
            </Text>
            <Text style={[styles.mrJohnDoe, styles.text68Typo]}>
              Mr. John Doe
            </Text>
          </View>
        </View>
        <View style={styles.frameView}>
          <View style={[styles.frameParent1, styles.framePosition]}>
            <Pressable
              style={[styles.summaryWrapper, styles.wrapperFlexBox]}
              onPress={() => navigation.navigate("SampsunSignInResponsive")}
            >
              <Text style={[styles.summary, styles.summaryTypo]}>Summary</Text>
            </Pressable>
            <View style={[styles.databaseWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.summary, styles.summaryTypo]}>Database</Text>
            </View>
            <View style={styles.investmentWrapper}>
              <Text style={[styles.investment, styles.text68Typo]}>
                Investment
              </Text>
            </View>
            <Pressable
              style={styles.wrapperFlexBox}
              onPress={() => navigation.navigate("SampsunSignInResponsive2")}
            >
              <Text style={[styles.summary, styles.summaryTypo]}>Exposure</Text>
            </Pressable>
            <Pressable
              style={styles.wrapperFlexBox}
              onPress={() => navigation.navigate("SampsunSignInResponsive3")}
            >
              <Text
                style={[styles.summary, styles.summaryTypo]}
              >{`Referral & Cash back`}</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.productParent, styles.frameParentFlexBox]}>
          <View style={styles.product}>
            <Text style={[styles.investment1, styles.bronzeTypo1]}>
              Investment
            </Text>
          </View>
          <View style={[styles.product1, styles.product1FlexBox]}>
            <Text style={[styles.billionSmai20, styles.tiersTypo]}>
              1 Billion SMAI 2.0 = 200 points
            </Text>
          </View>
        </View>
        <View style={styles.frameParent2}>
          <View style={styles.frameContainer}>
            <LinearGradient
              style={[styles.frameLineargradient, styles.frameLayout]}
              locations={[0, 1]}
              colors={["rgba(225, 163, 114, 0.2)", "#fff"]}
            >
              <View style={styles.bronzeParent}>
                <Text style={[styles.bronze, styles.bronzeTypo]}>Bronze</Text>
                <Text style={[styles.tiers, styles.tiersTypo]}>Tiers</Text>
              </View>
              <Image
                style={[styles.frameIcon, styles.frameChildPosition1]}
                contentFit="cover"
                source={require("../assets/frame-176.png")}
              />
            </LinearGradient>
            <View style={styles.frameParent4}>
              <View style={styles.frameParent5}>
                <View style={[styles.wrapper, styles.wrapperLayout1]}>
                  <Text style={[styles.investment1, styles.bronzeTypo1]}>
                    1
                  </Text>
                </View>
                <Image
                  style={[styles.vectorIcon, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector-187.png")}
                />
                <View style={[styles.container, styles.wrapperLayout1]}>
                  <Text style={[styles.investment1, styles.bronzeTypo1]}>
                    2
                  </Text>
                </View>
                <Image
                  style={[styles.vectorIcon, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector-187.png")}
                />
                <View style={[styles.container, styles.wrapperLayout1]}>
                  <Text style={[styles.investment1, styles.bronzeTypo1]}>
                    3
                  </Text>
                </View>
                <Image
                  style={[styles.vectorIcon, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector-187.png")}
                />
                <View style={[styles.container, styles.wrapperLayout1]}>
                  <Text style={[styles.investment1, styles.bronzeTypo1]}>
                    4
                  </Text>
                </View>
              </View>
              <View style={styles.frameParent6}>
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>10.00</Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>2000</Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>50%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent9, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>20.00</Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>4000</Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>55%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent9, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>40.00</Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>8000</Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>60%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent9, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>80.00</Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>16000</Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>70%</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParentSpaceBlock}>
            <LinearGradient
              style={[styles.frameParent16, styles.frameLayout]}
              locations={[0, 1]}
              colors={["#ededed", "#fff"]}
            >
              <View style={styles.bronzeParent}>
                <Text style={[styles.bronze, styles.bronzeTypo]}>Silver</Text>
                <Text style={[styles.tiers, styles.tiersTypo]}>Tiers</Text>
              </View>
              <Image
                style={[styles.frameChild3, styles.frameChildPosition1]}
                contentFit="cover"
                source={require("../assets/frame-1761.png")}
              />
            </LinearGradient>
            <View style={styles.frameParent4}>
              <View style={styles.frameParent18}>
                <View style={[styles.wrapper2, styles.wrapperLayout]}>
                  <Text style={[styles.investment1, styles.bronzeTypo1]}>
                    1
                  </Text>
                </View>
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector-1871.png")}
                />
                <View style={[styles.wrapper3, styles.wrapperLayout]}>
                  <Text style={[styles.investment1, styles.bronzeTypo1]}>
                    2
                  </Text>
                </View>
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector-1871.png")}
                />
                <View style={[styles.wrapper3, styles.wrapperLayout]}>
                  <Text style={[styles.investment1, styles.bronzeTypo1]}>
                    3
                  </Text>
                </View>
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector-1871.png")}
                />
                <View style={[styles.wrapper3, styles.wrapperLayout]}>
                  <Text style={[styles.investment1, styles.bronzeTypo1]}>
                    4
                  </Text>
                </View>
              </View>
              <View style={styles.frameParent6}>
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        100.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>20000</Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>75%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent9, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        200.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>40000</Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>80%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent9, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        300.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        60,000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>85%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent9, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        400.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>80000</Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>90%</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParentSpaceBlock}>
            <LinearGradient
              style={[styles.frameLineargradient, styles.frameLayout]}
              locations={[0, 0.5]}
              colors={["#fff5cf", "#fff"]}
            >
              <View style={styles.bronzeParent}>
                <Text style={[styles.bronze, styles.bronzeTypo]}>Gold</Text>
                <Text style={[styles.tiers, styles.tiersTypo]}>Tiers</Text>
              </View>
              <Image
                style={[styles.frameChild7, styles.frameChildPosition1]}
                contentFit="cover"
                source={require("../assets/frame-1762.png")}
              />
            </LinearGradient>
            <View style={styles.frameParent4}>
              <View style={styles.frameParent18}>
                <View style={[styles.wrapper6, styles.wrapperLayout]}>
                  <Text style={[styles.text32, styles.bronzeTypo1]}>1</Text>
                </View>
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector-1871.png")}
                />
                <View style={[styles.wrapper7, styles.wrapperLayout]}>
                  <Text style={[styles.text32, styles.bronzeTypo1]}>2</Text>
                </View>
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector-1871.png")}
                />
                <View style={[styles.wrapper7, styles.wrapperLayout]}>
                  <Text style={[styles.text32, styles.bronzeTypo1]}>3</Text>
                </View>
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector-1871.png")}
                />
                <View style={[styles.wrapper7, styles.wrapperLayout]}>
                  <Text style={[styles.text32, styles.bronzeTypo1]}>4</Text>
                </View>
              </View>
              <View style={styles.frameParent6}>
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        500.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        100000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>100%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent35, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        600.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        120000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>105%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent35, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        700.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        140000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>110%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent35, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        800.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        160000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>115%</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParentSpaceBlock}>
            <LinearGradient
              style={[styles.frameLineargradient, styles.frameLayout]}
              locations={[0, 0.5]}
              colors={["#f9f9f9", "#fff"]}
            >
              <View style={styles.bronzeParent}>
                <Text style={[styles.bronze, styles.bronzeTypo]}>Diamond</Text>
                <Text style={[styles.tiers, styles.tiersTypo]}>Tiers</Text>
              </View>
              <Image
                style={[styles.frameChild11, styles.frameChildPosition1]}
                contentFit="cover"
                source={require("../assets/frame-1763.png")}
              />
            </LinearGradient>
            <View style={styles.frameParent4}>
              <View style={styles.frameParent18}>
                <View style={[styles.wrapper7, styles.wrapperLayout]}>
                  <Text style={[styles.text32, styles.bronzeTypo1]}>1</Text>
                </View>
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector-1871.png")}
                />
                <View style={[styles.wrapper7, styles.wrapperLayout]}>
                  <Text style={[styles.text32, styles.bronzeTypo1]}>2</Text>
                </View>
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector-1871.png")}
                />
                <View style={[styles.wrapper7, styles.wrapperLayout]}>
                  <Text style={[styles.text32, styles.bronzeTypo1]}>3</Text>
                </View>
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector-1871.png")}
                />
                <View style={[styles.wrapper7, styles.wrapperLayout]}>
                  <Text style={[styles.text32, styles.bronzeTypo1]}>4</Text>
                </View>
              </View>
              <View style={styles.frameParent45}>
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        1000.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        200000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>125%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent9, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        1200.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        240000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>130%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent9, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        1500.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        300000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>135%</Text>
                  </View>
                </View>
                <View
                  style={[styles.frameParent9, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        2000.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        400000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.holding, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>140%</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParentSpaceBlock}>
            <LinearGradient
              style={[styles.frameLineargradient, styles.frameLayout]}
              locations={[0, 0.5]}
              colors={["#f3feff", "#fff"]}
            >
              <View style={styles.bronzeParent}>
                <Text style={[styles.bronze, styles.bronzeTypo]}>
                  Ambassador
                </Text>
                <Text style={[styles.tiers, styles.tiersTypo]}>Tiers</Text>
              </View>
              <Image
                style={[styles.frameChild15, styles.frameChildPosition1]}
                contentFit="cover"
                source={require("../assets/frame-1764.png")}
              />
            </LinearGradient>
            <View style={styles.frameParent4}>
              <View style={styles.frameParent57}>
                <View style={[styles.wrapper7, styles.wrapperLayout]}>
                  <Text style={[styles.text32, styles.bronzeTypo1]}>1</Text>
                </View>
                <Image
                  style={[styles.frameChild16, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector-1872.png")}
                />
              </View>
              <View style={styles.frameWrapper1}>
                <View style={[styles.frameParent58, styles.frameParentFlexBox]}>
                  <View style={styles.frameParent8}>
                    <View>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Holding
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        2500.00
                      </Text>
                    </View>
                    <View style={styles.pointsParent}>
                      <Text style={[styles.holding, styles.holdingTypo]}>
                        Points
                      </Text>
                      <Text style={[styles.text4, styles.textTypo]}>
                        500000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.payoutParent}>
                    <Text style={[styles.payout16, styles.holdingTypo]}>
                      Payout
                    </Text>
                    <Text style={[styles.text6, styles.textTypo]}>150%</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <Image
        style={styles.sampsunSignInResponsiveChild}
        contentFit="cover"
        source={require("../assets/vector-196.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbarPosition: {
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  bronzeTypo1: {
    fontFamily: FontFamily.p16B,
    fontWeight: "700",
    textAlign: "left",
  },
  text68Typo: {
    fontWeight: "500",
    textAlign: "left",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  summaryTypo: {
    fontSize: FontSize.s14R_size,
    letterSpacing: -0.3,
  },
  product1FlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  tiersTypo: {
    fontFamily: FontFamily.secondary,
    textAlign: "left",
  },
  frameLayout: {
    backgroundColor: "transparent",
    height: 60,
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  bronzeTypo: {
    letterSpacing: -0.3,
    fontSize: FontSize.secondary_size,
  },
  frameChildPosition1: {
    zIndex: 1,
    height: 139,
    width: 170,
    position: "absolute",
  },
  wrapperLayout1: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_sm,
    width: 36,
    borderWidth: 2,
    backgroundColor: Color.colorYellowgreen,
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    flex: 1,
  },
  holdingTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.secondary,
    textAlign: "left",
    color: Color.colorContent,
  },
  textTypo: {
    lineHeight: 24,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorContent,
  },
  frameParentSpaceBlock: {
    marginTop: 40,
    alignSelf: "stretch",
  },
  wrapperLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mid,
    height: 36,
    width: 36,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
    justifyContent: "center",
    alignItems: "center",
  },
  frameChildLayout1: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  frameChildLayout: {
    marginLeft: 1.8,
    width: 4,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_12xs,
  },
  frameChild21SpaceBlock: {
    marginLeft: 6,
    height: 13,
  },
  frameChildPosition: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
    left: 24,
    position: "absolute",
  },
  image15Icon: {
    height: 895,
    display: "none",
    top: 0,
  },
  frameChild: {
    width: 44,
    height: 44,
  },
  frameItem: {
    width: 11,
    height: 11,
    opacity: 0,
  },
  frameInner: {
    height: 16,
    width: 20,
  },
  frameWrapper: {
    borderRadius: Border.br_7xs,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    backgroundColor: Color.color,
    alignItems: "center",
  },
  frameParent: {
    top: 48,
    height: 80,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  welcomeBack: {
    textShadowColor: "rgba(241, 174, 33, 0.15)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 150,
    textAlign: "left",
    color: Color.colorContent,
    fontSize: FontSize.primary_size,
  },
  mrJohnDoe: {
    opacity: 0.8,
    marginTop: 6,
    fontFamily: FontFamily.p24M,
    letterSpacing: -0.3,
    fontSize: FontSize.secondary_size,
    color: Color.colorContent,
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  summary: {
    lineHeight: 20,
    fontFamily: FontFamily.p14R,
    textAlign: "left",
    color: Color.colorContent,
  },
  summaryWrapper: {
    borderRadius: Border.br_11xl,
  },
  databaseWrapper: {
    display: "none",
  },
  investment: {
    fontFamily: FontFamily.p24M,
    letterSpacing: -0.3,
    fontSize: FontSize.secondary_size,
    color: Color.colorContent,
  },
  investmentWrapper: {
    borderColor: Color.color,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent1: {
    width: 350,
    flexDirection: "row",
    top: 0,
  },
  frameView: {
    height: 32,
    marginTop: 20,
    width: 350,
  },
  investment1: {
    textAlign: "left",
    color: Color.colorContent,
    fontSize: FontSize.primary_size,
  },
  product: {
    alignItems: "center",
    flexDirection: "row",
  },
  billionSmai20: {
    color: Color.color3,
    fontSize: FontSize.s14R_size,
    letterSpacing: -0.3,
  },
  product1: {
    justifyContent: "center",
  },
  productParent: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  bronze: {
    color: Color.color,
    textAlign: "left",
    fontFamily: FontFamily.p16B,
    fontWeight: "700",
  },
  tiers: {
    opacity: 0.76,
    fontSize: FontSize.secondary_size,
    color: Color.colorContent,
  },
  bronzeParent: {
    zIndex: 0,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
  },
  frameIcon: {
    left: 226,
    top: -9,
    zIndex: 1,
    height: 139,
    width: 170,
  },
  frameLineargradient: {
    padding: Padding.p_3xs,
  },
  wrapper: {
    borderColor: Color.colorGray_300,
  },
  vectorIcon: {
    width: 1,
  },
  container: {
    borderColor: Color.colorGray_400,
  },
  frameParent5: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  holding: {
    fontSize: FontSize.s14R_size,
    letterSpacing: -0.3,
  },
  text4: {
    fontSize: FontSize.s20M_size,
    fontFamily: FontFamily.s20M,
  },
  pointsParent: {
    marginLeft: 20,
  },
  frameParent8: {
    flexDirection: "row",
  },
  text6: {
    fontSize: FontSize.p24M_size,
    marginLeft: 10,
    fontFamily: FontFamily.p24M,
  },
  payoutParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent7: {
    alignSelf: "stretch",
  },
  frameParent9: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent6: {
    marginLeft: 10,
    flex: 1,
  },
  frameParent4: {
    marginTop: 20,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameChild3: {
    left: 236,
    top: -9,
    zIndex: 1,
    height: 139,
    width: 170,
  },
  frameParent16: {
    paddingTop: Padding.p_3xs,
    paddingHorizontal: Padding.p_3xs,
  },
  wrapper2: {
    borderColor: Color.colorGray_300,
    backgroundColor: Color.colorYellowgreen,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mid,
    height: 36,
  },
  frameChild4: {
    maxHeight: "100%",
    flex: 1,
  },
  wrapper3: {
    borderColor: Color.colorGray_400,
    backgroundColor: Color.colorYellowgreen,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mid,
    height: 36,
  },
  frameParent18: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameChild7: {
    left: 227,
    top: -9,
    zIndex: 1,
    height: 139,
    width: 170,
  },
  text32: {
    color: Color.color2,
    textAlign: "left",
    fontSize: FontSize.primary_size,
  },
  wrapper6: {
    borderColor: Color.colorGray_400,
    backgroundColor: Color.color,
  },
  wrapper7: {
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.colorGray_400,
  },
  frameParent35: {
    opacity: 0.3,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild11: {
    top: -11,
    left: 229,
  },
  frameParent45: {
    opacity: 0.3,
    marginLeft: 10,
    alignSelf: "stretch",
    flex: 1,
  },
  frameChild15: {
    left: 221,
    top: -9,
    zIndex: 1,
    height: 139,
    width: 170,
  },
  frameChild16: {
    height: 28,
  },
  frameParent57: {
    justifyContent: "center",
  },
  payout16: {
    fontSize: FontSize.secondary_size,
  },
  frameParent58: {
    flex: 1,
  },
  frameWrapper1: {
    opacity: 0.3,
    marginLeft: 10,
    flexDirection: "row",
    flex: 1,
  },
  frameParent2: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  frameGroup: {
    top: 148,
    paddingLeft: Padding.p_xl,
  },
  text68: {
    letterSpacing: -0.4,
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    fontSize: FontSize.primary_size,
  },
  frameChild17: {
    height: 20,
    width: 20,
  },
  rectangleView: {
    height: 5,
    width: 4,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_12xs,
  },
  frameChild18: {
    height: 7,
  },
  frameChild19: {
    height: 10,
  },
  frameChild20: {
    height: 12,
  },
  frameChild21: {
    width: 18,
  },
  frameChild22: {
    top: 2,
    borderRadius: Border.br_10xs,
    width: 9,
    height: 22,
    backgroundColor: Color.colorBlack,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    left: 24,
  },
  frameChild23: {
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGray_100,
    borderWidth: 0.8,
    width: 13,
    height: 26,
    borderStyle: "solid",
    top: 0,
  },
  ellipseIcon: {
    top: 5,
    left: 25,
    width: 3,
    height: 3,
    position: "absolute",
  },
  rectangleGroup: {
    width: 28,
  },
  navbar: {
    paddingLeft: Padding.p_25xl,
    paddingTop: Padding.p_lg,
    paddingRight: Padding.p_13xl,
    paddingBottom: Padding.p_3xs,
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
    top: 0,
    backgroundColor: Color.color2,
    justifyContent: "space-between",
  },
  sampsunSignInResponsiveChild: {
    marginLeft: -65,
    bottom: 4,
    width: 130,
    borderRadius: Border.br_12xs,
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  sampsunSignInResponsive: {
    height: 2067,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.color2,
  },
});

export default SampsunSignInResponsive1;
