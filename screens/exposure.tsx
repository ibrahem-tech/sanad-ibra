import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SampsunSignInResponsive2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.sampsunSignInResponsive}>
      <Image
        style={[styles.image15Icon, styles.navbarPosition]}
        contentFit="cover"
        source={require("../assets/image-151.png")}
      />
      <View style={[styles.frameParent, styles.frameParentFlexBox2]}>
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
        <View style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}>
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
            <Text style={[styles.welcomeBack, styles.exposure1Typo]}>
              Welcome Back
            </Text>
            <Text style={[styles.mrJohnDoe, styles.exposureTypo]}>
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
              <Text style={styles.summary}>Summary</Text>
            </Pressable>
            <View style={[styles.databaseWrapper, styles.wrapperFlexBox]}>
              <Text style={styles.summary}>Database</Text>
            </View>
            <Pressable
              style={[styles.investmentWrapper, styles.wrapperFlexBox]}
              onPress={() => navigation.navigate("SampsunSignInResponsive1")}
            >
              <Text style={styles.summary}>Investment</Text>
            </Pressable>
            <View style={styles.exposureWrapper}>
              <Text style={styles.exposureTypo}>Exposure</Text>
            </View>
            <Pressable
              style={styles.wrapperFlexBox}
              onPress={() => navigation.navigate("SampsunSignInResponsive3")}
            >
              <Text style={styles.summary}>{`Referral & Cash back`}</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.productParent, styles.frameParentFlexBox2]}>
          <View style={styles.product}>
            <Text style={styles.exposure1Typo}>Exposure</Text>
          </View>
          <View style={styles.frequency100Parent}>
            <Text style={[styles.frequency100, styles.followTypo]}>
              Frequency - 1.00
            </Text>
            <Text style={[styles.frequency100, styles.followTypo]}>
              Maximum per day - 1.00
            </Text>
            <Text style={[styles.frequency100, styles.followTypo]}>
              Maximum total - 999
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.navbarSpaceBlock]}>
          <View style={[styles.frameParent3, styles.frameFlexBox]}>
            <View style={styles.image1Wrapper}>
              <Image
                style={styles.image1Icon}
                contentFit="cover"
                source={require("../assets/image-1.png")}
              />
            </View>
            <View style={[styles.viewAllWrapper, styles.viewAllWrapperBorder]}>
              <Text style={styles.viewAll}>View all</Text>
            </View>
          </View>
          <View style={styles.frameWrapper1}>
            <View style={styles.frameParentFlexBox1}>
              <View>
                <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Like</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Comment</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Share</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Post</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>
                  Testimony
                </Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameParent5}>
            <View style={styles.frameParent6}>
              <View style={styles.rectangleParent}>
                <Image
                  style={[styles.rectangleIcon, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-9.png")}
                />
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItWrapper,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
              <View style={styles.rectangleGroup}>
                <Image
                  style={[styles.rectangleIcon, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-91.png")}
                />
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItContainer,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
              <View style={styles.rectangleContainer}>
                <Image
                  style={[styles.frameChild2, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-92.png")}
                />
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItContainer,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
              <View
                style={[styles.rectangleParent1, styles.rectangleParentLayout]}
              >
                <Image
                  style={[styles.frameChild2, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-93.png")}
                />
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItContainer,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
            </View>
            <View style={[styles.openPostParent, styles.frameParentFlexBox]}>
              <Text style={[styles.follow1, styles.follow1Typo]}>
                Open post
              </Text>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame-142.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.navbarSpaceBlock]}>
          <View style={styles.frameContainer}>
            <View style={[styles.frameParent3, styles.frameFlexBox]}>
              <View style={styles.product}>
                <Text style={[styles.twitter, styles.text21FlexBox]}>
                  Twitter
                </Text>
                <Image
                  style={styles.image5Icon}
                  contentFit="cover"
                  source={require("../assets/image-5.png")}
                />
              </View>
              <View
                style={[styles.viewAllWrapper, styles.viewAllWrapperBorder]}
              >
                <Text style={styles.viewAll}>View all</Text>
              </View>
            </View>
            <View style={[styles.frameParent14, styles.frameParentFlexBox1]}>
              <View>
                <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Like</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Comment</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Share</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Post</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>
                  Testimony
                </Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameWrapper1}>
            <View style={styles.frameParent15}>
              <View>
                <Image
                  style={[styles.rectangleIcon, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-94.png")}
                />
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItWrapper1,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
              <View style={styles.rectangleParent3}>
                <Image
                  style={[styles.rectangleIcon, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-95.png")}
                />
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItContainer,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
              <View style={styles.rectangleParentSpaceBlock}>
                <Image
                  style={[styles.frameChild2, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-96.png")}
                />
                <View style={[styles.frameParent18, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItContainer,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
              <View
                style={[
                  styles.rectangleParent5,
                  styles.rectangleParentSpaceBlock,
                ]}
              >
                <Image
                  style={[styles.frameChild2, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-97.png")}
                />
                <View style={[styles.frameParent18, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItContainer,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.navbarSpaceBlock]}>
          <View style={styles.frameContainer}>
            <View style={[styles.frameParent3, styles.frameFlexBox]}>
              <Image
                style={styles.image6Icon}
                contentFit="cover"
                source={require("../assets/image-6.png")}
              />
              <View
                style={[styles.viewAllWrapper, styles.viewAllWrapperBorder]}
              >
                <Text style={styles.viewAll}>View all</Text>
              </View>
            </View>
            <View style={[styles.frameParent14, styles.frameParentFlexBox1]}>
              <View>
                <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Like</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Comment</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Share</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>Post</Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
              <View style={styles.likeParent}>
                <Text style={[styles.follow, styles.followTypo]}>
                  Testimony
                </Text>
                <Text style={styles.textTypo}>2.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameWrapper1}>
            <View style={styles.frameParent23}>
              <View style={styles.rectangleParent6}>
                <Image
                  style={[styles.frameChild8, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-98.png")}
                />
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItWrapper5,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
              <View style={styles.rectangleParent7}>
                <Image
                  style={[styles.frameChild8, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-99.png")}
                />
                <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItWrapper6,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
              <View style={styles.rectangleParentSpaceBlock}>
                <Image
                  style={[styles.frameChild2, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-910.png")}
                />
                <View style={[styles.frameParent18, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItContainer,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
              <View
                style={[
                  styles.rectangleParent5,
                  styles.rectangleParentSpaceBlock,
                ]}
              >
                <Image
                  style={[styles.frameChild2, styles.frameChildLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle-911.png")}
                />
                <View style={[styles.frameParent18, styles.frameParentFlexBox]}>
                  <View style={styles.wrapperBorder}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Follow
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Like
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Comment
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Share
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Post
                    </Text>
                  </View>
                  <View style={[styles.likeWrapper, styles.wrapperBorder]}>
                    <Text style={[styles.follow1, styles.follow1Typo]}>
                      Testimony
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  style={[
                    styles.artificialIntelligenceInItContainer,
                    styles.artificialWrapperPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
                >
                  <Text
                    style={[
                      styles.artificialIntelligenceIn,
                      styles.follow1Typo,
                    ]}
                  >
                    Artificial intelligence, in its broadest sense
                  </Text>
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameWrapper1}>
          <View style={[styles.frameParent29, styles.frameParentBorder]}>
            <View style={styles.wrapperLayout}>
              <View style={styles.product}>
                <Text style={[styles.telegram, styles.text21FlexBox]}>
                  Telegram
                </Text>
                <Image
                  style={styles.image7Icon}
                  contentFit="cover"
                  source={require("../assets/image-7.png")}
                />
              </View>
            </View>
            <View style={[styles.frameWrapper5, styles.frameWrapperPosition]}>
              <View style={[styles.frameWrapper6, styles.frameParentFlexBox2]}>
                <View>
                  <Text style={[styles.follow, styles.followTypo]}>
                    Join the group
                  </Text>
                  <Text style={[styles.text18, styles.textTypo]}>2.00</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent30, styles.frameParentBorder]}>
            <View style={[styles.image8Wrapper, styles.wrapperLayout]}>
              <Image
                style={styles.image8Icon}
                contentFit="cover"
                source={require("../assets/image-8.png")}
              />
            </View>
            <View style={styles.frameWrapperPosition}>
              <View style={[styles.frameWrapper8, styles.frameFlexBox]}>
                <View>
                  <Text style={[styles.follow, styles.followTypo]}>
                    Join the group
                  </Text>
                  <Text style={[styles.text18, styles.textTypo]}>2.00</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent30, styles.frameParentBorder]}>
            <View style={[styles.image8Wrapper, styles.wrapperLayout]}>
              <Image
                style={styles.image9Icon}
                contentFit="cover"
                source={require("../assets/image-9.png")}
              />
            </View>
            <View style={styles.frameWrapperPosition}>
              <View style={[styles.frameWrapper8, styles.frameFlexBox]}>
                <View>
                  <Text style={[styles.follow, styles.followTypo]}>
                    Join the group
                  </Text>
                  <Text style={[styles.text18, styles.textTypo]}>2.00</Text>
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
    marginLeft: -195,
    left: "50%",
    position: "absolute",
  },
  frameParentFlexBox2: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameWrapperSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  exposure1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.p16B,
    fontWeight: "700",
    fontSize: FontSize.primary_size,
    color: Color.colorContent,
  },
  exposureTypo: {
    fontFamily: FontFamily.p24M,
    letterSpacing: -0.3,
    fontSize: FontSize.secondary_size,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorContent,
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  followTypo: {
    opacity: 0.76,
    fontFamily: FontFamily.secondary,
    fontSize: FontSize.s14R_size,
    letterSpacing: -0.3,
    textAlign: "left",
  },
  navbarSpaceBlock: {
    paddingBottom: Padding.p_3xs,
    backgroundColor: Color.color2,
  },
  frameFlexBox: {
    paddingVertical: 0,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  viewAllWrapperBorder: {
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
  },
  frameChildLayout1: {
    borderRadius: Border.br_3xs,
    zIndex: 0,
  },
  frameParentFlexBox: {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  follow1Typo: {
    fontFamily: FontFamily.s12SB,
    fontWeight: "600",
    fontSize: FontSize.s12SB_size,
    textAlign: "left",
  },
  wrapperBorder: {
    paddingHorizontal: Padding.p_5xs,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_7xs,
  },
  artificialWrapperPosition: {
    zIndex: 2,
    backgroundColor: "transparent",
    padding: Padding.p_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    left: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParentLayout: {
    width: 182,
    overflow: "hidden",
    backgroundColor: Color.color2,
  },
  text21FlexBox: {
    letterSpacing: -0.4,
    textAlign: "left",
  },
  frameParentFlexBox1: {
    flexWrap: "wrap",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleParentSpaceBlock: {
    paddingTop: Padding.p_3xs,
    height: 260,
    marginLeft: 10,
    paddingLeft: Padding.p_12xs,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    display: "none",
  },
  frameParentBorder: {
    borderColor: Color.colorLightgray,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameWrapperPosition: {
    borderLeftWidth: 1,
    backgroundColor: Color.colorGray_200,
    height: 114,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_12xs,
    paddingBottom: Padding.p_3xs,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    justifyContent: "center",
    flex: 1,
  },
  textTypo: {
    lineHeight: 24,
    fontSize: FontSize.p24M_size,
    fontFamily: FontFamily.p24M,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorContent,
  },
  wrapperLayout: {
    height: 114,
    width: 190,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  frameChildLayout: {
    marginLeft: 1.8,
    width: 4,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_12xs,
  },
  frameChild16SpaceBlock: {
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
    backgroundColor: Color.color,
    paddingVertical: Padding.p_sm,
    borderRadius: Border.br_7xs,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
  },
  frameParent: {
    top: 48,
    height: 80,
    padding: Padding.p_xl,
    alignItems: "center",
    width: 390,
    marginLeft: -195,
    left: "50%",
    position: "absolute",
  },
  welcomeBack: {
    textShadowColor: "rgba(241, 174, 33, 0.15)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 150,
  },
  mrJohnDoe: {
    opacity: 0.8,
    marginTop: 6,
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  summary: {
    lineHeight: 20,
    fontFamily: FontFamily.p14R,
    fontSize: FontSize.s14R_size,
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.colorContent,
  },
  summaryWrapper: {
    borderRadius: Border.br_11xl,
  },
  databaseWrapper: {
    display: "none",
  },
  investmentWrapper: {
    borderRadius: Border.br_21xl,
  },
  exposureWrapper: {
    borderRadius: Border.br_41xl,
    borderColor: Color.color,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent1: {
    justifyContent: "flex-end",
    width: 350,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
  },
  frameView: {
    height: 32,
    marginTop: 20,
    width: 350,
  },
  product: {
    alignItems: "center",
    flexDirection: "row",
  },
  frequency100: {
    color: Color.color3,
  },
  frequency100Parent: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  productParent: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  image1Icon: {
    width: 99,
    height: 40,
  },
  image1Wrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.color2,
  },
  viewAll: {
    color: Color.color,
    fontFamily: FontFamily.secondary,
    fontSize: FontSize.secondary_size,
    textAlign: "left",
  },
  viewAllWrapper: {
    backgroundColor: Color.colorContent,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs_5,
  },
  frameParent3: {
    paddingHorizontal: Padding.p_3xs,
  },
  follow: {
    color: Color.colorContent,
  },
  likeParent: {
    marginLeft: 60,
  },
  frameWrapper1: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  rectangleIcon: {
    height: 174,
    width: 253,
    zIndex: 0,
  },
  follow1: {
    color: Color.colorContent,
  },
  likeWrapper: {
    marginLeft: 4,
  },
  frameParent7: {
    marginTop: 10,
    display: "none",
  },
  artificialIntelligenceIn: {
    color: Color.color2,
  },
  artificialIntelligenceInItWrapper: {
    width: 253,
    top: 0,
  },
  rectangleParent: {
    paddingLeft: Padding.p_12xs,
    justifyContent: "center",
  },
  artificialIntelligenceInItContainer: {
    width: 326,
    top: 0,
  },
  rectangleGroup: {
    marginLeft: 10,
    paddingLeft: Padding.p_12xs,
    justifyContent: "center",
  },
  frameChild2: {
    height: 224,
    width: 326,
    zIndex: 0,
  },
  rectangleContainer: {
    marginLeft: 10,
    paddingLeft: Padding.p_12xs,
    justifyContent: "center",
    display: "none",
  },
  rectangleParent1: {
    marginLeft: 10,
    paddingLeft: Padding.p_12xs,
    justifyContent: "center",
    display: "none",
  },
  frameParent6: {
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameIcon: {
    height: 21,
    width: 21,
    marginLeft: 4,
  },
  openPostParent: {
    marginLeft: -445,
    top: 178,
    paddingVertical: Padding.p_5xs,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    left: "50%",
    zIndex: 1,
    position: "absolute",
    backgroundColor: Color.color2,
  },
  frameParent5: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  frameParent2: {
    paddingTop: Padding.p_xl,
    paddingHorizontal: Padding.p_3xs,
    borderColor: Color.colorLightgray,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
    overflow: "hidden",
    marginTop: 20,
    justifyContent: "center",
  },
  twitter: {
    color: "#1da1f3",
    fontSize: FontSize.s20M_size,
    letterSpacing: -0.4,
    fontFamily: FontFamily.p16B,
    fontWeight: "700",
  },
  image5Icon: {
    height: 20,
    width: 21,
    marginLeft: 10,
  },
  frameParent14: {
    marginTop: 20,
  },
  artificialIntelligenceInItWrapper1: {
    top: -1,
    width: 252,
  },
  rectangleParent3: {
    marginLeft: 10,
    paddingLeft: Padding.p_12xs,
  },
  frameParent18: {
    marginTop: 10,
  },
  rectangleParent5: {
    width: 182,
    overflow: "hidden",
    backgroundColor: Color.color2,
  },
  frameParent15: {
    justifyContent: "center",
    flexDirection: "row",
  },
  image6Icon: {
    width: 112,
    height: 40,
  },
  frameChild8: {
    width: 239,
    height: 164,
    zIndex: 0,
  },
  artificialIntelligenceInItWrapper5: {
    width: 238,
    top: 0,
  },
  rectangleParent6: {
    justifyContent: "center",
  },
  artificialIntelligenceInItWrapper6: {
    top: 1,
    width: 326,
  },
  rectangleParent7: {
    marginLeft: 10,
    justifyContent: "center",
  },
  frameParent23: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  telegram: {
    color: "#26a5e4",
    fontSize: FontSize.s20M_size,
    letterSpacing: -0.4,
    fontFamily: FontFamily.p16B,
    fontWeight: "700",
  },
  image7Icon: {
    borderRadius: 160,
    width: 26,
    height: 26,
    marginLeft: 10,
  },
  text18: {
    marginTop: 10,
  },
  frameWrapper6: {
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  frameWrapper5: {
    alignItems: "center",
  },
  frameParent29: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.color2,
  },
  image8Icon: {
    width: 107,
    height: 60,
  },
  image8Wrapper: {
    backgroundColor: Color.color2,
  },
  frameWrapper8: {
    paddingHorizontal: Padding.p_61xl,
    overflow: "hidden",
  },
  frameParent30: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.color2,
  },
  image9Icon: {
    width: 119,
    height: 30,
  },
  frameGroup: {
    top: 148,
    paddingLeft: Padding.p_xl,
  },
  text21: {
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontSize: FontSize.primary_size,
  },
  frameChild12: {
    height: 20,
    width: 20,
  },
  parent: {
    flexDirection: "row",
  },
  rectangleView: {
    height: 5,
    width: 4,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_12xs,
  },
  frameChild13: {
    height: 7,
  },
  frameChild14: {
    height: 10,
  },
  frameChild15: {
    height: 12,
  },
  rectangleParent10: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  frameChild16: {
    width: 18,
  },
  frameChild17: {
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
  frameChild18: {
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGray_100,
    borderWidth: 0.8,
    width: 13,
    height: 26,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    left: 24,
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
  rectangleParent11: {
    width: 28,
  },
  navbar: {
    paddingLeft: Padding.p_25xl,
    paddingTop: Padding.p_lg,
    paddingRight: Padding.p_13xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: 390,
    marginLeft: -195,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  sampsunSignInResponsiveChild: {
    marginLeft: -65,
    bottom: 3,
    maxHeight: "100%",
    width: 130,
    borderRadius: Border.br_12xs,
    left: "50%",
    position: "absolute",
  },
  sampsunSignInResponsive: {
    width: "100%",
    height: 1890,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.color2,
  },
});

export default SampsunSignInResponsive2;
